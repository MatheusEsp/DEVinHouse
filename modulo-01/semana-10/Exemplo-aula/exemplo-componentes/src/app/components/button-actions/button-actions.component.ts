import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss']
})
export class ButtonActionsComponent {
  
  @Input()
  tituloBotaoPrimario: string = 'Salvar'

  @Input()
  tituloBotaoSecundario: string = 'Cancelar'

  @Output()
  botaoPrimarioClicado = new EventEmitter<string>()

  @Output()
  botaoSecundarioClicado = new EventEmitter<string>()

  disparaPrimario(){
    console.log('Clique Primario')
    this.botaoPrimarioClicado.emit('João');
  }

  disparaSecundario(){
    this.botaoSecundarioClicado.emit('Maria')
    console.log('Clique Secundario')
  }

}
