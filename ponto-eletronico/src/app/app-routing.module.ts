import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './user/form/form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, /* canActivate: [AuthGuard], */
    children: [
      { path: "user", loadChildren: () => import("./user/user.module").then(m => m.UserModule) }
    ]
  },
  //{ path: 'create', component: FormComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
