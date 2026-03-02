import { Component } from '@angular/core';
import { PlayersComponent } from '@app/components/players/players.component';
import { Player } from '@app/shared/models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,PlayersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {

  public selectedPlayer: Player | null = null;

  public handlePlayerSelection(player: Player): void {
    this.selectedPlayer = player;
    console.log('Jugador seleccionado en PlayersComponent:', this.selectedPlayer.nombre);
  }

}
