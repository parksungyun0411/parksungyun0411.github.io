/** devportfolio 섹션 머리: 큰 모노 제목 + 포인트 색 짧은 바 */
export default function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-mono text-3xl font-bold text-fg sm:text-4xl md:text-5xl xl:text-6xl">
        {title}
      </h2>
      <div className="mt-2 h-[5px] w-[75px] rounded-full bg-accent" />
    </div>
  );
}
