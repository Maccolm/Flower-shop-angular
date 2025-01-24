import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ColumnComponent } from '../../../components/column/column.component';
@Component({
  selector: 'app-expert-team',
  imports: [FontAwesomeModule, ColumnComponent],
  templateUrl: './expert-team.component.html',
  styleUrl: './expert-team.component.scss'
})
export class ExpertTeamComponent {
	header = {
		title: 'Wonderful Team',
		subTitle: 'our team of experts'
	}
	faTwitter = faXTwitter;
	faFacebookF = faFacebookF;
	team = [ 
		{
			id: 1,
			name: 'Amber Green',
			position: 'Designer',
			img: 'img/team/team-1.jpg'
		},
		{
			id: 2,
			name: 'Amely Hunter',
			position: 'Florist',
			img: 'img/team/team-2.jpg'
		},
		{
			id: 3,
			name: 'Jessica Courter',
			position: 'Florist',
			img: 'img/team/team-3.jpg'
		},
		{
			id: 4,
			name: 'Mason Robinson',
			position: 'Florist',
			img: 'img/team/team-4.jpg'
		},
	]
}
