import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDialogService, PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  confirmNewPassword: string = '';
  newPassword: string = '';

  constructor(private poAlert: PoDialogService) {}

  ngOnInit(): void {

  }

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {

      this.poAlert.alert({
        title: 'Senha Alterada',
        message: 'Sua senha foi alterada com sucesso',

        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Erro',
        message: 'Sua (nova senha) é diferente da (confirmar nova senha)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}