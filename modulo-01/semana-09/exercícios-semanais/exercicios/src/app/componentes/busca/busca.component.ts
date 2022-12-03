import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {

  buscaHtml:any = ''

  @Output() RetornoPai = new EventEmitter<string>();
  
  addNewItem(value: string){
    this.RetornoPai.emit(value)
  }
}
