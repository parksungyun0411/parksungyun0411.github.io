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
    note: "5개월 — PR 32건(머지 23) · 고유 커밋 357건 · 담당 에픽 3개 (2026-09-15 실측)",
    tags: "평가 시스템 기획 · ELO · QA · 대회 운영 · 정책 수립",
    headline: "AI 해커톤 플랫폼 — 평가 시스템 설계, 품질 검증, 코드 앞단의 결정",
    deck: "자사 AI 해커톤 플랫폼 전반(해커톤·학습·커뮤니티·리더보드)의 주간 QA와 대회 운영을 담당하며, 해커톤 평가 시스템(ELO·평가설정)은 기획·설계부터 구현·테스트·배포까지 직접 수행. 8~9월에는 어드민·모바일 화면 정합성과 날짜 표기·팀 정원 같은 규칙 수립까지 범위를 넓혔다.",
    bullets: [
      {
        lead: "평가설정 시퀀스 재설계",
        body: "가중치 토글로 암묵적으로 결정되던 평가방법(업보트·ELO·수동심사)을 명시 선택 방식으로 바꾸고 평가설정 화면을 3파트로 재구성. 평가 스테이지가 설정을 주도하도록 제출과 평가를 명시적으로 연결해 1:N 다차수 평가를 지원 — DB 스키마 불변·회귀 없이 테스트 31/31 통과 후 배포.",
      },
      {
        lead: "ELO 평가 시스템 감사와 공정성",
        body: "1v1 아레나·스코어링·리더보드·갤러리 공개 범위를 병렬 감사해 확정 결함 P1 3건·P2 5건을 직접 수정하고 141개 테스트로 검증. 블라인드 평가에서 팀명·프로필이 노출되던 개인정보 유출을 출시 전에 차단하고, 새로고침만으로 매치업이 재추첨되던 결함을 상태 테이블과 멱등 처리로 해결. 자사 수식으로 몬테카를로 시뮬레이션(300회)을 돌려 신뢰 구간(최소 3,000·우수 9,000매치)을 산출하고, 그 결과를 근거로 '리더보드 가산점' 안을 기각한 뒤 무임승차를 막는 호혜 게이트를 기획·구현.",
      },
      {
        lead: "화면 상태 보존과 모바일 정합성",
        body: "어드민에서 새로고침·뒤로가기하면 하위 탭이 개요로 튕기던 문제를 전수 조사해 16화면의 탭 상태를 URL에 보존하고 검색 대상을 19화면에서 정리(동료 리뷰 수정을 거쳐 머지). 모바일 가로 오버플로 약 20개 화면을 일괄 수정해 머지하고, 제 PR을 제가 다시 QA해 찾은 4건을 당일 고쳐 머지. ELO 아레나 재설계에서는 비활성 버튼의 안내가 보조기술에 닿지 않던 접근성 결함과 동시 투표 데드락(수정 전 6명 중 1표 유실 → 후 실패 0건)을 처리 — 리뷰 중.",
      },
      {
        lead: "설계·정책 결정 — 코드 앞단",
        body: "기획서와 설계 문서를 코드보다 먼저 쓰는 방식으로 일했다(설계·작업 문서 63건 커밋). 리더보드 UI 구조를 직접 정했다 — 헤더 툴팁·100점 표시 3종 수정 설계(동료가 구현·머지), 예선·본선·최종 단계 배치(3안을 실제 화면 위에 올려 비교, 제목 분리·알고리즘 퍼블릭/프라이빗 분리). 제출 상태는 서버 판정을 근거로 제출완료·작성중·미제출 3종 규약으로 확정하고, 32종·356곳으로 갈라진 날짜 표기는 정책서를 먼저 만들어 기획 담당 합의를 받은 뒤 단일 유틸로 구현했으며, 팀 정원은 '초대는 자리를 잡지 않는다'는 규약을 정해 명문화. 해커톤 예약 공개는 '예약 시각 ≤ 지금이면 공개'라는 규칙 하나를 순수 함수 3개가 소유해 서버·클라가 공유하는 구조로 설계해 오차 0을 확보. 기획 원안 '수정 불가는 모달에만 표시'에는 undo 우선 원칙과 타 플랫폼 정책을 근거로 절반 반대하며 대안을 제시했고, 검색 최적화 변경은 라우팅이 바뀐다는 표를 보고 단독 결정이 아니라고 판단해 당일 전량 원복.",
      },
      {
        lead: "QA — 규모와 응답의 성격",
        body: "2026년 4월부터 주간 체크리스트 QA를 수행해 확보된 export 기준 최소 86회차·항목 응답 1,281건을 남김(총계가 아닌 확인된 최소치). 통과 여부만 적지 않고 재현 조건을 화면 폭 단위로 특정하고, 확인하지 못한 항목은 '확인 불가'·'기획 확인 필요'로 남겼으며, QA가 구현 결함이 아니라 기획 없이 만들어진 레거시 기능군을 드러낸 사례도 있음. 사내 알고리즘 대회를 실제 개최 형태로 기획해 8역할·73항목으로 검증(팀 전체 이슈 31건 중 본인 7건). 동료 리뷰에서 전제를 지적받자 전체 코드를 재검증해 근거가 확인되지 않은 자기 변경 3건을 같은 날 되돌리고 반증 근거를 커밋 본문에 남김.",
      },
      {
        lead: "QA 자동화·프로세스",
        body: "손으로 30분~1시간 걸리던 QA 셋업을 시드 커맨드로 자동화(6종 제작 후 실사용 기준 2종으로 정리)하고, Generator + 독립 Verifier 하네스로 체크리스트의 근거성을 자동 검증. 체크리스트→수정→재검증→버그리포트 프로세스와 신기능 PRD 선작성 정책을 정립하고, 어떤 화면·분기가 테스트로 덮이는지 보이지 않던 문제를 어드민 QA 커버리지 맵(정적 스캔+불변식 점검+온보딩)으로 풀었다 — 구현 완료, 로컬 브랜치.",
      },
      {
        lead: "대회 운영",
        body: "대학 연합 AI·SW 경진대회 본선(2개 부문 24팀) 현장 운영과 자사 플랫폼 투표 안내를 맡아 24팀 전원 제출·부여 96표 중 73표 행사·운영 이슈 0건으로 종료 — 본선 직전 채점표 QA에서 최종제출 자동 해제 결함을 직접 찾아 처리한 대회. 부산센터 프롬프트 경진대회(49팀·제출 1,465건) 운영 보조, 강원대 융합 프로젝트 본선 현장 운영, 공공기관 발주 AI 경진대회 온라인 설명회 발표·Q&A, 양자컴퓨팅 해커톤 본선 현장 기술 지원, 사용자 피드백 누적 31건 응대와 CS 매뉴얼 자산화, 신규 QA 인력 온보딩.",
      },
      {
        lead: "공공기관 AI 플랫폼 개발·배포",
        body: "NIA 정책 수립 지원 데이터 분석 사업의 민간플랫폼 활용 과제(운수종사자 교통사고 위험도 예측)에서, 경진대회로 확보한 우수 모델을 공공기관 현업에 앉히는 웹 플랫폼을 개발·배포(2026-09 기준 v9.3.0). FastAPI 앙상블 엔진(부스팅 7종 logit 가중합·temperature scaling + LightGBM 시퀀스 모델 블렌딩, SHAP 요인, 24개월 관찰창·코호트 분위 라벨링), React 화면(대시보드·정밀 진단·비교 분석·벡터 PDF 보고서·관리자 재학습), eGovFrame 백엔드를 외부망이 분리된 Windows PC에 오프라인 wheel 53개를 담은 포터블 zip과 멱등 설치 스크립트로 배포. 현장 보안 프로그램이 폴더 이동을 막아 설치가 실패하자 설치 방식을 파일 단위 복사로 전면 재작성했고, 첫 시트만 읽던 학습 업로드로 검사 이력이 빠지던 결함을 근본 수정. 코드 2만 6천 줄·API 35·인수인계 문서(보류 항목 71건).",
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
