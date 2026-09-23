import React from 'react';
import { Github, Linkedin, Dribbble, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-950/95 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em]">My Portfolio</h3>
            <p className="max-w-sm text-sm text-slate-400">Building polished digital experiences with a strong focus on product design, engineering, and elegant user journeys.</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/Harry3342" target="_blank" rel="noopener noreferrer" className="social-link-button social-link-button--footer" aria-label="Visit GitHub profile">
                <span className="social-link-button__icon"><Github size={18} /></span>
                <span className="social-link-button__background" />
              </a>
              <a href="https://www.linkedin.com/in/harry-rodgers-03b8b1222/" target="_blank" rel="noopener noreferrer" className="social-link-button social-link-button--footer" aria-label="Visit LinkedIn profile">
                <span className="social-link-button__icon"><Linkedin size={18} /></span>
                <span className="social-link-button__background" />
              </a>
              <a href="https://dribbble.com/harry_Owino" target="_blank" rel="noopener noreferrer" className="social-link-button social-link-button--footer" aria-label="Visit Dribbble profile">
                <span className="social-link-button__icon"><Dribbble size={18} /></span>
                <span className="social-link-button__background" />
              </a>
              <a href="mailto:rodgersh72@gmail.com" className="social-link-button social-link-button--footer" aria-label="Send an email">
                <span className="social-link-button__icon"><Mail size={18} /></span>
                <span className="social-link-button__background" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
