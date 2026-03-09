export type Milestone = {
  id: string
  date: string
  title: string
  description: string
  tags?: string[]
}

export const milestones: Milestone[] = [
  {
    id: 'm5',
    date: '2026-02-22',
    title: 'Practical drills & readiness',
    description:
      'Focused on drills, equipment familiarity, and maintaining consistent routines that support safe operations and teamwork.',
    tags: ['Safety', 'Teamwork'],
  },
  {
    id: 'm4',
    date: '2026-01-30',
    title: 'Navigation fundamentals review',
    description:
      'Reviewed navigation basics and best practices for keeping accurate notes and staying organized under time constraints.',
    tags: ['Navigation', 'Discipline'],
  },
  {
    id: 'm3',
    date: '2025-12-10',
    title: 'Cadet training milestone',
    description:
      'Completed a key cadet training milestone and documented learnings to track progress and identify improvement areas.',
    tags: ['Learning', 'Progress'],
  },
  {
    id: 'm2',
    date: '2025-10-04',
    title: 'Safety procedures practice',
    description:
      'Practiced core safety procedures, communication protocols, and emergency preparedness routines.',
    tags: ['Safety'],
  },
  {
    id: 'm1',
    date: '2025-08-15',
    title: 'Began maritime cadet journey',
    description:
      'Started structured training with a focus on seamanship, discipline, and building solid foundations for onboard work.',
    tags: ['Seamanship'],
  },
].sort((a, b) => (a.date < b.date ? 1 : -1))

