export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const emailRegex =
  // simple and strict enough for UI validation
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (name.length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!emailRegex.test(email)) errors.email = 'Please enter a valid email.'
  if (message.length < 10)
    errors.message = 'Message must be at least 10 characters.'

  return errors
}

export type ContactApiResponse = { ok: true } | { ok: false; error: string }

export async function sendContact(values: ContactFormValues) {
  const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5174'
  const res = await fetch(`${apiBase}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })

  let json: unknown = null
  try {
    json = await res.json()
  } catch {
    // ignore
  }

  if (res.ok) return { ok: true } as const

  const error =
    typeof json === 'object' && json && 'error' in json && typeof json.error === 'string'
      ? json.error
      : 'Something went wrong. Please try again.'

  return { ok: false, error } as const
}

