export class User {
  public name: string
  public email: string;
  public cpf: string;

  constructor(name: string, email: string, cpf: string) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  };
}
