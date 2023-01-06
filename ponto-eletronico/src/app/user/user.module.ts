import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PoDynamicModule } from '@po-ui/ng-components';

//Componentes do usuário
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component'
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PoDynamicModule
  ],
  providers: [],
})
export class UserModule { }
