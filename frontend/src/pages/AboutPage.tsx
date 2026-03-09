import { Link } from 'react-router-dom'
import { ImageCarousel } from '../shared/ImageCarousel'

export function AboutPage() {
  const timeline = [
    {
      title: 'BSc, Electrical & Computer Engineering',
      date: '2024',
      description:
        'Studied Electrical and Computer Engineering at Addis Ababa Science and Technology University (AASTU) and graduated with strong academic results.',
    },
    {
      title: 'Transition to maritime studies',
      date: '2025',
      description:
        'Accepted into a maritime training program and completed six months of intensive training with excellent results.',
    },
    {
      title: 'Maritime cadet',
      date: 'Now',
      description:
        'Developing seamanship, watchkeeping foundations, and practical onboard skills through continuous training and experience.',
    },
  ] as const

  return (
    <div className="container">
      <header className="pageHeader">
        <h1>About</h1>
        <p>
          A dedicated maritime professional with a strong academic background in
          engineering and technology.
        </p>
      </header>

      <div className="aboutGrid">
        <section className="panel aboutBlock aboutStory">
          <h2 className="cardTitle">Background</h2>
          <p className="cardText">
            I am a dedicated maritime professional with a strong academic
            background in engineering and technology. I studied Electrical and
            Computer Engineering at Addis Ababa Science and Technology
            University, where I achieved strong academic results and built a
            solid foundation in technology and problem-solving.
          </p>
          <p className="cardText">
            After graduating, I continued my journey by pursuing maritime
            studies and was accepted into a maritime training program. During
            six months of intensive training, I developed strong discipline,
            technical knowledge, and practical skills, graduating with excellent
            results. I am passionate about continuous learning and committed to
            building a successful career in the maritime industry.
          </p>
          <div className="divider" />

          <h3 className="aboutMiniTitle">Timeline</h3>
          <div className="aboutTimeline">
            {timeline.map((t, idx) => (
              <article key={t.title} className="timelineItem">
                <div className="timelineRail" aria-hidden="true">
                  <div className="timelineDot" />
                  {idx !== timeline.length - 1 ? (
                    <div className="timelineLine" />
                  ) : null}
                </div>

                <div className="timelineContent">
                  <div className="timelineTop">
                    <div className="timelineTitle">{t.title}</div>
                    <div className="timelineDate">{t.date}</div>
                  </div>
                  <p className="cardText">{t.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="panel aboutBlock aboutCard">
          <div className="aboutMedia">
            <ImageCarousel
              className="aboutCarousel"
              images={[
                { src: '/abel.jpeg', alt: 'Portrait of Abel Bewunet' },
                { src: '/gallery/slide1.jpeg', alt: 'Sea illustration' },
                { src: '/gallery/slide2.jpeg', alt: 'Harbor illustration' },
                { src: '/gallery/slide3.jpeg', alt: 'Training illustration' },
                { src: '/gallery/slide4.jpeg', alt: 'Training illustration' },

              ]}
            />
            <div className="aboutMediaBadge">
              <div className="aboutMediaName">Abel Bewunet</div>
              <div className="aboutMediaRole">Maritime Cadet</div>
            </div>
          </div>

          <div className="aboutFacts">
            <div className="aboutFact">
              <div className="aboutFactLabel">Education</div>
              <div className="aboutFactValue">
                AASTU — Electrical & Computer Engineering (2024)
              </div>
            </div>
            <div className="aboutFact">
              <div className="aboutFactLabel">Maritime path</div>
              <div className="aboutFactValue">Started maritime training (2025)</div>
            </div>
            <div className="aboutFact">
              <div className="aboutFactLabel">Current role</div>
              <div className="aboutFactValue">Maritime cadet</div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="aboutMiniTitle">Focus</h3>
          <ul className="aboutList">
            <li>Safety culture and operational discipline</li>
            <li>Seamanship and watchkeeping foundations</li>
            <li>Communication and teamwork onboard</li>
          </ul>

          <div className="btnRow">
            <Link className="btn btnPrimary" to="/journey">
              View journey
            </Link>
            <Link className="btn" to="/contact">
              Contact
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}

