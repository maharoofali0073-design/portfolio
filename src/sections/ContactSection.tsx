import { useRef, useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ContactButton, GhostButton } from '../components/Buttons';
import { PROFILE } from '../data';

export default function ContactSection() {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');
  const timer = useRef<number>();

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      ok = true;
    } catch {
      // Fallback for insecure contexts / blocked clipboard API
      const ta = document.createElement('textarea');
      ta.value = PROFILE.email;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand('copy');
      } catch {
        ok = false;
      }
      ta.remove();
    }
    setCopied(ok ? 'ok' : 'fail');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied('idle'), 2200);
  };

  return (
    <section id="contact" className="relative z-10 bg-[#0C0C0C] px-5 pb-10 pt-24 sm:px-8 md:px-10 md:pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center sm:gap-14">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="max-w-[560px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.35rem)' }}
          >
            Have a process you want automated? Tell me about it and I will build a custom workflow around it.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hero-heading inline-flex items-center gap-3 break-all font-medium transition-opacity duration-200 hover:opacity-80"
            style={{ fontSize: 'clamp(1.1rem, 3.2vw, 2.6rem)' }}
          >
            <Mail className="h-[0.9em] w-[0.9em] shrink-0 text-[#BBCCD7]" aria-hidden="true" />
            {PROFILE.email}
          </a>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <ContactButton href={`mailto:${PROFILE.email}`}>Email Me</ContactButton>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
          >
            {copied === 'ok' ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied === 'ok' ? 'Copied!' : copied === 'fail' ? 'Press Ctrl+C' : 'Copy Email'}
          </button>
          <GhostButton href={PROFILE.linkedin} newTab>
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </GhostButton>
          <GhostButton href={PROFILE.github} newTab>
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </GhostButton>
        </FadeIn>
      </div>

      <p className="sr-only" role="status">{copied === 'ok' ? 'Email address copied' : ''}</p>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:flex-row sm:text-sm">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>{PROFILE.role}</span>
      </footer>
    </section>
  );
}
