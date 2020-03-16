import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class DadosService{

    constructor(){}

    public getLogin(){
      if (!sessionStorage.getItem('USL')) { return; }
      return sessionStorage.getItem('USL');
    }

    public setLogin(codigoPaciente){
      sessionStorage.setItem('USL', codigoPaciente);
    }
  }
