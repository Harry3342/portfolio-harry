import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData, designAssets } from '../data/sampleData';

import project1Img from '../images/desktop-ui-showcase.jpg';
import project2Img from '../images/task management.jpg';
import project3Img from '../images/Weather Dashboard.png';
import whackAMoleImg from '../images/whack a mole.png';
import rpsDesignSystemImg from '../images/rps_design_system.jpg';
import logo1 from '../images/logo1.png';

const rockPaperScissorsImg = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import portfolio1 from '../images/portfolio-logo1.png';
import portfolio2 from '../images/portfolio-logo2.png';
import portfolio3 from '../images/portfolio-logo3.png';
import harryImg from '../images/harry.png';
import harryProfileImg from '../images/Harryprofile.png';
import retroLogImg from '../images/retro log.png';
import retroLogoImg from '../images/retro-logo.png';
import designSystemImg from '../images/design-system-showcase.jpg';
import desktopUIImg from '../images/desktop-ui-showcase.jpg';
import banking1Img from '../images/banking (1).png';
import banking2Img from '../images/banking (2).png';
import banking3Img from '../images/banking (3).png';
import banking4Img from '../images/banking (4).png';
import banking5Img from '../images/banking (5).png';
import banking6Img from '../images/banking (6).png';
import banking7Img from '../images/banking (7).png';
import Lightbox from '../components/Lightbox';

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [activeSection, setActiveSection] = useState('React');

  const projectCategories = ['React', 'Node.js', 'MongoDB', 'Firebase', 'Android', 'Next.js', 'TypeScript', 'Tailwind CSS'];

  const projectImageMap = {
    1: project1Img,
    2: project2Img,
    3: rockPaperScissorsImg,
    4: whackAMoleImg,
    5: banking1Img,
    6: project3Img,
    7: project2Img,
    8: project1Img,
  };

  const designShowcases = [
    {
      title: 'UI/UX Design',
      description: 'User-centered interface concepts, prototypes, and seamless digital experiences for web and mobile.',
      highlights: ['Wireframes', 'Prototypes', 'Design Systems'],
    },
    {
      title: 'Graphic Design',
      description: 'Brand visuals, marketing materials, and polished creative assets tailored to each audience.',
      highlights: ['Brand Identity', 'Social Assets', 'Print & Digital'],
      images: [],
    },
  ];

  const designImageMap = {
    'logo1.png': logo1,
    'logo2.png': logo2,
    'logo3.png': logo3,
    'portfolio-logo1.png': portfolio1,
    'portfolio-logo2.png': portfolio2,
    'portfolio-logo3.png': portfolio3,
    'harry.png': harryImg,
    'Harryprofile.png': harryProfileImg,
    'retro log.png': retroLogImg,
    'retro-logo.png': retroLogoImg,
    'e-commerce.jpg': project1Img,
    'task management.jpg': project2Img,
    'Weather Dashboard.png': project3Img,
    'rock-paper-scissors-placeholder.jpg': rockPaperScissorsImg,
    'design-system-showcase.jpg': designSystemImg,
    'desktop-ui-showcase.jpg': desktopUIImg,
  };

  const graphicDesignIndex = designShowcases.findIndex(d => d.title === 'Graphic Design');
  if (graphicDesignIndex !== -1) {
    designShowcases[graphicDesignIndex].images = designAssets.map(asset => ({
      src: designImageMap[asset.filename] || '',
      caption: asset.caption,
      alt: asset.description,
    }));
  }

  const uiuxIndex = designShowcases.findIndex(d => d.title === 'UI/UX Design');
  if (uiuxIndex !== -1) {
    designShowcases[uiuxIndex].images = [
      {
        src: designSystemImg,
        caption: 'Design System & UI Components',
        alt: 'RETRO RENEGADE UI component library and design system showcase',
      },
      {
        src: desktopUIImg,
        caption: 'Desktop E-Commerce Interface',
        alt: 'RETRO RENEGADE desktop application showcase with 90s retro aesthetic',
      },
    ];
  }

  const uiuxShowcase = designShowcases.find(d => d.title === 'UI/UX Design');
  const graphicShowcase = designShowcases.find(d => d.title === 'Graphic Design');
  const graphicImages = graphicShowcase?.images.filter(imgObj => imgObj.src) || [];

  if (uiuxShowcase) {
    uiuxShowcase.images = [
      {
        src: rpsDesignSystemImg,
        caption: 'Rock Paper Scissors Design System',
        alt: 'Rock Paper Scissors app design system with consistent screens, components, and UI patterns.',
      },
      {
        src: banking1Img,
        caption: 'Banking App Dashboard',
        alt: 'Banking dashboard screen presenting account balances and quick actions.',
      },
      {
        src: banking2Img,
        caption: 'Account Overview',
        alt: 'Account summary screen for a clean fintech experience.',
      },
      {
        src: banking3Img,
        caption: 'Transaction Flow',
        alt: 'Transaction details and activity view for a modern banking application.',
      },
      {
        src: banking4Img,
        caption: 'Savings Goals',
        alt: 'Savings and finance planning interface for a mobile banking product.',
      },
      {
        src: banking5Img,
        caption: 'Secure Transfer',
        alt: 'Payment and transfer screen designed for clarity and trust.',
      },
      {
        src: banking6Img,
        caption: 'Card Management',
        alt: 'Mobile card management and wallet interface for banking users.',
      },
      {
        src: banking7Img,
        caption: 'Banking Experience',
        alt: 'Final banking UI concept showing a polished mobile finance experience.',
      },
      {
        src: designSystemImg,
        caption: 'Design System & UI Components',
        alt: 'RETRO RENEGADE UI component library and design system showcase',
      },
      {
        src: desktopUIImg,
        caption: 'Desktop E-Commerce Interface',
        alt: 'RETRO RENEGADE desktop application showcase with 90s retro aesthetic',
      },
    ];
  }

  return (
    <div className="min-h-screen bg-transparent">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="apple-section p-8 sm:p-10 lg:p-12">
          <span className="apple-badge">Portfolio</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-white md:text-6xl">My Projects</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            A selection of projects I&apos;ve worked on showcasing my skills and experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {uiuxShowcase && (
            <div className="apple-section p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <span className="apple-badge">Featured Work</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">{uiuxShowcase.title}</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{uiuxShowcase.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {uiuxShowcase.highlights.map(h => (
                    <span key={h} className="apple-pill">{h}</span>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {uiuxShowcase.images && uiuxShowcase.images.map((imgObj, idx) => (
                  <div key={idx} className="apple-card p-5">
                    <div className="apple-card-image h-64">
                      <button
                        type="button"
                        onClick={() => {
                          setLightboxImages(uiuxShowcase.images);
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                        className="h-full w-full"
                        aria-label={`Open ${imgObj.caption}`}
                      >
                        <img src={imgObj.src} alt={imgObj.alt} loading="lazy" />
                      </button>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{imgObj.caption}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{imgObj.alt}</p>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <a href={imgObj.src} download className="apple-button-secondary px-4 py-2 text-sm">Download</a>
                      <button
                        onClick={async () => {
                          try {
                            if (navigator.share) {
                              await navigator.share({ title: imgObj.caption || '', text: imgObj.alt || '', url: imgObj.src });
                            } else if (navigator.clipboard) {
                              await navigator.clipboard.writeText(imgObj.src);
                              alert('Image URL copied to clipboard');
                            } else {
                              alert('Share not supported in this browser');
                            }
                          } catch (e) {}
                        }}
                        className="apple-button-primary px-4 py-2 text-sm"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="apple-section p-6 sm:p-8">
            <div className="mb-8">
              <span className="apple-badge">Visual Identity</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Graphic Design</h2>
              <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
                A collection of logo marks, brand identity explorations, and visual assets created for digital and print experiences.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {graphicShowcase?.highlights.map(highlight => (
                  <span key={highlight} className="apple-pill">{highlight}</span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {graphicImages.map((imgObj, idx) => (
                <div key={idx} className="apple-card p-4">
                  <div className="apple-card-image h-56">
                    <button
                      type="button"
                      onClick={() => {
                        setLightboxImages(graphicImages);
                        setLightboxIndex(idx);
                        setLightboxOpen(true);
                      }}
                      className="h-full w-full"
                      aria-label={`Open ${imgObj.caption}`}
                    >
                      <img src={imgObj.src} alt={imgObj.alt} loading="lazy" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{imgObj.caption}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{imgObj.alt}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <a href={imgObj.src} download className="apple-button-secondary px-3 py-2 text-xs">Download</a>
                    <button
                      onClick={async () => {
                        try {
                          if (navigator.share) {
                            await navigator.share({ title: imgObj.caption || '', text: imgObj.alt || '', url: imgObj.src });
                          } else if (navigator.clipboard) {
                            await navigator.clipboard.writeText(imgObj.src);
                            alert('Image URL copied to clipboard');
                          } else {
                            alert('Share not supported in this browser');
                          }
                        } catch (e) {}
                      }}
                      className="apple-button-primary px-3 py-2 text-xs"
                    >
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox images={lightboxImages} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}

      <section className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="lg:w-72">
            <div className="apple-section p-4 lg:sticky lg:top-24">
              <h3 className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Categories</h3>
              <div className="space-y-2">
                {projectCategories.map(category => {
                  const categoryProjects = projectsData.filter(p => p.tags.includes(category));
                  if (categoryProjects.length === 0) return null;

                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveSection(category);
                        document.getElementById(`section-${category}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-full rounded-full px-4 py-3 text-left text-sm font-medium transition ${
                        activeSection === category
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {category}
                      <span className="ml-2 opacity-75">({categoryProjects.length})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="flex-1 space-y-10">
            {projectCategories.map(category => {
              const categoryProjects = projectsData.filter(p => p.tags.includes(category));
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category} id={`section-${category}`} className="scroll-mt-24 apple-section p-6 sm:p-8">
                  <div className="mb-8">
                    <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">{category}</h2>
                    <div className="mt-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></div>
                  </div>

                  <div className="grid gap-12 md:grid-cols-2 md:gap-20 xl:grid-cols-3 xl:gap-28">
                    {categoryProjects.map(project => {
                      const projectImage = projectImageMap[project.id] || project.image;
                      const projectDemoUrl = project.title === 'Banking App'
                        ? 'https://horizon-bank-app-six.vercel.app/'
                        : project.title === 'E-Commerce Platform'
                          ? 'https://retro-tech-mart-f63fav77j-harry-47a4.vercel.app/'
                          : project.demo || (project.title === 'Task Management App' ? 'https://task-manager-app-two-delta.vercel.app/' : '');

                      return (
                        <div key={project.id} className="apple-project-card project-book">
                          <div className="project-book__page">
                            <div className="project-book__page-inner">
                              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">{project.title}</h3>
                              <p className="text-slate-600 dark:text-slate-300">{project.description}</p>

                              <div className="mb-3 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                  <span key={tag} className="apple-pill">{tag}</span>
                                ))}
                              </div>

                              <div className="project-book__actions">
                                {project.github && (
                                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                                    <Github size={18} />
                                    Source Code
                                  </a>
                                )}
                                {projectDemoUrl && (
                                  <a href={projectDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                                    <ExternalLink size={18} />
                                    Live Demo
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="project-book__cover">
                            <div className="apple-card-image h-full">
                              {projectImage ? (
                                <img src={projectImage} alt={project.title} className="h-full w-full object-cover" />
                              ) : (
                                <div className="flex h-full items-center justify-center text-slate-500 dark:text-slate-400">Image Coming Soon</div>
                              )}
                            </div>

                            <div className="project-book__cover-label">
                              <span>{project.title}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Projects;