export type Role = 'doctor' | 'patient';

export const roleStorageKey = 'hospital-portal-role';

export const portalCopy: Record<
  Role,
  {
    roleTitle: string;
    badge: string;
    headline: string;
    summary: string;
    stats: { label: string; value: string }[];
    highlights: string[];
    scheduleTitle: string;
    schedule: { title: string; detail: string }[];
    insightTitle: string;
    insight: string;
  }
> = {
  doctor: {
    roleTitle: 'Doctor dashboard',
    badge: 'Clinical control room',
    headline: 'A focused command center for rounds, patients, and today\'s care plan.',
    summary: 'Track appointments, prepare for consults, and surface the most important patient updates in one place.',
    stats: [
      { label: 'Today\'s consults', value: '14' },
      { label: 'Pending reviews', value: '6' },
      { label: 'Critical alerts', value: '2' }
    ],
    highlights: ['Morning ward round at 9:00 AM', '3 follow-up notes waiting', 'Lab results refreshed 12 min ago'],
    scheduleTitle: 'Upcoming consults',
    schedule: [
      { title: 'Aisha Khan', detail: 'General check-in and medication review' },
      { title: 'Mark D\'Souza', detail: 'Post-op progress and discharge prep' },
      { title: 'Leena Patel', detail: 'Cardiology follow-up and new labs' }
    ],
    insightTitle: 'Shift insight',
    insight: 'Two patients need action before noon. One chart is ready for signature, and one lab result is flagged for a second look.'
  },
  patient: {
    roleTitle: 'Patient dashboard',
    badge: 'Care companion',
    headline: 'Your appointments, prescriptions, and care plan in a calm, readable view.',
    summary: 'See upcoming visits, monitor your next steps, and keep track of prescriptions without needing a signin flow.',
    stats: [
      { label: 'Next appointment', value: 'Tomorrow' },
      { label: 'Active prescriptions', value: '3' },
      { label: 'Health score', value: '82%' }
    ],
    highlights: ['Blood pressure log updated this morning', 'Prescription refill request is pending', 'Nutrition plan reviewed by your doctor'],
    scheduleTitle: 'Care timeline',
    schedule: [
      { title: 'Doctor follow-up', detail: 'Tomorrow at 10:30 AM' },
      { title: 'Lab test reminder', detail: 'Friday morning collection' },
      { title: 'Video check-in', detail: 'Next Monday with care team' }
    ],
    insightTitle: 'What to watch',
    insight: 'Hydration is on target, but the latest activity streak dropped below your weekly goal. The next check-in is already queued.'
  }
};
