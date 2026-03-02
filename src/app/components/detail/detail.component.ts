import { Component, Input } from '@angular/core';
import { Player } from '@shared/models/player.model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() player: Player | null = null;

}
