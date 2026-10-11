import { useEffect, useRef, useState } from 'react'
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronDown,
  Cloud, Code2, Layers3, Menu, MessageSquareText, MousePointer2, Sparkles,
  Workflow, X,
} from 'lucide-react'

const businessEmail = 'tarkeontechnologies@gmail.com'
const businessPhone = '+91 8808804843'
const whatsappUrl = 'https://wa.me/91XXXXXXXXXX?text=Hi%20Tarkeon%20Technologies,%20I%20want%20to%20discuss%20a%20project.'
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby9qEErOI6syVqpVB4ocZB8-3ZEJ9acTJHW4YkHLK1QOTFpWhyDoxf8UwxUiHISgS6NBA/exec'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const technologies = ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'TailwindCSS']

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Custom software development',
    description: 'Purpose-built software shaped around your operations, users, and the way your business needs to work.',
    tags: ['Web apps', 'Internal tools', 'Integrations'],
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Web applications & digital experiences',
    description: 'Clear, responsive websites and product experiences designed to make complex things feel simple.',
    tags: ['Websites', 'Product UI', 'E-commerce'],
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'AI integration & business automation',
    description: 'Practical AI features and connected workflows that address real needs—not technology for its own sake.',
    tags: ['AI integration', 'Automation', 'Knowledge tools'],
  },
  {
    number: '04',
    icon: Cloud,
    title: 'Cloud systems & API development',
    description: 'Reliable application foundations, APIs, and integrations that help your software work together.',
    tags: ['APIs', 'Cloud systems', 'System integration'],
  },
]

const projects = [
  {
    number: '01',
    type: 'ANALYTICS PLATFORM · CONCEPT',
    title: 'Enterprise Analytics SaaS',
    description: 'A concept for real-time telemetry, role-based access control, and a high-throughput database built to support data-intensive workflows.',
    className: 'dashboard-concept',
    label: 'Analytics Suite',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    number: '02',
    type: 'AI AUTOMATION · CONCEPT',
    title: 'AI-Powered Automation Suite',
    description: 'A concept combining an intelligent document parser with a workflow agent to help move information through repeatable business processes.',
    className: 'assistant-concept',
    label: 'Automation Suite',
    tags: ['Python', 'LangChain', 'FastAPI'],
  },
  {
    number: '03',
    type: 'COMMERCIAL WEB · CONCEPT',
    title: 'High-Speed Commercial Web Platform',
    description: 'A concept for a commercial platform focused on sub-second load times, a conversion-conscious interface, and fast global delivery.',
    className: 'commerce-concept',
    label: 'Commerce Platform',
    tags: ['React', 'Tailwind', 'Cloudflare'],
  },
]

const principles = [
  {
    icon: MousePointer2,
    title: 'Thoughtful engineering',
    text: 'Start with the problem. Choose a clear, durable solution that fits the people who will use it.',
  },
  {
    icon: MessageSquareText,
    title: 'Clear communication',
    text: 'Keep decisions, progress, and next steps visible throughout the work.',
  },
  {
    icon: Code2,
    title: 'Maintainable solutions',
    text: 'Build with care for the next change, the next teammate, and the life of the product.',
  },
  {
    icon: Workflow,
    title: 'Business-focused execution',
    text: 'Connect the details of delivery to the outcomes your team is working toward.',
  },
]

const process = [
  { number: '01', title: 'Discover', text: 'Understand the people, needs, constraints, and opportunity behind the idea.' },
  { number: '02', title: 'Design', text: 'Shape the experience, technical approach, and practical plan before building.' },
  { number: '03', title: 'Build', text: 'Develop and refine in focused steps, with clear communication along the way.' },
  { number: '04', title: 'Launch & improve', text: 'Prepare for release, learn from real use, and plan the next useful iteration.' },
]

function BrandMark({ small = false }) {
  return (
    <span className={`brand-mark${small ? ' brand-mark-small' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M5 13.5 14.2 5H43L33.4 14.2H18.5L9.5 22.5 5 19.5Z" fill="url(#tarkeon-blue)" />
        <path d="M17 21.5H32.8V43L17 28.5 11.5 23.8Z" fill="url(#tarkeon-violet)" />
        <defs>
          <linearGradient id="tarkeon-blue" x1="5" y1="5" x2="43" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4C8DFF" />
            <stop offset="1" stopColor="#2DD9EC" />
          </linearGradient>
          <linearGradient id="tarkeon-violet" x1="13" y1="19" x2="34" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4388FF" />
            <stop offset="1" stopColor="#A16AFF" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#home" aria-label="TARKEON home">
      <BrandMark />
      <span>TARKEON</span>
    </a>
  )
}

function Eyebrow({ children }) {
  return <span className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />{children}</span>
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' section-heading-centered' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function CtaLink({ href, children, secondary = false, onClick }) {
  return (
    <a className={`cta-link${secondary ? ' cta-secondary' : ''}`} href={href} onClick={onClick}>
      {children}<ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3.2A12.6 12.6 0 0 0 5.1 22.1L3.5 28.5l6.6-1.7A12.6 12.6 0 1 0 16 3.2Z" fill="currentColor" />
      <path d="M12.2 10.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.5 4 6.1 5.4 3 .0 3.7-.1 4.4-.9.7-.8.9-1.6.8-1.8-.1-.2-.3-.3-.7-.5l-2.5-1.2c-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-1.9-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7l-1.1-2.7Z" fill="#0b1720" />
    </svg>
  )
}

function HeroVisual() {
  const visualRef = useRef(null)

  useEffect(() => {
    const visual = visualRef.current
    if (!visual || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = visual.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5
        visual.style.setProperty('--tilt-x', `${(x * 4).toFixed(2)}deg`)
        visual.style.setProperty('--tilt-y', `${(-y * 4).toFixed(2)}deg`)
      })
    }
    const resetTilt = () => {
      cancelAnimationFrame(frame)
      visual.style.setProperty('--tilt-x', '0deg')
      visual.style.setProperty('--tilt-y', '0deg')
    }

    visual.addEventListener('pointermove', handlePointerMove, { passive: true })
    visual.addEventListener('pointerleave', resetTilt, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      visual.removeEventListener('pointermove', handlePointerMove)
      visual.removeEventListener('pointerleave', resetTilt)
    }
  }, [])

  return (
    <div ref={visualRef} className="hero-visual" role="img" aria-label="TARKEON illustration with sample system telemetry, illustrative metrics, and orbital lines">
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-halo" aria-hidden="true" />
      <div className="visual-orbit orbit-one" aria-hidden="true"><span className="orbit-particle" /></div>
      <div className="visual-orbit orbit-two" aria-hidden="true"><span className="orbit-particle" /></div>
      <div className="visual-core-float">
        <div className="visual-core">
          <div className="telemetry-heading">
            <span className="telemetry-brand"><BrandMark small /></span>
            <span><small>SAMPLE TELEMETRY</small><b>System Status</b></span>
            <Activity className="telemetry-activity" size={16} aria-hidden="true" />
          </div>
          <div className="telemetry-status">
            <span className="visual-status-dot" />
            <span>Systems: Operational <b>(99.98%)</b></span>
          </div>
          <span className="telemetry-metric">Latency: <b>&lt; 24ms</b></span>
          <span className="telemetry-disclaimer">Illustrative demo data · not live monitoring</span>
        </div>
      </div>
      <div className="visual-node node-one"><span /><b>Software</b></div>
      <div className="visual-node node-two"><span /><b>AI systems</b></div>
      <div className="visual-node node-three"><span /><b>Digital products</b></div>
      <div className="visual-caption"><span /> BUILT AROUND WHAT MATTERS</div>
    </div>
  )
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.className}`} aria-label={`${project.label} illustrative concept interface preview`}>
      <div className="preview-frame">
        <div className="preview-topbar">
          <div className="preview-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>{project.label}</span>
          <div className="preview-user" aria-hidden="true">T</div>
        </div>
        {project.className === 'dashboard-concept' && (
          <div className="mock-dashboard">
            <aside className="mock-sidebar" aria-hidden="true">
              <div className="mock-brand"><span /> Overview</div>
              <i className="active" /><i /><i /><i /><i />
              <div className="mock-sidebar-foot" />
            </aside>
            <div className="mock-main">
              <div className="mock-greeting"><span><i /> YOUR WORKSPACE</span><b>Good morning</b></div>
              <div className="mock-overview"><div><small>ACTIVE PROJECTS</small><b>08</b><i /></div><div><small>TEAM TASKS</small><b>24</b><i /></div><div><small>COMPLETED</small><b>16</b><i /></div></div>
              <div className="mock-chart">
                <div className="mock-chart-heading"><b>Project activity</b><span>Last 7 days⌄</span></div>
                <div className="mock-chart-bars" aria-hidden="true">{[37, 55, 45, 74, 52, 88, 62, 78, 48, 94, 68, 83].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              </div>
              <div className="mock-task"><span /><i /><i /><i /></div>
            </div>
          </div>
        )}
        {project.className === 'assistant-concept' && (
          <div className="mock-assistant">
            <div className="assistant-orb"><Sparkles size={24} aria-hidden="true" /></div>
            <span className="assistant-kicker">A LITTLE MORE CONTEXT</span>
            <b>How can I help?</b>
            <p>Ask a question about your support resources.</p>
            <div className="assistant-input"><span>Search your knowledge...</span><ArrowRight size={15} aria-hidden="true" /></div>
            <div className="assistant-suggestions"><i>Help centre</i><i>Product guides</i><i>Team notes</i></div>
          </div>
        )}
        {project.className === 'commerce-concept' && (
          <div className="mock-commerce">
            <div className="commerce-nav"><b>F / F</b><span>OBJECTS & EVERYDAY</span><i>MENU</i></div>
            <div className="commerce-stage">
              <div className="commerce-copy"><small>THE DAILY EDITION</small><b>Made for<br />the moments<br /><em>in between.</em></b><span>EXPLORE THE COLLECTION ↗</span></div>
              <div className="commerce-object" aria-hidden="true"><div /><span /></div>
            </div>
            <div className="commerce-foot"><span>01 — 03</span><i /><span>DESIGNED WITH INTENTION</span></div>
          </div>
        )}
      </div>
      <span className="concept-stamp"><Sparkles size={12} aria-hidden="true" /> CONCEPT PREVIEW</span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [floatingButtonSuppressed, setFloatingButtonSuppressed] = useState(false)
  const [motionReady, setMotionReady] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState('')
  const [formStatus, setFormStatus] = useState('idle')
  const submittingRef = useRef(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const contactSection = document.getElementById('contact')
    const footer = document.querySelector('.site-footer')
    if (!contactSection || !footer || !('IntersectionObserver' in window)) return undefined
    const visibleSections = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target)
          else visibleSections.delete(entry.target)
        })
        setFloatingButtonSuppressed(visibleSections.size > 0)
      },
      { threshold: 0.05 },
    )
    observer.observe(contactSection)
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const revealItems = document.querySelectorAll('.scroll-reveal')
    if (!revealItems.length) return undefined
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 })

    revealItems.forEach((item) => observer.observe(item))
    setMotionReady(true)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setFormMessage('')
    if (formStatus !== 'submitting') setFormStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submittingRef.current) return
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email.trim())) {
      setFormStatus('validation')
      setFormMessage('Enter a valid email address before submitting your enquiry.')
      return
    }
    submittingRef.current = true
    setFormStatus('submitting')
    setFormMessage('Sending your enquiry...')
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          service: form.service,
          message: form.message.trim(),
        }),
        signal: controller.signal,
      })

      if (response.type === 'opaque') {
        console.info('[TARKEON enquiry] Request dispatched; Apps Script response is opaque and Sheet write is unverified.')
      }

      setFormStatus('success')
      setFormMessage('Thank you! Your enquiry request was sent.')
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (error) {
      console.error('[TARKEON enquiry] Request could not be dispatched.', {
        reason: error.name === 'AbortError' ? 'request_timeout' : 'request_failed',
        errorName: error.name || 'Error',
        errorMessage: error.message || 'Unknown request error',
      })
      setFormStatus('error')
    } finally {
      window.clearTimeout(timeoutId)
      submittingRef.current = false
    }
  }

  return (
    <div className={`site-shell${motionReady ? ' motion-ready' : ''}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header${scrolled ? ' header-scrolled' : ''}`}>
        <div className="container nav-container">
          <Brand />
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <CtaLink href="#contact" onClick={closeMenu}>Start a Project</CtaLink>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <Eyebrow>SOFTWARE ENGINEERING <i /> AI <i /> DIGITAL PRODUCTS</Eyebrow>
              <h1>Engineering<br />the <span className="gradient-text">Future.</span></h1>
              <p className="hero-description">We build thoughtful software, powerful web experiences, and practical AI solutions that help ambitious businesses move forward.</p>
              <div className="hero-actions">
                <CtaLink href="#contact">Start a Project</CtaLink>
                <a className="text-link" href="#work">Explore Our Work <ArrowDown size={15} aria-hidden="true" /></a>
              </div>
              <div className="hero-signoff"><span className="signoff-line" />A software studio for ideas in motion.</div>
            </div>
            <HeroVisual />
          </div>
          <div className="container hero-meta">
            <span>INDEPENDENT SOFTWARE STUDIO</span>
            <span>INDIA <i /> WORKING WORLDWIDE</span>
            <a href="#services">EXPLORE CAPABILITIES <ArrowDown size={13} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="tech-stack" aria-label="Technologies and frameworks">
          <div className="container tech-stack-inner">
            <span className="tech-stack-heading">Built with Modern Cloud &amp; Frameworks</span>
            <ul className="tech-stack-list">
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title={<>The right tools<br /><span className="muted-heading">for meaningful work.</span></>}
              description="From the first conversation to a considered launch, we bring product thinking and engineering together."
            />
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-head">
                      <span className="service-icon"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
                      <span className="service-number">{service.number}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="service-link" href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this service <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="work-heading">
              <SectionHeading
                eyebrow="SELECTED CONCEPTS"
                title={<>Ideas, made <span className="gradient-text">tangible.</span></>}
                description="A look at possible directions for thoughtful digital products. These are illustrative concepts—not client projects."
              />
              <span className="work-note"><Sparkles size={14} aria-hidden="true" /> CONCEPTS & DEMOS<br />NOT CLIENT CASE STUDIES</span>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card scroll-reveal" key={project.number}>
                  <ProjectPreview project={project} />
                  <div className="project-info">
                    <span className="project-type">{project.type} <i> / {project.number}</i></span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags" aria-label="Example technologies">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <a className="project-discuss" href="#contact">
                      Discuss Similar Project <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-grid">
            <div className="about-art" aria-hidden="true">
              <div className="about-grid-lines" />
              <div className="about-orbit" />
              <div className="about-mark"><BrandMark /></div>
              <span className="about-art-label">LESS NOISE. MORE SIGNAL.</span>
              <span className="about-art-index">TK — BUILT WITH INTENTION</span>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="WHY TARKEON"
                title={<>Technology should<br /><span className="muted-heading">move you forward.</span></>}
                description="Great software is not about adding more for the sake of it. It is about understanding what matters and making the right things work better."
              />
              <div className="principles-list">
                {principles.map((principle) => {
                  const Icon = principle.icon
                  return (
                    <article className="principle" key={principle.title}>
                      <span className="principle-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
                      <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="container">
            <div className="process-heading-row">
              <SectionHeading
                eyebrow="HOW WE WORK"
                title={<>A clear path from<br /><span className="muted-heading">idea to impact.</span></>}
                description="A collaborative process keeps the work considered, the decisions clear, and the next step in view."
              />
              <span className="process-aside">GOOD WORK<br />IS A SHARED EFFORT.</span>
            </div>
            <div className="process-grid">
              {process.map((step) => (
                <article className="process-step scroll-reveal" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <span className="process-rule" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-panel">
            <div className="contact-copy scroll-reveal">
              <Eyebrow>HAVE AN IDEA?</Eyebrow>
              <h2>Let’s build<br /><span className="gradient-text">it.</span></h2>
              <p>Tell us a little about what you have in mind. We’ll start with a thoughtful conversation.</p>
              <div className="contact-email-label">OR WRITE TO US DIRECTLY</div>
              <div className="contact-quick-actions">
                <a className="contact-email" href={`mailto:${businessEmail}`}>{businessEmail}<ArrowUpRight size={16} aria-hidden="true" /></a>
                <a className="contact-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={17} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              <a className="contact-phone" href="tel:+918808804843">{businessPhone}<ArrowUpRight size={15} aria-hidden="true" /></a>
              <div className="contact-promise"><Check size={15} aria-hidden="true" /> Enquiries are sent to our Apps Script endpoint.</div>
            </div>
            <form
              className="contact-form scroll-reveal"
              aria-busy={formStatus === 'submitting'}
              onSubmit={handleSubmit}
              onInvalid={() => {
                if (formStatus === 'submitting') return
                setFormStatus('validation')
                setFormMessage('Please check the required fields and enter a valid email address.')
              }}
            >
              <div className="form-heading"><span>PROJECT ENQUIRY</span><span><i /> REQUIRED FIELDS</span></div>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Full name <span>*</span></label>
                  <input id="name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={updateForm} placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Work email <span>*</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={updateForm} placeholder="you@company.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone <small>OPTIONAL</small></label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={updateForm} placeholder="+91 ..." />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company or project <small>OPTIONAL</small></label>
                  <input id="company" name="company" autoComplete="organization" maxLength={120} value={form.company} onChange={updateForm} placeholder="What should we call it?" />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Service <span>*</span></label>
                  <div className="select-wrap">
                    <select id="service" name="service" required value={form.service} onChange={updateForm}>
                      <option value="" disabled>Select a service</option>
                      <option>Custom software development</option>
                      <option>Web applications & digital experiences</option>
                      <option>AI integration & business automation</option>
                      <option>Cloud systems & API development</option>
                      <option>Something else</option>
                    </select>
                    <ChevronDown size={16} aria-hidden="true" />
                  </div>
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="description">Project description <span>*</span></label>
                  <textarea id="description" name="message" required minLength={10} maxLength={3000} rows={4} value={form.message} onChange={updateForm} placeholder="What are you looking to build or improve?" />
                  <span className="field-hint">A few sentences is plenty to get started.</span>
                </div>
              </div>
              <button className="cta-link form-submit" type="submit" disabled={formStatus === 'submitting' || formStatus === 'success'}>
                {formStatus === 'submitting' ? 'Sending your enquiry...' : formStatus === 'success' ? 'Request sent' : 'Send project enquiry'}
                {formStatus === 'submitting' ? <span className="submit-spinner" aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
              </button>
              <p className="form-note">Your information is used to respond to your enquiry.</p>
              {formMessage && (
                <p className={`form-feedback form-feedback-${formStatus === 'validation' ? 'error' : formStatus}`} role={formStatus === 'error' || formStatus === 'validation' ? 'alert' : 'status'} aria-live="polite">
                  {formStatus === 'error'
                    ? <>We couldn't confirm your enquiry. Please try again or contact <a href={`mailto:${businessEmail}`}>{businessEmail}</a>.</>
                    : formMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <a
        className={`floating-whatsapp${menuOpen || floatingButtonSuppressed ? ' floating-whatsapp-hidden' : ''}`}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TARKEON Technologies on WhatsApp"
        title="Chat with TARKEON Technologies on WhatsApp"
        tabIndex={menuOpen || floatingButtonSuppressed ? -1 : 0}
      >
        <WhatsAppIcon size={25} />
        <span className="whatsapp-tooltip" role="tooltip">Chat on WhatsApp</span>
      </a>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-block">
              <Brand footer />
              <p>Software engineering.<br />AI. Digital products.<br /><span>Engineering the Future.</span></p>
            </div>
            <div className="footer-column">
              <span className="footer-label">EXPLORE</span>
              {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </div>
            <div className="footer-column">
              <span className="footer-label">SERVICES</span>
              {services.map((service) => <a key={service.number} href="#services">{service.title}</a>)}
            </div>
            <div className="footer-column footer-connect">
              <span className="footer-label">GET IN TOUCH</span>
              <a href="#contact">Start a project <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={`mailto:${businessEmail}`}>{businessEmail} <ArrowUpRight size={13} aria-hidden="true" /></a>
              <span className="footer-location"><span /> India · Working worldwide</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} TARKEON. All rights reserved.</span>
            <span>Thoughtful work, built for what’s next.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
