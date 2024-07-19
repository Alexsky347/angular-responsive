import { Component, Input } from '@angular/core';
import { faNewspaper, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-card-user-info',
  templateUrl: './card-user-info.component.html',
  styleUrls: ['./card-user-info.component.scss']
})
export class CardUserInfoComponent {
  @Input() user!: User;
  faUser = faUserAstronaut;
  faNewsPaper = faNewspaper;

}
