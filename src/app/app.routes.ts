// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuizComponent } from './pages/quiz/quiz';
import { ResultadoComponent } from './pages/resultado/resultado';
import { FichaTecnicaComponent } from './pages/ficha-tecnica/ficha-tecnica';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'ficha-tecnica', component: FichaTecnicaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];