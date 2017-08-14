import { Routes } from '@angular/router';

import { AdminPanelComponent } from './admin-panel.component';
import { UsersComponent } from './users/users.component';

const PANEL_ROUTES: Routes = [
  { path: 'panel', component: AdminPanelComponent },
  { path: 'panel/users', component: UsersComponent }
];
