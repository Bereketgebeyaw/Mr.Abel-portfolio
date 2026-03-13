import {
  certifications,
  maritimeSkills,
  professionalSkills,
} from '../sample-data/skills'

export function SkillsCertificationsPage() {
  return (
    <div className="section">
      <div className="container">
        <header className="pageHeader">
          <h1>Skills & Certifications</h1>
          <p>
            Maritime skills gained through training and practice, along with key
            certificates. Where a PDF is available, it can be downloaded
            directly.
          </p>
        </header>

        <section className="panel sectionPad">
          <h2 className="cardTitle">Certifications</h2>
          <div className="certList">
            {certifications.map((c) => (
              <article key={c.id} className="certItem">
                <div className="certMain">
                  <div className="certTitle">{c.title}</div>
                  <div className="certMeta">
                    {c.issuer}
                    {c.date ? ` • ${c.date}` : ''}
                    {c.location ? ` • ${c.location}` : ''}
                  </div>
                  {c.description ? (
                    <p className="cardText">{c.description}</p>
                  ) : null}
                  {c.modules?.length ? (
                    <ul className="aboutList">
                      {c.modules.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="certActions">
                  {c.pdfUrl ? (
                    <a className="btn btnPrimary" href={c.pdfUrl} download>
                      Download PDF
                    </a>
                  ) : (
                    <span className="helpText">PDF not uploaded yet</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid2">
          <section className="panel sectionPad">
            <h2 className="cardTitle">Maritime Safety Skills</h2>
            <div className="pillRow">
              {maritimeSkills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="panel sectionPad">
            <h2 className="cardTitle">Professional Skills</h2>
            <div className="pillRow">
              {professionalSkills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

