import Section from "./Section";

/** 성과 표 데이터 — Test F1-Macro 기준 */
const RESULTS = [
  { model: "고전 ML 베이스라인 — TF-IDF + Naive Bayes", score: "0.2957", final: false },
  { model: "KR-BERT 단일", score: "0.7593", final: false },
  { model: "최종 — Dual-Gated KR-BERT + KoELECTRA 앙상블", score: "0.8404", final: true },
];

const LINK_STYLE =
  "underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent-deep transition-colors";

export default function FeaturedProject() {
  return (
    <Section index="02" id="featured" title="대표 프로젝트" kicker="Featured">
      <article>
        {/* 헤드라인 + 메타 */}
        <h3 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-tight text-ink">
          제주어 다중감정분류
        </h3>
        <p className="mt-3 text-sm text-ink-faint">
          건국대학교 졸업 프로젝트 · 2025 가을학기 ·{" "}
          <a
            href="https://github.com/parksungyun0411/jeju-emotion-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLE}
          >
            GitHub
          </a>
        </p>

        {/* 리드 문단 */}
        <p className="mt-6 max-w-[62ch] font-display text-[1.15rem] font-medium leading-relaxed text-ink">
          제주어/표준어 병렬 코퍼스를 GPT-4o로 7감정 라벨링해 학습 데이터를 직접
          구축하고, Dual-Gated KR-BERT + KoELECTRA 앙상블의 7단계 딥러닝
          파이프라인으로 F1-Macro 0.30에서 0.84까지 끌어올린 방언 감정 분류 NLP
          프로젝트.
        </p>

        {/* 성과 표 — 괘선 테이블 */}
        <figure className="mt-9">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t border-b border-rule">
                <th
                  scope="col"
                  className="py-2 pr-4 text-left text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint"
                >
                  Model
                </th>
                <th
                  scope="col"
                  className="py-2 text-right text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint"
                >
                  F1-Macro
                </th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map(({ model, score, final }) => (
                <tr key={model} className="border-b border-rule">
                  <td className="py-2 pr-4 text-sm leading-relaxed text-ink-soft">
                    {model}
                  </td>
                  <td
                    className={
                      final
                        ? "py-2 text-right text-sm font-bold text-accent-deep"
                        : "py-2 text-right text-sm text-ink"
                    }
                  >
                    {score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="mt-2 text-xs text-ink-faint">
            Test F1-Macro 기준, 강감정(공포·혐오·놀람) F1 0.87~0.95
          </figcaption>
        </figure>

        {/* 본문 */}
        <ul className="mt-9 max-w-[68ch] space-y-3 text-[15px] leading-relaxed text-ink-soft">
          <li className="flex gap-3">
            <span aria-hidden className="shrink-0 text-ink-faint">
              —
            </span>
            <span>
              <strong className="font-medium text-ink">데이터 구축.</strong>{" "}
              라벨링된 제주어 감정 데이터가 없는 상황에서 AI Hub 제주어/표준어
              병렬 코퍼스(텍스트 파일 4,600여 개)와 한국어 단발성 대화
              데이터셋을 수집·정제하고, GPT-4o API로
              7감정(중립·기쁨·슬픔·분노·놀람·공포·혐오) 자동 라벨링 파이프라인을
              구축(수동 검증 병행) — 최종 학습 데이터 127,324행, 7클래스 균형.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="shrink-0 text-ink-faint">
              —
            </span>
            <span>
              <strong className="font-medium text-ink">
                고전 ML 한계 규명.
              </strong>{" "}
              TF-IDF + N-gram 베이스라인(LR·SVM·RF·NB) 실험으로 F1-Macro 약
              0.30에 머무는 전통 ML의 한계를 정량 규명하고 딥러닝 전환 근거를
              확보.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="shrink-0 text-ink-faint">
              —
            </span>
            <span>
              <strong className="font-medium text-ink">
                7단계 최적화 파이프라인.
              </strong>{" "}
              KR-BERT 베이스라인 → 데이터 밸런싱 → Dual-Gated
              KR-BERT(제주어/표준어 shared 인코더 + 게이팅 융합) → 제주어
              토크나이저 최적화 → DAPT → Hard Mining → KoELECTRA 앙상블을
              단계적으로 설계·구현.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="shrink-0 text-ink-faint">
              —
            </span>
            <span>
              <strong className="font-medium text-ink">최종 성과.</strong>{" "}
              테스트셋 F1-Macro 0.8404, 강감정(공포·혐오·놀람) F1 0.87~0.95 —
              데이터 구축부터 모델 설계·실험·분석까지 직접 수행.
            </span>
          </li>
        </ul>

        {/* 기술 줄 */}
        <p className="mt-7 text-sm text-ink-faint">
          Python · PyTorch · HuggingFace Transformers · scikit-learn · KR-BERT ·
          KoELECTRA · OpenAI GPT-4o API · pandas · numpy · seaborn
        </p>

        {/* 후속 두 줄 */}
        <div className="mt-10">
          <p className="border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">
            <strong className="font-medium text-ink">
              후속 확장 — 탐라(Tamna).
            </strong>{" "}
            감정 분류·번역 모델을 서비스로 확장 — KoBART 제주어↔표준어 번역,
            FastAPI ML 추론 API, Next.js 15 모바일 웹앱이 동일 리포지토리에
            포함.
          </p>
          <p className="mt-4 border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">
            <strong className="font-medium text-ink">
              비공개 작업 — 너드수학(NerdMath).
            </strong>{" "}
            한이음 드림업 AI 수학 튜터의 백엔드·AI 엔진 — NDA 비공개
            리포지토리. Graph-RAG 학습 추천 엔진과 RAG 챗봇을 각 완성도 90%까지
            구축, 추론 응답 속도 50ms 미만.
          </p>
        </div>
      </article>
    </Section>
  );
}
