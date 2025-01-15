import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCheckComponent } from './components/button-check/button-check.component';

@Component({
    selector: 'app-root',
	 standalone: true,
    imports: [RouterOutlet, ButtonCheckComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-user-manager-angular';
}
