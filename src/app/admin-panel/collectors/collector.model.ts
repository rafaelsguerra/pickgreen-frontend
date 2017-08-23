export class Collector {
  nome: string;
  email: string;
  cnpj: string;

  constructor (nome: string, email: string, cnpj: string) {
    this.nome = nome;
    this.email = email;
    this.cnpj = cnpj;
  }
}
