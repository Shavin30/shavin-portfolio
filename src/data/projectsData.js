import estateAgentCover from '../assets/projects/estate-agent/cover-photo.jpg'
import estateAgentGallery1 from '../assets/projects/estate-agent/Screenshot 2026-03-01 013107.png'
import estateAgentGallery2 from '../assets/projects/estate-agent/Screenshot 2026-03-01 013126.png'
import estateAgentGallery3 from '../assets/projects/estate-agent/Screenshot 2026-03-01 013144.png'
import estateAgentGallery4 from '../assets/projects/estate-agent/Screenshot 2026-03-01 013215.png'
import estateAgentGallery5 from '../assets/projects/estate-agent/Screenshot 2026-03-01 013235.png'
import trafficManagementCover from '../assets/projects/traffic-management-system/cover-photo.jpg'
import trafficManagementGallery1 from '../assets/projects/traffic-management-system/Screenshot 2026-03-01 013902.png'
import trafficManagementGallery2 from '../assets/projects/traffic-management-system/Screenshot 2026-03-01 013916.png'
import trafficManagementGallery3 from '../assets/projects/traffic-management-system/Screenshot 2026-03-01 013934.png'
import sdgZeroHungerCover from '../assets/projects/sdg-zero-hunger/cover-photo.webp'
import sdgZeroHungerGallery1 from '../assets/projects/sdg-zero-hunger/Screenshot (496).png'
import sdgZeroHungerGallery2 from '../assets/projects/sdg-zero-hunger/Screenshot (497).png'
import sdgZeroHungerGallery3 from '../assets/projects/sdg-zero-hunger/Screenshot (498).png'
import sdgZeroHungerGallery4 from '../assets/projects/sdg-zero-hunger/Screenshot (499).png'
import sdgZeroHungerGallery5 from '../assets/projects/sdg-zero-hunger/Screenshot (500).png'

export const projects = [
  {
    slug: 'kuddles',
    featuredRank: 1,
    status: 'ongoing',
    title: 'Kuddles',
    type: 'Mobile App',
    description:
      'A full-stack mobile platform connecting working parents with professional caregivers through real-time monitoring.',
    details:
      'Features real-time activity logs, routine tracking, and secure communication channels between parents and nannies.',
    longDescription:
      'Kuddles is designed to provide peace of mind to working parents by centralizing child care management. The application supports real-time updates on a child’s daily routines, well-being metrics, and milestones. Built with a focus on reliability and security, it ensures that sensitive data regarding child schedules and locations remains private and accessible only to authorized users.',
    stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    coverImage: 'https://picsum.photos/seed/kuddles-cover/900/520',
    gallery: [
      'https://picsum.photos/seed/kuddles-1/1200/760',
      'https://picsum.photos/seed/kuddles-2/1200/760',
      'https://picsum.photos/seed/kuddles-3/1200/760',
      'https://picsum.photos/seed/kuddles-4/1200/760',
      'https://picsum.photos/seed/kuddles-5/1200/760',
    ],
    github: 'https://github.com/shavin/kuddles',
  },
  {
    slug: 'estate-agent',
    featuredRank: 2,
    status: 'done',
    title: 'Estate Agent',
    type: 'Mobile App',
    description:
      'A comprehensive mobile solution designed to streamline property listings and client management for modern real estate.',
    details:
      'Developed advanced property filtering, virtual tour integrations, and a direct inquiry system for seamless agent-client communication.',
    longDescription:
      'Estate Agent is a high-performance mobile application that bridges the gap between property managers and prospective buyers. The platform empowers agents to manage their portfolios dynamically on the go, while providing buyers with a feature-rich interface including advanced search filters and direct inquiry channels. The architecture focuses on real-time data synchronization and a smooth UI for browsing high-resolution property assets.',
    stack: ['React Native'],
    coverImage: estateAgentCover,
    gallery: [
      estateAgentGallery1,
      estateAgentGallery2,
      estateAgentGallery3,
      estateAgentGallery4,
      estateAgentGallery5,
    ],
    github: 'https://github.com/Shavin30/estate-agent-app.git',
  },
  {
    slug: 'traffic-management-system',
    featuredRank: 3,
    status: 'done',
    title: 'Traffic Management System',
    type: 'Python Application',
    description:
      'A data-driven system developed to process and analyze real-world traffic patterns from CSV datasets.',
    details:
      'Implemented robust file handling and data parsing algorithms to convert raw traffic logs into organized, actionable reports.',
    longDescription:
      'The Traffic Management System is a specialized Python utility designed to interpret complex traffic data. By leveraging efficient file handling techniques, the application reads large-scale CSV datasets to identify trends and bottlenecks. The system focuses on data integrity and performance, ensuring that raw inputs are transformed into a structured format suitable for traffic flow analysis and urban planning insights.',
    stack: ['Python', 'CSV Module', 'File Handling'],
    coverImage: trafficManagementCover,
    gallery: [
      trafficManagementGallery1,
      trafficManagementGallery2,
      trafficManagementGallery3,
    ],
    github: 'https://github.com/Shavin30/-Traffic-Data-Analysis-Tool-Python-Project-.git',
  },
  {
    slug: 'sdg-zero-hunger',
    status: 'done',
    title: 'SDG: Zero Hunger',
    type: 'Web Project',
    description:
      'A fully-functional, responsive website dedicated to raising awareness and providing resources for the UN Sustainable Development Goal: Zero Hunger.',
    details:
      'Engineered with a mobile-first approach, featuring interactive JavaScript components and optimized CSS layouts for cross-device compatibility.',
    longDescription:
      'The SDG: Zero Hunger project is a comprehensive web platform designed to educate users on global food security issues. By utilizing a clean, accessible UI built with semantic HTML5 and CSS3, the site ensures that critical information regarding UN initiatives is reachable on any device. JavaScript was integrated to handle dynamic user interactions and navigation, creating an immersive experience for advocacy and information sharing.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    coverImage: sdgZeroHungerCover,
    gallery: [
      sdgZeroHungerGallery1,
      sdgZeroHungerGallery2,
      sdgZeroHungerGallery3,
      sdgZeroHungerGallery4,
      sdgZeroHungerGallery5,
    ],
    github: 'https://github.com/Sawiru/ZeroHungerWebsite.git',
  },
]
