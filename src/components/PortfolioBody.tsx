'use client'
import { Suspense, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Loader from './Loader'
import ShopPOSAnimation from './ShopPOSAnimation'
import SoundToggle from './SoundToggle'
import EarthErrorBoundary from './EarthErrorBoundary'
import WorkExperienceCards from './WorkExperienceCards'

const Earth = dynamic(() => import('./Earth'), {
  ssr: false,
  loading: () => <div className="earth-canvas earth-canvas--loading" style={{ minHeight: '50vw' }} />,
})

export default function PortfolioBody() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const hide = () => setShowPreloader(false)
    const startBtn = document.getElementById('js-page-loading_start')
    if (startBtn) startBtn.addEventListener('click', hide)
    const t = setTimeout(hide, 3000)
    return () => {
      if (startBtn) startBtn.removeEventListener('click', hide)
      clearTimeout(t)
    }
  }, [])

  // Pause background videos when off-screen; resume on tab focus; loop fallback
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!mounted) return
    const sections = [
      { el: heroRef.current, videoSelector: '.hero_bg-video' },
      { el: skillsRef.current, videoSelector: '.work_bg-video' },
    ].filter((s) => s.el) as { el: HTMLElement; videoSelector: string }[]

    const tryPlay = (v: HTMLVideoElement) => {
      if (document.visibilityState === 'visible') v.play().catch(() => {})
    }

    const observers: IntersectionObserver[] = []
    const visibilityCleanup: (() => void)[] = []

    const cleanupFns: (() => void)[] = []
    sections.forEach(({ el, videoSelector }) => {
      const video = el.querySelector<HTMLVideoElement>(videoSelector)
      if (!video) return

      // IntersectionObserver: pause when off-screen, play when visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tryPlay(video)
          else video.pause()
        },
        { rootMargin: '100px', threshold: 0.01 }
      )
      observer.observe(el)
      observers.push(observer)

      const onEnded = () => {
        video.currentTime = 0
        tryPlay(video)
      }
      const onStalled = () => tryPlay(video)
      video.addEventListener('ended', onEnded)
      video.addEventListener('stalled', onStalled)
      cleanupFns.push(() => {
        video.removeEventListener('ended', onEnded)
        video.removeEventListener('stalled', onStalled)
      })
    })

    // Page Visibility: resume video when user returns to tab
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return
      sections.forEach(({ el, videoSelector }) => {
        const video = el?.querySelector<HTMLVideoElement>(videoSelector)
        if (!video) return
        const rect = el!.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        if (inView) tryPlay(video)
      })
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    visibilityCleanup.push(() => document.removeEventListener('visibilitychange', onVisibilityChange))

    return () => {
      observers.forEach((o) => o.disconnect())
      visibilityCleanup.forEach((fn) => fn())
      cleanupFns.forEach((fn) => fn())
    }
  }, [mounted])

  const pageLoadingStyle = {
    position: "fixed" as const,
    top: 0,
    zIndex: 99999999,
    width: "100%",
    height: "100%",
    left: 0,
    backgroundColor: "#0d0d0d",
  };

  const sectionBgStyle = {
    position: "absolute" as const,
    inset: 0,
    backgroundColor: "#0d0d0d",
  };

  const videoPlaceholderStyle = {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(160deg,#0d0d0d 0%,#1a1a1a 50%,#0d0d0d 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const videoPlaceholderImgStyle = {
    maxWidth: "40%",
    opacity: 0.15,
    objectFit: "contain" as const,
  };

  const mottoLabelStyle = {
    letterSpacing: "0.15em",
    color: "#b7ab98",
  };

  const mottoDescStyle = {
    color: "#b7ab98",
  };

  const workExpVisualStyle = {
    width: 120,
    height: 120,
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#2a2a2a 0%,#1a1a1a 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "grayscale(1)",
    opacity: 0.8,
  };

  return (
    <div className="home">
      {/* Page loading overlay */}
      {showPreloader && (
      <div
        className="page-loading js-page-loading"
        style={pageLoadingStyle}
      >
        <div className="page-loading_inner js-page-loading_inner">
          <svg
            id="page-loading_circle"
            width="270"
            height="270"
            viewBox="0 0 270 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="136"
              cy="136"
              r="132"
              stroke="#B7AB98"
            />
          </svg>
          <div className="page-loading_logo">
            <img
              id="page-loading_logo"
              src="/images/logo.gif"
              width={64}
              height={64}
              alt="logo"
            />
          </div>
          <Loader />
          <button
            id="js-page-loading_start"
            className="body-text page-loading_start"
          >
            Start
          </button>{" "}
          <span id="js-page-loading_text" className="page-loading_text">
            <b className="js-loading_text">00</b>%
          </span>
        </div>
      </div>
      )}

      {/* Header */}
      <header className="header js-header">
        <div className="header_logo js-header_logo">
          {pathname === '/' ? (
            <span className="link-logo" aria-hidden>
              <img className="svg" src="/images/logo.gif" alt="logo" />
            </span>
          ) : (
            <Link className="link-logo" aria-label="Home page" href="/">
              <img className="svg" src="/images/logo.gif" alt="logo" />
            </Link>
          )}
        </div>
        <div className="header_menu">
          <ul className="header_menu_list ul__reset">
            <li className="header_menu_item js-cursor-contract">
              <a href="#about" className="desc text-uppercase">
                <span className="header_menu_item_inner">
                  <span className="header_menu_item_link header_menu_item_link__deep">
                    About
                  </span>{" "}
                  <span className="header_menu_item_link header_menu_item_link__active">
                    About
                  </span>
                </span>
              </a>
            </li>
            <li className="header_menu_item js-cursor-contract">
              <a href="#work" className="desc text-uppercase">
                <span className="header_menu_item_inner">
                  <span className="header_menu_item_link header_menu_item_link__deep">
                    Work
                  </span>{" "}
                  <span className="header_menu_item_link header_menu_item_link__active">
                    Work
                  </span>
                </span>
              </a>
            </li>
            <li className="header_menu_item js-cursor-contract">
              <a href="#contact" className="desc text-uppercase">
                <span className="header_menu_item_inner">
                  <span className="header_menu_item_link header_menu_item_link__deep">
                    Contact
                  </span>{" "}
                  <span className="header_menu_item_link header_menu_item_link__active">
                    Contact
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Main content */}
      <main className="main-layer js-pageContent">
        <div className="layer layer__dark">
          <div className="container">
            {/* Hero & About section */}
            <div id="about">
              <div className="hero" ref={heroRef}>
                <div className="hero_bg">
                  <video autoPlay muted loop playsInline preload="metadata" className="hero_bg-video" aria-hidden>
                    <source src="/video/blackhole.webm" type="video/webm" />
                  </video>
                  <div className="hero_bg-fallback" style={sectionBgStyle} aria-hidden />
                </div>
                <div className="hero_content">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-8 col-12 hero_content_inner js-cursor-extend">
                      <h6
                        className="text-center hero_content_inner_subtitle js-anim--lines--sim"
                        data-screen-offset="0.8"
                      >
                        Abdul Sami
                      </h6>
                      <h1
                        className="text-center js-anim--chars mb-0"
                        data-screen-offset="0.6"
                      >
                        making
                        <br />
                        <strong>good</strong>
                        <br />
                        <strong>shit</strong>
                        <br />
                        since
                        <br />
                        2021
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about js-about">
                <div className="row about_me">
                  <div className="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                    <div className="about_content container_content js-cursor-extend">
                      <p className="about_content_label body-text text-uppercase">
                        About me
                      </p>
                      <div className="about_content_desc h2">
                        <div className="scroll-paragraph-mask js-scroll-paragraph-mask">
                          I&apos;m a <strong>developer focused</strong> on building
                          clean practical digital products that are useful and impactful &amp;
                          using modern engineering workflows.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I do section */}
              <div className="about_ido">
                <div className="js-about_ido_coffee about_ido_coffee">
                  <div
                    className="js-about_ido_inner about_ido_inner"
                    data-lenis-speed="-.1"
                  />
                </div>
                <div className="js-about_ido_mouse about_ido_mouse">
                  <div
                    className="js-about_ido_inner about_ido_inner"
                    data-lenis-speed=".1"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
                    <p className="about_content_label container_content body-text text-uppercase">
                      What i do
                    </p>
                  </div>
                </div>
                {/* Skills: UI/UX, Full Stack, Flutter, Prompt Eng., AI Tools */}
                <div className="heading-mask js-heading-mask">
                  <div className="heading-mask_el heading-mask_el__deep container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking">
                          <div className="js-simple-masking_el simple-masking_el js-cursor-contract">
                            <h2 className="h1 mb-0 js-heading-mask_heading">
                              UI/UX
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 op-0 d-lg-block d-none">
                        <p className="mb-0 desc">
                          I design clean, functional interfaces that users
                          actually enjoy using
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask_el heading-mask_el__masking container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking overflow-hidden">
                          <div className="simple-masking_el">
                            <h2 className="h1 mb-0 text-dark">UI/UX</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none">
                        <p className="mb-0 desc">
                          I design clean, functional interfaces that users
                          actually enjoy using
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask js-heading-mask">
                  <div className="heading-mask_el heading-mask_el__deep container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking">
                          <div className="js-simple-masking_el simple-masking_el js-cursor-contract">
                            <h2 className="h1 mb-0 js-heading-mask_heading">
                              Full Stack
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 op-0 d-lg-block d-none">
                        <p className="mb-0 desc">
                          I build production-ready apps with React, Next.js,
                          PostgreSQL, and AI-assisted workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask_el heading-mask_el__masking container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking overflow-hidden">
                          <div className="simple-masking_el">
                            <h2 className="h1 mb-0 text-dark">Full Stack</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none">
                        <p className="mb-0 desc">
                          I build production-ready apps with React, Next.js,
                          PostgreSQL, and AI-assisted workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask js-heading-mask">
                  <div className="heading-mask_el heading-mask_el__deep container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking">
                          <div className="js-simple-masking_el simple-masking_el js-cursor-contract">
                            <h2 className="h1 mb-0 js-heading-mask_heading">
                              Flutter
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 op-0 d-lg-block d-none">
                        <p className="mb-0 desc">
                          I craft cross-platform mobile experiences that work
                          everywhere
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask_el heading-mask_el__masking container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking overflow-hidden">
                          <div className="simple-masking_el">
                            <h2 className="h1 mb-0 text-dark">Flutter</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none">
                        <p className="mb-0 desc">
                          I craft cross-platform mobile experiences that work
                          everywhere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask js-heading-mask">
                  <div className="heading-mask_el heading-mask_el__deep container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking">
                          <div className="js-simple-masking_el simple-masking_el js-cursor-contract">
                            <h2 className="h1 mb-0 js-heading-mask_heading">
                              Prompt Eng.
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 op-0 d-lg-block d-none">
                        <p className="mb-0 desc">
                          Database modeling, REST API structuring, auth systems
                          & multi-tenant data isolation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask_el heading-mask_el__masking container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking overflow-hidden">
                          <div className="simple-masking_el">
                            <h2 className="h1 mb-0 text-dark">
                              Prompt Eng.
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none">
                        <p className="mb-0 desc">
                          Database modeling, REST API structuring, auth systems
                          & multi-tenant data isolation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask js-heading-mask">
                  <div className="heading-mask_el heading-mask_el__deep container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking">
                          <div className="js-simple-masking_el simple-masking_el js-cursor-contract">
                            <h2 className="h1 mb-0 js-heading-mask_heading">
                              AI Tools
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 op-0 d-lg-block d-none">
                        <p className="mb-0 desc">
                          I leverage AI tools to design, structure, and deliver
                          digital products efficiently
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask_el heading-mask_el__masking container_content">
                    <div className="row align-items-center">
                      <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                        <div className="simple-masking overflow-hidden">
                          <div className="simple-masking_el">
                            <h2 className="h1 mb-0 text-dark">AI Tools</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none">
                        <p className="mb-0 desc">
                          I leverage AI tools to design, structure, and deliver
                          digital products efficiently
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work section */}
            <div id="work">
              <div className="work" id="work">
                <div className="row work_experience">
                  <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
                    <div className="work_content container_content js-cursor-extend">
                      <p className="work_content_label body-text text-uppercase">
                        Experience
                      </p>
                      <div className="work_content_desc h2">
                        <div className="scroll-paragraph-mask js-scroll-paragraph-mask">
                          Experience in{" "}
                          <strong>frontend development</strong>, UI/UX design,
                          and AI-assisted full-stack application development
                          using modern engineering workflows
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills section: Skills heading → Graphic Designer (with skills-bg video) */}
                <div className="work_skills_section" ref={skillsRef}>
                  <div className="work_bg">
                    <video autoPlay muted loop playsInline preload="metadata" className="work_bg-video" aria-hidden>
                      <source src="/video/skills-bg.webm" type="video/webm" />
                    </video>
                    <div className="work_bg-fallback" style={sectionBgStyle} aria-hidden />
                  </div>
                  <div className="work_history">
                  <div className="row work_heading work_history_heading">
                    <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
                      <p className="work_content_label container_content body-text text-uppercase mb-0">
                        Skills
                      </p>
                    </div>
                  </div>
                  <div className="heading-mask heading-mask__now">
                    <div className="heading-mask_el container_content heading-mask_el__deep">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1">NOW</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                            <p className="h3 mb-1">
                              AI-Assisted Full Stack Developer
                            </p>
                            <p className="mb-0 desc font-400">
                              Project Based
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el container_content heading-mask_el__masking">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1 text-dark">NOW</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el">
                            <h4 className="h3 mb-1 text-dark">
                              AI-Assisted Full Stack Developer
                            </h4>
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="Project Based" aria-hidden />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask">
                    <div className="heading-mask_el container_content heading-mask_el__deep">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1">2025</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                            <p className="h3 mb-1">UI / UX Design</p>
                            <p className="mb-0 desc font-400">
                            Designing user-focused digital product experiences
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el container_content heading-mask_el__masking">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1 text-dark">2025</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el">
                            <p className="h3 mb-1 text-dark">
                            Frontend Engineering
                            </p>
                            <p className="mb-0 desc font-400 text-dark">
                            Developing responsive web interfaces with React and Next.js
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask">
                    <div className="heading-mask_el container_content heading-mask_el__deep">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                            <p className="h3 mb-1">AI Tooling & Workflow Optimization</p>
                            <p className="mb-0 desc font-400">Leveraging AI tools</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el container_content heading-mask_el__masking">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1 text-dark">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el">
                            <p className="h3 mb-1 text-dark">
                            AI Workflow Engineering
                            </p>
                            <p className="mb-0 desc font-400 text-dark">
                            Leveraging AI tools to improve development speed and productivity
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading-mask">
                    <div className="heading-mask_el container_content heading-mask_el__deep">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1">2023</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                            <p className="h3 mb-1">Graphic Designer</p>
                            <p className="mb-0 desc font-400">Freelance (Twitch Streamers)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el container_content heading-mask_el__masking">
                      <div className="row">
                        <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                          <div className="simple-masking">
                            <div className="simple-masking_el">
                              <span className="h3 mb-1 text-dark">2023</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-9">
                          <div className="simple-masking_el">
                            <p className="h3 mb-1 text-dark">
                            Graphic Designer (illustrator, Photoshop, Canva)
                            </p>
                            <p className="mb-0 desc font-400 text-dark">
                              Visual design and branding for online creators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Clients section - projects list (SHOP-POS, Portfolio & UI, AI-BUDDY, MODERN WEB APPS, ...)
                * MAIN LAYER: visible content, each project = heading-mask with js-heading-mask
                * RED LAYER: cursor reveal, same structure with reveal-pseudo + data-reveal
                * To add new project: copy-paste AI-BUDDY block in both places, update title + description */}
            <div className="client js-client" id="client">
              <div className="row client_info">
                <div className="col-lg-9 col-sm-10 offset-lg-2 offset-sm-1 col-12">
                  <div className="client_content container_content js-cursor-extend">
                    <p className="client_content_label body-text text-uppercase">
                      My focus
                    </p>
                    <div className="client_content_desc h2">
                      <div className="scroll-paragraph-mask js-scroll-paragraph-mask">
                        Experienced in <strong>building modern interfaces</strong>,
                        product design, and AI-assisted full-stack
                        development using <strong>scalable engineering workflows</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client_list">
                <div className="client_list_3d" data-lenis-speed=".1">
                  <div className="earth-canvas">
                    {mounted && (
                      <EarthErrorBoundary fallback={<div className="earth-canvas earth-canvas--loading" style={{ minHeight: '50vw' }} />}>
                        <Suspense fallback={<div className="earth-canvas earth-canvas--loading" style={{ minHeight: '50vw' }} />}>
                          <Earth />
                          
                        </Suspense>
                      </EarthErrorBoundary>
                    )}
                  </div>
                  <div className="js-client_list_3d client_list_3d_inner" />
                  <div className="client_list_3d_image">
                    <img src="/images/planet-1-1.png" alt="planet" />
                  </div>
                </div>
                {/* client_list_inner - add all projects here (each = separate heading-mask) */}
                <div className="client_list_inner">
                  {/* ——— PROJECT 1: SHOP-POS [START] ——— */}
                  <div className="heading-mask js-heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep">
                      <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                              <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break">
                                SHOP-POS
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el">
                              <h2 className="h1 mb-0 text-dark none-break none-break">
                                SHOP-POS
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark d-sm-block d-none">
                          <p className="mb-0 desc">
                            Multi-tenant for coffee shop, cafe, retail & more built
                            with AI-driven development. POS, inventory, staff
                            shifts, reporting & role-based auth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 1: SHOP-POS [END] ——— */}
                  {/* ——— PROJECT 2: Portfolio & UI [START] ——— */}
                  <div className="heading-mask js-heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep">
                      <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                              <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break">
                                Portfolio & UI
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el">
                              <h2 className="h1 mb-0 text-dark none-break">
                                Portfolio & UI
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark d-sm-block d-none">
                          <p className="mb-0 desc">
                            Personal portfolio and UI/UX design projects. Clean,
                            functional interfaces.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 2: Portfolio & UI [END] ——— */}
                  {/* ——— PROJECT 3: AI-BUDDY [START] ——— */}
                  <div className="heading-mask js-heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep">
                      <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                              <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break">
                                AI-BUDDY
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el">
                              <h2 className="h1 mb-0 text-dark none-break">
                                AI-Buddy
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark d-sm-block d-none">
                          <p className="mb-0 desc">
                            AI-powered content and image compressor free online tool for creators. www.aibuddy.design/image-compressor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 3: AI-BUDDY [END] ——— */}
                  {/* ——— PROJECT 4: MODERN WEB APPS [START] ——— */}
                  <div className="heading-mask js-heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep">
                      <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                              <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break">
                                MODERN WEB APPS
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                          <div className="simple-masking overflow-hidden">
                            <div className="simple-masking_el">
                              <h2 className="h1 mb-0 text-dark none-break">
                                MODERN WEB APPS
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark d-sm-block d-none">
                          <p className="mb-0 desc">
                            Custom full-stack web applications built with Next.js, React, and cloud infrastructure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 4: MODERN WEB APPS [END] ——— */}
                  {/* To add new project: copy AI-BUDDY block above, paste here, update title + description */}
                </div>
                {/* client_list_inner [END] */}
                <div className="row">
                  <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
                    <div className="dots container_content">
                      <span /> <span /> <span /> <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop POS animation section (replaces video) */}
            <div className="video" id="video">
              <div className="videoPlayer js-videoPlayer">
                <div className="videoPlayer_inner js-videoPlayer_inner">
                  <video
                    id="videoPlayer"
                    className="js-videoPlayer-placeholder"
                    playsInline
                    muted
                    loop
                    preload="none"
                    style={{
                      position: "absolute",
                      width: 1,
                      height: 1,
                      opacity: 0,
                      pointerEvents: "none",
                      visibility: "hidden",
                    }}
                    aria-hidden
                  />
                  <div
                    className="video-placeholder"
                    style={videoPlaceholderStyle}
                  >
                    <ShopPOSAnimation />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials / Work experience */}
            <div className="testimonials js-testimonials">
              <div className="row align-items-center">
                <div className="col-lg-7 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                  <p className="testimonials_content_label container_content body-text text-uppercase mb-4">
                    Work Experience
                  </p>
                  <WorkExperienceCards />
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center align-items-start">
                  <div className="work-exp-visual" style={workExpVisualStyle}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#888"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Motto & Contact section */}
            <div id="contact-section">
              <div className="motto">
                <div className="motto_bg">
                  <div style={sectionBgStyle} aria-hidden />
                </div>
                <div className="motto_content container_content">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8 col-12 motto_content_inner js-cursor-extend">
                      <div>
                        <p
                          className="text-center mb-0 h6 text-uppercase"
                          style={mottoLabelStyle}
                        >
                          MY MOTTO
                        </p>
                            {/* Desktop: GOOD DESIGN IS HONEST */}
                            <p className="text-center motto_content_heading motto-light h1 mb-0 d-none d-md-block">
                              <span className="d-block">GOOD DESIGN</span>
                              <span className="d-block">IS HONEST</span>
                            </p>
                            {/* Mobile: NOT ALL HONEST DESIGN IS GOOD (cream/white) */}
                            <p className="text-center motto_content_heading motto-mobile h1 mb-0 d-block d-md-none">
                              <span className="d-block">NOT ALL</span>
                              <span className="d-block">HONEST DESIGN</span>
                              <span className="d-block">IS GOOD</span>
                            </p>
                        <p className="desc text-center mb-0" style={mottoDescStyle}>
                          sam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="contact" className="contact container_content">
                <div className="row">
                  <div className="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                    <p className="contact_label body-text text-uppercase">
                      Connect
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12">
                    <ul className="ul__reset">
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a href="#" className="contact_link" target="_blank">
                            Dribbble
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="#"
                            className="text-dark contact_link"
                            target="_blank"
                          >
                            Fake works
                          </a>
                        </div>
                      </li>
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a href="#" className="contact_link" target="_blank">
                            Youtube
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="#"
                            className="text-dark contact_link"
                            target="_blank"
                          >
                            Random tutorials
                          </a>
                        </div>
                      </li>
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a
                            href="https://www.linkedin.com/in/abdul-sami-4960963b4/"
                            className="contact_link"
                            target="_blank"
                          >
                            Linkedin
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="https://www.linkedin.com/in/abdul-sami-4960963b4/"
                            className="text-dark contact_link"
                            target="_blank"
                          >
                            Serious me
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-5 col-12">
                    <ul className="ul__reset">
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a
                            href="https://www.instagram.com/svh29"
                            className="contact_link"
                            target="_blank"
                          >
                            Instagram
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="https://www.instagram.com/svh29"
                            className="text-dark contact_link"
                            target="_blank"
                          >
                            Not Tiktok
                          </a>
                        </div>
                      </li>
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a href="https://x.com/svhdavid" className="contact_link" target="_blank" rel="noopener noreferrer">
                            Twitter
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="https://x.com/svhdavid"
                            className="text-dark contact_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Tweets
                          </a>
                        </div>
                      </li>
                      <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                        <div className="heading-mask_el heading-mask_el__deep">
                          <a href="#" className="contact_link" target="_blank">
                            Behance
                          </a>
                        </div>
                        <div className="heading-mask_el heading-mask_el__masking">
                          <a
                            href="#"
                            className="text-dark contact_link"
                            target="_blank"
                          >
                            The Jurassic Park
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-12 contact_content">
                    <div className="row">
                      <div className="col-lg-12 col-sm-5 offset-lg-0 offset-sm-1 col-12">
                        <div className="heading-mask contact_info contact_info__top js-cursor-contract heading-mask__now">
                          <div className="heading-mask_el heading-mask_el__deep">
                            <span className="h4 d-block">Email</span>{" "}
                            <a
                              className="sub-content"
                              href="mailto:sami.vh@yahoo.com"
                            >
                              sami.vh@yahoo.com
                            </a>
                          </div>
                          <div className="heading-mask_el heading-mask_el__masking">
                            <span className="h4 d-block text-dark">
                              100% chance I read it
                            </span>{" "}
                            <a
                              className="sub-content text-dark"
                              href="mailto:sami.vh@yahoo.com"
                            >
                              sami.vh@yahoo.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-5 col-12">
                        <div className="heading-mask contact_info js-cursor-contract heading-mask__now">
                          <div className="heading-mask_el heading-mask_el__deep">
                            <span className="h4 d-block">Phone</span>{" "}
                            <a
                              className="sub-content"
                              href="tel:+1-315-497-8688"
                            >
                              +1-315-497-8688
                            </a>
                          </div>
                          <div className="heading-mask_el heading-mask_el__masking">
                            <span className="h4 d-block text-dark">
                              90% chance I don&apos;t pickup
                            </span>{" "}
                            <a
                              className="sub-content text-dark"
                              href="tel:+1-315-497-8688"
                            >
                              +1-315-497-8688
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-mobile" />
        <button id="js-btn_clipPath" className="btn_clipPath">
          <span className="btn_clipPath_inner">
            <span className="btn_clipPath_image btn_clipPath_image__ring">
              <img src="/images/ic-text-ring.svg" alt="Scroll" />{" "}
            </span>
            <span className="btn_clipPath_image btn_clipPath_image__touch">
              <img src="/images/ic-touch.svg" alt="ic-touch" />
            </span>
          </span>
        </button>

        {/* Red mask layer: MinhPham-style cursor reveal. Purely visual - non-interactive, non-selectable. */}
        <div
          className="layer layer__red js-masker"
          aria-hidden="true"
          inert={true}
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        >
          <div className="container">
            <div className="hero hero__red">
              <div className="hero_content">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-8 col-12 hero_content_inner">
                    <span
                      className="reveal-pseudo text-center h6 hero_content_inner_subtitle text-dark"
                      data-reveal="Abdul Sami"
                      aria-hidden
                    />
                    <h1
                      className="reveal-pseudo text-center text-dark js-anim--chars mb-0"
                      data-screen-offset="0.6"
                      data-reveal={'Hiding\nbad\nshit\nsince\n2021'}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="about about__red">
              <div className="row about_me">
                <div className="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                  <div className="about_content container_content">
                    <p
                      className="reveal-pseudo about_content_label body-text text-uppercase text-dark"
                      data-reveal="About me"
                      aria-hidden
                    />
                    <div className="about_content_desc h2">
                      <div
                        className="reveal-pseudo scroll-paragraph-mask text-dark"
                        data-reveal="A selectively skilled developer with strong focus on producing high quality & impactful digital products."
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about_ido op-0">
              <div className="heading-mask">
                <div className="heading-mask_el heading-mask_el__deep container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="UI/UX" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc text-dark" data-reveal="I design clean, functional interfaces that users actually enjoy using" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el heading-mask_el__masking container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="UI/UX" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc" data-reveal="I design clean, functional interfaces that users actually enjoy using" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el heading-mask_el__deep container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Full Stack" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc text-dark" data-reveal="I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows." aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el heading-mask_el__masking container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Full Stack" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc" data-reveal="I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows." aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el heading-mask_el__deep container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Flutter" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc text-dark" data-reveal="I craft cross-platform mobile experiences that work everywhere" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el heading-mask_el__masking container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Flutter" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc" data-reveal="I craft cross-platform mobile experiences that work everywhere" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el heading-mask_el__deep container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Prompt Eng." aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc text-dark" data-reveal="Database modeling, REST API structuring, auth systems & multi-tenant data isolation." aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el heading-mask_el__masking container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="Prompt Eng." aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc" data-reveal="Database modeling, REST API structuring, auth systems & multi-tenant data isolation." aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el heading-mask_el__deep container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="AI Tools" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc text-dark" data-reveal="I leverage AI tools to design, structure, and deliver digital products efficiently" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el heading-mask_el__masking container_content">
                  <div className="row align-items-center">
                    <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                      <div className="simple-masking overflow-hidden">
                        <h2 className="reveal-pseudo h1 mb-0 text-dark" data-reveal="AI Tools" aria-hidden />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12 text-dark d-none d-lg-block">
                      <p className="reveal-pseudo mb-0 desc" data-reveal="I leverage AI tools to design, structure, and deliver digital products efficiently" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work work__red">
              <div className="row work_experience">
                <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
                  <div className="work_content container_content">
                    <p
                      className="reveal-pseudo work_content_label body-text text-uppercase text-dark"
                      data-reveal="Experience"
                      aria-hidden
                    />
                    <div className="work_content_desc h2">
                      <div
                        className="reveal-pseudo scroll-paragraph-mask text-dark"
                        data-reveal="Frontend development, UI/UX design, and AI-assisted full-stack application development."
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work_history op-0">
              <div className="heading-mask heading-mask__now">
                <div className="heading-mask_el container_content heading-mask_el__deep">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="NOW" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="AI-Assisted Full Stack Developer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="Project Based" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el container_content heading-mask_el__masking">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="NOW" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="AI-Assisted Full Stack Developer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="Project Based" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el container_content heading-mask_el__deep">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2021" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Graphic Designer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="Freelance (Twitch Streamers)" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el container_content heading-mask_el__masking">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2021" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Graphic Designer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="Freelance (Twitch Streamers)" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el container_content heading-mask_el__deep">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2012" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Photoshop Doodler" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="DR Com Group" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el container_content heading-mask_el__masking">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2012" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Photoshop Doodler" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="DR Com Group" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-mask">
                <div className="heading-mask_el container_content heading-mask_el__deep">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2009" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Jurassic Designer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="DR Com Group" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-mask_el container_content heading-mask_el__masking">
                  <div className="row">
                    <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                      <div className="simple-masking">
                        <div className="simple-masking_el">
                          <span className="reveal-pseudo h3 mb-1 text-dark" data-reveal="2009" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9">
                      <div className="simple-masking_el">
                        <p className="reveal-pseudo h3 mb-1 text-dark" data-reveal="Jurassic Designer" aria-hidden />
                        <p className="reveal-pseudo mb-0 desc font-400 text-dark" data-reveal="DR Com Group" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LAYER__RED: Client section - black text reveal on cursor hover (same order as main layer) */}
            <div className="client client__red">
              <div className="client_list op-0 text-dark">
                {/* client_list_inner [RED] - mirror of each project (reveal-pseudo + data-reveal) */}
                <div className="client_list_inner">
                  {/* ——— PROJECT 1: SHOP-POS [START] ——— */}
                  <div className="heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="SHOP-POS" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Multi-tenant for coffee shop, cafe, retail & more built with AI-driven development. POS, inventory, staff shifts, reporting & role-based auth." aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="SHOP-POS" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-12 op-0 text-dark d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Multi-tenant for coffee shop, cafe, retail & more built with AI-driven development. POS, inventory, staff shifts, reporting & role-based auth." aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 1: SHOP-POS [END] ——— */}
                  {/* ——— PROJECT 2: Portfolio & UI [START] ——— */}
                  <div className="heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="Portfolio & UI" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Personal portfolio and UI/UX design projects. Clean, functional interfaces." aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="Portfolio & UI" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Personal portfolio and UI/UX design projects. Clean, functional interfaces." aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 2: Portfolio & UI [END] ——— */}
                  {/* ——— PROJECT 3: AI-BUDDY [START] ——— */}
                  <div className="heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="AI-Buddy" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="AI-powered content and image compressor free online tool for creators. www.aibuddy.design/image-compressor" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="AI-Buddy" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="AI-powered content and image compressor free online tool for creators. www.aibuddy.design/image-compressor" aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 3: AI-BUDDY [END] ——— */}
                  {/* ——— PROJECT 4: MODERN WEB APPS [START] ——— */}
                  <div className="heading-mask">
                    <div className="heading-mask_el heading-mask_el__deep container_content">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="MODERN WEB APPS" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 text-dark col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Custom full-stack web applications built with Next.js, React, and cloud infrastructure." aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="heading-mask_el heading-mask_el__masking">
                      <div className="row align-items-center">
                        <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12 d-lg-block d-none">
                          <div className="simple-masking overflow-hidden">
                            <h2 className="reveal-pseudo h1 mb-0 none-break" data-reveal="MODERN WEB APPS" aria-hidden />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-12 d-none d-lg-block">
                          <p className="reveal-pseudo mb-0 desc" data-reveal="Custom full-stack web applications built with Next.js, React, and cloud infrastructure." aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ——— PROJECT 4: MODERN WEB APPS [END] ——— */}
                  {/* To add new project: copy AI-BUDDY block above, paste here, update data-reveal values */}
                </div>
                {/* client_list_inner [RED] [END] */}
                <div className="row">
                  <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                    <div className="dots container_content">
                      <span /> <span /> <span /> <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="video video__red op-0 js-cursor-contract">
              <div className="videoPlayer op-0">
                <div className="videoPlayer_inner videoPlayer_inner__red js-videoPlayer_inner__red">
                  <video
                    id="videoPlayer_red"
                    playsInline
                    muted
                    loop
                    preload="none"
                    style={{
                      position: "absolute",
                      width: 1,
                      height: 1,
                      opacity: 0,
                      pointerEvents: "none",
                      visibility: "hidden",
                    }}
                    aria-hidden
                  />
                  <div
                    className="video-placeholder"
                    style={videoPlaceholderStyle}
                  >
                    <ShopPOSAnimation />
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonials testimonials__red js-testimonials__red op-0">
              <div className="row">
                <div className="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                  <div className="work-exp-list">
                    <div className="mb-4">
                      <p className="reveal-pseudo h4 mb-1 text-dark" data-reveal="AI-Assisted Full Stack Developer" aria-hidden />
                      <p className="reveal-pseudo desc mb-0 text-dark" data-reveal="Project Based — 2026" aria-hidden />
                      <p className="reveal-pseudo sub-content mt-1 text-dark" data-reveal="React, Next.js, PostgreSQL, Prisma. Rapid MVP delivery with AI-assisted workflows." aria-hidden />
                    </div>
                    <div className="mb-4">
                      <p className="reveal-pseudo h4 mb-1 text-dark" data-reveal="Graphic Designer" aria-hidden />
                      <p className="reveal-pseudo desc mb-0 text-dark" data-reveal="Freelance (Twitch Streamers) — 2021–2024" aria-hidden />
                      <p className="reveal-pseudo sub-content mt-1 text-dark" data-reveal="Visual design for streamers and content creators." aria-hidden />
                    </div>
                    <div>
                      <p className="reveal-pseudo desc mb-0 text-dark" data-reveal="References available upon request." aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center align-items-start">
                  <div className="work-exp-visual" style={workExpVisualStyle}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#888"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer: red layer lacks main layer's 3D earth height; pushes motto__red to align with motto */}
            <div className="motto__red-spacer" aria-hidden />
            <div className="motto motto__red">
              <div className="motto_content container_content">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-12 motto_content_inner">
                    <div>
                      <p className="text-center mb-0 h6 text-uppercase text-dark">
                        <span className="reveal-pseudo" data-reveal="MY MOTTO" aria-hidden />
                      </p>
                      <p className="text-center motto_content_heading motto-dark h1 mb-0">
                        <span className="reveal-pseudo d-block" data-reveal="NOT ALL" aria-hidden />
                        <span className="reveal-pseudo d-block" data-reveal="HONEST DESIGN" aria-hidden />
                        <span className="reveal-pseudo d-block" data-reveal="IS GOOD" aria-hidden />
                      </p>
                      <p className="desc text-center mb-0 text-dark">
                        <span className="reveal-pseudo" data-reveal="sam" aria-hidden />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact contact__red container_content op-0">
              <div className="row">
                <div className="col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12">
                  <ul className="ul__reset">
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="#" className="text-dark contact_link" target="_blank" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="Fake works" aria-hidden />
                      </a>
                    </li>
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="#" className="text-dark contact_link" target="_blank" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="Random tutorials" aria-hidden />
                      </a>
                    </li>
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="https://www.linkedin.com/in/abdul-sami-4960963b4/" className="text-dark contact_link" target="_blank" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="Serious me" aria-hidden />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-5 col-12">
                  <ul className="ul__reset">
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="https://www.instagram.com/svh29" className="text-dark contact_link" target="_blank" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="Not Tiktok" aria-hidden />
                      </a>
                    </li>
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="https://x.com/svhdavid" className="text-dark contact_link" target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="Tweets" aria-hidden />
                      </a>
                    </li>
                    <li className="heading-mask social-link js-cursor-contract heading-mask__now h3">
                      <a href="#" className="text-dark contact_link" target="_blank" tabIndex={-1} aria-hidden>
                        <span className="reveal-pseudo" data-reveal="The Jurassic Park" aria-hidden />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-12 contact_content">
                  <div className="row">
                    <div className="col-lg-12 col-sm-5 offset-lg-0 offset-sm-1 col-12">
                      <div className="heading-mask contact_info contact_info__red contact_info__top js-cursor-contract heading-mask__now">
                        <span className="reveal-pseudo h4 d-block text-dark" data-reveal="100% chance I read it" aria-hidden />{" "}
                        <a className="sub-content text-dark" href="mailto:sami.vh@yahoo.com" tabIndex={-1} aria-hidden>
                          <span className="reveal-pseudo" data-reveal="sami.vh@yahoo.com" aria-hidden />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-5 col-12">
                      <div className="heading-mask contact_info contact_info__red js-cursor-contract heading-mask__now">
                        <span className="reveal-pseudo h4 d-block text-dark" data-reveal="90% chance I don't pickup" aria-hidden />{" "}
                        <a className="sub-content text-dark" href="tel:+1-315-497-8688" tabIndex={-1} aria-hidden>
                          <span className="reveal-pseudo" data-reveal="+1-315-497-8688" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer id="js-footer" className="footer">
        <ul className="footer_socials ul__reset">
          <li className="social js-social">
            <a
              className="social_link social_link__dribbble"
              href="#"
              target="_blank"
              aria-label="Visit my Dribbble profile"
            >
              <img
                src="/images/ic-dribbble.svg"
                className="svg"
                alt="Dribbble icon"
              />
            </a>
          </li>
          <li className="social js-social">
            <a
              className="social_link social_link__instagram"
              href="https://www.instagram.com/svh29"
              target="_blank"
              aria-label="Visit my Instagram profile"
            >
              <img
                src="/images/ic-ig.svg"
                className="svg"
                alt="Instagram icon"
              />
            </a>
          </li>
          <li className="social js-social">
            <a
              className="social_link social_link__youtube"
              href="#"
              target="_blank"
              aria-label="Visit my YouTube channel"
            >
              <img
                src="/images/ic-ytb.svg"
                className="svg"
                alt="YouTube icon"
              />
            </a>
          </li>
          <li className="social js-social">
            <a
              className="social_link social_link__linkedin"
              href="https://www.linkedin.com/in/abdul-sami-4960963b4/"
              target="_blank"
              aria-label="Visit my LinkedIn profile"
            >
              <img
                src="/images/ic-in.svg"
                className="svg"
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>
      </footer>

      <SoundToggle />
      <audio loop className="js-web-sound" src="/media/audio-site.mp3" />
    </div>
  );
}
