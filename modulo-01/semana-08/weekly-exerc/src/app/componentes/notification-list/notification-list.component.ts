import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'natp-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  teste = [{
      titulo: 'teste1',
      subtitulo: 'teste2',
      data: 'teste3',
      estado: false
    },
    {
      titulo: 'teste3',
      subtitulo: 'teste4',
      data: 'teste5',
      estado: false
    }
  ]
  trocaEstado(p:string, e:boolean, i:number) {
    console.log(p,e,i)
    this.teste[i].estado = true
    
    
  }
}
