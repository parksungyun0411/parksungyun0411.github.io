import Image from "next/image";
import { IconMail, IconBrandGithub, IconArticle } from "@tabler/icons-react";
import { site } from "@/content/site";

const SOCIAL = [
  { href: `mailto:${site.social.email}`, label: "Email", Icon: IconMail },
  { href: site.social.github, label: "GitHub", Icon: IconBrandGithub },
  { href: site.social.blog, label: "Blog", Icon: IconArticle },
];

/**
 * 분할 히어로: 왼쪽 인사와 이름, 오른쪽 증명사진.
 * devportfolio 의 방사형 그라데이션과 코드 기호 패턴은 유지하되 사진이 시각 요소를 맡는다.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-bg"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 800px 1200px at 0% 0%, var(--accent-soft) 0%, transparent 60%)",
        }}
      />
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 size-full stroke-line [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="hero-grid"
            x="50%"
            y={-1}
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#hero-grid)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 pb-28 pt-24 sm:px-12 md:grid-cols-12 md:pb-24 md:pt-24 lg:px-24">
        <div className="md:col-span-7">
          <h2 className="fade-up font-mono text-xl font-bold tracking-tight text-fg-soft sm:text-2xl md:text-4xl">
            안녕하세요!
          </h2>
          <h1 className="fade-up delay-200 mt-6 font-mono text-4xl font-bold tracking-tight text-fg sm:text-5xl md:mt-8 md:text-6xl lg:text-7xl">
            저는 <span className="text-accent">{site.name}</span>
            입니다.
          </h1>
          <p className="fade-up delay-400 mt-6 max-w-[34ch] text-base font-medium leading-relaxed text-fg-soft sm:text-lg md:text-xl">
            {site.title}. {site.tagline}
          </p>

          <ul className="fade-up delay-600 mt-10 flex gap-6 text-fg-soft">
            {SOCIAL.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex transition-colors duration-300 hover:text-accent"
                >
                  <Icon size={30} stroke={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up delay-400 md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-line bg-bg-soft shadow-[0_24px_60px_-24px_var(--accent-soft)] md:max-w-[380px]">
            <Image
              src="/profile.jpg"
              alt="정장 차림의 박성윤 증명사진"
              fill
              priority
              sizes="(min-width: 768px) 380px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
