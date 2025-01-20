import { Component, Input } from '@angular/core';
import { ColumnModel } from '../../models/column.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-column',
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
	@Input() item: ColumnModel = {
		title: '',
		subTitle: '',
		text: ''
	};
	@Input() textParameters: any = {
		isColorTextWhite: false,
		textCenter: false
	};
}
