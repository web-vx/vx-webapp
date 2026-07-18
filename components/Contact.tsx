"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Let&apos;s talk about your next project.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Email
              </h3>
              <a
                href="mailto:w.azab@vertexshell.com"
                className="block text-white hover:text-accent transition-colors"
              >
                w.azab@vertexshell.com
              </a>
              <a
                href="mailto:youssef.azab@vertexshell.com"
                className="block text-white hover:text-accent transition-colors mt-1"
              >
                youssef.azab@vertexshell.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Phone
              </h3>
              <p className="text-white/70 italic text-sm">[Phone number placeholder]</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/company/vertexshell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                linkedin.com/company/vertexshell
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Location
              </h3>
              <p className="text-white/80">Cairo, Egypt</p>
            </div>
          </div>

          {/* FORM — Replace the action URL with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-primary text-white text-sm font-semibold tracking-wide rounded hover:bg-accent transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
