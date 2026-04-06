import { DashboardPage } from '@/components/dashboard-page';
import type { Role } from '@/lib/portal-data';
import { notFound } from 'next/navigation';

const validRoles: Role[] = ['doctor', 'patient'];

export default async function RolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!validRoles.includes(role as Role)) {
    notFound();
  }

  return <DashboardPage role={role as Role} />;
}
