import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { portalCopy, type Role } from './portal-data';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="landing-shell">
      <section class="hero-panel">
        <div class="eyebrow">Hospital Management</div>
        <h1>Role-based access without a signin wall.</h1>
        <p>
          Choose a role to enter the dashboard. The same landing experience is used in both the
          React and Angular frontends, so the portal behaves consistently across stacks.
        </p>
        <div class="hero-note">
          No email. No password. Just a role selection that routes into the right dashboard.
        </div>
      </section>

      <section class="choice-grid" aria-label="Role selection">
        <button
          class="choice-card"
          type="button"
          *ngFor="let option of roleButtons"
          (click)="chooseRole(option.role)"
        >
          <span class="choice-kicker">{{ option.kicker }}</span>
          <strong>{{ option.title }}</strong>
          <span>{{ option.detail }}</span>
        </button>
      </section>
    </main>
  `
})
export class RoleLandingComponent implements OnInit {
  roleButtons: { role: Role; title: string; detail: string; kicker: string }[] = [
    {
      role: 'doctor',
      title: 'Doctor portal',
      detail: 'Round-ready overview, consult queue, and clinical alerts.',
      kicker: 'Clinical staff'
    },
    {
      role: 'patient',
      title: 'Patient portal',
      detail: 'Visits, prescriptions, and care reminders in one view.',
      kicker: 'Patients'
    }
  ];

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit(): void {
    const savedRole = this.roleService.getRole();
    if (savedRole) {
      void this.router.navigate([`/${savedRole}`]);
    }
  }

  chooseRole(role: Role): void {
    this.roleService.setRole(role);
    void this.router.navigate([`/${role}`]);
  }
}
