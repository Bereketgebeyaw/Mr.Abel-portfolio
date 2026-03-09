export type Post = {
  id: string
  title: string
  date: string
  body: string
}

export const posts: Post[] = [
  {
    id: 'p3',
    title: 'Routine, discipline, and small wins',
    date: '2026-02-18',
    body: 'Even on busy days, small habits matter: keeping notes, reviewing procedures, and staying consistent with fitness and rest.',
  },
  {
    id: 'p2',
    title: 'Training focus: safety & watchkeeping',
    date: '2026-01-29',
    body: 'This week I focused on reinforcing safety checks and improving communication. Clear handovers and calm coordination make a difference.',
  },
  {
    id: 'p1',
    title: 'Starting this logbook',
    date: '2026-01-10',
    body: 'Welcome to my personal updates. I’ll share short reflections and milestones from my maritime cadet journey.',
  },
].sort((a, b) => (a.date < b.date ? 1 : -1))

export const latestPost = posts[0]

