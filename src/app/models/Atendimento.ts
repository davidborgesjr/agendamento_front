import { Especialidade } from './Especialidade';
export class Atendimento{
    constructor(
        private id: string,
        private data: string,
        private horario: string,
        private disponivel: boolean,
        private paciente,
        private medico: string,
        private especialidade,
        private nome: string,
        private crm: string
    ){}
}