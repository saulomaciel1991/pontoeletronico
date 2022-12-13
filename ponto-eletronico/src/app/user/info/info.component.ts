import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  dados: any = {}

  fields: Array<PoDynamicViewField> = [
    { property: 'empresa', divider: 'Empresa', gridColumns: 8, gridSmColumns: 6, order: 1 },
    { property: 'cnpj', label: 'CNPJ', gridColumns: 4, gridSmColumns: 6 },
    { property: 'endereco', gridColumns: 8, gridSmColumns: 6 },
    { property: 'emissao', label: 'Emissão', gridColumns: 4, gridSmColumns: 6 },
    { property: 'matricula', label: 'Matrícula', gridColumns: 3, gridSmColumns: 4, divider: 'Funcionário' },
    { property: 'nome', label: 'Nome', gridColumns: 6, gridSmColumns: 4 },
    { property: 'admissao', label: 'Admissão', gridColumns: 3, gridSmColumns: 4 },
    { property: 'funcao', label: 'Função', gridColumns: 3, gridSmColumns: 4 },
    { property: 'cc', label: 'C.C.', gridColumns: 3, gridSmColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 3, gridSmColumns: 4 },
    { property: 'categoria', label: 'Categoria', gridColumns: 3, gridSmColumns: 4 },
    { property: 'situacao', label: 'Situação', gridColumns: 3, gridSmColumns: 4 },
    { property: 'departamento', label: 'Departamento', gridColumns: 4, gridSmColumns: 4 },

  ];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dados = this.userService.getUser()
  }

}
