import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { portalCopy, type Role } from './portal-data';
import { RoleService } from './role.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="screen dashboard-shell" *ngIf="role as currentRole">
      <header class="topbar">
        <div>
          <span class="eyebrow">{{ copy.badge }}</span>
          <h1>{{ copy.roleTitle }}</h1>
        </div>
        <button class="ghost-button" type="button" (click)="clearRole()">Switch role</button>
      </header>

      <section class="hero-strip">
        <div>
          <h2>{{ copy.headline }}</h2>
          <p>{{ copy.summary }}</p>
        </div>
        <div class="stat-row">
          <article class="stat-card" *ngFor="let stat of copy.stats">
            <span>{{ stat.label }}</span>
            <strong>{{ stat.value }}</strong>
          </article>
        </div>
      </section>

      <section class="content-grid">
        <article class="panel">
          <div class="panel-header">
            <h3>{{ copy.scheduleTitle }}</h3>
            <span>Live now</span>
          </div>
          <ul class="stack-list">
            <li *ngFor="let item of copy.schedule">
              <strong>{{ item.title }}</strong>
              <span>{{ item.detail }}</span>
            </li>
          </ul>
        </article>

        <article class="panel accent-panel">
          <div class="panel-header">
            <h3>{{ copy.insightTitle }}</h3>
            <span>AI-assisted summary</span>
          </div>
          <p>{{ copy.insight }}</p>
          <div class="highlight-list">
            <span *ngFor="let item of copy.highlights">{{ item }}</span>
          </div>
        </article>
      </section>
    </main>
  `
})
export class DashboardComponent implements OnInit {
  role: Role | null = null;
  copy = portalCopy.doctor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    const requestedRole = this.route.snapshot.paramMap.get('role') as Role | null;
    const storedRole = this.roleService.getRole();

    if (requestedRole !== 'doctor' && requestedRole !== 'patient') {
      void this.router.navigate(['/']);
      return;
    }

    if (storedRole !== requestedRole) {
      void this.router.navigate(['/']);
      return;
    }

    this.role = requestedRole;
    this.copy = portalCopy[requestedRole];
  }

  clearRole(): void {
    this.roleService.clearRole();
    void this.router.navigate(['/']);
  }
}
