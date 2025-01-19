import { animate, stagger, transition, trigger, query, style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-parallax',
  imports: [],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.scss',
  animations: [
	trigger('fadeInUp', [
		transition(':enter', [
			query('.animated-item', [
				style({ opacity: 0, transform: 'translateY(50px)' }),
				stagger(200, [
					animate(
						'0.8s ease-out',
						style({ opacity: 1, transform: 'translateY(0)' })
					),
				]),
			], { optional: true }),
		]),
	]),
  ],
})
export class ParallaxComponent implements AfterViewInit{
	@Input() imageUrl: string = '';
	translateY: number = 0;
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		this.updateTranslateY()
	}
//Розраховуємо висоту екрану та змінюємо висоту зображення відповідно для паралакс ефекту
	@HostListener('window:scroll', ['$event'])
	@HostListener('window:resize', ['$event'])
	onScrollOrResize(): void {
		this.updateTranslateY();
	}

	private updateTranslateY() {
		if (typeof window !== 'undefined') {
			const scrollPosition = window.scrollY;
			const elementPosition = this.el.nativeElement.getBoundingClientRect().top + scrollPosition;
			const elementHeight = this.el.nativeElement.offsetHeight;

			this.translateY = (scrollPosition - elementPosition) * 0.3
			
			//Check if element within window view
			const isInViewport = elementPosition < window.innerHeight + scrollPosition && elementPosition + elementHeight > scrollPosition;

			if(isInViewport) {
				this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(${this.translateY}px`);
			} else {
				this.renderer.removeStyle(this.el.nativeElement, 'transform');
			}
			this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(${this.translateY}px`);
		}
	}
}
