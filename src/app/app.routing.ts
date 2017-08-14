import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { DepositoComponent } from './deposito/deposito.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'novo-deposito', component: DepositoComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
