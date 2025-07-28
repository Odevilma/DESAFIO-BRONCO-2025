
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class ContatoComponent {
  
  facebookUrl = 'https://www.facebook.com/FordBrasil/';
  youtubeUrl = 'https://www.youtube.com/user/fordbrasil'; 
  instagramUrl = 'https://www.instagram.com/fordbrasil';
  tiktokUrl = 'https://www.tiktok.com/@fordbrasil';
  linkedinUrl = 'https://www.linkedin.com/company/ford-brasil';

  
  
}