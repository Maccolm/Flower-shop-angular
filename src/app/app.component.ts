import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ClearObservable } from './directives/clearObservable';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
	 standalone: true,
    imports: [
		RouterOutlet,
		FooterComponent, 
		HeaderComponent,
		NgxSpinnerModule
	],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './assets/stylesheets/buttons.scss']
})
export class AppComponent extends ClearObservable {
	constructor(private spinner: NgxSpinnerService, private router: Router) {
		super();
		this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
			if(event instanceof NavigationStart) {
				console.log('Navigation started - showing spinner');
				
				this.spinner.show();
			} else if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
				setTimeout(() => {
					this.spinner.hide();
				}, 500);
			}
		})
	}
  title = 'product-user-manager-angular';
}
