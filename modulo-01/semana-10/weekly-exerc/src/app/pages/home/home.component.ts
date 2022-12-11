import { Component } from '@angular/core';

@Component({
  selector: 'natp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  botaoLidoFilho(notification:string){
    alert(notification)
  }

  botaoNLidoFilho(notification:string){
    alert(notification)
  }

  botaoTodosFilho(notification:string){
    alert(notification)
  }
}
