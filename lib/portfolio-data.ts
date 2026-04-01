export const personalInfo = {
  name: "Akbar Maulana",
  title: "Fullstack Developer",
  location: "Bekasi, Indonesia",
  email: "akbar.maulana090895@gmail.com",
  phone: "0813 8670 1218",
  github: "akabarem",
  linkedin: "pipigendut",
  website: "pipigendut.space",
  summary: "Fullstack Developer with 7+ years of experience specializing in scalable web systems, backend services, and API-driven architectures. Experienced in frontend development, deployment pipelines, and maintaining high-traffic production systems. Comfortable working independently or as part of a collaborative engineering team."
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
    "AWS EC2"
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
      "WebSocket",
      "AWS EC2",
      "Docker",
      "Redis",
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
    deployment: "AWS EC2 with Docker"
  },
  {
    id: 2,
    title: "JIFF - E-commerce Platform",
    featured: true,
    description: "Full-featured e-commerce platform for customers and delivery agents",
    longDescription: "Led the development of a scalable e-commerce platform built with Ruby on Rails, featuring real-time tracking and integrated payment processing.",
    techStack: [
      "Ruby on Rails",
      "React",
      "PostgreSQL",
      "Stripe",
      "WebSocket",
      "Redis"
    ],
    features: [
      "Real-time delivery tracking with agent location monitoring",
      "In-app chat system for customer-agent communication",
      "Stripe payment gateway integration",
      "Secure transaction processing with webhook handling",
      "RESTful API architecture",
      "Scalable database design"
    ],
    deployment: "Production deployment for PT. VirtualSpirit"
  },
  {
    id: 3,
    title: "Isafe Sumatera - HSE Application",
    featured: false,
    description: "Health, Safety, and Environment management application",
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
      "Play Store deployment"
    ]
  },
  {
    id: 4,
    title: "Fams Sumatera - Administration App",
    featured: false,
    description: "Enterprise administration and management system",
    techStack: [
      "Java Spring Boot",
      "VueJS"
    ],
    features: [
      "Backend services with Spring Boot",
      "Modern dashboard with VueJS",
      "Administration workflow management"
    ]
  },
  {
    id: 5,
    title: "Virtual Booth Application",
    featured: false,
    description: "Interactive virtual booth platform with chat capabilities",
    techStack: [
      "React JS",
      "Sendbird"
    ],
    features: [
      "Back office dashboard",
      "Real-time chat with Sendbird integration",
      "Virtual event management"
    ]
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
