'use client'

const experiences = [
  {
    label: 'Full Stack',
    title: 'AI-Assisted Full Stack Developer',
    meta: 'Project Based — 2026',
    desc: 'React, Next.js, PostgreSQL, Prisma. Rapid MVP delivery with AI-assisted workflows.',
  },
  {
    label: 'UI/UX',
    title: 'UI/UX Design',
    meta: '2025',
    desc: 'Designing user-focused digital product experiences.',
  },
  {
    label: 'AI Tools',
    title: 'AI Tooling & Workflow Optimization',
    meta: '2024',
    desc: 'Leveraging AI tools to improve development speed and productivity.',
  },
  {
    label: 'Design',
    title: 'Graphic Designer',
    meta: 'Freelance (Twitch Streamers) — 2021–2024',
    desc: 'Visual design for streamers and content creators.',
  },
  {
    label: 'References',
    title: 'References',
    meta: '',
    desc: 'References available upon request.',
  },
]

export default function WorkExperienceCards() {
  return (
    <div className="work-exp-cards">
      <div className="work-exp-card">
        {experiences.map((exp, i) => (
          <div key={i} className="work-exp-card-segment">
            <span>
              <span className="work-exp-card-label">{exp.label}</span>
              <span className="work-exp-card-detail">
                <strong>{exp.title}</strong>
                {exp.meta && <><br /><small>{exp.meta}</small></>}
                {exp.desc && <><br /><span className="work-exp-card-desc">{exp.desc}</span></>}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
