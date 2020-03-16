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
    
  constructor(private apiService: ApiService) {
    this.comboEspecialidadeClicked = false;
    this.comboMedicoClicked = false;
  }

  ngOnInit() {
    this.especialidades = this.apiService.getEspecialidades();
  }

  onComboEsepecialidadeChange(codigoEspecialidade){
    this.comboEspecialidadeClicked = true;
    this.medicos = this.apiService.getMedicos(codigoEspecialidade);
  }

  onComboMedicoChange(codigoMedico){
    this.comboMedicoClicked = true;
    let atendimentos = this.apiService.getAtendimentos(codigoMedico);
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
  }

}
