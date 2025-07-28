
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Importa o RouterOutlet

import { HeaderComponent } from './layout/header/header'; // <--- Caminho corrigido para 'header'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent // Importa o HeaderComponent
  ],
  template: `
    <app-header></app-header> <router-outlet></router-outlet> `,
  styleUrls: ['./app.css'] // <--- Caminho corrigido para 'app.css'
})
export class AppComponent {
  title = 'desafio-bronco';
}