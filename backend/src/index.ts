import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { Resend } from 'resend'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().optional(),
  TO_EMAIL: z.string().email(),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM: z.string().email(),
})

const env = envSchema.parse(process.env)

const app = express()

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }),
)

app.use(express.json({ limit: '20kb' }))

// Simple CORS: allow all origins. This makes the deployed frontend work
// without needing extra CORS env configuration.
app.use(cors())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
})

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(2000),
})

const resend = new Resend(env.RESEND_API_KEY)

app.post('/contact', contactLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: 'Validation failed. Please check your inputs.',
    })
  }

  const { name, email, message } = parsed.data

  try {
    const subject = `Website message from ${name}`
    const text = [
      'New message from your personal website contact form.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
      '',
      `Sent at: ${new Date().toISOString()}`,
    ].join('\n')

    const sendResult = await resend.emails.send({
      from: env.RESEND_FROM,
      to: env.TO_EMAIL,
      replyTo: email,
      subject,
      text,
    })

    if (sendResult.error) {
      console.error('Resend send failed')
      console.error(sendResult.error)
      return res.status(500).json({
        ok: false,
        error: 'Failed to send email. Please try again later.',
      })
    }

    return res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email')
    console.error(err)
    return res.status(500).json({
      ok: false,
      error: 'Failed to send email. Please try again later.',
    })
  }
})

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' })
})

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof Error && err.message.includes('CORS')) {
    return res.status(403).json({ ok: false, error: 'CORS blocked' })
  }
  return res.status(500).json({ ok: false, error: 'Server error' })
})

const port = Number(env.PORT ?? '5174')
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})

