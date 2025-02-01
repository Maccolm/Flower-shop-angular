import { Component} from '@angular/core';
import { ParallaxComponent } from '../../components/parallax/parallax.component';
import { PerfectSpotComponent } from '../about-parts/perfect-spot/perfect-spot.component';
import { ExpertTeamComponent } from '../about-parts/expert-team/expert-team.component';
import { SubscribeFormComponent } from '../about-parts/subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-about',
  imports: [
	ParallaxComponent, 
	PerfectSpotComponent, 
	ExpertTeamComponent, 
	SubscribeFormComponent, 
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent{

	imgPath: string = '/img/products/about-gallery.jpg';
}
