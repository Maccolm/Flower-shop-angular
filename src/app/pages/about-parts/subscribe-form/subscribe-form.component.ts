import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-subscribe-form',
  imports: [ ReactiveFormsModule, ConfirmDialogModule, CommonModule ],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.scss'
})
export class SubscribeFormComponent implements OnInit{
	@Input() isBgPink: boolean = true;
	form!: FormGroup
	constructor(private confirmationService: ConfirmationService) {}
	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', Validators.email)
		})
	}
	onSubmit() {
		this.confirmationService.confirm({
			message: 'You are subscribed to our newsletter',
			header: 'Confirmation',
			closable: true,
			closeOnEscape: true,
			icon: 'pi pi-check',
		});
	};
}
