import whackAMoleImg from '../images/whack a mole.webp';

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1560264357-8d9766d64216?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Harry3342/Weather-App',
    demo: 'https://retro-tech-mart-f63fav77j-harry-47a4.vercel.app/'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Harry3342/Task-Manager',
    demo: 'https://task-manager-app-two-delta.vercel.app/'
  },
  {
    id: 3,
    title: 'Rock Paper Scissors',
    description: 'Android game app. Kotlin, Android Studio. XML, Jetpack Compose, Material 3.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'XML', 'Material 3'],
    github: 'https://github.com/Harry3342',
    demo: 'https://rock-paper-scissors-android.vercel.app/'
  },
  {
    id: 4,
    title: 'Whack-a-Mole',
    description: 'Android game app. Kotlin, Android Studio. XML, Material 3. ViewModel, LiveData. ObjectAnimator, Tween animations. SharedPreferences. JUnit, Espresso.',
    image: whackAMoleImg,
    tags: ['Android', 'Kotlin', 'ViewModel', 'LiveData', 'Material 3'],
    github: 'https://github.com/Harry3342',
    demo: 'https://whack-a-mole-android.vercel.app/'
  },
  {
    id: 5,
    title: 'Banking App',
    description: 'Modern banking app. Next.js 14, TypeScript, Tailwind, Appwrite, Plaid, Dwolla, Sentry, React Hook Form, Zod.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=300&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Plaid', 'Dwolla'],
    github: 'https://github.com/Harry3342',
    demo: 'https://horizon-bank-app-six.vercel.app/'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasting.',
    image: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=300&fit=crop',
    tags: ['React', 'REST API', 'Chart.js'],
    github: 'https://github.com/Harry3342/weather-dashboard',
    demo: 'https://weather-dashboard-wheat-seven.vercel.app/'
  },
  {
    id: 7,
    title: 'Mobile App UI System',
    description: 'A polished UI/UX concept for a mobile-first banking experience with intuitive flows and accessible interactions.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&h=300&fit=crop',
    tags: ['UI/UX', 'Figma', 'Design Systems'],
    github: '',
    demo: ''
  },
  {
    id: 8,
    title: 'Brand Identity Kit',
    description: 'A complete graphic design package featuring logos, color systems, and campaign-ready social media visuals.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
    tags: ['Graphic Design', 'Branding', 'Illustration'],
    github: '',
    demo: ''
  },
];

export const blogData = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
    date: '2024-01-15',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    content: 'React Hooks have revolutionized the way we write React components...'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to building beautiful UIs with Tailwind CSS utility classes.',
    date: '2024-01-20',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to build modern designs...'
  },
  {
    id: 3,
    title: 'Web Performance Optimization',
    excerpt: 'Tips and tricks to optimize your web applications for faster load times.',
    date: '2024-02-01',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565dc18?w=500&h=300&fit=crop',
    content: 'Web performance is crucial for user experience and SEO rankings...'
  }
];

export const designAssets = [
  {
    filename: 'logo1.png',
    caption: 'Minimal Mark',
    description: 'A minimal logo mark using geometric forms, suited for startups and apps.'
  },
  {
    filename: 'logo2.png',
    caption: 'Bold Wordmark',
    description: 'A bold wordmark designed for high visibility on social and print.'
  },
  {
    filename: 'logo3.png',
    caption: 'Monogram Lockup',
    description: 'A compact monogram for favicons and compact placements.'
  },
  {
    filename: 'portfolio-logo1.png',
    caption: 'Badge Variant A',
    description: 'Badge-style logo for profile and social usage.'
  },
  {
    filename: 'portfolio-logo2.png',
    caption: 'Badge Variant B',
    description: 'Alternate badge with inverted color system for dark backgrounds.'
  },
  {
    filename: 'portfolio-logo3.png',
    caption: 'Portfolio Seal',
    description: 'A decorative seal used in print headers and presentations.'
  },
  {
    filename: 'retro log.png',
    caption: 'Retro Logo Mark',
    description: 'A retro-inspired logo treatment with a bold visual identity.'
  },
  {
    filename: 'retro-logo.png',
    caption: 'Retro Logo Variant',
    description: 'An alternate retro logo composition for branded digital and print use.'
  }
];

// Additional non-logo design assets (photos, profile images)
designAssets.push(
  {
    filename: 'harry.png',
    caption: 'Portrait Photo',
    description: 'High-resolution portrait used for personal branding and profile headers.'
  },
  {
    filename: 'Harryprofile.png',
    caption: 'Profile Variant',
    description: 'Alternate profile crop for social and thumbnail use.'
  },
  {
    filename: 'color-palette.png',
    caption: 'Color Palette',
    description: 'Primary and secondary color system with accessibility compliance.'
  },
  {
    filename: 'typography-guide.png',
    caption: 'Typography Guide',
    description: 'Font pairings and hierarchy system for consistent typography.'
  },
  {
    filename: 'social-media-templates.png',
    caption: 'Social Media Templates',
    description: 'Consistent template designs for Instagram, Twitter, and LinkedIn.'
  },
  {
    filename: 'business-cards.png',
    caption: 'Business Card Design',
    description: 'Front and back design for professional networking.'
  },
  {
    filename: 'icon-set.png',
    caption: 'Custom Icon Set',
    description: 'Curated set of 24+ custom icons for web and mobile applications.'
  },
  {
    filename: 'illustration-pack.png',
    caption: 'Illustration Pack',
    description: 'Original illustrations and character designs for landing pages.'
  }
);
