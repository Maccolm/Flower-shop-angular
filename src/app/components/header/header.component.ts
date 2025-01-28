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
			href: '/'
		},
		{
			label: 'PRODUCT LIST',
			href:'/products',
		},
		{
			label: 'ABOUT US',
			href:'/about',
		},
		{
			label: 'CONTROL PANEL',
			items: [
				{
					label: 'ADD PRODUCT',
					href: 'products/product-form'
				},
				{
					label: 'USERS',
					href: 'users'
				},
				{
					label: 'USERS TYPES',
					href:'users_types/list'
				}
			]
		},
	]
}
