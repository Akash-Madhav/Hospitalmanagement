'use client';

import { useRouter } from 'next/navigation';
import { roleStorageKey, type Role } from '@/lib/portal-data';

export function PortalNav() {
  const router = useRouter();

  const goHome = () => {
    window.localStorage.removeItem(roleStorageKey);
    router.push('/');
  };

  const goRole = (role: Role) => {
    window.localStorage.setItem(roleStorageKey, role);
    router.push(`/${role}`);
  };

  return (
    <header className="portal-nav">
      <div>
        <span className="eyebrow">Common links</span>
        <strong>Hospital portal</strong>
      </div>
      <nav className="portal-nav-links" aria-label="Portal links">
        <button className="nav-link" type="button" onClick={goHome}>
          Home
        </button>
        <button className="nav-link" type="button" onClick={() => goRole('doctor')}>
          Doctor
        </button>
        <button className="nav-link" type="button" onClick={() => goRole('patient')}>
          Patient
        </button>
      </nav>
    </header>
  );
}