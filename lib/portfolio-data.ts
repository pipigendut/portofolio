export const personalInfo = {
  name: "Akbar Maulana",
  title: "Fullstack Developer",
  location: "Bekasi, Indonesia",
  email: "akbar.maulana090895@gmail.com",
  phone: "0813 8670 1218",
  github: "pipigendut",
  linkedin: "akabarem",
  website: "pipigendut.space",
  summary: "Just a developer who likes to learn new things.",
  about: "Fullstack Developer with 7+ years of experience specializing in scalable web systems, backend services, and API-driven architectures. Experienced in frontend development, deployment pipelines, and maintaining high-traffic production systems. Comfortable working independently or as part of a collaborative engineering team."
};

export const skills = {
  backend: [
    "Ruby on Rails",
    "Golang Gin",
    "Java Spring Boot",
    "Python"
  ],
  frontend: [
    "ReactJS",
    "React Native",
    "VueJS",
    "Ionic",
    "Redux",
    "Zustand",
    "WebSocket"
  ],
  database: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  tools: [
    "Docker",
    "GCP",
    "ElasticSearch",
    "Git",
    "Nginx",
    "AWS EC2",
    "DBeaver"
  ],
  architecture: [
    "Microservices",
    "REST API",
    "Message Broker",
    "Background Jobs",
    "Pub/Sub"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Swipee - Dating App",
    featured: true,
    description: "A full-stack dating application with real-time chat and advanced matching features",
    longDescription: "Developed a comprehensive dating app from scratch with real-time communication capabilities, advanced user verification, and seamless user experience.",
    techStack: [
      "Golang Gin",
      "React Native",
      "PostgreSQL",
      "Gorilla WebSocket",
      "SocketIO",
      "AWS EC2",
      "Docker",
      "Redis",
      "FCM",
      "Oracle Storage",
      "FCM"
    ],
    features: [
      "Real-time chat & group chat using WebSocket (Gorilla & Socket.IO)",
      "Double Date matching feature",
      "Passport Mode for location-based connections",
      "Face Verification for user authenticity",
      "Single & Group Chat functionality",
      "Push notifications via Firebase Cloud Messaging",
      "Google Login integration",
      "Image upload & GIF messaging",
      "Background jobs using Asynq"
    ],
    deployment: "AWS EC2 with Docker",
    images: [
      "https://lh3.googleusercontent.com/d/1tTzA3iriBAg0RyNRLNi69D-OPJ-rG8tK",
      "https://lh3.googleusercontent.com/d/1m144PT_w2t6KwYzJdH-N8W-HCo76nX4p",
      "https://lh3.googleusercontent.com/d/1ZZKoqxUEHqvZHGIeE_2ZIX2HZXEYf9ej",
      "https://lh3.googleusercontent.com/d/1m1CUvB_1SLxWfZwjrU-Db5rbWeqZ8-4m"
    ],
    linkWeb: "https://api.swipee.pipigendut.space/swagger/index.html",
    linkApps: "https://drive.google.com/file/d/1BpWxB5CCrlKRWmmyWJ8SIXTlYNmTssPP/view?usp=sharing"
  },
  {
    id: 2,
    title: "JIFF - E-commerce Platform",
    featured: false,
    description: "Full-featured e-commerce platform for customers and delivery agents",
    longDescription: "Led the development of a scalable e-commerce platform built with Ruby on Rails, featuring real-time tracking and integrated payment processing.",
    techStack: [
      "Ruby on Rails",
      "Stimulus JS",
      "PostgreSQL",
      "Stripe",
      "WebSocket",
      "ActionCable",
      "Redis",
      "Shrine",
      "Devise",
      "Pundit",
      "Sidekiq",
      "Ransack",
      "Rubocop",
      "aasm",
      "Capistrano"
    ],
    features: [
      "Real-time delivery tracking with agent location monitoring",
      "Integration with Fonzel Smart Lockers",
      "In-app chat system for customer-agent communication",
      "Stripe payment gateway integration",
      "Secure transaction processing with webhook handling",
      "RESTful API architecture",
      "Design Architecture & database design"
    ],
    deployment: "CI/CD Github Action",
    images: [
      "https://lh3.googleusercontent.com/d/14r96_qDZwFhNkzxfiZWaInrwly6juZWp",
      "https://lh3.googleusercontent.com/d/1E0u9ysqzq0sZjV6oT9ldYVB_1C1-FiwK",
      "https://lh3.googleusercontent.com/d/17ZvFReM9411OD6kbL1Dnk5DB3mp0TCZb",
      "https://lh3.googleusercontent.com/d/1YQTY5qM0duudSqx-13IXHLGmRII5fygu"
    ],
    linkWeb: "https://www.jiff.com.my/index.html",
    experienceId: 1
  },
  {
    id: 3,
    title: "DR.KO",
    featured: false,
    description: "Developed and maintained a hospital management system using Ruby on Rails",
    longDescription: "Developed and maintained a hospital management system using Ruby on Rails.",
    techStack: [
      "Ruby on Rails",
      "Stimulus JS",
      "PostgreSQL",
      "Redis",
      "Shrine",
      "Devise",
      "Pundit",
      "Sidekiq",
      "Ransack",
      "Rubocop",
      "aasm",
      "Capistrano"
    ],
    features: [
      "Investigated and resolved duplicate payment issues affecting transaction accuracy",
      "Improved payment processing logic to prevent race conditions and duplicate records"
    ],
    deployment: "Capistrano",
    images: [
      "https://lh3.googleusercontent.com/d/13hT9ebDlygIrN_K84OKOffSlSLS_uaRq",
      "https://lh3.googleusercontent.com/d/1UL-NG1AZLW8l9JkZib8Zib0yJIH8FVrO"
    ],
    linkWeb: "https://app.koskinspecialist.com",
    experienceId: 1
  },
  {
    id: 4,
    title: "Ninjasuite - SaaS Platform",
    featured: false,
    description: "Full-featured SaaS platform for customers and delivery agents",
    longDescription: "Developed and maintained features for a SaaS platform, focusing on scalability and usability",
    techStack: [
      "Ruby on Rails",
      "Stimulus JS",
      "PostgreSQL",
      "Redis",
      "Shrine",
      "Devise",
      "Pundit",
      "Sidekiq",
      "Ransack",
      "Rubocop",
      "aasm",
      "Capistrano"
    ],
    features: [
      "Implemented a user scheduling system to automate task execution and improve workflow efficiency",
      "Designed and built backend logic to handle scheduling rules, timing, and job execution"
    ],
    deployment: "Capistrano",
    images: [
      "https://lh3.googleusercontent.com/d/1LzbNAI5bf40cR4LJrS9pa2ILSamC0FIF",
      "https://lh3.googleusercontent.com/d/1c12dqiHFixX5J8afrQj-I6NVTKdwuZyj",
      "https://lh3.googleusercontent.com/d/1SkmYUelS6AqpWXtzHPWO-BSSQiJNtf0a"
    ],
    linkWeb: "https://ninjasuites.ai/",
    experienceId: 1
  },
  {
    id: 5,
    title: "Isafe Sumatera - HSE Application",
    featured: false,
    description: "Health, Safety, and Environment management application",
    longDescription: "Mobile application for managing Health, Safety, and Environment compliance in industrial settings with offline capabilities.",
    techStack: [
      "Java Spring Boot",
      "Ionic React",
      "Firebase",
      "SQLite"
    ],
    features: [
      "Mobile dashboard for HSE monitoring",
      "Firebase Cloud Messaging for notifications",
      "Crashlytics integration for error tracking",
      "Offline mode with SQLite and background sync",
      "Built and Release on Play Store"
    ],
    deployment: "Google Play Store",
    images: [
      "https://lh3.googleusercontent.com/d/19PcMBwhKOmNgL58TfskgwBharOJDlWrv",
      "https://lh3.googleusercontent.com/d/16VtBmkaKTei2zP_FjICTnX6vWBMZ7bOF",
      "https://lh3.googleusercontent.com/d/1j_wUjHyCl7W4pikYxOK-TCfax9eKjRRb",
      "https://lh3.googleusercontent.com/d/1517KgJr2GNtA709WRh8wGScWa68YSmCb"
    ],
    linkApps: "https://play.google.com/store/apps/details?id=com.goldenenergymines.dots",
    linkWeb: "https://isafesumatera.ugems.id/"
  },
  {
    id: 6,
    title: "Fams Sumatera - Administration App",
    featured: false,
    description: "Enterprise administration and management system",
    longDescription: "Comprehensive administration system for managing enterprise workflows and operations.",
    techStack: [
      "Java Spring Boot",
      "VueJS"
    ],
    features: [
      "Backend services with Spring Boot",
      "Modern dashboard with VueJS",
      "Administration workflow management"
    ],
    deployment: "CI/CD Jenkins",
    images: [
      "https://lh3.googleusercontent.com/d/1ekWmYJ1f9qAaTVgZFkejOXujOKHbbFLi",
      "https://lh3.googleusercontent.com/d/1m3_iqokx2E7QHo6jaex8fxMSIEAJyH0b"
    ],
    linkWeb: "https://fams.borneo-indobara.com"
  },
  {
    id: 7,
    title: "Virtual Booth Application",
    featured: false,
    description: "Interactive virtual booth platform with chat capabilities",
    longDescription: "Virtual event platform enabling interactive booths and real-time communication for online exhibitions.",
    techStack: [
      "React JS",
      "Sendbird"
    ],
    features: [
      "Back office dashboard",
      "Real-time chat with Sendbird integration",
      "Virtual event management"
    ],
    deployment: "CI/CD Jenkins",
    images: [],
    linkWeb: ""
  },
  {
    id: 9,
    title: "Alodokter",
    featured: false,
    description: "Health, Safety, and Environment management application",
    longDescription: "Leading digital health ecosystem in Southeast Asia, providing accessible healthcare services through technology.",
    techStack: [
      "Ruby",
      "Python",
      "MongoDB",
      "Redis",
      "Sidekiq",
      "Firebase",
      "JWT",
      "OAuth 2.0",
      "RESTful API",
      "Microservices",
      "Test-Driven Development (TDD)",
      "CI/CD Pipelines"
    ],
    features: [
      "Provide ERD, flow diagram, technical and deployment documentation.",
      "Payment Service: Integrated third-party payment gateways such as Midtrans, OVO and Doku for payment processing.",
      "User and Common Service: Designed and implemented authentication and authorization service using JWT tokens and OAuth.",
      "EMR Service: Managed real-time electronic medical records using Pub/Sub for efficient data handling.",
      "KYC Service: Integrated third-party identity verification providers such as VIDA to streamline the KYC process.",
      "Insurance Service: Integrated third-party insurance provider such as Admedika and Fullerton for claim processing.",
      "Provide technical support and troubleshooting for production issues.",
      "Implement unit and integration testing using Rspec.",
      "Develop Chatbot using Probability Tree Diagram Method."
    ],
    deployment: "CI/CD GCP",
    images: [
      "https://lh3.googleusercontent.com/d/1GiyDhHR78V8iCunWtpWoIrglKJHs3eTv",
      "https://lh3.googleusercontent.com/d/1iQbYnjdrvt7PslWkZRUhPzlPiVYhEuxD",
      "https://lh3.googleusercontent.com/d/1YmSv26mfECdRUXNt5x3b9hxraprkAt8P"
    ],
    linkWeb: "https://www.alodokter.com/",
    experienceId: 2
  },
  {
    id: 9,
    title: "POS - Kimia Farma",
    featured: false,
    description: "Point of Sales for Kimia Farma",
    longDescription: "Developed and maintained a Point of Sale (POS) system used across outlets nationwide",
    techStack: [
      "Ruby",
      "ReactJS",
      "Python",
      "PostgreSQL",
      "Redis",
      "Sidekiq",
      "Firebase",
      "RESTful API"
    ],
    features: [
      "Implemented and improved stock opname (inventory reconciliation) processes to ensure stock accuracy.",
      "Built features for inter-warehouse transactions across provinces for large-scale inventory distribution.",
      "Fixed bugs and enhanced system stability across sales and inventory modules.",
      "Developed automated reports (daily, monthly, yearly) in PDF format.",
      "Optimized database queries and implemented caching strategies to improve system performance."
    ],
    deployment: "CI/CD Jenkins",
    images: [
      "https://lh3.googleusercontent.com/d/1IsKDVkqmEVWvqjGmgx0-WW51hR-R3uz0"
    ],
    linkWeb: "https://pos.kimiafarma.co.id/",
    experienceId: 3
  }
];

export const experience = [
  {
    id: 1,
    position: "Fullstack Developer",
    company: "PT. VirtualSpirit",
    location: "Remote Malaysia",
    period: "March 2025 – February 2026",
    current: false,
    achievements: [
      "Developed and maintained scalable Ruby on Rails applications for e-commerce and SaaS platforms",
      "Led the development of JIFF, a full-featured e-commerce platform with real-time delivery tracking and payment integration",
      "Architected backend systems and designed RESTful APIs for scalability and reliability",
      "Integrated Stripe payment gateway with webhook handling for transaction status updates",
      "Contributed to NinjaSuites.ai SaaS platform, focusing on performance optimization"
    ]
  },
  {
    id: 2,
    position: "Fullstack Developer",
    company: "PT. Alodokter Teknologi Solusi",
    location: "Indonesia",
    period: "March 2021 – March 2025",
    award: "EOM Award",
    current: false,
    achievements: [
      "Backend engineer for Alodokter (10M+ users) building microservices using Ruby and Python",
      "Developed and maintained services for Payments, EMR, KYC, Authentication, and insurance systems",
      "Integrated critical third-party services for payments, identity verification, and insurance claims",
      "Delivered high-traffic production systems with strong testing practices and documentation",
      "Collaborated across teams to ensure system reliability and scalability"
    ]
  },
  {
    id: 3,
    position: "Ruby on Rails Developer",
    company: "PT. Harmonix Teknologi Peentar",
    location: "Indonesia",
    period: "August 2019 – March 2021",
    current: false,
    achievements: [
      "Developed enterprise-scale systems for Kimia Farma, including POS platforms and microservices",
      "Built supporting web applications using React.js and Laravel Lumen",
      "Created COVID-19 pre-order system during pandemic",
      "Implemented real-time notification systems using WebSocket and Firebase"
    ]
  },
  {
    id: 4,
    position: "Web Developer",
    company: "PT. Dexcode Indotama",
    location: "Indonesia",
    period: "March 2018 – August 2019",
    current: false,
    achievements: [
      "Developed production web applications using Ruby on Rails, Golang, and React.js",
      "Built data scraping system using Python for structured data collection",
      "Implemented Two-Factor Authentication using AWS + Authy/Twilio",
      "Established testing practices with RSpec for unit tests and Puppeteer for UI tests"
    ]
  }
];

export const education = {
  degree: "Bachelor of Information System",
  university: "Universitas Gunadarma",
  period: "2013 - 2017",
  gpa: "3.29"
};

export const certificates = [
  "Basic User Linux",
  "Oracle: Extended SQL"
];
