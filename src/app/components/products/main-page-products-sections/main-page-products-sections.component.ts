import { Component } from '@angular/core';
import { ColumnComponent } from '../../column/column.component';
import { CardProductComponent } from '../card-product/card-product.component';
import { mainProducts } from '../../../../../mock-data';

@Component({
  selector: 'app-main-page-products-sections',
  imports: [ColumnComponent, CardProductComponent],
  templateUrl: './main-page-products-sections.component.html',
  styleUrl: './main-page-products-sections.component.scss'
})
export class MainPageProductsSectionsComponent {
	public titleInfo = {
		title: 'Wonderful gift',
		subTitle: 'our wonderful arrangements'
	}	
	public productList = mainProducts
}
