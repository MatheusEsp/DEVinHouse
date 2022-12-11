import { Component } from '@angular/core';

@Component({
  selector: 'natp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weekly-exerc';

  botaoLidoFilho(not:string){
    alert(not)
  }

  botaoNLidoFilho(not:string){
    alert(not)
  }

  botaoTodosFilho(not:string){
    alert(not)
  }

}
