import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from '../auth/auth.guard';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent, /* canDeactivate: [AuthGuard] */ },
  { path: 'info', component: InfoComponent, /* canDeactivate: [AuthGuard] */ },
  { path: 'edit', component: FormComponent, /* canDeactivate: [AuthGuard] */ }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
