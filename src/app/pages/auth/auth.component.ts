import { Component, computed, effect, OnInit, Signal } from '@angular/core';
import { ClearObservable } from '../../directives/clearObservable';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth',
  imports: [
	DialogModule, 
	ReactiveFormsModule, 
	ToastModule, 
	PasswordModule,
	DividerModule,
	CommonModule,
	ButtonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent extends ClearObservable implements OnInit {
	isSignUpVisible: boolean = false;
	errorMessage: string = '';
	singInErrorMessage: string = '';
	loginForm: FormGroup = new FormGroup({});
	singUpForm: FormGroup = new FormGroup({});
	loader: boolean = false;
	singUpLoader: boolean = false;
	isAuthenticated: boolean = false;
	isVisible: boolean = false;

	constructor (private authService: AuthService, private messageService: MessageService) {
		super();
	}
	ngOnInit(): void{
		this.authService.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(isAuthenticated => {
			this.isAuthenticated = isAuthenticated;
		})
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', Validators.required)
		});

		//registration form
		this.singUpForm = new FormGroup({
			name: new FormControl('',[Validators.required, Validators.maxLength(50)]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required])
		})
		this.authService.isVisibleLoginForm$.pipe(takeUntil(this.destroy$)).subscribe(show => {
			this.isVisible = show
		})
	}
	onSubmitLogIn() {
		if(this.loginForm.valid) {
			this.loader = true;
			const { email, password } = this.loginForm.value;
			this.authService.login(email, password).pipe(takeUntil(this.destroy$)).subscribe({
				next: (data) => {
					if(data.token && data.pagePermissions){
						window.localStorage.setItem('jwt_token', data.token)
						window.localStorage.setItem('permissions', JSON.stringify(data.pagePermissions))
						this.errorMessage = ''
						this.loader = false
						setTimeout(() => {
							this.authService.setFormNotVisible(); //try to chang through services
						}, 500)
						this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: 'You have successfully logged in', life: 3000 })
					}
				},
				error: (error: string) => {
					this.errorMessage = `Error to log in ${error}`
					console.error('Login failed:', error);
					this.loader = false;
					this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: `${error}` });
				}
			})
		} else {
			this.errorMessage = 'Please fill in all required fields.'
		}
	}
	showRegistrationForm() {
		this.authService.setFormNotVisible();
	}
}
