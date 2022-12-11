import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'natp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router: ActivatedRoute){

  }

  botaoClicado:any = ''

  ngOnInit(): void {

  }

  botaoLidoFilho(notification:string){
    this.botaoClicado = notification
  }

  botaoNLidoFilho(notification:string){
    this.botaoClicado = notification
  }

  botaoTodosFilho(notification:string){
    this.botaoClicado = notification
  }
}
