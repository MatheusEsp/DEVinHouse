import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
// Ciclos de vida
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit
  {
    @Input() nomePessoa = 'João'
   
    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void{
      console.log('ListComponent ngOnChanges', changes)

    }
    ngDoCheck(): void {
      
    }

    ngAfterContentInit(): void {
      
    }
    constructor(){

    }
    

  botaoFilhoPrimario(nome: string){
    alert(nome)
  }
  botaoFilhoSecundario(nome: string){
    alert(nome) 
  }
}
