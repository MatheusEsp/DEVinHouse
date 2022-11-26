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
    data: 'teste3'
  },
  {
    titulo: 'teste3',
    subtitulo: 'teste4',
    data: 'teste5'
  }
]
  


}
