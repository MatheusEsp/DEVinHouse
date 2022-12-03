import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }


  setInfos(info: object){
    localStorage.setItem('cadastro',JSON.stringify(info))

  }
}
