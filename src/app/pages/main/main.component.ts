import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParallaxComponent } from '../../components/parallax/parallax.component';
import { clientStatistics, reviews } from '../../../../mock-data';
import { MainPageProductsSectionsComponent } from '../../components/products/main-page-products-sections/main-page-products-sections.component';
import { ClientStatistics } from '../../models/column.models';
import { NumberCounterComponent } from '../../components/number-counter/number-counter.component';
import { PerfectSpotComponent } from '../about-parts/perfect-spot/perfect-spot.component';
import { CarouselModule } from 'primeng/carousel';
import { ColumnComponent } from "../../components/column/column.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ParallaxComponent,
    MainPageProductsSectionsComponent,
    NumberCounterComponent,
    PerfectSpotComponent,
    CarouselModule,
    ColumnComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
	public clientStatistics: ClientStatistics[]  = clientStatistics
	public textParameters: any = {
		isColorTextWhite: true,
		textCenter: true,
	}
	public headerInfo = {
		title: 'Welcome to Rosebud',
		subTitle: 'Time to Blossom',
		text: 'Discover a world of growth and new beginnings. Here, you\'ll find the inspiration, tools, and support to grow into your full potential. Let your journey with Rosebud lead you to flourish like never before.'
	}
	public imageParallaxUrl_1: string = 'img/headers/h1-parallax-img-1.jpg'
	public imageParallaxUrl_2: string = 'img/products/h1-parallax-img-2.jpg'
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
  public reviews = reviews
	ngOnInit(): void {
	}
}
