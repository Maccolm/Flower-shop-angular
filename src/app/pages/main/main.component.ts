import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
	public aboutObj: any[] = [
	  {
		  imgPath: '/img/icons/custom-icon-1.png',
		  title: 'Leaders Of Tomorrow',
		  text: 'We inspire the world with beauty and set trends in floristry.'
	  },
	  {
		  imgPath: '/img/icons/custom-icon-2.png',
		  title: 'Powerful Solutions',
		  text: 'Every flower is our answer to your dreams and special moments.'
	  },
	  {
		  imgPath: '/img/icons/custom-icon-3.png',
		  title: 'Ready To Be Impressed',
		  text: 'Experience the magic crafted by professionals for your most cherished occasions.'
	  }
  ]
	ngOnInit(): void {
	}
}
