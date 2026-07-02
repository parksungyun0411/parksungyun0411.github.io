type SectionProps = {
  /** 지면 색인 번호 — 예: "01" */
  index: string;
  id: string;
  title: string;
  /** 영문 키커 — 작은 대문자 라벨 */
  kicker: string;
  /** 제목 아래 보조 설명 (선택) */
  deck?: string;
  children: React.ReactNode;
};

export default function Section({
  index,
  id,
  title,
  kicker,
  deck,
  children,
}: SectionProps) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-20">
      <div className="border-t border-rule pt-7 lg:grid lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-3">
          <p className="font-display text-sm text-accent">
            {index}
            <span className="ml-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              {kicker}
            </span>
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight">
            {title}
          </h2>
          {deck && (
            <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-ink-soft">
              {deck}
            </p>
          )}
        </header>
        <div className="mt-10 lg:col-span-9 lg:mt-0">{children}</div>
      </div>
    </section>
  );
}
