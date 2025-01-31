import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
}
