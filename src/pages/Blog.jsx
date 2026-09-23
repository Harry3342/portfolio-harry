import React, { useState } from 'react';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogData } from '../data/sampleData';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const totalPages = Math.max(1, Math.ceil(blogData.length / postsPerPage));
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = blogData.slice(startIndex, startIndex + postsPerPage);

  const languageCards = Array.from(
    new Set(
      blogData.flatMap((post) => {
        const languages = post.languages || post.language || post.tags || [post.category];
        const items = Array.isArray(languages) ? languages : [languages];
        return items.filter(Boolean);
      })
    )
  ).map((language) => {
    const matchingPost = blogData.find((post) => {
      const languages = post.languages || post.language || post.tags || [post.category];
      const items = Array.isArray(languages) ? languages : [languages];
      return items.includes(language);
    });

    return {
      name: language,
      href: matchingPost ? `#post-${matchingPost.id}` : '/blog',
    };
  });

  const visibleLanguageCards = languageCards.slice(languageIndex, languageIndex + 3);
  const canGoPrev = languageIndex > 0;
  const canGoNext = languageIndex + 3 < languageCards.length;

  const goToPage = (page) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    if (clamped === currentPage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(clamped);
      setIsAnimating(false);
    }, 200);
  };

  const shiftLanguages = (direction) => {
    if (direction === -1 && !canGoPrev) return;
    if (direction === 1 && !canGoNext) return;
    setLanguageIndex((prev) => prev + direction);
  };

  const btnBase = 'px-4 py-2 rounded-full text-sm font-medium';
  const disabledClass = 'cursor-not-allowed opacity-40';
  const normalClass = 'border border-slate-200 bg-white/70 text-slate-700 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300';
  const activeClass = 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20';

  return (
    <div className="min-h-screen bg-transparent">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="apple-section p-8 sm:p-10 lg:p-12">
          <span className="apple-badge">Writing</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-white md:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Thoughts, tips, and tutorials about web development, design, and technology.
          </p>
        </div>
      </section>

      {languageCards.length > 0 && (
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">Explore by Language</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => shiftLanguages(-1)}
                  disabled={!canGoPrev}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    canGoPrev
                      ? 'border border-slate-200 bg-white/80 text-slate-800 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:text-sky-300'
                      : 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => shiftLanguages(1)}
                  disabled={!canGoNext}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    canGoNext
                      ? 'border border-slate-200 bg-white/80 text-slate-800 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:text-sky-300'
                      : 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {visibleLanguageCards.map((language) => (
                <a
                  key={language.name}
                  href={language.href}
                  className="group rounded-[26px] border border-slate-200/80 bg-white/70 p-4 shadow-sm hover:border-sky-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-slate-900 dark:text-white">{language.name}</span>
                    <span className="text-sm font-medium text-sky-600 transition group-hover:translate-x-1 dark:text-sky-400">Read posts →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              id={`post-${post.id}`}
              className="apple-project-card overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-105 md:h-full"
                  />
                </div>

                <div className="p-8 md:w-2/3">
                  <div className="mb-4 flex flex-wrap gap-4">
                    <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <Tag size={16} className="text-sky-600 dark:text-sky-400" />
                      <span className="apple-pill">{post.category}</span>
                    </span>
                  </div>

                  <h2 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white md:text-3xl">
                    {post.title}
                  </h2>

                  <p className="mb-6 text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>

                  <button className="font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-4">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${btnBase} ${currentPage === 1 ? disabledClass : normalClass}`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`${btnBase} ${page === currentPage ? activeClass : normalClass}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`${btnBase} ${currentPage === totalPages ? disabledClass : normalClass}`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;