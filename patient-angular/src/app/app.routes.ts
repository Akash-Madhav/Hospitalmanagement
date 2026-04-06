import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RoleLandingComponent } from './role-landing.component';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  { path: '', component: RoleLandingComponent },
  { path: ':role', component: DashboardComponent, canActivate: [roleGuard] },
  { path: '**', redirectTo: '' }
];
