/// src/app/pages/quiz/quiz.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent implements OnInit {
  questions = [
    { question: 'Qual ambiente você mais se identifica?', options: ['Montanha', 'Praia', 'Trilha', 'Cidade'], selected: '' },
    { question: 'Qual sua prioridade em um veículo?', options: ['Desempenho Off-Road', 'Conforto e Tecnologia', 'Robustez e Aventura', 'Versatilidade Urbana'], selected: '' },
    { question: 'Qual cor de Bronco Sport você prefere?', options: ['Verde', 'Azul', 'Preto', 'Branco'], selected: '' }
  ];
  currentQuestionIndex = 0;
  quizCompleted = false;
  resultado = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectOption(option: string): void {
    this.questions[this.currentQuestionIndex].selected = option;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizCompleted = true;
      this.determineResult();
    }
  }

  determineResult(): void {
    const respostas = this.questions.map(q => q.selected);
    if (respostas.includes('Montanha') || respostas.includes('Desempenho Off-Road')) {
      this.resultado = 'serra';
    } else if (respostas.includes('Praia') || respostas.includes('Conforto e Tecnologia')) {
      this.resultado = 'praia';
    } else if (respostas.includes('Trilha') || respostas.includes('Robustez e Aventura')) {
      this.resultado = 'trilha';
    } else if (respostas.includes('Cidade') || respostas.includes('Versatilidade Urbana')) {
      this.resultado = 'cidade';
    } else {
      this.resultado = 'serra';
    }
    this.router.navigate(['/resultado'], { queryParams: { perfil: this.resultado } });
  }
}