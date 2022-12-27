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
import { UserService } from './user.service';
import { PontosDescartadosComponent } from './pontos-descartados/pontos-descartados.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ResumoComponent } from './resumo/resumo.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    InfoComponent,
    PontosDescartadosComponent,
    HorariosComponent,
    ResumoComponent
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
