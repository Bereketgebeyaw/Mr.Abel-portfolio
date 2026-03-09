import { milestones } from '../sample-data/journey'

export function JourneyPage() {
  return (
    <div className="container">
      <header className="pageHeader">
        <h1>Journey / Logbook</h1>
        <p>
          A timeline of milestones from cadet training, practice sessions, and
          voyage experiences. (Optional map can be added later.)
        </p>
      </header>

      <section className="panel timeline">
        {milestones.map((m, idx) => (
          <article key={m.id} className="timelineItem">
            <div className="timelineRail" aria-hidden="true">
              <div className="timelineDot" />
              {idx !== milestones.length - 1 ? (
                <div className="timelineLine" />
              ) : null}
            </div>

            <div className="timelineContent">
              <div className="timelineTop">
                <div className="timelineTitle">{m.title}</div>
                <div className="timelineDate">{m.date}</div>
              </div>
              <p className="cardText">{m.description}</p>
              {m.tags?.length ? (
                <div className="pillRow">
                  {m.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

