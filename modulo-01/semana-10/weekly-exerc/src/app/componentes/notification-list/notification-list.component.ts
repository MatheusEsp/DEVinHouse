import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'natp-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  card = [{
      titulo: 'Título1',
      subtitulo: 'subtítulo1',
      data: '11/12/2022',
      estado: false
    },
    {
      titulo: 'Título2',
      subtitulo: 'Subtítulo2',
      data: '12/10/2010',
      estado: false
    }
  ]
  trocaEstado(p:string, e:boolean, i:number) {
    console.log(p,e,i)
    this.card[i].estado = true
    
    
  }
}
