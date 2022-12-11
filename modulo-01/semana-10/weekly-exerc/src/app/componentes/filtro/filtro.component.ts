import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'natp-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Output()
  botaoTodosClicado = new EventEmitter<string>()

  @Output()
  botaoLidoClicado = new EventEmitter<string>()

  @Output()
  botaoNaoLidoClicado = new EventEmitter<string>()

  disparaTodos(){
    this.botaoTodosClicado.emit('Todos')
  }

  disparaLidos(){
    this.botaoLidoClicado.emit('Lidos')
  }

  disparaNaoLidos(){
    this.botaoNaoLidoClicado.emit('Não lidos')
  }


}
