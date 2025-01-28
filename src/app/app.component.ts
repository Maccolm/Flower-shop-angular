import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
	 standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './assets/stylesheets/buttons.scss']
})
export class AppComponent {
  title = 'product-user-manager-angular';
}
