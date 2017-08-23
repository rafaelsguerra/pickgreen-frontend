export class Event {
  local: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;

  constructor(local: string, descricao: string, dataInicio: Date, dataFim: Date) {
    this.local = local;
    this.descricao = descricao;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }
}
