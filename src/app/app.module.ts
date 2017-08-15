import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { DepositoComponent } from './deposito/deposito.component';
import { routing } from './app.routing';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UsersComponent } from './admin-panel/users/users.component';
import { CollectorsComponent } from './admin-panel/collectors/collectors.component';
import { EventsComponent } from './admin-panel/events/events.component';
import { DepositPlaceComponent } from './admin-panel/deposit-place/deposit-place.component';
import { BraceletsComponent } from './admin-panel/bracelets/bracelets.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NewUserComponent } from './admin-panel/users/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    DepositoComponent,
    AdminPanelComponent,
    UsersComponent,
    CollectorsComponent,
    EventsComponent,
    DepositPlaceComponent,
    BraceletsComponent,
    NewUserComponent
  ],
  imports: [
    BootstrapModalModule,
    routing,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0'
    })
  ],
  entryComponents: [
    NewUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
