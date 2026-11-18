export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Interactive & Motion' | 'Full-Stack & AI' | 'Design Systems';
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  video?: string;
  stats: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  skills: Array<{
    name: string;
    level: string;
    description: string;
  }>;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  honors: string[];
  courses: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  badge: string;
  description: string;
  metric?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Dev Vardhan',
    handle: 'Dev-VardhanX',
    title: 'Design Engineer & Full-Stack Architect',
    leadQuote: 'Software shouldn’t merely function—it should feel kinetic, deliberate, and remarkably human.',
    bio: [
      'I engineer digital experiences where typography carries emotion, motion conveys meaning, and the underlying code is built for zero latency. Over the past 4+ years, I have specialized in bridging the divide between high-fidelity Figma canvases and production codebases.',
      'Currently exploring spatial interfaces, WebGL shader systems, and intelligent multi-agent workspaces (like Mainframe’s A.R.I.A.) that transform static websites into dynamic conversational instruments.',
      'Holding a B.Tech in Computer Science & Engineering with honors in HCI & Systems Architecture. Constant student of typography, computational physics, and distributed systems.'
    ],
    avatarPeach: '/assets/images/avatar-peach.png',
    avatarMint: '/assets/images/avatar-mint.png',
    avatarThoughtful: '/assets/images/avatar-thoughtful.png',
    avatarCurves: '/assets/images/avatar-curves.png',
    status: 'Available for Design Engineering & Product Roles',
    location: 'India (Open to Global Remote & Hybrid)',
    email: 'dev0vardhan@gmail.com',
    secondaryEmail: 'hello@mainframe.co',
    github: 'https://github.com/Dev-VardhanX',
    linkedin: 'https://www.linkedin.com/in/dev-vardhan',
    stats: [
      { label: 'Years of Experience', value: '4+' },
      { label: 'Shipped Systems', value: '20+' },
      { label: 'Motion Target', value: '60fps' },
      { label: 'Layout Shift Tolerance', value: '0.0s' }
    ]
  },

  experiences: [
    {
      id: 'mainframe-studio',
      role: 'Lead Design Engineer & Frontend Architect',
      company: 'Mainframe Studio',
      location: 'Remote · Creative Agency',
      period: '2024 — Present',
      current: true,
      type: 'Full-time / Core Team',
      summary: 'Orchestrating bespoke interactive interfaces, headless design systems, and video-driven web experiences for design-led founders and high-profile clients.',
      achievements: [
        'Architected the A.R.I.A. frame-scrub engine delivering sub-10ms pointer-driven scrubbing for high-bitrate editorial video.',
        'Engineered modular component architecture adopted across 8+ studio client projects with 0 layout shift and 100/100 Lighthouse performance.',
        'Implemented generative AI agent interfaces integrating streaming responses, typewriter typography, and accessible action sheets.',
        'Reduced client bundle footprint by 42% through aggressive tree-shaking, lazy-loaded chunks, and native CSS variable tokens.'
      ],
      skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion', 'Video Scrub Engine', 'Gemini AI', 'Web Performance']
    },
    {
      id: 'hyperion-labs',
      role: 'Frontend Developer & Creative Technologist',
      company: 'Hyperion Labs',
      location: 'Hybrid · Product Studio',
      period: '2023 — 2024',
      type: 'Full-time',
      summary: 'Developed tactile web applications, interactive product launch portals, and real-time canvas tools for emerging technology startups.',
      achievements: [
        'Built full-stack responsive web applications handling over 100K+ monthly active visitors with sub-second time-to-interactive.',
        'Partnered with 3D and brand artists to translate complex Spline scenes and Three.js physics into performant React components.',
        'Standardized automated accessibility (WCAG AAA) testing pipelines across all customer-facing touchpoints.',
        'Spearheaded transition from legacy CSS-in-JS to utility-first modern token pipeline, boosting developer velocity by 35%.'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Three.js / WebGL', 'Tailwind CSS', 'Figma Tokens', 'GraphQL']
    },
    {
      id: 'apex-systems',
      role: 'Software Engineering Intern & UI Contributor',
      company: 'Apex Systems',
      location: 'Bengaluru, India',
      period: '2022 — 2023',
      type: 'Engineering Internship',
      summary: 'Engineered high-density data analytics tables, telemetry charts, and real-time dashboard widgets for enterprise clients.',
      achievements: [
        'Engineered responsive charting widgets using React and D3.js, rendering 50,000+ data points smoothly via virtualized viewports.',
        'Implemented end-to-end integration test suites with Playwright and Jest, increasing test coverage from 64% to 89%.',
        'Contributed to core design system documentation, authoring component props guidelines and interactive Storybook demos.'
      ],
      skills: ['React', 'TypeScript', 'D3.js', 'Jest', 'Playwright', 'REST APIs', 'Git CI/CD']
    },
    {
      id: 'tech-council',
      role: 'Lead Technical Coordinator & Student Head',
      company: 'University Tech & Innovation Council',
      location: 'Campus Council',
      period: '2022 — 2024',
      type: 'Leadership & Community',
      summary: 'Directed a cross-functional team of 15 student engineers and visual designers organizing regional hackathons, open-source cohorts, and tech symposia.',
      achievements: [
        'Organized the flagship annual 36-hour hackathon hosting 2,500+ applicants and 500+ offline participants.',
        'Mentored 150+ novice developers in Git workflows, React fundamentals, and responsive web design practices.',
        'Built and maintained the council’s registration and judging web platform with real-time scoring telemetry.'
      ],
      skills: ['Technical Leadership', 'Team Mentorship', 'Event Architecture', 'Public Speaking', 'Open Source']
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'aria-scrub-engine',
      title: 'A.R.I.A. Adaptive Agent & Frame-Scrub Engine',
      category: 'Interactive & Motion',
      tagline: 'Zero-latency mouse-scrubbed editorial video and conversational agent interface.',
      description: 'A flagship editorial web interface featuring pointer-driven video scrubbing at 60fps, dynamic typewriter typography synthesis, and multi-topic drawer navigation. Engineered with zero layout shift and instantaneous interactive feedback.',
      highlights: [
        'Zero-latency horizontal pointer scrubbing across high-bitrate video stream',
        'Adaptive response layer with dynamic typewriter pacing and custom cursor blinking',
        'Multi-topic accessible action sheets for studio inquiries, pitch intake, and work applications',
        'Pure client-side optimization with sub-20ms frame response'
      ],
      technologies: ['React 19', 'Vite', 'Motion', 'Tailwind CSS v4', 'Web Video API', 'TypeScript'],
      image: '/assets/images/project-preview-1.png',
      stats: '60fps Scrub · 0ms Shift',
      githubUrl: 'https://github.com/Dev-VardhanX/Portfolio',
      liveUrl: 'http://localhost:3000',
      featured: true
    },
    {
      id: 'chronos-design-system',
      title: 'Chronos Spatial Design System',
      category: 'Design Systems',
      tagline: 'Multi-brand tokenized component architecture with fluid typography.',
      description: 'An enterprise design token architecture built with fluid typographic scaling, optical grid alignment, dark/light ambient contrast validation, and zero-runtime stylesheet generation.',
      highlights: [
        '45+ accessible headless primitives built on Radix and Tailwind',
        'Fluid clamp() typographic math ensuring harmonious scale from mobile to 4K displays',
        'Automated contrast linting satisfying WCAG 2.1 AAA color standards',
        'Instant multi-theme switching with pure CSS custom properties'
      ],
      technologies: ['TypeScript', 'Tailwind CSS', 'Figma API', 'Storybook', 'WCAG AAA'],
      image: '/assets/images/project-preview-2.png',
      stats: '45+ Primitives · WCAG AAA',
      githubUrl: 'https://github.com/Dev-VardhanX',
      liveUrl: 'https://github.com/Dev-VardhanX',
      featured: true
    },
    {
      id: 'nexus-ai-studio',
      title: 'Nexus AI Canvas & Multimodal Studio',
      category: 'Full-Stack & AI',
      tagline: 'Infinite node-based generative workspace powered by Gemini 2.5 Flash.',
      description: 'A visual programming canvas where creators construct interactive AI reasoning pipelines, extract multimodal insights from video/audio/images, and export structured production assets.',
      highlights: [
        'Interactive infinite 2D canvas with pan, zoom, and spatial node graphs',
        'Real-time streaming LLM inference via Google Gemini SDK',
        'Multimodal file processing pipeline for video summaries, OCR, and sound design',
        'Instant JSON schema export for automated agent workflows'
      ],
      technologies: ['React 19', 'Gemini API', 'TypeScript', 'Canvas API', 'Tailwind CSS', 'Node.js'],
      image: '/assets/images/avatar-curves.png',
      stats: 'Streaming AI · Multimodal',
      githubUrl: 'https://github.com/Dev-VardhanX',
      liveUrl: 'https://github.com/Dev-VardhanX',
      featured: true
    },
    {
      id: 'veloce-asset-engine',
      title: 'Veloce High-Bitrate Asset Streamer',
      category: 'Interactive & Motion',
      tagline: 'Client-side media buffering engine for zero-stutter creative portfolios.',
      description: 'A client-side media pipeline engineered for creative studios, eliminating playback stutter during rapid scrubs through worker-based pre-buffering and intelligent segment indexing.',
      highlights: [
        'Pre-decodes keyframes via Web Workers without locking the main UI thread',
        'Intelligent memory recycling keeping browser RAM under 80MB',
        'Graceful fallbacks for low-bandwidth mobile connections',
        'Works seamlessly with MP4, WebM, and ProRes proxy sequences'
      ],
      technologies: ['TypeScript', 'Web Workers', 'OffscreenCanvas', 'IndexedDB', 'Vite'],
      image: '/assets/images/avatar-mint.png',
      stats: '<80MB RAM · 60fps',
      githubUrl: 'https://github.com/Dev-VardhanX',
      liveUrl: 'https://github.com/Dev-VardhanX',
      featured: false
    },
    {
      id: 'kroma-shader-synthesizer',
      title: 'Kroma WebGL Shader Synthesizer',
      category: 'Interactive & Motion',
      tagline: 'Real-time GLSL canvas experiments and interactive generative posters.',
      description: 'An interactive shader sandbox exploring chromatic aberration, simplex noise displacement, and mouse-reactive fluid simulations directly inside the web browser.',
      highlights: [
        'Custom GLSL fragment shaders compiling directly in WebGL2 contexts',
        'Audio-reactive frequency visualization with Web Audio AnalyserNode',
        'Export high-resolution 4K raster and SVG vector snapshots',
        'Live parameter tweaking with real-time UI sliders'
      ],
      technologies: ['WebGL2', 'GLSL', 'Three.js', 'Web Audio API', 'React'],
      image: '/assets/images/avatar-thoughtful.png',
      stats: 'WebGL2 · 4K Export',
      githubUrl: 'https://github.com/Dev-VardhanX',
      liveUrl: 'https://github.com/Dev-VardhanX',
      featured: false
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      id: 'creative-frontend',
      title: 'Creative Frontend & UI/UX Engineering',
      tagline: 'Designing fluid, accessible, and kinetic interfaces that feel tactile and instantaneous.',
      iconName: 'Layout',
      skills: [
        { name: 'React 19 & Next.js', level: 'Advanced / Production', description: 'Server components, hooks architecture, concurrent rendering, and streaming UI.' },
        { name: 'TypeScript', level: 'Mastery', description: 'Strict type safety, generics, utility types, and AST transformations.' },
        { name: 'Tailwind CSS v4', level: 'Mastery', description: 'Modern CSS token workflows, arbitrary variants, and responsive layout mastery.' },
        { name: 'Motion (Framer)', level: 'Advanced', description: 'Spring physics, gesture choreography, layout animations, and exit transitions.' },
        { name: 'WebGL & Three.js', level: 'Intermediate', description: '3D meshes, custom GLSL fragment shaders, lighting, and camera positioning.' },
        { name: 'HTML5 & Canvas 2D', level: 'Mastery', description: 'Semantic markup, accessible tree hierarchies, high-DPI canvas rendering.' }
      ]
    },
    {
      id: 'backend-cloud',
      title: 'Backend, Systems & Cloud Architecture',
      tagline: 'Constructing robust, secure, and low-latency server foundations.',
      iconName: 'Server',
      skills: [
        { name: 'Node.js & Express', level: 'Advanced', description: 'Asynchronous event loops, RESTful microservices, streaming endpoints, and auth middleware.' },
        { name: 'PostgreSQL & SQL', level: 'Advanced', description: 'Relational schema normalization, complex joins, index optimization, and connection pooling.' },
        { name: 'Python', level: 'Proficient', description: 'Scripting, data transformation, automation pipelines, and machine learning SDKs.' },
        { name: 'REST & GraphQL', level: 'Advanced', description: 'Contract-first API design, query batching, mutations, and caching layers.' },
        { name: 'Docker & Git CI/CD', level: 'Proficient', description: 'Containerization, reproducible build environments, and automated GitHub Actions workflows.' },
        { name: 'Firebase & Supabase', level: 'Advanced', description: 'Real-time database sync, cloud storage, edge functions, and OAuth identity.' }
      ]
    },
    {
      id: 'ai-interfaces',
      title: 'AI Engineering & Intelligent Interfaces',
      tagline: 'Synthesizing LLM intelligence into conversational and contextual user experiences.',
      iconName: 'Cpu',
      skills: [
        { name: 'Google Gemini API', level: 'Advanced', description: 'Multimodal analysis (video, audio, text), structured JSON generation, and streaming.' },
        { name: 'Prompt Engineering', level: 'Advanced', description: 'Chain-of-thought system design, few-shot prompting, and guardrail enforcement.' },
        { name: 'Agentic Workflows', level: 'Proficient', description: 'Autonomous task orchestration, tool calling, and multi-turn conversational agents.' },
        { name: 'Vector Search & RAG', level: 'Proficient', description: 'Document chunking, cosine similarity retrieval, and context injection.' }
      ]
    },
    {
      id: 'design-craft',
      title: 'Design Craft, Motion & Tooling',
      tagline: 'Mastering visual hierarchies, typography, and developer workflows.',
      iconName: 'Palette',
      skills: [
        { name: 'Figma & Design Tokens', level: 'Mastery', description: 'Auto-layout, variables, interactive component prototyping, and token export.' },
        { name: '3D & Claymorphism (Blender)', level: 'Proficient', description: 'Lighting setups, smooth clay shaders, ambient occlusion, and stylized rendering.' },
        { name: 'Typography & Editorial Grid', level: 'Mastery', description: 'Optical alignment, fluid clamp scales, baseline rhythms, and font pairing.' },
        { name: 'Vite & Modern Bundlers', level: 'Advanced', description: 'Hot module replacement, rollup plugins, code splitting, and build tuning.' }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      id: 'btech-cse',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Institute of Engineering & Technology',
      location: 'India',
      period: '2021 — 2025',
      grade: '8.8 / 10.0 CGPA (Top 5% of Department)',
      honors: [
        'Dean’s List for Academic Excellence (Consecutive Semesters)',
        'Honors Specialization in Human-Computer Interaction & Software Systems',
        'Lead Coordinator for University Tech & Innovation Council',
        'Department Representative for Industry Mentorship Summit'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Human-Computer Interaction (HCI)',
        'Operating Systems & Concurrency',
        'Database Management & SQL Systems',
        'Computer Networks & Protocols',
        'Software Engineering & Design Patterns',
        'Web Technologies & Distributed Systems',
        'Object-Oriented Architecture'
      ]
    },
    {
      id: 'senior-secondary',
      degree: 'Senior Secondary Education (Class XII)',
      field: 'Physics, Chemistry & Mathematics (PCM)',
      institution: 'Central Board of Secondary Education',
      location: 'India',
      period: '2019 — 2021',
      grade: 'Top Distinction (94.6%)',
      honors: [
        'School Subject Topper in Computer Science (Python & SQL)',
        'Winner of Regional Inter-School Mathematics & Logic Olympiad'
      ],
      courses: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
  ] as EducationItem[],

  achievements: [
    {
      id: 'hackathon-first',
      title: '1st Place Winner — National Web Innovation Hackathon',
      subtitle: 'Awarded by Industry Leaders',
      category: 'Competitive Hackathon',
      date: '2024',
      badge: '🏆 Champion',
      description: 'Conceived, designed, and coded an accessible tactile collaboration tool within 36 hours. Judged #1 out of 240+ competing engineering teams nationwide.',
      metric: '1st / 240+ Teams'
    },
    {
      id: 'open-source-impact',
      title: '1,200+ GitHub Stars Across Open Source Tools',
      subtitle: 'Developer Community Recognition',
      category: 'Open Source',
      date: '2023 — Present',
      badge: '⚡ Community',
      description: 'Published and maintained developer utilities, design token converters, and interactive motion components on GitHub used by hundreds of front-end developers.',
      metric: '1,200+ Stars'
    },
    {
      id: 'leadership-council',
      title: 'Directed Campus Tech Symposium with 2,500+ Attendees',
      subtitle: 'University Tech & Innovation Council',
      category: 'Leadership',
      date: '2023 — 2024',
      badge: '🌟 Leadership',
      description: 'Led a cross-functional team of 15 designers and engineers. Managed end-to-end logistics, corporate sponsors, workshop tracks, and hackathon judging pipelines.',
      metric: '2,500+ Attendees'
    },
    {
      id: 'fellowship',
      title: 'Selected Creative Engineering & Design Fellow',
      subtitle: 'Design Innovation Cohort',
      category: 'Fellowship',
      date: '2024',
      badge: '🎯 Top 2%',
      description: 'Selected from over 1,500 applicants to participate in an intensive 10-week fellowship focusing on high-craft front-end architecture, spatial design, and kinetic typography.',
      metric: 'Top 2% Acceptance'
    },
    {
      id: 'mentorship',
      title: 'Mentored 150+ Aspiring Engineers & Designers',
      subtitle: 'Peer Learning & Technical Workshops',
      category: 'Community Mentorship',
      date: '2023 — Present',
      badge: '🤝 Mentorship',
      description: 'Conducted live hands-on masterclasses covering modern React 19 architecture, CSS layout algorithms, and portfolio presentation, helping numerous peers land their first engineering internships.',
      metric: '150+ Mentees'
    },
    {
      id: 'writing',
      title: 'Published Deep-Dives on Interactive Frontend Systems',
      subtitle: 'Technical Articles & Case Studies',
      category: 'Publications',
      date: '2024 — Present',
      badge: '✍️ Author',
      description: 'Authored technical guides dissecting zero-latency video frame scrubbing, subgrid ergonomics, and LLM streaming state architectures with over 25,000+ reader impressions.',
      metric: '25K+ Reads'
    }
  ] as AchievementItem[]
};
