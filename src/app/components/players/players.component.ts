import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../shared/models/player.model'
import { PLAYERS_DATA } from '../../shared/data/players-list'

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.sass'
})
export class PlayersComponent implements OnInit{
  public players: Player[] = [];
  public selectedPlayerId: number | null = null;

  //Para comunicar al padre el jugador seleccionado
  @Output() playerSelected = new EventEmitter<Player>();

  ngOnInit(): void {
    //iniciamos los datos
    this.players = PLAYERS_DATA;
  }

  public onSelectPlayer(player: Player): void{
    this.selectedPlayerId = player.id;
    //comunicación hacia componentes padres o hermanos
    this.playerSelected.emit(player);
  }
}
