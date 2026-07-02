# parksungyun0411.github.io

박성윤(Park Sung Yun)의 개인 포트폴리오 사이트입니다.
데이터/AI 기반으로 사용자의 본질적인 문제를 해결하는 백엔드 엔지니어로서의 경력·프로젝트·기술 스택을 한 페이지로 소개합니다.

**사이트**: https://parksungyun0411.github.io

## 구성

에디토리얼 지면 스타일의 싱글 페이지입니다. 마스트헤드(제호·소개·주요 기록 색인) 아래로,
스티키 상단 내비게이션을 통해 번호가 매겨진 섹션을 탐색합니다.

- **01 경력** — DACON(기획/QA), 자빅스 인턴, 한이음 너드수학
- **02 대표 프로젝트** — 제주어 다중감정분류 (피처 기사)
- **03 프로젝트 색인** — liar-game, university-coursework
- **04 기술** — 카테고리별 기술 스택
- **05 자격·어학** — 자격증·어학 성적
- **06 연락** — 연락처 (판권면)

타이포그래피는 Hahmlet(디스플레이) + Gothic A1(본문), 색은 종이 톤 배경 + 잉크 텍스트 +
버밀리언 액센트 1색의 라이트 테마입니다.

## 기술 스택

- **Next.js 16** (App Router, 정적 export)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- ESLint 9

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

정적 빌드는 다음으로 생성합니다 (`out/` 디렉토리에 출력):

```bash
npm run build
```

## 배포

GitHub Pages로 배포됩니다.

- `main` 브랜치에 push 하면 GitHub Actions 워크플로우(`.github/workflows/deploy.yml`)가 실행됩니다.
- `next build`로 정적 export(`out/`)를 생성한 뒤 `actions/deploy-pages`로 GitHub Pages에 배포합니다.
- user site(`parksungyun0411.github.io`)이므로 `basePath` 설정 없이 루트 경로로 서빙됩니다 (`next.config.ts` 참고).

## 프로젝트 구조

```
app/            # 레이아웃, 메인 페이지, 전역 스타일(디자인 토큰)
components/     # Masthead, SiteNav, Section 셸 + 섹션별 컴포넌트
public/         # 정적 자산
.github/        # GitHub Pages 배포 워크플로우
```
