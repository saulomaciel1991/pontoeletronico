import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  fields: Array<PoDynamicViewField> = [
    { property: 'empresa', divider: 'Empresa', gridColumns: 8, order: 1 },
    { property: 'cnpj', label: 'CNPJ', gridColumns: 4 },
    { property: 'endereco', gridColumns: 8 },
    { property: 'emissao', label: 'Emissão', gridColumns: 4 },
    { property: 'matricula', label: 'Matrícula', gridColumns: 3, divider: 'Funcionário' },
    { property: 'nome', label: 'Nome', gridColumns: 5 },
    { property: 'admissao', label: 'Admissão', gridColumns: 4 },
    { property: 'funcao', label: 'Função', gridColumns: 3 },
    { property: 'cc', label: 'C.C.', gridColumns: 3 },
    { property: 'cpf', label: 'CPF', gridColumns: 3 },
    { property: 'categoria', label: 'Categoria', gridColumns: 3 },
    { property: 'situacao', label: 'Situação', gridColumns: 3 },
    { property: 'departamento', label: 'Departamento', gridColumns: 4 },



  ];

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

  ngOnInit(): void {
  }

}
