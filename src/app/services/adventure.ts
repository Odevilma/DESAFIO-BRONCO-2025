import { Injectable } from '@angular/core';

export interface Adventure {
    id: 'serra' | 'praia' | 'trilha' | 'cidade';
    name: string;
    videoPath: string; // Caminho do vídeo de fundo
    description: string;
    resultTitle: string;
    resultText: string;
    baseImagePath: string; 
}

@Injectable({ providedIn: 'root' })
export class AdventureService {
    private adventures: Adventure[] = [
        { id: 'serra', name: 'Serra', videoPath: 'assets/bronco_montanha.mp4', description: 'Com tração 4x4 inteligente, controlo de descidas e potência para vencer qualquer inclinação, o Bronco Sport transforma cada subida numa nova conquista.', resultTitle: 'Você é um Explorador Off-Road!', resultText: 'O Bronco Sport versão Wildtrak é perfeito para quem busca aventura e superação em cada trilha.', baseImagePath: 'assets/bronco_serra' }, 
        
        { id: 'praia', name: 'Praia', videoPath: 'assets/Bronco_praia.mp4', description: 'Com amplo porta-malas e resistência para terrenos de areia, o Bronco Sport leva-o para um dia de sol com liberdade, conforto e robustez.', resultTitle: 'Você é um Aventureiro Descontraído!', resultText: 'O Bronco Sport versão Big Bend é ideal para explorar novos destinos com liberdade e conforto.', baseImagePath: 'assets/bronco_praia' }, 
        { id: 'trilha', name: 'Estrada de Terra', videoPath: 'assets/bronco_trilha.mp4', description: 'A suspensão preparada para terrenos irregulares faz do Bronco Sport o seu aliado para explorar trilhas e caminhos pouco convencionais, sem abrir mão de tecnologia.', resultTitle: 'Você é um Viajante Destemido!', resultText: 'O Bronco Sport versão Badlands foi feito para quem gosta de se aventurar em qualquer terreno.', baseImagePath: 'assets/bronco_trilha' }, 
        { id: 'cidade', name: 'Cidade', videoPath: 'assets/bronco_cidade.mp4', description: 'O Bronco Sport também é o seu parceiro na rotina urbana, com conectividade, segurança avançada e design imponente para qualquer jornada.', resultTitle: 'Você é um Aventureiro Urbano!', resultText: 'O Bronco Sport versão Outer Banks combina com o seu estilo e com a liberdade de explorar a cidade com presença marcante.', baseImagePath: 'assets/bronco_cidade' }
    ];

    getAdventures(): Adventure[] { return this.adventures; }
    getAdventureById(id: string): Adventure | undefined { return this.adventures.find(adv => adv.id === id); }
}