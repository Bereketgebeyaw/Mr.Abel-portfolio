import { posts } from '../sample-data/posts'

export function UpdatesPage() {
  return (
    <div className="container">
      <header className="pageHeader">
        <h1>Personal Updates</h1>
        <p>
          Short posts about training and life at sea. Posts are shown with the
          newest first.
        </p>
      </header>

      <section className="panel sectionPad">
        <div className="postList">
          {posts.map((p) => (
            <article key={p.id} className="post">
              <div className="postTop">
                <h2 className="postTitle">{p.title}</h2>
                <div className="postDate">{p.date}</div>
              </div>
              <p className="postText">{p.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

