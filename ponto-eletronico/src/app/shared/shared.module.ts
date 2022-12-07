import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PoMenuModule,
  PoPageModule,
  PoDynamicModule,
  PoModalModule,
  PoButtonModule,
  PoFieldModule
} from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoMenuModule, PoPageModule, PoDynamicModule, PoModalModule, PoButtonModule, PoFieldModule
  ],
  exports: [
    PoMenuModule, PoPageModule, PoDynamicModule, PoModalModule, PoButtonModule, PoFieldModule
  ]
})
export class SharedModule { }
