import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import logo1 from '../images/portfolio-logo1.png'; // Import the logo image

const ThemeToggle = ({ isDark, toggleTheme, id }) => (
  <label className="theme-toggle" htmlFor={id} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
    <input
      id={id}
      className="theme-toggle__input"
      type="checkbox"
      checked={isDark}
      onChange={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    />
    <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.22" />
        </filter>
      </defs>
      <rect className="theme-toggle__container" x="3.5" y="3.5" width="60.667" height="35" rx="17.5" filter={`url(#${id}-shadow)`} />
      <g className="theme-toggle__button">
        <g className="theme-toggle__sun">
          <circle className="theme-toggle__sun-outer" cx="15.167" cy="15.167" r="15.167" />
          <circle className="theme-toggle__sun-inner" cx="15.167" cy="15.167" r="7" />
        </g>
        <g className="theme-toggle__moon">
          <circle className="theme-toggle__moon-outer" cx="15.167" cy="15.167" r="15.167" />
          <g className="theme-toggle__patches">
            <circle cx="10" cy="7" r="2" />
            <circle cx="7" cy="19" r="2" />
            <circle cx="14" cy="12" r="1" />
            <circle cx="20" cy="20" r="1.5" />
          </g>
        </g>
      </g>
      <g className="theme-toggle__cloud">
        <path d="M9 27c-2.9 0-4.2-3.5-1.5-5 .1-3.3 4.4-4.3 6.2-1.5 2-1.9 5.4-.6 5.5 2.2 3.3-.1 4.1 4.3.9 4.3H9Z" />
      </g>
      <g className="theme-toggle__stars">
        <path d="m12 11 .5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Zm8 7 .4 1 .9.4-.9.3-.4 1-.3-1-.9-.3.9-.4.3-1Z" />
      </g>
    </svg>
  </label>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold text-primary dark:text-blue-400">
            <img src={logo1} alt="Harry's Portfolio" className="h-16 w-56 object-contain mix-blend-multiply transition-all dark:mix-blend-normal dark:invert" />
          </Link>

          <div className="hidden items-center space-x-2 md:flex">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Projects', '/projects'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/80 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle id="theme-toggle-desktop" isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle id="theme-toggle-mobile" isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label="Open menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-2 pb-4 md:hidden">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Projects', '/projects'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="block rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
