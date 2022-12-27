import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import {
  PoMenuModule,
  PoPageModule,
  PoDynamicModule,
  PoModalModule,
  PoButtonModule,
  PoFieldModule,
  PoTableModule,
  PoLoadingModule
} from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoPageDynamicSearchModule,
    PoMenuModule, PoPageModule, PoDynamicModule, PoModalModule, PoButtonModule, PoFieldModule,
    PoTableModule, PoLoadingModule
  ],
  exports: [
    PoPageDynamicSearchModule,
    PoMenuModule, PoPageModule, PoDynamicModule, PoModalModule, PoButtonModule, PoFieldModule,
    PoTableModule, PoLoadingModule
  ]
})
export class SharedModule { }
