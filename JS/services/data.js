export const formations = [
  {
    id: 1,
    id_name: 'management',
    title: 'Management & Project Setup',
    objective: 'Learn to set up a project from scratch in a professional way.',
    icon: 'fas fa-sitemap',
    promo: 'Flash Sale: -100 DH',
    spots: '4/5 Spots Taken (Only 1 Left!)',
    criticalSpots: true,
    sessions: '2 Sessions (5–6 hours total)',
    curriculum: [
      { label: 'BRDs & SDLC Methodologies', sub: true },
      { label: 'System Design (UML with Enterprise Architect)', sub: true },
      { label: 'Professional Development (Git / GitHub)', sub: true },
      { label: 'Project Management with Jira (Scrum)', sub: true },
      { label: 'Remote (Discord / Google Meet)', sub: false, icon: 'fas fa-desktop' }
    ],
    oldPrice: 500,
    newPrice: 400,
    addons: [
      { label: 'Java Spring Boot Template + Source (+100 DH)', price: 100 },
      { label: 'Next.js Modular Template + Source (+100 DH)', price: 100 }
    ],
    whatsapp_link: 'https://wa.me/212771798765',
    share_id: 1
  },
  {
    id: 2,
    id_name: 'ai',
    title: 'AI Master && MD Reporting',
    objective: 'Master the Secrets of AI-Driven Technical Documentation & Documentation Speed.',
    icon: 'fas fa-brain',
    promo: 'Flash Sale: -100 DH',
    spots: '2/5 Enrollments',
    criticalSpots: false,
    sessions: '1 Session (2-3 Hours)',
    curriculum: [
      { label: 'The Secret of AI MD Reporting & Structure', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Advanced Prompting for Tech Documentation', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Master Agent IDEs (Antigravity & Cursor)', sub: false, icon: 'fas fa-check-circle' },
      { label: 'High-Speed Reporting Workflow', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Free AI Agents & Full Token Optimization', sub: false, icon: 'fas fa-check-circle' }
    ],
    oldPrice: 200,
    newPrice: 100,
    whatsapp_link: 'https://wa.me/212771798765',
    share_id: 2,
    ai_gradient: true
  },
  {
    id: 3,
    id_name: 'roadmap',
    title: 'Software Engineer Roadmap',
    objective: 'A complete end-to-end guide to navigating your career from junior to senior.',
    icon: 'fas fa-road',
    promo: 'Flash Sale: -100 DH',
    spots: '3/5 Enrollments',
    criticalSpots: false,
    sessions: '1 Session (2-2.5 Hours)',
    curriculum: [
      { label: 'Starting from Scratch: Choice of Stack', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Mid-Level Transition: Clean Code & Patterns', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Seniority Secrets: Architecture & Leadership', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Industry Demands vs. Academic Curriculum', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Long-term Learning & Market Awareness', sub: false, icon: 'fas fa-check-circle' }
    ],
    oldPrice: 250,
    newPrice: 150,
    whatsapp_link: 'https://wa.me/212771798765',
    share_id: 3
  },
  {
    id: 4,
    id_name: 'interview',
    title: 'Real Interview Simulation',
    objective: 'Test your engineering mindset in a professional tech evaluation.',
    icon: 'fas fa-user-astronaut',
    promo: 'Flash Sale: -100 DH',
    spots: '1/5 Enrollments',
    criticalSpots: false,
    sessions: '1 Session (2.5-3 Hours)',
    curriculum: [
      { label: 'Deep Architecture & System Design Testing', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Articulating Technical Decisions & Mindset', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Behavioral & Situational Pressure Test', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Technical Evaluation & Critical Feedback', sub: false, icon: 'fas fa-check-circle' },
      { label: 'Professional Expression & Confidence', sub: false, icon: 'fas fa-check-circle' }
    ],
    oldPrice: 250,
    newPrice: 150,
    whatsapp_link: 'https://wa.me/212771798765',
    share_id: 4
  }
];

export const shareData = {
  1: {
    en: "### 📌 Training 1: Project Management & Full Setup\n\nObjective: Learn how to set up a project from scratch in a professional and structured way.\n\n* Program: BRDs & SDLC, System Design (UML), Git/GitHub, Jira/Scrum\n* Format: 2 sessions (5-6h total)\n* Price: 500 DH",
    fr: "### 📌 Formation 1 : Management & Setup de Projet\n\nObjectif : Apprendre à mettre en place un projet de A à Z de manière professionnelle.\n\n* Programme: BRDs & SDLC, Conception système (UML), Git/GitHub, Jira/Scrum\n* Format : 2 sessions (5 à 6h total)\n* Prix : 500 DH",
    ma: "### 📌 التكوين 1: Management & Setup ديال البروجي\n\nالهدف : كتعلم كيفاش تsetupi بروجي من الزيرو بطريقة منظمة و professionnelle.\n\n* البرنامج: BRDs & SDLC, System Design (UML), Git/GitHub, Jira/Scrum\n* المدة : 2 حصص (5–6 سوايع مجموع)\n* الثمن : 500 DH"
  },
  2: {
    en: "### 🚀 Training 2: AI Master & MD Technical Reporting\n\nObjective: Learn the secret of AI MD Reporting and boost your documentation speed! 🤖\n\n* AI MD Reporting Secrets, Advanced Prompting, Agent IDEs, High-Speed Reporting Workflow\n* Price: 100 DH (Promo)",
    fr: "### 🚀 Formation 2 : AI Master & MD Reporting Technique\n\nObjectif : Maîtrisez le secret du reporting AI Markdown et boostez votre productivité ! 🤖\n\n* Secrets du reporting AI MD, Prompting avancé, Agent IDEs, Workflow de reporting rapide\n* Prix : 100 DH (Promo)",
    ma: "### 🚀 التكوين 2: AI Master & MD Reporting Technique\n\nالهدف : كتعلم الـ secret ديال AI MD Reporting وكتولي توجد الـ reports ديالك بسرعة خيالية ! 🤖\n\n* AI MD Reporting Secrets, Advanced Prompting, Agent IDEs, High-Speed Workflow\n* الثمن : 100 DH (تخفيض)"
  },
  3: {
    en: "### 🚀 Training 3: Full Software Engineer Roadmap\n\nObjective: A complete end-to-end guide to navigating your career from junior to senior.\n\n* Fundamentals, Choice of Stack, Clean Code, Seniority Secrets, Market Awareness\n* Price: 250 DH",
    fr: "### 🚀 Formation 3 : Roadmap Ingénieur Web de A à Z\n\nObjectif : Un guide complet pour naviguer dans votre carrière de junior à senior.\n\n* Fondamentaux, Choix du Stack, Clean Code, Patterns, Seniority Secrets\n* Prix : 250 DH",
    ma: "### 🚀 التكوين 3: Full Software Engineer Roadmap\n\nالهدف : دليل كامل باش تطور الـ carrière ديالك من junior لـ senior.\n\n* Fundamentals, Choice of Stack, Clean Code, Patterns, Seniority Secrets\n* الثمن : 250 DH"
  },
  4: {
    en: "### 🚀 Training 4: Real Interview Simulation\n\nObjective: Test your engineering mindset in a professional environment with feedback.\n\n* Architecture testing, System Design, Behavioral test, Real-time evaluation\n* Price: 250 DH",
    fr: "### 🚀 Formation 4 : Simulation d'entretien réelle\n\nObjectif : Testez votre état d'esprit d'ingénieur dans un environnement pro avec feedback.\n\n* Architecture, System Design, Test comportemental, Évaluation en temps réel\n* Prix : 250 DH",
    ma: "### 🚀 التكوين 4: Interview Simulation (بصح)\n\nالهدف : تيستي l'mindset ديالك كمهندس فـ environnement pro مع feedback.\n\n* Architecture, System Design, Behavioral test, Real-time evaluation\n* الثمن : 250 DH"
  }
};

export const testimonials = [];
