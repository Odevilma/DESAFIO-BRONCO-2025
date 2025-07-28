<section class="resultado-section-bronco">
  <div class="resultado-container-bronco">
    <h1 class="titulo-resultado">{{ tituloResultado }}</h1>
    <p class="texto-resultado">{{ textoResultado }}</p>

    <div class="carro-display">
      <img [src]="imagemCarroAtual" alt="Ford Bronco Sport" class="img-bronco-resultado">
      <div class="cores-opcoes">
        <div class="cor-bolinha" [class.selected]="corSelecionada === 'branco'" style="background-color: #fff;" (click)="mudarCor('branco')" title="Branco"></div>
        <div class="cor-bolinha" [class.selected]="corSelecionada === 'cinza'" style="background-color: #808080;" (click)="mudarCor('cinza')" title="Cinza"></div>
        <div class="cor-bolinha" [class.selected]="corSelecionada === 'vermelho'" style="background-color: #FF0000;" (click)="mudarCor('vermelho')" title="Vermelho"></div>
        <div class="cor-bolinha" [class.selected]="corSelecionada === 'azul'" style="background-color: #0000FF;" (click)="mudarCor('azul')" title="Azul"></div>
        <div class="cor-bolinha" [class.selected]="corSelecionada === 'verde'" style="background-color: #008000;" (click)="mudarCor('verde')" title="Verde"></div>
        </div>
    </div>

    <div class="botoes-acao">
      <a routerLink="/" class="btn btn-voltar-quiz">RefazerTeste</a>
      <a routerLink="/contato" class="btn btn-agendar-test-drive">Agendar Test Drive</a>
    </div>
  </div>
</section>