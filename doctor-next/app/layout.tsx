import type { Metadata } from 'next';
import './globals.css';
import { PortalNav } from '@/components/portal-nav';

export const metadata: Metadata = {
  title: 'Hospital Doctor Portal',
  description: 'Role-based doctor and patient dashboards built with Next.js.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PortalNav />
        <div className="app-frame">{children}</div>
      </body>
    </html>
  );
}
