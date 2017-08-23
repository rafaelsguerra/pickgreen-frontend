export class Bracelet {
  dono: string;
  dataCriacao: Date;
  dataAtivacao: Date;

  constructor(dono: string, dataCriacao: Date, dataAtivacao: Date) {
    this.dono = dono;
    this.dataCriacao = dataCriacao;
    this.dataAtivacao = dataAtivacao;
  }
}
