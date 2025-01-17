import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
ngOnInit(): void {
	const aboutObj: object = [
		{
			imgPath: '../../public/icons/custom-icon-1.png'
		}
	]
}
}
