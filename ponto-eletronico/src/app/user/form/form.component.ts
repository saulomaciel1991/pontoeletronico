import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDynamicFormField, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('dynamicForm', { static: true }) form!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  user = {}

  close: PoModalAction = {
    action: () => {
      this.fechar();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.confirmar();
    },
    label: 'Confirmar'
  };


  public readonly formFields: PoDynamicFormField[] = [
    {
      property: 'nome',
      required: true,
      label: 'Nome',
      gridColumns: 8,
      gridSmColumns: 12,
      placeholder: 'Nome'
    },
    {
      property: 'matricula',
      label: 'Matrícula',
      required: true,
      gridColumns: 4,
      gridSmColumns: 12,
      placeholder: 'Matrícula',
    },
    {
      property: 'cpf',
      label: 'CPF',
      required: true,
      gridColumns: 8,
      gridSmColumns: 12,
      placeholder: 'CPF',
    },
    {
      property: 'senha',
      label: 'Senha',
      required: true,
      gridColumns: 6,
      gridSmColumns: 12,
      placeholder: 'Senha',
      secret: true,
      
    },
    {
      property: 'repeatSenha',
      label: 'Repetir Senha',
      required: true,
      gridColumns: 6,
      gridSmColumns: 12,
      placeholder: 'Repetir Senha',
      secret: true
    }
  ]


  constructor(private router: Router, private poNotification: PoNotificationService) { }

  ngOnInit(): void {
    this.poModal.open()
    this.poNotification.setDefaultDuration(800)
  }

  fechar(){
    this.form.reset()
    this.poModal.close()
    this.router.navigate(['/login'])
  }
  confirmar(){
    if (this.form.invalid) {
      const formInvalidMessage = 'Formulário Invalido.';
      this.poNotification.warning(formInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success("Sucesso!!!");
        this.confirm.loading = false;
        this.fechar();
      }, 1000);
    }
  }

}
