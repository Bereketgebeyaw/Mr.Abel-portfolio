export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footerWrap">
      <div className="container footer panel">
        <div>
          <div className="footerTitle">Abel Bewunet</div>
          <div className="footerSub">Maritime Cadet • Personal Website</div>
        </div>
        <div className="footerMeta">© {year} Abel Bewunet. All rights reserved.</div>
      </div>
    </footer>
  )
}

