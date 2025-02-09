import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-number-counter',
  imports: [ CommonModule ],
  templateUrl: './number-counter.component.html',
  styleUrl: './number-counter.component.scss'
})
export class NumberCounterComponent implements OnInit, AfterViewInit{
	@Input('number') number!: number;
	@Input('duration') duration!: number;
	@Input('isTextWhite') isTextWhite!: boolean;

	counter = new BehaviorSubject<number>(0);
	private observer!: IntersectionObserver;
	private timer!: any;
	constructor(private el: ElementRef) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.createObserver();
	}
	createObserver() {
			const options = {
				root: null,
				threshold: 0.2,
			};
		if ('IntersectionObserver' in window) {
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.counterFunc()
						//stop observing after running counter
						this.observer.unobserve(this.el.nativeElement);
					}
				});
			}, options);
			this.observer.observe(this.el.nativeElement);
		}
	}

	counterFunc() {
		let start = 0;
		let end = parseInt(String(this.number).substring(0, 3));
		
		if(start === end) {
			return;
		}
		 // find duration per increment
		 let duration = this.duration
		 let incrementTime = (duration / end) * 1000;

		 this.timer = setInterval(() => {
			start += 1;
			this.counter.next(start);
			if (start === end) {
				clearInterval(this.timer);
			}
		 },incrementTime);
	}
	ngOnDestroy(): void {
		if (this.timer) {
			clearInterval(this.timer)
		}
	}
}
