import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public readonly formFields: PoDynamicFormField[] = [
    {
      property: 'nome',
      required: true,
      label: 'Nome',
      gridColumns: 2,
      placeholder: 'Nome'
    },
    {
      property: 'matricula',
      label: 'Matrícula',
      required: true,
      gridColumns: 6,
      placeholder: 'Matrícula',
    },
    {
      property: 'cpf',
      label: 'CPF',
      required: true,
      gridColumns: 6,
      placeholder: 'CPF',
    },
    {
      property: 'senha',
      label: 'Senha',
      required: true,
      gridColumns: 6,
      placeholder: 'Senha',
    },
    {
      property: 'repeatSenha',
      label: 'Repetir Senha',
      required: true,
      gridColumns: 6,
      placeholder: 'Repetir Senha',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick(){

  }

  onSaveClick(){

  }

}
