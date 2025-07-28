

import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class CadastroComponent implements OnInit { 
  cadastroForm!: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router) {} 

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]], 
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], 
      aceiteTermos: [false, Validators.requiredTrue] 
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Dados do Cadastro:', this.cadastroForm.value);
      alert('Cadastro realizado com sucesso!');
      
      this.router.navigate(['/']); 
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
      
      this.cadastroForm.markAllAsTouched();
    }
  }

  
  get nome() { return this.cadastroForm.get('nome'); }
  get email() { return this.cadastroForm.get('email'); }
  get telefone() { return this.cadastroForm.get('telefone'); }
  get cep() { return this.cadastroForm.get('cep'); }
  get aceiteTermos() { return this.cadastroForm.get('aceiteTermos'); }
}