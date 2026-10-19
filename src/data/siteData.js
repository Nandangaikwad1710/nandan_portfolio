export const timelineData = [
  {
    year: '2022',
    badge: 'SSC — CBSE',
    badgeBg: '#B7FF93',
    text: 'Completed Secondary School Certificate (CBSE) at Vidya Pratishthan English School, building a rigorous foundation in mathematics, analytical sciences, and foundational computing.',
    image: '/images/timeline-2022-foundations.jpg'
  },
  {
    year: '2023',
    badge: 'HSC — BOARD',
    badgeBg: '#FF8F64',
    text: 'Graduated Higher Secondary Certificate from Ajitdada English Medium School, focusing on advanced science, mathematics, and structured problem-solving methodologies.',
    image: '/images/timeline-2023-algorithms.jpg'
  },
  {
    year: '2024',
    badge: 'B.TECH CSE',
    badgeBg: '#DCA8FF',
    text: 'Commenced B.Tech in Computer Science & Engineering at D Y Patil Agricultural and Technical University (2024–2028), maintaining an 8.4/10 CGPA with coursework in OOP, DSA, and DBMS.',
    image: '/images/timeline-2024-btech-cse.jpg'
  },
  {
    year: '2025',
    badge: 'FLYFOUR INFOTECH',
    badgeBg: '#F8A7FF',
    text: 'Co-Founded FlyFour Infotech, developing tailored business software, web billing solutions, and client tools, contributing to solutions delivered to over 400 customers.',
    image: '/images/timeline-2025-flyfour.jpg'
  },
  {
    year: '2026',
    badge: 'CYBER LEADERSHIP',
    badgeBg: '#FFD37A',
    text: 'Appointed Activity Director for Cyber Shiksha for Cyber Suraksha under Quick Heal Foundation, coordinating a high-impact team of 19 Cyber Warriors across digital safety drives.',
    image: '/images/timeline-2026-cyber-leadership.jpg'
  },
  {
    year: '2027',
    badge: 'NEXT DESTINATION',
    badgeBg: '#FFA5A6',
    text: 'Preparing to pursue a Master’s degree in Germany with an ambitious focus on Artificial Intelligence, Cloud Computing, Distributed Systems, and Automotive Software.',
    image: '/images/timeline-2027-germany-automotive.jpg'
  }
];

export const processSteps = [
  {
    number: 'Step 01',
    title: 'REQUIREMENT ANALYSIS',
    info: 'Interrogating real-world problems, understanding client business logic, and architecting structured functional specifications.'
  },
  {
    number: 'Step 02',
    title: 'SYSTEM ARCHITECTURE',
    info: 'Designing resilient database schemas, clean RESTful API contracts, and modular frontend architectures built to scale.'
  },
  {
    number: 'Step 03',
    title: 'FULL-STACK DEVELOPMENT',
    info: 'Writing clean, testable, and efficient code across backend services and responsive interactive user interfaces.'
  },
  {
    number: 'Step 04',
    title: 'DEPLOY & MAINTAIN',
    info: 'Deploying reliable production releases with cloud integration, continuous performance optimization, and diligent technical support.'
  }
];

export const projectsData = [
  {
    id: 'f1-live-telemetry',
    slug: 'f1-live-telemetry-platform',
    title: 'F1 Live Telemetry Platform',
    category: 'MOTORSPORT TECH',
    categorySecondary: 'SOFTWARE ENGINEERING',
    tags: ['Motorsport Technology', 'Software Engineering', 'Telemetry', 'JavaScript', 'Real-time UI'],
    description: 'An interactive motorsport telemetry visualization platform designed to analyze simulated vehicle parameters and present performance data through an immersive dashboard.',
    cardBg: '#ab9bff',
    visualBg: '#8673ee',
    image: '/images/project-f1-telemetry.jpg',
    gallery: [
      '/images/project-f1-telemetry.jpg',
      '/images/timeline-2027-germany-automotive.jpg',
      '/images/nandan-hero-visual.jpg'
    ],
    client: 'Motorsport Software Lab',
    country: 'Maharashtra, India',
    expertise: 'Telemetry Visualization, Reactive State Management',
    duration: '2025',
    year: '2025',
    url: 'https://github.com/Nandangaikwad1710',
    overview: 'An interactive motorsport telemetry visualization platform designed to analyze simulated vehicle parameters and present performance data through an immersive dashboard. Inspired by professional Formula 1 pit-wall telemetry systems, the platform monitors engine dynamics and lap metrics.',
    challenge: 'Rendering high-frequency live vehicle telemetry metrics—including engine RPM sweeps, instantaneous gear shifts, and thermal metrics—smoothly without browser frame drops.',
    solution: 'Constructed an ultra-modular frontend architecture with optimized local state management, custom SVG gauge visualizations, and responsive telemetry streams.',
    results: 'Consistent 60fps render loops during active data streaming, instantaneous gear-shift detection, and a racing-inspired user interface designed for deep analytical immersion.',
    deliverables: ['Engine RPM Visualization', 'Gear-Shift Information Matrix', 'Performance Metrics Hub', 'Telemetry Data Visualizer', 'Modular Component Architecture']
  },
  {
    id: 'shadow-ai-agent',
    slug: 'shadow-ai-agent',
    title: 'Shadow AI Agent',
    category: 'AI & AUTOMATION',
    categorySecondary: 'WORKFLOW AGENTS',
    tags: ['AI / Automation', 'Google AI Studio', 'LLM APIs', 'JavaScript'],
    description: 'An autonomous workflow agent integrating Large Language Model APIs to experiment with AI-driven task execution and intelligent workflow automation.',
    cardBg: '#ffa5a6',
    visualBg: '#ff767a',
    image: '/images/project-shadow-ai.jpg',
    gallery: [
      '/images/project-shadow-ai.jpg',
      '/images/nandan-hero-visual.jpg',
      '/images/timeline-2023-algorithms.jpg'
    ],
    client: 'AI Systems Engineering',
    country: 'Open Source',
    expertise: 'Google AI Studio, LLM APIs, Automation Pipelines',
    duration: '2025',
    year: '2025',
    url: 'https://github.com/Nandangaikwad1710/shadow-ai-agent',
    overview: 'Shadow AI Agent is an autonomous workflow system that integrates modern Large Language Model APIs to explore multi-step task execution, tool chaining, and automated decision making.',
    challenge: 'Managing non-deterministic model outputs, guaranteeing strict payload schema validation, and orchestrating chained tool invocations reliably.',
    solution: 'Designed an agent loop leveraging Google AI Studio APIs, structured system prompting, and robust JavaScript runtime wrappers for safe task execution.',
    results: 'Reliable autonomous step-by-step task completion, zero runaway loops, and structured JSON telemetry for every agent decision.',
    deliverables: ['Autonomous Workflow Engine', 'Google AI Studio Integration', 'LLM API Pipeline', 'Task Execution Telemetry', 'Interactive CLI & Web Dashboard']
  },
  {
    id: 'krishiai-agri-ai',
    slug: 'krishiai-agri-ai-platform',
    title: 'KrishiAI / Agri AI Platform',
    category: 'ARTIFICIAL INTELLIGENCE',
    categorySecondary: 'AGRITECH',
    tags: ['Artificial Intelligence', 'Agritech', 'Machine Learning', 'JavaScript'],
    description: 'AI-powered agricultural platforms designed to assist farmers with localized crop-selection, environmental context analysis, and precision farming decisions.',
    cardBg: '#ff905f',
    visualBg: '#ff7d44',
    image: '/images/project-krishiai.jpg',
    gallery: [
      '/images/project-krishiai.jpg',
      '/images/timeline-2024-btech-cse.jpg',
      '/images/project-portfolio-creative.jpg'
    ],
    client: 'Agritech Innovation Initiative',
    country: 'Maharashtra, India',
    expertise: 'AI Agricultural Planning, Machine Learning APIs, JavaScript',
    duration: '2025',
    year: '2025',
    url: 'https://github.com/Nandangaikwad1710/krishiai',
    overview: 'KrishiAI and the Agri AI platform provide intelligent farming assistance by correlating localized soil parameters, climate conditions, and environmental context with optimal crop suitability recommendations.',
    challenge: 'Translating complex agricultural agroclimatic data into an accessible, actionable web experience for farming stakeholders without requiring technical expertise.',
    solution: 'Implemented machine learning API integrations paired with localized agricultural parameters to deliver instant crop suitability guidance.',
    results: 'Accurate predictive crop suggestions across varied agroclimatic zones with rapid inference and clear environmental rationale.',
    deliverables: ['AI-Assisted Agricultural Planning', 'Crop Selection Heuristics', 'Localized Farming Parameters', 'Environmental Context Engine', 'Machine Learning API Pipeline']
  },
  {
    id: 'empay-smart-hrms',
    slug: 'empay-smart-human-resource-management',
    title: 'EmPay Smart Human Resource Management',
    category: 'FULL-STACK',
    categorySecondary: 'ENTERPRISE SOFTWARE',
    tags: ['Full-Stack', 'Enterprise Software', 'Node.js', 'Express.js', 'Databases', 'Git'],
    description: 'A full-stack HR management solution for organizing corporate scheduling, payroll configurations, role records, and workforce governance.',
    cardBg: '#b8c56f',
    visualBg: '#9fae4b',
    image: '/images/project-empay-hrm.jpg',
    gallery: [
      '/images/project-empay-hrm.jpg',
      '/images/timeline-2025-flyfour.jpg',
      '/images/author_1.jpg'
    ],
    client: 'Enterprise Workforce Solution',
    country: 'Open Source Collaborative',
    expertise: 'Backend Routing, Database Integration, Structural Validation',
    duration: '2025',
    year: '2025',
    url: 'https://github.com/omkarsp03/EmPay-Smart-Human-Resource-Management-System',
    overview: 'EmPay Smart HRMS is a robust full-stack solution built to streamline organizational HR operations, payroll formulas, attendance schedules, and employee records in a centralized, secure hub.',
    challenge: 'Designing scalable backend routing and data persistence to handle relational dependencies between employees, departments, and payroll rules.',
    solution: 'Contributed backend routing with Express.js, structured database schemas, data persistence verification, and collaborative Git workflow standards.',
    results: 'Streamlined HR administration, automated payroll calculation validation, and robust role-based access management.',
    deliverables: ['Node.js & Express.js REST APIs', 'Relational Database Integration', 'Structural Data Validation', 'Role & Record Management', 'Collaborative Git Architecture']
  },
  {
    id: 'patient-report-healthcare',
    slug: 'patient-report-healthcare-system',
    title: 'Patient Report Healthcare System',
    category: 'HEALTHCARE SOFTWARE',
    categorySecondary: 'DATABASE SYSTEMS',
    tags: ['Healthcare Software', 'Patient Records', 'Diagnostic Data', 'Query Retrieval'],
    description: 'A patient record management dashboard designed to organize electronic diagnostic logs, medical metadata, and query-based report retrieval.',
    cardBg: '#ff767a',
    visualBg: '#ff5b60',
    image: '/images/project-patient-healthcare.jpg',
    gallery: [
      '/images/project-patient-healthcare.jpg',
      '/images/timeline-2024-btech-cse.jpg',
      '/images/project-system-registration.jpg'
    ],
    client: 'Clinical Healthcare Project',
    country: 'Maharashtra, India',
    expertise: 'Structured Healthcare Data, Query-based Information Retrieval',
    duration: '2024',
    year: '2024',
    url: 'https://github.com/Nandangaikwad1710/Patient-report-healthcare',
    overview: 'A clinical record dashboard built to handle patient admission data, diagnostic results, and laboratory reports with high data integrity and swift search capability.',
    challenge: 'Structuring medical records so healthcare operators can search, retrieve, and update historical patient diagnostic logs instantly and error-free.',
    solution: 'Designed organized data schemas with rapid query filtering, medical record categorization, and clean tabular presentation.',
    results: 'Fast query retrieval across diagnostic datasets with structured persistence and patient report organization.',
    deliverables: ['Patient Record Storage System', 'Diagnostic Data Organization', 'Query-based Information Retrieval', 'Structured Healthcare Logs', 'Medical Metadata Schema']
  },
  {
    id: 'system-registration-portal',
    slug: 'system-registration-portal',
    title: 'System Registration Portal',
    category: 'WEB DEVELOPMENT',
    categorySecondary: 'WEB SECURITY',
    tags: ['Web Development', 'Security', 'Input Validation', 'Payload Sanitization'],
    description: 'A registration infrastructure project focused on secure input handling, string sanitization, form payload validation, and clean responsive UI.',
    cardBg: '#ffd37a',
    visualBg: '#ffbe3b',
    image: '/images/project-system-registration.jpg',
    gallery: [
      '/images/project-system-registration.jpg',
      '/images/timeline-2026-cyber-leadership.jpg',
      '/images/author_2.jpg'
    ],
    client: 'Web Infrastructure Security',
    country: 'Maharashtra, India',
    expertise: 'Input Validation, Form Sanitization, Responsive Frontend',
    duration: '2024',
    year: '2024',
    url: 'https://github.com/Nandangaikwad1710/registration-website',
    overview: 'A foundational registration portal designed with defensive coding standards to validate, sanitize, and verify incoming user credentials and profile submissions.',
    challenge: 'Eliminating malformed payloads, injection risks, and inconsistent state transitions during high-volume form submissions.',
    solution: 'Implemented client-side string sanitization, robust validation regex layers, and reactive error handling across responsive viewports.',
    results: 'Reliable validation pipeline preventing corrupted submissions, accompanied by smooth user guidance and zero form leakage.',
    deliverables: ['Input Validation Framework', 'String Sanitization Layer', 'Form Payload Validation Rules', 'Responsive Web Interface', 'Defensive Error Handling']
  },
  {
    id: 'personal-portfolio',
    slug: 'personal-portfolio-uiux',
    title: 'Creative Engineering Portfolio',
    category: 'UI/UX & WEB',
    categorySecondary: 'CREATIVE FRONTEND',
    tags: ['UI/UX', 'Web Development', 'Motion Design', 'GSAP', 'React'],
    description: 'A responsive personal portfolio experience focused on presenting engineering projects, system architectures, and software work through a modern web interface.',
    cardBg: '#b7ff93',
    visualBg: '#86d95e',
    image: '/images/project-portfolio-creative.jpg',
    gallery: [
      '/images/project-portfolio-creative.jpg',
      '/images/nandan-hero-visual.jpg',
      '/images/timeline-2024-btech-cse.jpg'
    ],
    client: 'Personal Developer Identity',
    country: 'Maharashtra, India',
    expertise: 'Creative Motion Engineering, Kinetic Scrolling, Design Preservation',
    duration: '2026',
    year: '2026',
    url: 'https://github.com/Nandangaikwad1710/portfolio1',
    overview: 'A high-craft developer portfolio combining GSAP 3D card flipping, Lenis smooth scrolling, and dynamic multi-page routing to showcase software and AI systems.',
    challenge: 'Preserving a sophisticated, award-winning studio animation system while transforming every piece of narrative into a tailored developer identity.',
    solution: 'Engineered clean data models, accessible component architecture, and responsive layouts that look and perform impeccably across all modern screens.',
    results: 'Smooth 60fps interaction performance, zero broken routes, and an authentic presentation of engineering capabilities.',
    deliverables: ['GSAP Motion Choreography', 'Responsive Multi-Page Routing', 'Tailored Portfolio Design System', 'Clean Full-Stack Integration']
  }
];

export const servicesData = [
  {
    id: 'programming-languages',
    slug: 'programming-languages',
    title: 'PROGRAMMING & CORE',
    headline: 'SYSTEMATIC COMPUTATIONAL LOGIC & HIGH-PERFORMANCE CODE',
    description: 'Mastering foundational computer science paradigms, object-oriented systems, data structures, and efficient algorithms across modern runtimes.',
    tags: ['C', 'C++', 'Java', 'JavaScript', 'Go', 'SQL'],
    video: '/videos/service_1.mp4',
    capabilities: [
      'Object-Oriented Programming (OOP in C++ & Java)',
      'Data Structures & Algorithms (DSA)',
      'Asynchronous Programming & Event Loops (JavaScript)',
      'Systems Programming & Memory Management (C/C++)',
      'Microservices & Concurrency Basics (Go)',
      'Relational Schema Design & Query Optimization (SQL)'
    ],
    process: [
      { step: '01', title: 'Algorithmic Design', desc: 'Analyzing problem constraints, time complexity (Big-O), and optimum data structure selection.' },
      { step: '02', title: 'Modular Implementation', desc: 'Writing modular, well-commented code adhering to OOP principles and solid design patterns.' },
      { step: '03', title: 'Edge Case Testing', desc: 'Validating boundary conditions, memory boundaries, and stress test scenarios.' },
      { step: '04', title: 'Refactoring & Profiling', desc: 'Optimizing execution speed, reducing overhead, and refining code readability.' }
    ],
    deliverables: ['Clean Algorithm Implementations', 'Object-Oriented Architecture', 'Optimized SQL Queries', 'Comprehensive Test Coverage'],
    faqs: [
      { q: 'Which programming languages do you use most frequently?', a: 'My core languages are JavaScript for full-stack web and AI integrations, Java and C++ for object-oriented software engineering and academic coursework, and SQL for databases.' },
      { q: 'How do you approach learning new languages?', a: 'By focusing on core computational principles: memory models, concurrency primitives, type systems, and standard library architectures.' }
    ]
  },
  {
    id: 'frontend-architecture',
    slug: 'frontend-architecture',
    title: 'FRONTEND ARCHITECTURE',
    headline: 'REACTIVE INTERFACES, KINETIC MOTION & INTUITIVE UX',
    description: 'Engineering responsive web applications and mobile clients that harmonize silky 60fps animations with resilient component architecture and accessibility.',
    tags: ['React', 'React Native', 'Angular', 'Tailwind CSS', 'GSAP Motion', 'HTML5 / CSS3'],
    video: '/videos/service_2.mp4',
    capabilities: [
      'Modular Component Design in React & Angular',
      'Cross-Platform Mobile Apps with React Native',
      'GSAP ScrollTrigger & Kinetic Micro-Interactions',
      'Utility-First & Vanilla CSS Design Systems',
      'Responsive Breakpoint Adaptation (Mobile, Tablet, Desktop)',
      'Core Web Vitals Optimization & Accessibility (a11y)'
    ],
    process: [
      { step: '01', title: 'Component Decomposition', desc: 'Breaking interface blueprints into reusable, atomic component hierarchies.' },
      { step: '02', title: 'State Flow Architecture', desc: 'Structuring reactive state pipelines, hooks, and responsive lifecycle handlers.' },
      { step: '03', title: 'Motion Choreography', desc: 'Tuning GSAP timelines, easing curves, and smooth scroll anchors for premium fluidity.' },
      { step: '04', title: 'Cross-Device Polish', desc: 'Rigorous viewport audits from 360px mobile to 4K ultra-wide monitors.' }
    ],
    deliverables: ['Production React / Angular Apps', 'Mobile-Responsive Interfaces', 'GSAP Motion Choreography', 'Lighthouse 95+ Audit Standards'],
    faqs: [
      { q: 'Can you build mobile applications as well as web?', a: 'Yes, I build mobile applications using React Native, utilizing the same robust component architecture as web systems.' },
      { q: 'How do you ensure smooth animations without lag?', a: 'By leveraging hardware-accelerated transforms (translate3d, scale, opacity) and avoiding layout thrashing with tools like GSAP.' }
    ]
  },
  {
    id: 'backend-databases',
    slug: 'backend-databases',
    title: 'BACKEND & DATABASES',
    headline: 'RESILIENT REST APIS, SECURE DATA PERSISTENCE & SERVICES',
    description: 'Architecting robust server-side systems, RESTful microservices, and database models designed for high concurrency, transactional security, and strict data validation.',
    tags: ['Node.js', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'MySQL'],
    video: '/videos/service_3.mp4',
    capabilities: [
      'RESTful API Routing & Middleware Architecture',
      'Express.js & Django Server-Side Engineering',
      'Relational Database Modeling (PostgreSQL, MySQL)',
      'Document Store Architecture (MongoDB)',
      'Input Sanitization, Validation & Web Security',
      'CRUD Lifecycle Persistence & Transaction Governance'
    ],
    process: [
      { step: '01', title: 'API Specification', desc: 'Defining clear RESTful endpoint contracts, request payloads, and status codes.' },
      { step: '02', title: 'Schema Normalization', desc: 'Designing optimized relational tables, foreign key constraints, and indexing.' },
      { step: '03', title: 'Business Logic & Security', desc: 'Implementing validation middleware, string sanitization, and error boundaries.' },
      { step: '04', title: 'Integration & Persistence', desc: 'Connecting endpoints to database pools and testing payload roundtrips.' }
    ],
    deliverables: ['Express / Django REST APIs', 'Normalized Database Schemas', 'Input Sanitization Middleware', 'End-to-End API Documentation'],
    faqs: [
      { q: 'Which databases do you specialize in?', a: 'I work with PostgreSQL and MySQL for structured relational schemas and ACID consistency, and MongoDB for flexible document storage.' },
      { q: 'How do you handle backend security and input validation?', a: 'Through defensive input sanitization, parameter validation, role-based authorization, and rigorous schema validation rules.' }
    ]
  },
  {
    id: 'cloud-tools-systems',
    slug: 'cloud-tools-systems',
    title: 'CLOUD, TOOLS & SYSTEMS',
    headline: 'CLOUD PLATFORMS, DEVOPS TOOLING & OPERATING SYSTEMS',
    description: 'Deploying scalable applications across cloud platforms while maintaining collaborative Git workflows, developer environments, and operating system mastery.',
    tags: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Vercel', 'Netlify', 'Git', 'Linux'],
    video: '/videos/service_4.mp4',
    capabilities: [
      'Cloud Deployments (AWS, Microsoft Azure, Google Cloud Platform)',
      'Edge CDN Deployments & Serverless Hosting (Vercel, Netlify)',
      'Collaborative Version Control (Git, GitHub, GitLab)',
      'Database Management Tooling (pgAdmin, MySQL Workbench)',
      'AI Prototyping Tools (Google AI Studio, LLM APIs)',
      'Multi-OS Development (Linux, Kali Linux, macOS, Windows, Android, iOS)'
    ],
    process: [
      { step: '01', title: 'Environment Configuration', desc: 'Setting up developer tooling, secure keys, and reproducible runtime environments.' },
      { step: '02', title: 'Version Control Strategy', desc: 'Branching models, atomic commits, pull requests, and collaborative code reviews.' },
      { step: '03', title: 'Cloud Deployment', desc: 'Deploying frontend and backend services to scalable cloud providers and edge networks.' },
      { step: '04', title: 'Monitoring & Maintenance', desc: 'Tracking runtime health, uptime metrics, and client operational feedback.' }
    ],
    deliverables: ['Production Cloud Deployments', 'Structured Git Repositories', 'Database Management Configurations', 'Multi-Platform Compatibility'],
    faqs: [
      { q: 'What cloud platforms are you experienced with?', a: 'I deploy across Vercel and Netlify for web applications, and am currently pursuing deep certifications across AWS, Azure, and Google Cloud Platform.' },
      { q: 'Which operating systems do you work in?', a: 'I am comfortable across Linux (including Kali Linux for security audits), macOS, and Windows environments.' }
    ]
  }
];

export const blogsData = [
  {
    id: 'engineering-motorsport-telemetry',
    slug: 'engineering-real-time-motorsport-telemetry-dashboards',
    title: 'Engineering Real-Time Motorsport Telemetry Dashboards',
    date: 'March 20, 2026',
    readTime: '5 min read',
    category: 'TECH & AI',
    author: {
      name: 'Nandan Gaikwad',
      role: 'Full-Stack Developer',
      avatar: '/images/author_1.jpg'
    },
    image: '/images/project-f1-telemetry.jpg',
    snippet: 'Exploring how reactive frontend architectures and modular state pipelines render high-frequency F1 vehicle telemetry without browser lag.',
    sections: [
      {
        heading: 'The Challenge of Live Telemetry',
        body: 'Formula 1 cars generate millions of data points every second. When translating simulated telemetry streams to a web dashboard, the primary hurdle is rendering engine RPM curves, tire temperatures, and gear-shift points without blocking the main browser thread.'
      },
      {
        heading: 'Modular Component Architecture',
        body: 'By decoupling state ingestion from canvas and SVG rendering pipelines, we guarantee silky 60fps refresh rates. Modular components allow telemetry gauges to update reactively without triggering whole-tree re-renders.'
      },
      {
        heading: 'Automotive Software Systems',
        body: 'Motorsport technology represents the pinnacle of real-time embedded systems. Building interactive dashboards is a stepping stone toward full-scale automotive software and intelligent mobility architectures.'
      }
    ],
    tags: ['Motorsport Technology', 'Telemetry', 'React', 'Frontend Engineering']
  },
  {
    id: 'autonomous-workflow-agents',
    slug: 'building-autonomous-workflow-agents-with-google-ai-studio',
    title: 'Building Autonomous Workflow Agents with Google AI Studio',
    date: 'February 14, 2026',
    readTime: '6 min read',
    category: 'TECH & AI',
    author: {
      name: 'Nandan Gaikwad',
      role: 'AI Builder',
      avatar: '/images/author_2.jpg'
    },
    image: '/images/project-shadow-ai.jpg',
    snippet: 'Architecting autonomous task execution pipelines using Large Language Model APIs, tool chaining, and structured JSON output validation.',
    sections: [
      {
        heading: 'Beyond Simple Chat Interfaces',
        body: 'The real power of Large Language Models emerges when they act as autonomous reasoning engines capable of decomposing high-level directives into concrete execution steps.'
      },
      {
        heading: 'Google AI Studio Integration',
        body: 'In developing the Shadow AI Agent, leveraging Google AI Studio APIs allowed rapid experimentation with structured schema outputs, deterministic function calling, and context memory.'
      },
      {
        heading: 'Safe Agent Execution Loops',
        body: 'Autonomous execution requires guardrails: token limits, execution sandboxes, and verification loops that ensure the agent operates reliably without unintended side effects.'
      }
    ],
    tags: ['AI Agents', 'Google AI Studio', 'Automation', 'JavaScript']
  },
  {
    id: 'scaling-client-software-flyfour',
    slug: 'architecting-business-software-solutions-for-400-customers',
    title: 'Architecting Business Software Solutions for 400+ Customers',
    date: 'January 18, 2026',
    readTime: '4 min read',
    category: 'INSPIRATION',
    author: {
      name: 'Nandan Gaikwad',
      role: 'Co-Founder, FlyFour Infotech',
      avatar: '/images/author_3.jpg'
    },
    image: '/images/timeline-2025-flyfour.jpg',
    snippet: 'Lessons learned co-founding FlyFour Infotech, translating client rules into resilient billing software, and delivering production systems.',
    sections: [
      {
        heading: 'Listening to Real Business Rules',
        body: 'Co-founding FlyFour Infotech taught me that software engineering is ultimately about solving tangible operational bottlenecks. Developing billing systems and hotel management tools starts with listening closely to real business workflows.'
      },
      {
        heading: 'Simplicity and Reliability in Production',
        body: 'When software impacts daily operations for 400+ customers, reliability is non-negotiable. Clean database design, transactional safety, and responsive UI ensure zero downtime and low support overhead.'
      },
      {
        heading: 'Iterative Engineering Delivery',
        body: 'Delivering tailored software across diverse client domains reinforced the importance of collaborative Git workflows, systematic deployment, and responsive customer feedback loops.'
      }
    ],
    tags: ['FlyFour Infotech', 'Full-Stack', 'Enterprise Software', 'Client Solutions']
  },
  {
    id: 'next-destination-germany-mobility',
    slug: 'the-road-ahead-automotive-software-and-german-engineering',
    title: 'The Road Ahead: Automotive Software, AI & Future in Germany',
    date: 'December 28, 2025',
    readTime: '5 min read',
    category: 'AWARDS',
    author: {
      name: 'Nandan Gaikwad',
      role: 'Undergraduate Engineer',
      avatar: '/images/author_4.jpg'
    },
    image: '/images/timeline-2027-germany-automotive.jpg',
    snippet: 'Why the convergence of automotive software, distributed computing, and artificial intelligence defines my academic trajectory and Germany aspirations.',
    sections: [
      {
        heading: 'Intelligent Mobility as a Frontier',
        body: 'Vehicles are evolving into distributed software computers on wheels. Modern mobility systems require deep integration between machine learning perception, safety-critical real-time OS, and cloud fleet infrastructure.'
      },
      {
        heading: 'Academic Vision in Germany',
        body: 'I am actively preparing to pursue my Master’s degree in Germany, immersing myself in German language studies and foundational systems engineering to contribute to European automotive software innovations.'
      },
      {
        heading: 'Bridging Hardware and Software',
        body: 'From telemetry dashboards to autonomous agent logic, my journey is driven by one vision: mastering software architectures that power intelligent mobility.'
      }
    ],
    tags: ['Automotive Software', 'Germany', 'Intelligent Mobility', 'Future Direction']
  }
];

export const teamMembers = [
  {
    name: 'NANDAN ANKUSH GAIKWAD',
    role: 'Co-Founder — FlyFour Infotech',
    image: '/images/author_1.jpg',
    bio: 'Co-founded an IT solutions company (2025–Present) delivering tailored business software, billing systems, and client solutions serving 400+ customers.'
  },
  {
    name: 'ACTIVITY DIRECTOR',
    role: 'Quick Heal Foundation (2026–2027)',
    image: '/images/author_2.jpg',
    bio: 'Planned cybersecurity strategies, structured educational activities, and coordinated a team of 19 Cyber Warriors under Cyber Shiksha for Cyber Suraksha.'
  },
  {
    name: 'CORE MEMBER',
    role: 'Code Wizards Coding Club (2025–2027)',
    image: '/images/author_3.jpg',
    bio: 'Organized 20+ technical events and coding workshops, supported local hackathons, and contributed to a community of ~200 student members.'
  },
  {
    name: 'UNDERGRADUATE ENGINEER',
    role: 'D Y Patil University (2024–2028)',
    image: '/images/author_4.jpg',
    bio: 'B.Tech in Computer Science & Engineering with 8.4/10 CGPA. Exploring AI, cloud computing, distributed systems, and automotive software.'
  }
];

export const awardsData = [
  { year: '2025', title: 'IT Specialist — JavaScript', org: 'Certiport / Pearson VUE', project: 'Certified Credential' },
  { year: '2025', title: 'IT Specialist — Java', org: 'Certiport / Pearson VUE', project: 'Certified Credential' },
  { year: '2024', title: 'OOP in C++ Certification', org: 'IBM', project: 'Systems Engineering' },
  { year: '2025', title: 'Smart India Hackathon', org: 'Ministry of Education, India', project: 'National Hackathon' },
  { year: '2026', title: 'AWS Cloud Certification Track', org: 'Amazon Web Services', project: 'Currently Pursuing' },
  { year: '2026', title: 'AI Specialization Track', org: 'Advanced Systems Lab', project: 'Currently Pursuing' }
];

export const testimonialsData = [
  {
    id: 'testimonial-1',
    stars: 5,
    quote: 'Nandan’s software delivery and web-based billing platform through FlyFour Infotech transformed our billing operations. His proactive technical support and clean architecture ensured zero downtime.',
    author: 'Commercial Software Partner',
    role: 'FlyFour Infotech Client Solution',
    avatar: '/images/author_1.jpg',
    isDark: false
  },
  {
    id: 'testimonial-2',
    stars: 5,
    quote: 'Collaborating with Nandan across national hackathons and technical projects is always seamless. His grasp of modular frontend architectures and real-time data visualizers is exceptional.',
    author: 'Hackathon Collaborator',
    role: 'Peer Developer & Tech Lead',
    avatar: '/images/author_2.jpg',
    isDark: true
  },
  {
    id: 'testimonial-3',
    stars: 5,
    quote: 'Under Nandan’s leadership as Activity Director, our 19-member Cyber Warriors team delivered educational cybersecurity drives with clear project milestones and disciplined coordination.',
    author: 'Cyber Warrior Team Coordinator',
    role: 'Quick Heal Foundation Initiative',
    avatar: '/images/author_3.jpg',
    isDark: false
  },
  {
    id: 'testimonial-4',
    stars: 5,
    quote: 'As a core member of Code Wizards Coding Club, Nandan helped organize 20+ technical workshops and hackathons, consistently fostering growth for over 200 student members.',
    author: 'Code Wizards Club Chapter',
    role: 'University Technical Community',
    avatar: '/images/author_4.jpg',
    isDark: true
  }
];

export const brandLogos = [
  '/brands/brand_1.svg',
  '/brands/brand_2.svg',
  '/brands/brand_3.svg',
  '/brands/brand_4.svg',
  '/brands/brand_5.svg',
  '/brands/brand_6.svg'
];

export const leaderBadges = [
  { src: '/leaders/leader_1.png', alt: 'React.js' },
  { src: '/leaders/leader_2.avif', alt: 'Node.js' },
  { src: '/leaders/leader_3.avif', alt: 'Python' },
  { src: '/leaders/leader_4.avif', alt: 'C++ Systems' },
  { src: '/leaders/leader_5.avif', alt: 'JavaScript' },
  { src: '/leaders/leader_6.avif', alt: 'PostgreSQL' },
  { src: '/leaders/leader_7.avif', alt: 'AWS Cloud' },
  { src: '/leaders/leader_8.avif', alt: 'Git & GitHub' },
  { src: '/leaders/leader_9.avif', alt: 'Quick Heal Cyber Defense' },
  { src: '/leaders/leader_10.avif', alt: 'FlyFour Infotech Software' }
];
