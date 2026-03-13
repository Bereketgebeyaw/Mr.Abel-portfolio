import { Link } from 'react-router-dom'
import { latestPost } from '../sample-data/posts'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <div className="tag">Nautical • Professional • Personal Logbook</div>
            <h1 className="heroTitle">Abel Bewunet</h1>
            <p className="heroLead">
              Maritime cadet focused on seamanship, safety, and growth at sea.
            </p>
            <div className="btnRow">
              <Link className="btn btnPrimary" to="/about">
                About me
              </Link>
              <Link className="btn" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="heroCard panel">
            <div className="heroCardTop">
              <figure className="heroPhotoWrap">
                <img
                  src="/abel.jpeg"
                  alt="Portrait of Abel Bewunet in a maritime setting"
                  className="heroPhoto"
                  loading="lazy"
                />
              </figure>
              <div className="heroCardTopText">
                <div className="heroCardName">Latest update</div>
                <div className="heroCardMeta">{latestPost.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

