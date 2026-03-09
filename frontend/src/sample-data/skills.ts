export const skills = [
  'Seamanship fundamentals',
  'Safety procedures',
  'Watchkeeping basics',
  'Team communication',
  'Equipment familiarity',
  'Routine and discipline',
] as const

export type Certification = {
  id: string
  title: string
  issuer: string
  date?: string
  pdfUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'c1',
    title: 'Basic Safety Training (Sample)',
    issuer: 'Training Institute',
    date: '2025-11',
    // Upload a real file to `frontend/public/certificates/` and set pdfUrl like:
    // pdfUrl: '/certificates/basic-safety-training.pdf',
  },
  {
    id: 'c2',
    title: 'First Aid (Sample)',
    issuer: 'Training Institute',
    date: '2025-09',
  },
]

