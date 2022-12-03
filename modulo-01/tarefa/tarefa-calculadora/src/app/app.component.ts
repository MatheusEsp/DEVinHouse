import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarefa-calculadora';
  numeroHtml1: any = 0
  numeroHtml2: any = 0

  retorno: number = 0

  constructor (private general: GeneralService){

  }
  
  somarHome(){
    this.retorno = this.general.somar(this.numeroHtml1,this.numeroHtml2)

  }
  subtrairHome(){
    this.retorno = this.general.subtrair(this.numeroHtml1,this.numeroHtml2)
    
  }
  dividirHome(){
    this.retorno = this.general.dividir(this.numeroHtml1,this.numeroHtml2)
  }
  multiHome(){
    this.retorno = this.general.multiplicar(this.numeroHtml1,this.numeroHtml2)
  }
}
