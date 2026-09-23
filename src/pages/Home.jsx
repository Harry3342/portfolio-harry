import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Dribbble, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Import your project images here just like you did with the logo

import project1Img from '../images/desktop-ui-showcase.jpg'; 
import project2Img from '../images/task management.jpg';
import project3Img from '../images/Weather Dashboard.png';
import whackAMoleImg from '../images/whack a mole.png';
import profileImg from '../images/harry.png';

const rockPaperScissorsImg = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80';

// 2. Assign the imported variables to the image property
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and an admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: project1Img,
    demo: 'https://retro-tech-mart-f63fav77j-harry-47a4.vercel.app/',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A real-time collaborative task manager with Kanban boards and team chat features.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: project2Img,
    demo: 'https://task-manager-app-two-delta.vercel.app/',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather application providing accurate live forecasts and historical weather data.',
    tech: ['Vue.js', 'Express', 'OpenWeather API'],
    image: project3Img,
  },
  {
    id: 4,
    title: 'Rock Paper Scissors',
    description: 'Android game app. Core Platform: Kotlin, Android Studio. UI: XML, Jetpack Compose, Material 3.',
    tech: ['Android', 'Kotlin', 'XML', 'Jetpack Compose', 'Material 3'],
    image: rockPaperScissorsImg,
  },
  {
    id: 5,
    title: 'Whack-a-Mole',
    description: 'Android game app. Core Platform: Kotlin, Android Studio. UI: XML, Material 3. Architecture: ViewModel, LiveData. Animation: ObjectAnimator, Tween animations. Storage: SharedPreferences. Testing: JUnit, Espresso.',
    tech: ['Android', 'Kotlin', 'XML', 'ViewModel', 'LiveData', 'Material 3'],
    image: whackAMoleImg,
  },
  {
    id: 6,
    title: 'Banking App',
    description: 'Modern banking app. Next.js 14, TypeScript, Tailwind, Appwrite, Plaid, Dwolla, Sentry, React Hook Form, Zod.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Plaid', 'Dwolla'],
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=300&fit=crop',
    demo: 'https://horizon-bank-app-six.vercel.app/',
  },
];

const featuredCategories = [
  {
    id: 1,
    title: 'UI Designs',
    description: 'Thoughtful interfaces and user-centered experiences for web and mobile products.',
    tags: ['Wireframes', 'Design Systems', 'User Flows'],
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'Brand-focused visuals, social assets, and polished marketing creatives.',
    tags: ['Brand Identity', 'Social Media', 'Print & Digital'],
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= featuredProjects.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? Math.max(0, featuredProjects.length - 2) : prevIndex - 2
    );
  };

  return (
    <div className="min-h-screen bg-transparent">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="apple-section flex flex-col-reverse items-center justify-between gap-12 p-6 sm:p-8 lg:flex-row lg:p-12">
          <div className="w-full lg:w-1/2">
            <span className="apple-badge mb-6">Available for projects</span>
            <h1 className="mb-6 text-5xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-white md:text-6xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Harry Owino Njoga</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I&apos;m a full-stack developer passionate about creating beautiful and functional web applications.
              Let&apos;s build something remarkable together.
            </p>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="apple-button-primary px-7 py-3.5 text-base"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
              <a
                href="#projects"
                className="apple-button-secondary px-7 py-3.5 text-base"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/Harry3342" target="_blank" rel="noopener noreferrer" className="social-link-button" aria-label="Visit GitHub profile">
                <span className="social-link-button__icon"><Github size={22} /></span>
                <span className="social-link-button__background" />
              </a>
              <a href="https://www.linkedin.com/in/harry-rodgers-03b8b1222/" target="_blank" rel="noopener noreferrer" className="social-link-button" aria-label="Visit LinkedIn profile">
                <span className="social-link-button__icon"><Linkedin size={22} /></span>
                <span className="social-link-button__background" />
              </a>
              <a href="https://dribbble.com/harry_Owino" target="_blank" rel="noopener noreferrer" className="social-link-button" aria-label="Visit Dribbble profile">
                <span className="social-link-button__icon"><Dribbble size={22} /></span>
                <span className="social-link-button__background" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-sky-300/50 via-blue-400/20 to-indigo-500/40 blur-2xl" />
              <div className="apple-panel relative overflow-hidden rounded-[2rem] p-4">
                <div className="mx-auto h-[420px] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-[0_30px_80px_rgba(59,130,246,0.35)]">
                  <img
                    src={profileImg}
                    alt="Harry Owino Njoga"
                    className="h-full w-full object-cover object-center opacity-95"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="apple-section p-6 sm:p-8 lg:p-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="apple-badge mb-4">Showcase</span>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Featured Projects</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Selected work spanning product design, UX, and modern web experiences.</p>
            </div>

            <div className="hidden gap-3 md:flex">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredCategories.map((category) => (
              <div
                key={category.id}
                className="apple-card p-6"
              >
                <div className="apple-badge mb-4">Featured Category</div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="mb-5 text-slate-600 dark:text-slate-300">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="apple-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProjects.slice(currentIndex, currentIndex + 2).map((project) => (
              <div
                key={project.id}
                className="apple-project-card flex h-full flex-col"
              >
                <div className="apple-card-image h-56 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-grow text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="apple-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 flex justify-center gap-3 md:hidden">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-base font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="apple-section bg-gradient-to-br from-sky-500/90 to-blue-700/90 p-8 text-center shadow-[0_30px_80px_rgba(59,130,246,0.35)] lg:p-12">
          <h2 className="mb-4 text-4xl font-semibold tracking-[-0.05em]" style={{ color: '#ffffff' }}>
            Ready to work together?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg" style={{ color: '#dbeafe' }}>
            Let&apos;s discuss your next idea and build a product experience people genuinely enjoy using.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold hover:bg-slate-50"
            style={{ color: '#1d4ed8' }}
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;