import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  customLiterals: PoPageLoginLiterals = {
    registerUrl: "Cadastrar Usuário",
    loginHint: 'Caso não possua usuário entre em contato com o suporte',
  };

  loading: boolean = false;
  loginErrors: string[] = [];
  passwordErrors: string[]= [];


  myRecovery(){
    this.poModal.open()
  }



  constructor(private router: Router, private auth: AuthService) { }

  checkLogin(formData: any) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {

      this.passwordErrors = [];
      //this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.auth.isLoggedIn = true
        this.router.navigate(['/user/info'])
      }, 2000);
    } else {
      this.loading = false;
      this.passwordErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];
    }
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
