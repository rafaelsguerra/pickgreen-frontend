import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { DepositoComponent } from './deposito/deposito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    DepositoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
