import { Component } from '@angular/core';
import { ColumnComponent } from '../../../components/column/column.component';

@Component({
  selector: 'app-perfect-spot',
  imports: [ColumnComponent],
  templateUrl: './perfect-spot.component.html',
  styleUrl: './perfect-spot.component.scss'
})
export class PerfectSpotComponent {
	perfectSpot = {
		title: 'Wonderful gift',
		subTitle: 'a perfect spot',
		text: 'Discover the ideal place to bring nature’s beauty into your life. Our flower shop is your go-to destination for fresh blooms, vibrant arrangements, and unique botanical gifts. Whether it’s a special occasion or just because, we make every moment blossom with joy.',
		link: {
			src: '#' as string,
			value: 'Read more'
		},
	}
}
