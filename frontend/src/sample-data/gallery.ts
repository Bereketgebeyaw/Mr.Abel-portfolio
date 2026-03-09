export type GalleryItem =
  | {
      id: string
      type: 'image'
      title: string
      alt: string
      src: string
      date?: string
    }
  | {
      id: string
      type: 'video'
      title: string
      src: string
      alt: string
      date?: string
    }

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    title: 'Open sea (placeholder)',
    alt: 'Stylized illustration of sea waves',
    src: '/gallery/sea.svg',
    date: '2026-02',
  },
  {
    id: 'g2',
    type: 'image',
    title: 'Bridge notes (placeholder)',
    alt: 'Stylized illustration of navigation instruments',
    src: '/gallery/bridge.svg',
    date: '2026-01',
  },
  {
    id: 'g3',
    type: 'image',
    title: 'Training day (placeholder)',
    alt: 'Stylized illustration of training checklist',
    src: '/gallery/training.svg',
    date: '2025-12',
  },
  {
    id: 'g4',
    type: 'image',
    title: 'Harbor lights (placeholder)',
    alt: 'Stylized illustration of harbor at night',
    src: '/gallery/harbor.svg',
    date: '2025-10',
  },
]

