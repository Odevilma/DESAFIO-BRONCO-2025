// src/app/layout/footer/footer.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para diretivas comuns
import { RouterModule } from '@angular/router'; // Se tiver links routerLink no rodapé

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione RouterModule se precisar de links
  templateUrl: './footer.html', // Assumindo footer.html na mesma pasta
  styleUrls: ['./footer.css']   // Assumindo footer.css na mesma pasta
})
export class FooterComponent {
  anoAtual: number = new Date().getFullYear();
}