import { galleryItems } from '../sample-data/gallery'

export function GalleryPage() {
  return (
    <div className="container">
      <header className="pageHeader">
        <h1>Gallery</h1>
        <p>
          Images and videos from training and voyages. 
        </p>
      </header>

      <section className="panel sectionPad">
        <div className="mediaGrid">
          {galleryItems.map((it) => (
            <figure key={it.id} className="mediaCard">
              <div className="mediaFrame">
                {it.type === 'image' ? (
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="media"
                  />
                ) : (
                  <video src={it.src} controls className="media" />
                )}
              </div>
              <figcaption className="mediaCaption">
                <div className="mediaTitle">{it.title}</div>
                {it.date ? <div className="mediaMeta">{it.date}</div> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

