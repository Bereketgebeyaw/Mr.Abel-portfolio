import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="container">
      <header className="pageHeader">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
      </header>
      <div className="panel sectionPad">
        <div className="btnRow">
          <Link className="btn btnPrimary" to="/">
            Go home
          </Link>
          <Link className="btn" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

