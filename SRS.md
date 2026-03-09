# Software Requirements Specification (SRS)
## Personal Website for Abel Bewunet – Maritime Cadet

- **Prepared by**: Bereket Gebeyaw  
- **Date**: 02 March 2026  

---

## 1. Introduction

### 1.1 Purpose
Develop a personal website for Abel (maritime cadet) to showcase professional journey, skills, certifications, and personal updates. The site serves as:
- A professional portfolio for employers and maritime professionals.
- A personal logbook of experiences.
- A communication channel via an email-based contact form.

### 1.2 Scope
The website will:
- Display Abel’s profile, maritime journey/logbook, skills, certifications, gallery, and personal updates/blog.
- Provide an **email-only** contact form to reach Abel (no user accounts).
- Support responsive design for mobile, tablet, and desktop.
- Be hostable on **Vercel** for the frontend and a **Node.js** backend (or Vercel serverless) for email functionality.

### 1.3 Definitions, Acronyms, and Abbreviations
- **Frontend**: React + Vite user interface.
- **Backend**: Node.js + Express service handling contact email submissions.
- **Admin**: Abel (site owner). Content updates are performed manually (no CMS initially).
- **SRS**: Software Requirements Specification.
- **CTA**: Call To Action.

---

## 2. Overall Description

### 2.1 Product Perspective
- Standalone personal website.
- Frontend integrates with backend for email sending.
- No login, registration, or dynamic admin panel in the initial release.

### 2.2 Product Functions (High-Level)
- **Home**: Hero with name/photo, short bio, and CTA buttons.
- **About**: Professional and personal bio, interests.
- **Journey / Logbook**: Timeline of milestones; optional photos; optional map.
- **Skills & Certifications**: Skills list; certifications list; downloadable PDFs.
- **Gallery**: Images/videos shown in a grid or carousel.
- **Updates / Blog**: Short posts sorted by date.
- **Contact**: Email-only contact form with validation and success/failure feedback.

### 2.3 User Characteristics
- **Primary users**: Employers, maritime professionals, friends, and family.
- **Expectations**: Professional design, smooth navigation, clear presentation of achievements and updates.

### 2.4 Constraints
- Contact form must send emails without user registration.
- Responsive across desktop, tablet, mobile.
- Email contact only; no social login and no chat.

---

## 3. Functional Requirements

### 3.1 Requirements List

| ID  | Requirement | Description |
|-----|------------|-------------|
| FR1 | Home Page | Display hero section, name, short bio, CTA buttons to Journey and Contact. |
| FR2 | About Page | Show professional background, education, personal hobbies/interests. |
| FR3 | Journey / Logbook | Display timeline of cadet milestones with date, title, description, optional photos. |
| FR4 | Skills & Certifications | Show maritime skills and certificates with downloadable PDFs. |
| FR5 | Gallery | Display images and videos in a grid or carousel format. |
| FR6 | Personal Updates / Blog | Display short posts sorted by date; include title, date, and text. |
| FR7 | Contact Form | User enters name, email, message → sends email to Abel. Form validation required. |
| FR8 | Responsive Design | All pages must be mobile-friendly and adapt to screen size. |

### 3.2 Acceptance Criteria (Testable)

#### FR1 — Home Page
- **AC1**: Home page displays Abel’s name, a portrait/hero image, and a short bio.
- **AC2**: Home page includes CTA buttons linking to **Journey** and **Contact** pages.
- **AC3**: Navigation to Journey/Contact works without page errors.

#### FR2 — About Page
- **AC1**: About page includes professional background and education section.
- **AC2**: About page includes personal interests/hobbies section.

#### FR3 — Journey / Logbook
- **AC1**: Timeline lists milestones with **date**, **title**, **description**.
- **AC2**: Timeline supports optional photos per milestone (if provided).
- **AC3 (Optional)**: Map section can be included or hidden without breaking layout.

#### FR4 — Skills & Certifications
- **AC1**: Skills are displayed in a readable list/grid.
- **AC2**: Certifications are displayed with title and issuer/date (if provided).
- **AC3**: Certification PDFs can be downloaded via links when available.

#### FR5 — Gallery
- **AC1**: Gallery displays images in a grid and/or carousel.
- **AC2**: Videos (if present) can be played without layout breaking.
- **AC3**: Media is responsive and does not overflow on small screens.

#### FR6 — Personal Updates / Blog
- **AC1**: Posts display **title**, **date**, and **content**.
- **AC2**: Posts are sorted by date descending (newest first).

#### FR7 — Contact Form
- **AC1**: Form includes **Name**, **Email**, **Message** fields.
- **AC2**: Validation rules are enforced before submission:
  - Name: minimum 2 characters
  - Email: valid email format
  - Message: minimum 10 characters
- **AC3**: On successful submission, user sees a success confirmation message.
- **AC4**: On failure, user sees a clear error message and submission does not crash the UI.
- **AC5**: Backend sends an email to Abel’s configured email address.

#### FR8 — Responsive Design
- **AC1**: All pages render correctly on mobile widths (e.g., 360px).
- **AC2**: Navbar and core content remain usable and readable on tablet and desktop.
- **AC3**: Images scale responsively and maintain aspect ratio.

---

## 4. Non-Functional Requirements

| Category | Requirement |
|----------|------------|
| Performance | Pages should load within 2 seconds on an average internet connection (excluding large media). |
| Security | Protect backend email endpoint from spam and injection attacks. |
| Reliability | Contact form must reliably send emails; show fallback error if sending fails. |
| Usability | Clear navigation with intuitive menu and page structure. |
| Maintainability | Modular React components; clear structure for manual updates. |
| Portability | Frontend deployable to Vercel; backend deployable to Node hosting or Vercel serverless. |

### 4.1 Security Requirements (Minimum)
- **Input sanitization/validation** on backend for all contact fields.
- **Rate limiting** per IP (or equivalent serverless protection).
- **CORS** configured to allow only the frontend origin(s).
- **No secrets in client**: Email credentials/API keys must be stored in environment variables.

---

## 5. System Architecture

### 5.1 Frontend
- **Stack**: React + Vite
- **Pages**: Home, About, Journey, Skills & Certifications, Gallery, Updates, Contact
- **Core Components**: Navbar, Footer, Timeline, Card, GalleryGrid/Carousel, PostList, ContactForm

### 5.2 Backend
- **Stack**: Node.js + Express (or Vercel Serverless Function)
- **Endpoint**: `POST /contact`
- **Email**: Nodemailer to send emails to Abel
- **Response**: JSON success/failure with error-safe messages

### 5.3 Hosting / Deployment
- **Frontend**: Vercel
- **Backend**: Vercel serverless function or any Node.js compatible server
- **Environment variables** (backend): SMTP host/port/user/pass (or provider token), recipient email

---

## 6. UI/UX Requirements
- **Theme**: Nautical — navy blue + white with gold accents.
- **Style**: Minimalistic, professional, modern spacing/typography.
- **Navigation**: Persistent top navbar; clear active page indication.
- **Responsiveness**: Cards and media adapt to screen size.
- **Hero**: Optional subtle animation/background effect (must not hurt performance).

---

## 7. Contact Form Specification

### 7.1 Fields
- **Name** (required)
- **Email** (required)
- **Message** (required)

### 7.2 Validation
- Name: minimum 2 characters
- Email: valid format
- Message: minimum 10 characters

### 7.3 Submission Behavior
- Frontend submits to backend `POST /contact`.
- Backend sends email to Abel’s email address.
- Frontend displays:
  - **Success** message on 2xx response
  - **Failure** message on non-2xx or network errors

---

## 8. Future Enhancements
- Admin panel for managing updates/blog content.
- Voyage map on Journey page.
- Interactive timeline animations.
- Multi-language support.

