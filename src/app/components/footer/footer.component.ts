import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
	constructor() {}
	logoColumn = {
		logo: '/logo-header.png',
		text: 'Discover the ideal place to bring nature’s beauty into your life.',
		url:'#'
	}
	schedule ={
		title: 'Working hours',
		workHours: [
			'Monday : 10AM – 9PM',
			'Tuesday : 10AM – 9PM',
			'Wednesday : 10AM – 9PM',
			'Thursday : 10AM – 9PM',
			'Friday : 10AM – 9PM',
			'Saturday : 10AM – 5PM',
			'Sunday : Closed',
		]
	}
	contacts = {
		title: 'Where to find us',
		address: 'Yuniper Street 32, New York',
		address2: '831 Empl 32, New York',
		phone: '+1 234 567 890',
		email: 'resebud@mail.com'
	}
}
