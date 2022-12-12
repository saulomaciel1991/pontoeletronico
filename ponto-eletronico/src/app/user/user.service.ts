import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dados = {
    empresa: 'BCI COMERCIALIZADORA LTDA',
    cnpj: '12.103.781/0001-29',
    endereco: 'Estrada TDR Norte,3005 ',
    emissao: '05/12/2022',
    matricula: '1201 - 000028',
    nome: 'AMANDA FERREIRA ALVES DOS SANT',
    admissao: '03/01/2011',
    funcao: 'A065 - ANALIST SISTEMA SR',
    cc: 'D04001 - SISTEMAS',
    cpf: '009.763.794-73',
    categoria: 'M',
    situacao: 'NORMAL',
    departamento: '020 - TECNOLOGIA DA INFORMACAO '

  };

  constructor() { }

  public login(formData: any): boolean {

    return (formData.login === 'devpo' && formData.password === '1986') ? true : false
  }

  public getUser(): any{
    return this.dados
  }

  public altPassword(){}
}
