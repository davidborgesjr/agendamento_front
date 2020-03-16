import { DadosService } from './../../services/dados.service';
import { Autenticacao } from './../../models/Autenticacao';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  exibir: Boolean;
  formularioLogin = this.formBuilder.group({
    email: [''],
    senha: ['']
  });

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private apiService: ApiService, 
    private dadosService: DadosService) {
      this.exibir = true;
   }

  ngOnInit() {
  }

  submitLogin() {
    this.formBuilder;
    console.log(this.formularioLogin.value);
    let autenticacao = new Autenticacao(this.formularioLogin.value.email, this.formularioLogin.value.senha);
    this.apiService.setLogin(autenticacao).subscribe(autenticacao => {
      if(autenticacao.status == false){
        alert(autenticacao.mensagem);
      }
      if(autenticacao.status == true){
        this.dadosService.setLogin(autenticacao.codigoPaciente);
        this.router.navigate(['agendamento']);    
      }
    });
  }

  registro(){
    this.router.navigate(['registro'])
  }

  
  
}
