import { AgendamentoPaciente } from './../models/AgendamentoPaciente';

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Autenticacao } from './../models/Autenticacao';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
      especialidadeEscolhida: boolean;
      medicoEscolhido: boolean;
      diaEscolhido: boolean;
      horarioEscolhido: boolean;
      urlApi = environment.apiurl;
      teste = environment.teste;
      
      constructor(private http: HttpClient){

      }

      public getEspecialidades(): Observable<any>{
          if(this.teste){
            return mockDados('especialidades');
          }else{
              return this.http.get(`${this.urlApi}/medicos/especialidades`);
          }

      }

      public getMedicos(codigoEspecialidade): Observable<any>{

        if(this.teste){
            return mockDados('medicosEspecialidade');           
        }

        return this.http.get(`${this.urlApi}/medicos/especialidades/${codigoEspecialidade}`);
    }

    public getAtendimentos(codigoMedico): Observable<any>{
        if(this.teste){
            return mockDados('atendimentos');
        }

        return this.http.get(`${this.urlApi}/medicos/atendimento/${codigoMedico}`);
    }

    public setLogin(autenticacao: Autenticacao): Observable<any>{
        if(this.teste){
            switch(autenticacao.senha){
                case '1':
                    return mockDados('login_inexistente');
                case '12':
                    return mockDados('login_errado');
                case '123':
                    return mockDados('login_sucesso');
            }
        }
        let headers = {
            'Content-type': 'application-json'
        }
        return this.http.post(`${this.urlApi}/paciente/autenticar`, autenticacao, {headers: headers});        
    }

    public agendarAtendimentoPaciente(agendamento: AgendamentoPaciente){
        if(this.teste){
            return mockDados('agendarAtendimentoPaciente');
        }
        let headers = {
            'Content-type': 'application-json'
        }
        return this.http.post(`${this.urlApi}/pacientes/agendar`, agendamento, {headers: headers});    
    }
  }

 function mockDados(mock){
    switch(mock){
        case 'especialidades':
            let especialidades = [
                {
                    "codigo": 1,
                    "descricao": "Clinico Geral"
                },
                {
                    "codigo": 2,
                    "descricao": "Psicologia"
                },
                {
                    "codigo": 3,
                    "descricao": "Dermatologia"
                }
            ]
            return new Observable(subscriber => subscriber.next(especialidades));
        case 'medicosEspecialidade':
            let medicosEspecialidade = 
            [
                {
                    "especialidade": {
                        "codigo": 1,
                        "descricao": "Clinico Geral"
                    },
                    "nome": "Maria Borges",
                    "crm": "3049-AM"
                },
                {
                    "especialidade": {
                        "codigo": 1,
                        "descricao": "Clinico Geral"
                    },
                    "nome": "João Cartlos",
                    "crm": "4040-SP"
                }
            ];
            return new Observable(subscriber => subscriber.next(medicosEspecialidade));
        case 'atendimentos':
            let atendimentos = [
                {
                    "id": 3,
                    "data": "2020-04-16T19:48:54.072+0000",
                    "horario": "13:30",
                    "disponivel": true,
                    "paciente": null,
                    "medico": {
                        "especialidade": {
                            "codigo": 1,
                            "descricao": "Clinico Geral"
                        },
                        "nome": "João Cartlos",
                        "crm": "4040-SP"
                    }
                },
                {
                    "id": 4,
                    "data": "2020-04-16T19:49:18.992+0000",
                    "horario": "13:00",
                    "disponivel": true,
                    "paciente": null,
                    "medico": {
                        "especialidade": {
                            "codigo": 1,
                            "descricao": "Clinico Geral"
                        },
                        "nome": "João Cartlos",
                        "crm": "4040-SP"
                    }
                },
                {
                    "id": 5,
                    "data": "2020-04-16T19:49:23.867+0000",
                    "horario": "14:00",
                    "disponivel": true,
                    "paciente": null,
                    "medico": {
                        "especialidade": {
                            "codigo": 1,
                            "descricao": "Clinico Geral"
                        },
                        "nome": "João Cartlos",
                        "crm": "4040-SP"
                    }
                },
                {
                    "id": 6,
                    "data": "2020-04-16T19:49:28.881+0000",
                    "horario": "14:30",
                    "disponivel": true,
                    "paciente": null,
                    "medico": {
                        "especialidade": {
                            "codigo": 1,
                            "descricao": "Clinico Geral"
                        },
                        "nome": "João Cartlos",
                        "crm": "4040-SP"
                    }
                }
            ];
        
            return new Observable(subscriber => {
                subscriber.next(atendimentos)
            });
        
        case 'agendarAtendimentoPaciente':
            let atendimentoPaciente = {
                "id": 6,
                "data": "2020-04-16T19:49:28.881+0000",
                "horario": "14:30",
                "disponivel": false,
                "paciente": {
                    "id": 7,
                    "nome": "Primeiro Paciente",
                    "email": "primeiropaciente@gmail.com",
                    "senha": "123"
                },
                "medico": {
                    "especialidade": {
                        "codigo": 1,
                        "descricao": "Clinico Geral"
                    },
                    "nome": "João Cartlos",
                    "crm": "4040-SP"
                }
            }
            return new Observable(subscriber => subscriber.next(atendimentoPaciente));
        case 'login_inexistente':
            let login_inexistente = {
                "status": false,
                "mensagem": "O e-mail informado não está cadastrado",
            }
            return new Observable(subscriber => subscriber.next(login_inexistente));
        case 'login_errado':
            let login_errado = {
                "status": false,
                "mensagem": "Usuário e/ou senha inválidos",
            }
            return new Observable(subscriber => subscriber.next(login_errado));
        case 'login_sucesso':
            let login_sucesso = {
                "status": true,
                "mensagem": "Usuário autenticado com sucesso",
                "codigoPaciente": "7"
            }
            return new Observable(subscriber => subscriber.next(login_sucesso));

    }

}