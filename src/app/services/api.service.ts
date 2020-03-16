import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
      especialidadeEscolhida: boolean;
      medicoEscolhido: boolean;
      diaEscolhido: boolean;
      horarioEscolhido: boolean;
      
      constructor(private http: HttpClient){

      }

      public getEspecialidades(){
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
        ];
        return especialidades;
      }

      public getMedicos(codigoEspecialidade){
            
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
            return medicosEspecialidade;
    }

    public getAtendimentos(codigoMedico){
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
        ]

        return atendimentos;

    }
  }