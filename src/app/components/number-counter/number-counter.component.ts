import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
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

	counter = new BehaviorSubject<string>("0");
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef, private renderer: Renderer2,  @Inject(PLATFORM_ID) private platformId: Object) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.createObserver();
		}
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

		 let timer = setInterval(() => {
			start += 1;
			this.counter.next(String(start) + this.number.toString().substring(3));
			if (start === end) {
				clearInterval(timer);
			}
		 },incrementTime);
	}
}
