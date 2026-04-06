import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RoleService } from './role.service';
import type { Role } from './portal-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="portal-nav">
      <div>
        <span class="eyebrow">Common links</span>
        <strong>Hospital portal</strong>
      </div>
      <nav class="portal-nav-links" aria-label="Portal links">
        <button class="nav-link" type="button" (click)="goHome()">Home</button>
        <button class="nav-link" type="button" (click)="goRole('doctor')">Doctor</button>
        <button class="nav-link" type="button" (click)="goRole('patient')">Patient</button>
      </nav>
    </header>

    <router-outlet />
  `
})
export class AppComponent {
  constructor(private router: Router, private roleService: RoleService) {}

  goHome(): void {
    this.roleService.clearRole();
    void this.router.navigate(['/']);
  }

  goRole(role: Role): void {
    this.roleService.setRole(role);
    void this.router.navigate([`/${role}`]);
  }
}
