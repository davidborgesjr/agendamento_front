import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AgendamentoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    AgendamentoComponent
  ]
})
export class PacienteModule { }
