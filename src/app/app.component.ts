import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'equipo-basket';
}
