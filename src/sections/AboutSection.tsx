import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';
import { ABOUT_TEXT, asset } from '../data';

// Decorative 3D objects (purely visual), served from /public/images

const DECOR = [
  {
    src: asset('images/moon_icon.11395d36.png'),
    className: 'top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: asset('images/p59_1.4659672e.png'),
    className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: asset('images/lego_icon-1.703bb594.png'),
    className: 'top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: asset('images/Group_134-1.2e04f3ce.png'),
    className: 'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
];

const STATS = [
  { value: '20+', label: 'n8n workflows built' },
  { value: '4', label: 'Running in production' },
  { value: '10+', label: 'Apps & APIs integrated' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {DECOR.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          x={item.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute ${item.className}`}
        >
          <img src={item.src} alt="" className="h-auto w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          {/* Stats counted from the n8n instance (Oct 2026) */}
          <FadeIn y={20} className="grid w-full max-w-[560px] grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 px-3 py-5 text-center">
                <p className="hero-heading text-3xl font-black sm:text-5xl">{stat.value}</p>
                <p className="mt-1 text-[0.7rem] font-light uppercase tracking-wider text-[#D7E2EA]/70 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
