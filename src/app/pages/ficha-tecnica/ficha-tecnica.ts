// src/app/pages/ficha-tecnica/ficha-tecnica.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-tecnica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-tecnica.html', // Assumindo ficha-tecnica.html na mesma pasta
  styleUrls: ['./ficha-tecnica.css']   // Assumindo ficha-tecnica.css na mesma pasta
})
export class FichaTecnicaComponent {
  // Nenhuma lógica específica no TS para a ficha técnica, apenas exibição estática
}