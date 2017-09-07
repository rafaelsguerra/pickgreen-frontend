import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { DepositoComponent } from './deposito/deposito.component';
import {UsersComponent} from "./admin-panel/users/users.component";
import {EventsComponent} from "./admin-panel/events/events.component";
import {DepositPlaceComponent} from "./admin-panel/deposit-place/deposit-place.component";
import {CollectorsComponent} from "./admin-panel/collectors/collectors.component";
import {BraceletsComponent} from "./admin-panel/bracelets/bracelets.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'novo-deposito', component: DepositoComponent },
  { path: 'painel', component: AdminPanelComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'locais-de-deposito', component: DepositPlaceComponent },
  { path: 'coletores', component: CollectorsComponent },
  { path: 'pulseiras', component: BraceletsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
