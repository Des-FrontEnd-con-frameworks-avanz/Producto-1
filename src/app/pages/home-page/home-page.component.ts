import { Component } from '@angular/core';
import { PlayersComponent } from '@app/components/players/players.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PlayersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {

}
