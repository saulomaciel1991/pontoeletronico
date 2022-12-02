import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  customLiterals: PoPageLoginLiterals = {
    registerUrl: "Cadastrar Usuário"
  };

  loading: boolean = false;
  loginErrors: string[] = [];
  passwordErrors: string[]= [];



  constructor(private router: Router) { }

  checkLogin(formData: any) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      //this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.router.navigate(['/home'])
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
