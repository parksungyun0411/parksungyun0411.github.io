import Section from "./Section";

type Bullet = {
  /** 문두 리드 구절 — 있으면 strong 처리 */
  lead?: string;
  body: string;
};

type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  /** 기간·역할 외 보조 표기 — 예: NDA */
  note?: string;
  /** 가운뎃점 나열 태그 줄 */
  tags: string;
  headline: string;
  deck: string;
  bullets: Bullet[];
};

const entries: ExperienceEntry[] = [
  {
    period: "2026.04 — 재직중",
    company: "DACON 데이콘주식회사",
    role: "운영·개발 파트 · 기획/QA",
    note: "3개월 — 커밋 127건 · PR 12건(머지 8) · 담당 에픽 3개",
    tags: "평가 시스템 기획 · ELO · 대회 운영 · QA",
    headline: "AI 해커톤 플랫폼 — 평가 시스템 설계와 대회 운영·품질",
    deck: "자사 AI 해커톤 플랫폼 전반(해커톤·학습 콘텐츠·커뮤니티·리더보드)의 주간 QA와 대회 운영을 담당하며, 해커톤 평가 시스템(ELO·평가설정)은 기획·설계부터 구현·테스트·배포까지 직접 수행.",
    bullets: [
      {
        lead: "평가설정 시퀀스 재설계",
        body: "가중치 토글로 암묵적으로 결정되던 평가방법(업보트·ELO·수동심사)을 명시 선택 방식으로 바꾸고 평가설정 화면을 3파트로 재구성. 평가 스테이지가 설정을 주도하도록 제출과 평가를 명시적으로 연결해 1:N 다차수 평가를 지원 — DB 스키마 불변·회귀 없이 테스트 31/31 통과 후 배포.",
      },
      {
        lead: "역할 기반 ELO 정규화 설계",
        body: "심사위원·제출자·참가자·대중의 평가가 한 점수에 섞여 주체별 영향력이 왜곡되던 대중평가를, 역할별 ELO 레더로 분리하고 평가 주체의 역할에 따라 점수를 정규화하는 룰로 재설계. 정규화 방식 3종·k-factor·심사 평균 반영 비율(PRD)까지 정의해 62팀 규모 월간해커톤에 실제 적용.",
      },
      {
        lead: "사내 알고리즘 대회 테스트 개최 총괄",
        body: "신규 알고리즘 대회 기능(CSV 제출 → 자동 채점 → Public/Private 리더보드 → 최종 선택)의 출시 전 검증을 실전 개최 형태의 사내 테스트로 기획. 참가부터 결과 공개까지 전 사이클을 2~3시간에 압축하는 진행 대본과 역할별 체크리스트(유저사이드 50항목·어드민사이드 35항목)를 설계하고, 기존 QA 테스트케이스 75건을 전수 대조해 수동 65건 역할 배분·자동화 9건 분리. 화면 문구를 실제 구현 코드 기준으로 수록해 당일 즉시 버그 판정이 가능하게 하고, 개발팀 사전준비·당일 운영 체크리스트와 공지문까지 운영 패키지 일체를 작성.",
      },
      {
        lead: "대회 운영",
        body: "49팀 · 제출 1,465건 규모 오프라인 프롬프트 경진대회(AI·SW마에스트로 부산센터) 운영을 지원해 제출 마감 후 2분 내 전체 채점을 완료하고, 대학 대상 실시간 멘토링 세션 운영을 보조.",
      },
      {
        lead: "출시 전 품질 검증",
        body: "주간 QA로 출시 전 버그 80여 건을 발견·수정(ELO·갤러리 33건 일괄 수정 포함)하고, 블라인드 평가에서 팀명·프로필이 노출되던 개인정보 유출 경로를 사전 차단. 개발 DB 메이저 업그레이드 시 결제·제출·커뮤니티 등 플랫폼 전 영역 회귀 QA를 수행하고, 갤러리 열람 화면 개편과 모바일 20여 개 화면 반응형 정비는 직접 구현.",
      },
      {
        lead: "QA 프로세스·운영 표준화",
        body: "체크리스트→수정→재검증→버그리포트 프로세스와 신기능 PRD 선작성 정책을 정립하고, 시드 커맨드로 반복 QA 셋업을 자동화. 사용자 피드백 13건과 외부 보안 제보 응대, Google Analytics 운영 지표 관리, 신규 QA 인력 온보딩까지 플랫폼 운영 전반을 병행.",
      },
    ],
  },
  {
    period: "2025.05 — 2025.08",
    company: "자빅스",
    role: "클라우드·엔터프라이즈 서비스 운영 인턴",
    tags: "AWS · Azure · Microsoft 365 · 서비스 기획",
    headline: "클라우드 서비스 운영과 공공 메신저 기획",
    deck: "AWS·Azure 기반 클라우드 서비스 운영과 공공 메신저 서비스 기획을 지원한 여름 인턴.",
    bullets: [
      {
        body: "고객사 AWS 인프라 요청 접수와 EC2 인스턴스 생성·확장 대응, 사용량(CPU·Memory·Disk) 분석 기반 과금 산정 후 어드민·재무 담당자 전달.",
      },
      {
        body: "On-Premise AD·Azure AD(Entra ID)와 Microsoft 365(Outlook·Teams·OneDrive·SharePoint) 운영 지원, 서비스별 비용 구조 분석으로 과금 모델 검토에 기여.",
      },
      {
        body: "공공 메신저 '온톡'(사용자 약 15만 명, 일 평균 데이터 800만 건) 기능 기획 참여 — 조직도 기반 사용자 조회·대화방·쪽지 기획 보조, 행정 시스템 연계 구조 정리, 통합 알림 서비스 기획 지원.",
      },
    ],
  },
  {
    period: "2025",
    company: "한이음 드림업 · 너드수학(NerdMath)",
    role: "AI 백엔드 개발",
    note: "리포지토리 비공개 (NDA)",
    tags: "FastAPI · LangChain · LangGraph · MongoDB · Neo4j · Docker",
    headline: "Graph-RAG 기반 AI 수학 튜터의 백엔드·AI 엔진",
    deck: "학습 진단 결과로 개인별 맞춤 학습경로를 추천하는 AI 수학 튜터 서비스의 백엔드·AI 엔진 전반을 담당.",
    bullets: [
      {
        lead: "Graph-RAG 학습 추천 엔진",
        body: "MongoDB·Neo4j 데이터로 개념 간 선후 관계 그래프를 구성하고, 진단 데이터 → 취약 개념 추출 → 경로 추천으로 이어지는 Graph-RAG 알고리즘을 LangChain 체인으로 설계·구현. 강화학습 기반 Edge Weight 갱신으로 추천을 점진 보정 — 학습경로 추천 모듈 완성도 90%(한이음 개발보고서 기준).",
      },
      {
        lead: "RAG 챗봇·질의 분류",
        body: "질문을 풀이/개념/자료검색(solve·concept·rag) 3모드로 자동 분류하는 챗봇을 LangChain·LangGraph 워크플로우로 구축, JSON 스키마 + SSE 스트리밍으로 실시간 응답 — 챗봇 RAG 시스템 완성도 90%.",
      },
      {
        lead: "AI OCR 데이터 파이프라인",
        body: "Mathpix API로 PDF·이미지 문항을 LaTeX·JSON으로 자동 변환하고, 정규식 파싱 후 MongoDB 적재·참조 무결성 검증 — 비정형 문항의 정형화 자동화.",
      },
      {
        lead: "AI 서버 최적화·배포",
        body: "FastAPI 기반 AI 서버를 GPU Batch Inference + WebSocket 스트림 구조로 설계하고 Docker + GitHub Actions CI/CD 구축 — 추론 응답 속도 < 50ms.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <Section
      index="01"
      id="experience"
      title="경력"
      kicker="Experience"
      deck="기획·구현·QA·배포를 잇는 실무 기록."
    >
      <div className="space-y-12">
        {entries.map((entry) => (
          <article
            key={entry.company}
            className="border-t border-rule pt-6 lg:grid lg:grid-cols-12 lg:gap-10"
          >
            {/* 메타 컬럼 — 기간 · 회사 · 역할 */}
            <div className="lg:col-span-3">
              <p className="text-xs tracking-wide text-ink-faint tabular-nums">
                {entry.period}
              </p>
              <p className="mt-2 text-sm font-bold text-ink">{entry.company}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                {entry.role}
              </p>
              {entry.note && (
                <p className="mt-1 text-xs text-ink-faint">{entry.note}</p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-ink-faint">
                {entry.tags}
              </p>
            </div>

            {/* 본문 컬럼 — 헤드라인 · 데크 · 불릿 */}
            <div className="mt-6 lg:col-span-9 lg:mt-0">
              <h3 className="font-display text-xl font-bold leading-snug text-ink">
                {entry.headline}
              </h3>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                {entry.deck}
              </p>
              <ul className="mt-6 space-y-4">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                  >
                    <span aria-hidden="true" className="shrink-0 text-accent">
                      –
                    </span>
                    <span className="max-w-prose">
                      {bullet.lead && (
                        <strong className="font-bold text-ink">
                          {bullet.lead}:{" "}
                        </strong>
                      )}
                      {bullet.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
