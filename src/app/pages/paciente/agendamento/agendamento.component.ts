import { Router } from '@angular/router';
import { DadosService } from './../../../services/dados.service';
import { AgendamentoPaciente } from './../../../models/AgendamentoPaciente';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  especialidades;
  medicos;
  atendimentos=[];
  comboEspecialidadeClicked: boolean;
  comboMedicoClicked: boolean;
  comboHorarioClicked: boolean;
  codigoPaciente: string;
  codigoAtendimento: string;
    
  constructor(
    private apiService: ApiService, 
    private dadosService: DadosService,
    private router: Router
    )
    {
      let login = this.dadosService.getLogin();
      if(!login){
        this.router.navigate(['login'])
      }
      this.comboEspecialidadeClicked = false;
      this.comboMedicoClicked = false;
      this.comboHorarioClicked = false;
  }

  ngOnInit() {
    this.apiService.getEspecialidades().subscribe(especialidades => this.especialidades = especialidades);  
  }

  onComboEsepecialidadeChange(codigoEspecialidade){
    this.comboEspecialidadeClicked = true;
    this.apiService.getMedicos(codigoEspecialidade).subscribe(medicos => this.medicos = medicos);
  }

  onComboMedicoChange(codigoMedico){
    this.comboMedicoClicked = true;
    this.apiService.getAtendimentos(codigoMedico).subscribe(atendimentos => {
      console.log(atendimentos.length);
      for(let i=0; i<atendimentos.length; i++){
        if(atendimentos[i].disponivel){
          let data = atendimentos[i].data;
          let ano = data.slice(0,4);
          let mes = data.slice(5,7);
          let dia = data.slice(8,10);
          let diaAtentimento = `${dia}-${mes}-${ano}, ${atendimentos[i].horario}`
          let atendimento = {
            id: atendimentos[i].id,
            horario: diaAtentimento
          };
          this.atendimentos.push(atendimento);
        }
      }
    });
  }

  onComboAtendimentoChange(codigoAtendimento){
    console.log(codigoAtendimento);
    this.comboHorarioClicked = true;
    this.codigoAtendimento = codigoAtendimento;
  }

  agendarConsulta(){
    let agendamentoPaciente = new AgendamentoPaciente(this.codigoPaciente, this.codigoAtendimento)
    this.apiService.agendarAtendimentoPaciente(agendamentoPaciente).subscribe(resultado => {
      console.log(resultado);
    })

  }

}
