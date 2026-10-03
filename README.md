# 박성윤 · Park Sungyun Portfolio

개인 포트폴리오 사이트의 소스 저장소입니다. Astro + Tailwind + DaisyUI로 작성했고, `main` 브랜치에 push하면 GitHub Actions가 빌드해 GitHub Pages에 배포합니다.

- **사이트**: <https://parksungyun0411.github.io>
- **GitHub**: <https://github.com/parksungyun0411>

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | Home — 소개, 대표 프로젝트 4장, 최근 기술 노트 |
| `/projects/` | Projects — Work / Personal / Contest / Academic 탭 (공개 항목이 없는 탭은 숨김) |
| `/projects/<slug>/` | 프로젝트 상세 — 기간·역할·소속, 배경/접근/결과/한계, 아키텍처, 핵심 수치와 출처, 스택, 관련 노트, 링크 |
| `/notes/` | Notes — 프로젝트에서 나온 기술 정리·회고 (노트가 없으면 빈 상태 표시) |
| `/notes/<slug>/` | 노트 본문 — 마크다운, 태그, 관련 프로젝트 링크 |
| `/cv/` | CV — Summary, Skills, Work Experience, Featured Projects, Education, Certifications & Languages (인쇄용 CSS 포함) |

## 프로젝트 데이터

모든 프로젝트는 `src/data/projects.ts` 한 파일에서 관리하고, 홈·목록·상세·CV가 같은 데이터를 씁니다.

- `featured: true` + `featuredOrder` — 홈의 대표 프로젝트
- `result` — 카드와 상세에 표시하는 상태 칩 (예: `진행 중`)
- `metrics` / `metricsNote` — 출처가 있는 수치와 그 출처·한계. 측정하지 않은 프로젝트에는 넣지 않습니다
- `repo` / `public` — 저장소 주소는 `public: true`일 때만 상세 페이지에 링크로 나옵니다. 비공개 저장소를 공개하면 이 값 하나만 바꿉니다
- `screenshot` — 상세 페이지의 화면 캡처 (로컬 실행 화면, 배포 아님)
- `draft: true` — 목록·상세·홈 어디에도 노출하지 않습니다

기술 노트는 `src/content/notes/`의 마크다운 콘텐츠 컬렉션입니다. frontmatter의 `project`가 `projects.ts`의 slug를 가리키면 노트와 프로젝트 상세가 서로 링크됩니다. 노트의 수치는 본문 첫머리에 적은 저장소 파일에서 가져옵니다.

## 도식

`docs/diagrams/*.html`이 도식의 원본이고, 헤드리스 Chrome으로 렌더링한 PNG를 `public/`에 함께 커밋합니다. 각 HTML 첫머리 주석에 렌더링 명령이 있습니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 정적 빌드
npm run preview  # 빌드 결과 미리보기
```

## 라이선스

코드는 [Astrofy](https://github.com/manuelernestog/astrofy) 템플릿(MIT)을 기반으로 하고, 레이아웃 구성은 [Minsu5452.github.io](https://github.com/Minsu5452/Minsu5452.github.io)(MIT)의 구조를 참고해 재구성했습니다. 두 저작권 고지는 `LICENSE`에 유지합니다. 콘텐츠(이력·프로젝트 설명·도식)는 박성윤 본인 자료입니다.
