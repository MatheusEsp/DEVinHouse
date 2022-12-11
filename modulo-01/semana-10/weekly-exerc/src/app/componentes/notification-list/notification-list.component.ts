import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'natp-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnChanges{
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
      estado: true
    }
  ]
  cardTemp: any = []


  @Input() recebeFiltro: any = ''

  ngOnChanges(): void{
    if(this.recebeFiltro == 'todos' || this.recebeFiltro == ''){
      this.cardTemp = this.card
    } else if(this.recebeFiltro == 'lidos') {
      this.cardTemp = this.card.filter(  (x) => x.estado==true)
    } else {
      this.cardTemp = this.card.filter(  (x) => x.estado==false)
    }
  }

  trocaEstado(p:string, e:boolean, i:number) {
    console.log(p,e,i)
    this.card[i].estado = true
  }
}
