import { useEffect, useMemo, useRef, useState } from 'react'

export type CarouselImage = {
  src: string
  alt: string
}

type Props = {
  images: CarouselImage[]
  className?: string
  autoAdvanceMs?: number
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  )
}

export function ImageCarousel({
  images,
  className,
  autoAdvanceMs = 5200,
}: Props) {
  const safeImages = useMemo(
    () => images.filter((img) => Boolean(img?.src)),
    [images],
  )
  const [active, setActive] = useState(0)
  const pausedUntilRef = useRef<number>(0)

  const count = safeImages.length
  const canSlide = count > 1

  useEffect(() => {
    if (!canSlide) return
    if (prefersReducedMotion()) return

    const id = window.setInterval(() => {
      const now = Date.now()
      if (now < pausedUntilRef.current) return
      setActive((v) => (v + 1) % count)
    }, autoAdvanceMs)

    return () => window.clearInterval(id)
  }, [autoAdvanceMs, canSlide, count])

  useEffect(() => {
    if (!canSlide) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActive((v) => (v - 1 + count) % count)
      if (e.key === 'ArrowRight') setActive((v) => (v + 1) % count)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [canSlide, count])

  if (!count) return null

  const pauseAutoAdvance = () => {
    pausedUntilRef.current = Date.now() + 12_000
  }

  return (
    <div className={className ? `carousel ${className}` : 'carousel'}>
      <div className="carouselViewport" aria-roledescription="carousel">
        <div
          className="carouselTrack"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {safeImages.map((img) => (
            <div className="carouselSlide" key={img.src}>
              <img className="carouselImage" src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        {canSlide ? (
          <div className="carouselControls">
            <button
              type="button"
              className="carouselBtn"
              aria-label="Previous image"
              onClick={() => {
                pauseAutoAdvance()
                setActive((v) => (v - 1 + count) % count)
              }}
            >
              ‹
            </button>
            <button
              type="button"
              className="carouselBtn"
              aria-label="Next image"
              onClick={() => {
                pauseAutoAdvance()
                setActive((v) => (v + 1) % count)
              }}
            >
              ›
            </button>
          </div>
        ) : null}
      </div>

      {canSlide ? (
        <div className="carouselDots" role="tablist" aria-label="Choose image">
          {safeImages.map((img, idx) => (
            <button
              type="button"
              key={img.src}
              className={idx === active ? 'carouselDot carouselDotActive' : 'carouselDot'}
              aria-label={`Go to image ${idx + 1}`}
              aria-pressed={idx === active}
              onClick={() => {
                pauseAutoAdvance()
                setActive(idx)
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

