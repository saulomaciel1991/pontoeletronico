import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoNotificationService, PoToasterOrientation } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  password = ''
  cpf = ''
  customLiterals: PoPageLoginLiterals = {
    registerUrl: "Cadastrar Usuário",
    loginHint: 'Caso não possua usuário entre em contato com o suporte',
    loginPlaceholder: 'Insira seu CPF (só os números) ',
    passwordErrorPattern: 'Senha deve possuir exatamente seis caracteres numéricos.',
    loginErrorPattern: 'Login deve possuir apenas os onze digitos do seu cpf.'
  };

  loading: boolean = false;
  loginErrors: string[] = [];
  passwordErrors: string[] = [];


  myRecovery() {
    this.poModal.open()
  }

  cancelar(){
    this.poModal.close()
  }

  close: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.poNotification.success("CPF: "+this.cpf+'\nSenha: '+this.password)
      this.poModal.close()
    },
    label: 'Resetar',
    danger: false
  };

  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService,
    private poNotification: PoNotificationService,
  ) { }

  checkLogin(formData: any) {
    this.loading = true;
    this.userService.login(formData)
      .subscribe({
        next: (v: any) => {
          if (v.hasContent === true) {
            this.passwordErrors = [];
            this.loginErrors = [];
            this.userService.userCPF = v.cpf // atualiza cpf e filial de atuação
            this.userService.filatu = v.filialAtuacao
            this.auth.isLoggedIn = true //autentica
            setTimeout(() => {
              this.router.navigate(['/user/info'])
            }, 2000);
          } else {
            this.loading = false;
            formData.login = ''
            formData.password = ''
            this.poNotification.error(v.message)
          }
        },
        error: (e: any) => {
          this.loading = false
        },
        complete: () => {
        }
      })

  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  ngOnInit(): void {
  }

}
