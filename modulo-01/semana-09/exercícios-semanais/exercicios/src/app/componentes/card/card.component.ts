import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() personagemNome:any = ''
  @Input() personagemImg:any = ''
  @Input() personagemAtor: any = ''
  @Input() personagemDesc: any = ''
  
  // personagem: any = {
  //   nome: 'Jon Snow',
  //   imagem: 'https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg?    ims=704x264',
  //   nomeAtor: 'Kit Harington',
  //   descricao:
  //     'Ator britânico. É mais conhecido por interpretar Jon Snow na     série televisiva Game of Thrones da HBO. Meu marido, mas ele não sabe :3',
  // }
}
