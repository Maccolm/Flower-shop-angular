import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ClearObservable } from '../../directives/clearObservable';
import { AuthService } from '../../services/auth.service';
import { takeUntil } from 'rxjs';
import { AuthComponent } from '../../pages/auth/auth.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, RouterModule, ButtonModule, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends ClearObservable implements OnInit {
	isAuthenticated: boolean = false;
	username: string = ''
	menuItems = [
		{
			label: 'HOME',
			routerLink:['/']
		},
		{
			label: 'PRODUCT LIST',
			routerLink:['/products',]
		},
		{
			label: 'ABOUT US',
			routerLink:['/about',]
		},
		{
			label: 'CONTROL PANEL',
			items: [
				{
					label: 'ADD PRODUCT',
					routerLink:['/products/product-form']
				},
				{
					label: 'USERS',
					routerLink:['/users']
				},
				{
					label: 'USERS TYPES',
					routerLink:['/users_types/list']
				}
			]
		},
	]
	constructor(private authService: AuthService, private confirmationService: ConfirmationService, private messageService: MessageService){
		super();
	}
	ngOnInit(): void {
		this.authService.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(isAuthenticated => {
			this.isAuthenticated = isAuthenticated;
		})
		
	}
	showForm() {

	}
	logOut(event: Event){	
		this.confirmationService.confirm({
			target: event.target as EventTarget,
			message: 'Do you want to log out?',
			icon: 'pi pi-question pi-question-custom',
			rejectIcon:'pi pi-times mr-1',
			rejectLabel: 'Cancel',
			rejectButtonStyleClass: 'p-button-outlined p-button-sm',
			acceptButtonStyleClass: 'p-button-sm',
			accept: () => {
				this.authService.setFormVisible();
				this.authService.logOut();
				this.messageService.add({ severity: 'info', summary: 'Logout Successful', detail: 'You have successfully logged out.', life: 3000 });
				this.authService.setFormNotVisible();
			},
			reject: () => {
			}
		})
	}

}
