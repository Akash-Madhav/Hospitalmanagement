'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { portalCopy, roleStorageKey, type Role } from '@/lib/portal-data';

export function DashboardPage({ role }: { role: Role }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedRole = window.localStorage.getItem(roleStorageKey) as Role | null;
    if (savedRole !== role) {
      router.replace('/');
      return;
    }
    setIsReady(true);
  }, [role, router]);

  const copy = useMemo(() => portalCopy[role], [role]);

  const clearRole = () => {
    window.localStorage.removeItem(roleStorageKey);
    router.push('/');
  };

  if (!isReady) {
    return (
      <main className="screen shell-centered">
        <div className="loading-card">Opening portal...</div>
      </main>
    );
  }

  return (
    <main className="screen dashboard-shell">
      <header className="topbar">
        <div>
          <span className="eyebrow">{copy.badge}</span>
          <h1>{copy.roleTitle}</h1>
        </div>
        <button className="ghost-button" onClick={clearRole}>
          Switch role
        </button>
      </header>

      <section className="hero-strip">
        <div>
          <h2>{copy.headline}</h2>
          <p>{copy.summary}</p>
        </div>
        <div className="stat-row">
          {copy.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <h3>{copy.scheduleTitle}</h3>
            <span>Live now</span>
          </div>
          <ul className="stack-list">
            {copy.schedule.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel accent-panel">
          <div className="panel-header">
            <h3>{copy.insightTitle}</h3>
            <span>AI-assisted summary</span>
          </div>
          <p>{copy.insight}</p>
          <div className="highlight-list">
            {copy.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
