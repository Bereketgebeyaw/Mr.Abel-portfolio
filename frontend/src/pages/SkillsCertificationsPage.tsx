import { certifications, skills } from '../sample-data/skills'

export function SkillsCertificationsPage() {
  return (
    <div className="container">
      <header className="pageHeader">
        <h1>Skills & Certifications</h1>
        <p>
          A clear list of maritime skills and certificates. Where a PDF is
          available, it can be downloaded directly.
        </p>
      </header>

      <div className="grid2">
        <section className="panel sectionPad">
          <h2 className="cardTitle">Skills</h2>
          <div className="pillRow">
            {skills.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="panel sectionPad">
          <h2 className="cardTitle">Certificates</h2>
          <div className="certList">
            {certifications.map((c) => (
              <div key={c.id} className="certItem">
                <div className="certMain">
                  <div className="certTitle">{c.title}</div>
                  <div className="certMeta">
                    {c.issuer}
                    {c.date ? ` • ${c.date}` : ''}
                  </div>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

