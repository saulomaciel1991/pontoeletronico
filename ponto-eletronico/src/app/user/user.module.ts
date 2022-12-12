import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component'

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';


//Componentes do usuário
import { PoDynamicModule } from '@po-ui/ng-components';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PoDynamicModule
  ]
})
export class UserModule { }
