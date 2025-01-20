import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParallaxComponent } from '../../components/parallax/parallax.component';
import { ColumnComponent } from '../../components/column/column.component';
import { clientStatistics } from '../../../../mock-data';
import { MainPageProductsSectionsComponent } from '../../components/products/main-page-products-sections/main-page-products-sections.component';
import { ClientStatistics } from '../../models/column.models';
MainPageProductsSectionsComponent

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ParallaxComponent, ColumnComponent, MainPageProductsSectionsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
	public clientStatistics: ClientStatistics[]  = clientStatistics
	public textParameters: any = {
		isColorTextWhite: true,
		textCenter: true
	}
	public headerInfo = {
		title: 'Welcome to Rosebud',
		subTitle: 'Time to Blossom',
		text: 'Discover a world of growth and new beginnings. Here, you\'ll find the inspiration, tools, and support to grow into your full potential. Let your journey with Rosebud lead you to flourish like never before.'
	}
	public imageUrl: string = 'img/headers/h1-parallax-img-1.jpg'
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
