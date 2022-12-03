import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicios';
  

  retorno:any = ''

  retornoPai(text:any){
    this.retorno = text
    console.log(this.retorno)
  }
}
