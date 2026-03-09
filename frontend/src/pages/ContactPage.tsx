import { useMemo, useState } from 'react'
import { sendContact, type ContactFormErrors, type ContactFormValues, validateContact } from '../lib/contact'

const initial: ContactFormValues = { name: '', email: '', message: '' }

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initial)
  const [touched, setTouched] = useState<Record<keyof ContactFormValues, boolean>>({
    name: false,
    email: false,
    message: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const errors = useMemo(() => validateContact(values), [values])

  function setField<K extends keyof ContactFormValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
  }

  function showErrorFor(key: keyof ContactFormValues, e: ContactFormErrors) {
    return touched[key] ? e[key] : undefined
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    setServerError(null)
    setSuccess(false)

    const currentErrors = validateContact(values)
    if (Object.keys(currentErrors).length > 0) return

    setSubmitting(true)
    try {
      const result = await sendContact(values)
      if (result.ok) {
        setSuccess(true)
        setValues(initial)
        setTouched({ name: false, email: false, message: false })
      } else {
        setServerError(result.error)
      }
    } catch {
      setServerError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="section contactSection">
      <div className="container">
        <header className="pageHeader">
          <h1>Contact Me</h1>
          <p>
            Send a message to me by email. Your information is used only to
            deliver this message.
          </p>
        </header>

        <section className="panel sectionPad contactCard">
          <div className="contactIntro">
            <h2 className="cardTitle">Email contact form</h2>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={(e) => setField('name', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                autoComplete="name"
                required
                minLength={2}
              />
              {showErrorFor('name', errors) ? (
                <div className="errorText">{errors.name}</div>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                autoComplete="email"
                required
                inputMode="email"
              />
              {showErrorFor('email', errors) ? (
                <div className="errorText">{errors.email}</div>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={(e) => setField('message', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                required
                minLength={10}
              />
              {showErrorFor('message', errors) ? (
                <div className="errorText">{errors.message}</div>
              ) : null}
            </div>

            <div className="btnRow">
              <button
                className="btn btnPrimary"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
              <button
                className="btn btnGhost"
                type="button"
                disabled={submitting}
                onClick={() => {
                  setValues(initial)
                  setTouched({ name: false, email: false, message: false })
                  setServerError(null)
                  setSuccess(false)
                }}
              >
                Reset
              </button>
            </div>

            {success ? (
              <div className="successText">Message sent successfully.</div>
            ) : null}
            {serverError ? (
              <div className="errorText">{serverError}</div>
            ) : null}
          </form>
        </section>
      </div>
    </div>
  )
}

