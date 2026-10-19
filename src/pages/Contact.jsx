import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="apple-section p-8 sm:p-10 lg:p-12">
          <span className="apple-badge">Connect</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-white md:text-6xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or want to discuss opportunities? Let&apos;s talk!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="apple-section p-8 sm:p-10">
            <h2 className="mb-8 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                  <a href="mailto:harrynjoga@gmail.com" className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                    harrynjoga@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[28px] border border-sky-200 bg-sky-50/80 p-6 dark:border-sky-900/60 dark:bg-sky-500/5">
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Response Time</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I typically respond to messages within 24 hours. For urgent matters, please email directly.
              </p>
            </div>
          </div>

          <div className="apple-section p-8 sm:p-10">
            <h2 className="mb-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Connect with Me</h2>
            <p className="mb-8 text-slate-600 dark:text-slate-300">
              Reach out by email or connect with me on LinkedIn and GitHub.
            </p>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/harry-rodgers-03b8b1222/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:text-sky-400"
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                <span className="font-semibold">LinkedIn</span>
                <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">View profile</span>
              </a>
              <a
                href="https://github.com/Harry3342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:text-sky-400"
              >
                <Github className="h-5 w-5 shrink-0" />
                <span className="font-semibold">GitHub</span>
                <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">View profile</span>
              </a>
              <a
                href="mailto:harrynjoga@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:text-sky-400"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span className="font-semibold">Email</span>
                <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">harrynjoga@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
