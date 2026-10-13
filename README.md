# 박성윤 · Park Sungyun Portfolio

> 데이터가 들어와서 쓰이기까지의 길을 만들고, 그 길이 어디서 끊기는지 먼저 찾습니다.

개인 포트폴리오 사이트의 소스 저장소입니다. Astro + Tailwind + DaisyUI 기반으로 작성됐고, GitHub Actions로 빌드되어 GitHub Pages에 자동 배포됩니다.

- **라이브 사이트**: <https://parksungyun0411.github.io>
- **GitHub 프로필**: <https://github.com/parksungyun0411>

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | Home — 인사말, 대표 프로젝트 4장, 최근 기술 노트 |
| `/projects/` | Projects — Work / Personal / Academic 3개 탭 |
| `/projects/<slug>/` | 프로젝트 상세 — 기간·역할·소속, 배경/접근/결과, 아키텍처 다이어그램, 핵심 수치, 기술 스택, GitHub 링크 |
| `/notes/` | Notes — 프로젝트에서 내린 판단을 문제, 선택지, 고른 이유, 남은 한계의 순서로 정리한 기술 노트 |
| `/notes/<slug>/` | 노트 본문 — 마크다운 아티클, 태그, 관련 프로젝트 링크 |
| `/cv/` | CV — Summary, Skills, Work Experience, Featured Projects, Education, Certifications & Languages, Activities (인쇄 친화 CSS 포함) |

## 기술 스택

- **Framework**: [Astro 4](https://astro.build)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Font**: [Pretendard Variable](https://github.com/orioncactus/pretendard) (본문) + JetBrains Mono (모노스페이스 액센트)
- **배포**: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 프로젝트 데이터 구조

모든 프로젝트는 `src/data/projects.ts` 한 파일에서 관리합니다. 홈, 프로젝트 목록, 프로젝트 상세, CV 페이지가 같은 데이터를 참조해 정보 불일치를 막습니다. 기술 노트는 `src/content/notes/*.md`에 있고 `project` 필드로 프로젝트와 연결됩니다.

## 수치 규칙

본문의 수치는 각 저장소의 리포트와 문서에서 옮긴 값만 적습니다. 실행하지 않은 항목은 "측정 전"으로, 재현 코드로 확인되지 않은 값은 그 범위를 함께 적습니다. 실무 과제의 데이터와 성능 수치는 보안상 적지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## 라이선스·출처

레이아웃 구조는 MIT 라이선스로 공개된 [Minsu5452/Minsu5452.github.io](https://github.com/Minsu5452/Minsu5452.github.io)를 바탕으로 했습니다 (`LICENSE-template`). 본문 내용과 이미지는 박성윤의 것입니다.
