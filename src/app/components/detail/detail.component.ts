import { Component, Input } from '@angular/core';
import { Player } from '@shared/models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent {
  @Input() player: Player | null = null; 

}
