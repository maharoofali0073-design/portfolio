import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';
import { PROJECTS, type FlowNode } from '../data';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

const KIND_COLOR: Record<FlowNode['kind'], string> = {
  trigger: '#FF7A59',
  ai: '#B18CFF',
  logic: '#F5C451',
  http: '#4FD1C5',
  app: '#3EE08F',
  data: '#8DA2FF',
};

const PANEL_BG = [
  'linear-gradient(135deg, #18011F 0%, #4A0A55 60%, #B600A8 140%)',
  'linear-gradient(135deg, #0E0B1A 0%, #2A1452 60%, #7621B0 140%)',
  'linear-gradient(135deg, #1A0B05 0%, #4D1D06 60%, #BE4C00 140%)',
];

type Project = (typeof PROJECTS)[number];

function FlowPanel({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`flex flex-col justify-center gap-2 overflow-hidden border border-white/10 p-5 sm:p-7 ${RADIUS}`}
      style={{ height: 'clamp(130px, 16vw, 230px)', background: PANEL_BG[index % PANEL_BG.length] }}
    >
      <ul className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {project.flow.map((node, i) => (
          <li key={node.label} className="flex items-center gap-1.5 sm:gap-2">
            {i > 0 && <span className="h-px w-3 bg-white/30 sm:w-4" aria-hidden="true" />}
            <span className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#0C0C0C]/80 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-sm" style={{ background: KIND_COLOR[node.kind] }} />
              {node.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatsPanel({ project }: { project: Project }) {
  return (
    <div
      className={`flex flex-col justify-between border border-white/10 bg-[#151518] p-5 sm:p-7 ${RADIUS}`}
      style={{ height: 'clamp(160px, 22vw, 340px)' }}
    >
      <div>
        <p className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          {project.nodes}
        </p>
        <p className="mt-1 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">n8n nodes</p>
      </div>
      <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">
        Trigger · <span className="text-[#D7E2EA]">{project.trigger}</span>
      </p>
    </div>
  );
}

function DetailPanel({ project }: { project: Project }) {
  return (
    <div className={`flex h-full flex-col justify-between gap-6 border border-white/10 bg-[#111114] p-6 sm:p-8 md:p-10 ${RADIUS}`}>
      <p
        className="font-light leading-relaxed text-[#D7E2EA]/85"
        style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px`, transformOrigin: 'top center' }}
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 sm:px-4">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <GhostButton>{project.live ? '● Live' : 'Built in n8n'}</GhostButton>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <FlowPanel project={project} index={index} />
            <StatsPanel project={project} />
          </div>
          <div className="w-[60%]">
            <DetailPanel project={project} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
