import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicios';
  // nome = 'Jon Snow'
  // ator = 'Kit Hello'
  // img = 'https://ovicio.com.br/wp-content/uploads/2022/11/20221101-ovicio-jon-snow-hbo-555x555.jpg'
  // desc = 'Eu nunca assisti GoT'
  emailHtml: any = ''
  passwordHtml: any = ''
  createObj: any = {}
  constructor(private general:CadastroService){
    
  }
  getInfos(){
    this.createObj = {
      email: this.emailHtml,
      senha: this.passwordHtml
    }
    this.general.setInfos(this.createObj)
  }
}
