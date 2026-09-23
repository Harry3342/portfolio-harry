import React, { useEffect, useState } from 'react';
import { Download, Code, Award, Users } from 'lucide-react';
import ihub3Img from '../images/ihub 3.jpg';
import ihub5Img from '../images/ihub 5.jpg';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Webpack', 'Jest'] },
    { category: 'Other', items: ['Web Design', 'UI/UX', 'Responsive Design', 'Performance Optimization'] }
  ];

  const proficiency = [
    {
      label: 'Frontend',
      percentage: 78,
      description: 'Strong front-end development with React, Tailwind, and modern UI patterns.',
      colorClass: 'text-sky-500'
    },
    {
      label: 'UI/UX',
      percentage: 88,
      description: 'User-focused interface design, accessibility, and strong visual polish.',
      colorClass: 'text-fuchsia-500'
    },
    {
      label: 'Backend',
      percentage: 45,
      description: 'Still improving server-side skills with Node.js, databases, and APIs.',
      colorClass: 'text-emerald-500'
    },
    {
      label: 'Tools',
      percentage: 72,
      description: 'Comfortable with Git, Docker, VS Code, workflows and automation.',
      colorClass: 'text-amber-500'
    }
  ];

  const CircleSkill = ({ label, percentage, description, colorClass }) => {
    const [animatedValue, setAnimatedValue] = useState(0);
    const radius = 48;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;

    useEffect(() => {
      let frameId = 0;
      let startTime = 0;
      const duration = 1300;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const nextValue = Math.round(percentage * eased);

        setAnimatedValue(nextValue);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }, [percentage]);

    const dashOffset = circumference - (animatedValue / 100) * circumference;

    return (
      <div className="apple-card p-6">
        <div className="mb-6 flex items-center justify-center">
          <svg className="skill-ring h-40 w-40" viewBox="0 0 120 120" role="img" aria-label={`${label} skill ${percentage}%`}>
            <circle
              cx="60"
              cy="60"
              r={normalizedRadius}
              fill="transparent"
              className="skill-ring__track"
              strokeWidth={stroke}
            />
            <circle
              cx="60"
              cy="60"
              r={normalizedRadius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth={stroke}
              strokeLinecap="round"
              className={`skill-ring__progress ${colorClass}`}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 0.18s ease-out' }}
              transform="rotate(-90 60 60)"
            />
            <text x="50%" y="50%" textAnchor="middle" dy="0.35em" className="fill-slate-900 text-2xl font-semibold dark:fill-white">
              {animatedValue}%
            </text>
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{label}</h3>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="apple-section p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <span className="apple-badge">About me</span>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-white md:text-6xl">About Me</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
            </div>

            <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900/60">
              <img src={ihub3Img} alt="Harry at iHub" className="h-72 w-full object-cover object-center sm:h-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="apple-section p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Who I Am</h2>
                <p className="mb-4 text-slate-600 dark:text-slate-300">
                  I&apos;m a passionate full-stack developer with 5+ years of experience building web applications.
                  I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="mb-4 text-slate-600 dark:text-slate-300">
                  My journey in tech started with a curiosity about how things work, and it has evolved into
                  a career dedicated to creating meaningful digital experiences.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  When I&apos;m not coding, you can find me writing blog posts, contributing to open-source projects,
                  or exploring new technologies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/60 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                  <img src={ihub5Img} alt="Harry at iHub" className="h-60 w-full object-cover sm:h-72" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, value: '50+', label: 'Projects Completed' },
                    { icon: Users, value: '30+', label: 'Happy Clients' },
                    { icon: Code, value: '100K+', label: 'Lines of Code' },
                    { icon: Award, value: '5+', label: 'Years Experience' },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="apple-stat">
                      <Icon size={28} className="mb-2 text-sky-500" />
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="apple-section p-8 sm:p-10 lg:p-12">
            <h2 className="mb-8 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">My Skills</h2>
            <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {proficiency.map((skill) => (
                <CircleSkill key={skill.label} {...skill} />
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.category} className="apple-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                        <span className="h-2.5 w-2.5 rounded-full bg-sky-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/resume.pdf"
              download
              className="apple-button-primary px-8 py-3.5"
            >
              <Download size={18} />
              Download My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
