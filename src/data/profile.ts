// All content on the site is sourced from this file. Replace the placeholder
// values below with your own — nothing else in src/ needs to change.

export interface ResearchTheme {
  title: string
  description: string
}

export interface Publication {
  year: number
  title: string
  authors: string
  venue: string
  type: 'Journal' | 'Conference' | 'Preprint' | 'Book Chapter'
  links?: { label: string; href: string }[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  detail?: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface Award {
  title: string
  issuer: string
  year: number
  description?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'mail' | 'github' | 'linkedin' | 'scholar' | 'x'
}

export interface Person {
  name: string
  role: string
  photo?: string
}

export interface GalleryItem {
  src: string
  caption: string
}

export const profile = {
  name: 'Your Name',
  role: 'Ph.D. Researcher',
  field: 'Climate & Atmospheric Sciences',
  affiliation: 'Indian Institute of Technology Delhi',
  location: 'New Delhi, India',

  tagline:
    'Studying how the Earth system behaves under change — from process-level dynamics to models that inform decisions.',

  bio: [
    'Add two or three sentences here about your background: what you work on, the questions that motivate you, and where you sit in your program (e.g. year, advisor, group).',
    'Add a second paragraph on prior experience, methods you use (modeling, remote sensing, ML, fieldwork), or what drew you to this field.',
  ],

  email: 'you@example.com',
  cvHref: '/cv.pdf',

  socials: [
    { label: 'Email', href: 'mailto:you@example.com', icon: 'mail' },
    { label: 'GitHub', href: 'https://github.com/yourhandle', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: 'linkedin' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: 'scholar' },
  ] satisfies SocialLink[],

  researchThemes: [
    {
      title: 'Research Theme One',
      description:
        'One or two lines describing a focus area — e.g. a physical process, a modeling problem, or a class of methods you apply to it.',
    },
    {
      title: 'Research Theme Two',
      description:
        'Another focus area. Keep these tight — a title plus a single explanatory sentence reads best in the grid.',
    },
    {
      title: 'Research Theme Three',
      description:
        'A third focus area, or remove this card if you only have two themes to show right now.',
    },
  ] satisfies ResearchTheme[],

  publications: [
    {
      year: 2026,
      title: 'Title of your most recent paper or preprint',
      authors: 'Your Name, Coauthor A, Coauthor B',
      venue: 'Journal or Conference Name',
      type: 'Journal',
      links: [
        { label: 'PDF', href: '#' },
        { label: 'DOI', href: '#' },
      ],
    },
    {
      year: 2025,
      title: 'Title of an earlier paper',
      authors: 'Your Name, Coauthor A',
      venue: 'Journal or Conference Name',
      type: 'Conference',
      links: [{ label: 'PDF', href: '#' }],
    },
  ] satisfies Publication[],

  projects: [
    {
      title: 'Project or Tool Name',
      description:
        'One or two sentences on what this project does and why it matters — a dataset, model, pipeline, or piece of software.',
      tags: ['Python', 'Data'],
      links: [{ label: 'GitHub', href: '#' }],
    },
    {
      title: 'Second Project Name',
      description: 'Short description of a second project, notebook, or dataset you want to highlight.',
      tags: ['Analysis'],
      links: [{ label: 'GitHub', href: '#' }],
    },
  ] satisfies Project[],

  education: [
    {
      degree: 'Ph.D., Your Department',
      institution: 'Indian Institute of Technology Delhi',
      period: '2023 — Present',
      detail: 'Advisor name, group or centre name',
    },
    {
      degree: 'M.Tech / B.Tech, Your Department',
      institution: 'Your Institution',
      period: '2019 — 2023',
    },
  ] satisfies EducationItem[],

  stats: [
    { label: 'Publications', value: 6 },
    { label: 'Awards', value: 3 },
    { label: 'Years of Research', value: 3 },
    { label: 'Citations', value: 40, suffix: '+' },
  ] satisfies Stat[],

  awards: [
    {
      title: 'Award or Fellowship Name',
      issuer: 'Awarding Body',
      year: 2026,
      description: 'One line on what this recognizes and why it mattered.',
    },
    {
      title: 'Second Award Name',
      issuer: 'Awarding Body',
      year: 2025,
    },
    {
      title: 'Third Award Name',
      issuer: 'Awarding Body',
      year: 2024,
    },
  ] satisfies Award[],

  team: {
    phdScholars: [
      { name: 'Scholar Name One', role: 'Ph.D. Scholar, 2023 — Present' },
      { name: 'Scholar Name Two', role: 'Ph.D. Scholar, 2024 — Present' },
    ],
    alumni: [
      { name: 'Alumnus Name One', role: 'Ph.D. 2025 · now at Institution or Company' },
      { name: 'Alumnus Name Two', role: 'M.Tech 2024 · now at Institution or Company' },
    ],
  } satisfies { phdScholars: Person[]; alumni: Person[] },

  gallery: [
    { src: '/gallery/photo-1.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-2.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-3.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-4.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-5.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-6.jpg', caption: 'Caption — event, location, and year.' },
  ] satisfies GalleryItem[],
}

export type Profile = typeof profile
