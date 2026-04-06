'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { roleStorageKey, type Role } from '@/lib/portal-data';

const roleButtons: { role: Role; title: string; detail: string }[] = [
  {
    role: 'doctor',
    title: 'Doctor portal',
    detail: 'Round-ready overview, consult queue, and clinical alerts.'
  },
  {
    role: 'patient',
    title: 'Patient portal',
    detail: 'Visits, prescriptions, and care reminders in one view.'
  }
];

export function RoleLanding() {
  const router = useRouter();

  useEffect(() => {
    const savedRole = window.localStorage.getItem(roleStorageKey) as Role | null;
    if (savedRole === 'doctor' || savedRole === 'patient') {
      router.replace(`/${savedRole}`);
    }
  }, [router]);

  const chooseRole = (role: Role) => {
    window.localStorage.setItem(roleStorageKey, role);
    router.push(`/${role}`);
  };

  return (
    <main className="landing-shell">
      <section className="hero-panel">
        <div className="eyebrow">Hospital Management</div>
        <h1>Role-based access without a signin wall.</h1>
        <p>
          Choose a role to enter the dashboard. The same landing experience is used in both the
          React and Angular frontends, so the portal behaves consistently across stacks.
        </p>
        <div className="hero-note">
          No email. No password. Just a role selection that routes into the right dashboard.
        </div>
      </section>

      <section className="choice-grid" aria-label="Role selection">
        {roleButtons.map((option) => (
          <button key={option.role} className="choice-card" onClick={() => chooseRole(option.role)}>
            <span className="choice-kicker">{option.role === 'doctor' ? 'Clinical staff' : 'Patients'}</span>
            <strong>{option.title}</strong>
            <span>{option.detail}</span>
          </button>
        ))}
      </section>
    </main>
  );
}
