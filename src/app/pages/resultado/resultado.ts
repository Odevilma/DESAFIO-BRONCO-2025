

import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.html',
  styleUrls: ['./resultado.css']
})
export class ResultadoComponent {
  tituloResultado: string = 'Seu resultado';
  textoResultado: string = 'Parabéns! Aqui está o seu Ford Bronco Sport.';
  imagemCarroAtual: string = 'assets/img/bronco-branco.png';
  corSelecionada: string = 'branco';

  mudarCor(cor: string) {
    this.corSelecionada = cor;
    switch (cor) {
      case 'branco':
        this.imagemCarroAtual = 'assets/img/bronco-branco.png';
        break;
      case 'cinza':
        this.imagemCarroAtual = 'assets/img/bronco-cinza.png';
        break;
      case 'vermelho':
        this.imagemCarroAtual = 'assets/img/bronco-vermelho.png';
        break;
      case 'azul':
        this.imagemCarroAtual = 'assets/img/bronco-azul.png';
        break;
      case 'verde':
        this.imagemCarroAtual = 'assets/img/bronco-verde.png';
        break;
    }
  }
}