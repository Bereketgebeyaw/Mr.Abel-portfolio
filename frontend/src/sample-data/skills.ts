export const maritimeSkills = [
  'Maritime safety awareness',
  'Personal survival techniques at sea',
  'Fire prevention and firefighting procedures',
  'Elementary first aid for maritime environments',
  'Personal safety and social responsibility at sea',
] as const

export const professionalSkills = [
  'Teamwork in maritime environments',
  'Discipline and operational awareness',
  'Problem solving in emergency situations',
  'Clear communication and coordination',
  'Adaptability in high-responsibility settings',
] as const

export type Certification = {
  id: string
  title: string
  issuer: string
  date?: string
  location?: string
  description?: string
  modules?: string[]
  pdfUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'c1',
    title: 'Basic Safety Training (STCW)',
    issuer: 'Ethiopian Maritime Training Institute S.C.',
    date: '2025-08-16',
    location: 'Bahir Dar, Ethiopia',
    description:
      'Successfully completed the internationally recognized STCW Basic Safety Training, covering essential safety and emergency response skills required for working on board ships. This certification complies with Regulation VI/1 of the STCW Convention.',
    modules: [
      'Personal Survival Techniques',
      'Fire Prevention and Fire Fighting',
      'Elementary First Aid',
      'Personal Safety and Social Responsibilities',
    ],
    pdfUrl: '/certificates/certificate1.pdf',
  },
]

