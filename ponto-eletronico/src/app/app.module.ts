import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//componentes PO-UI
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoTemplatesModule,
    AppRoutingModule,
    PoPageLoginModule,
    PoMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
