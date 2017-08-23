export class DepositPlace {
  local: string;
  telefone: string;
  endereco: string;

  constructor(local: string, telefone: string, endereco: string) {
    this.local = local;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}
