# 조은건설 (JOEUN E&C) 코퍼레이트 사이트

Vite + React + TypeScript 로 구축된 B2B 회사 사이트입니다. GitHub Pages 에 자동 배포되며,
상단의 **클래식 / 모던** 토글로 두 가지 디자인 테마를 실시간으로 전환해 볼 수 있습니다.

## 빠른 시작

```bash
npm install
npm run dev          # http://localhost:5173
```

빌드 / 로컬 프리뷰:
```bash
npm run build
npm run preview
```

> 개발 모드(`npm run dev`)에서는 `vite.config.ts` 의 `base` 가 그대로 적용됩니다.
> 별도 base 없이 띄우고 싶다면 `VITE_BASE=/ npm run dev` 로 실행하세요.

## 디렉터리

```
.
├── index.html                  # Vite 엔트리 (테마 CSS 프리로더 포함)
├── vite.config.ts              # base 경로 설정
├── public/
│   └── themes/
│       ├── classic.css         # 클래식 (전통 코퍼레이트, 네이비)
│       └── sleek.css           # 모던 (라이트, 미니멀)
├── src/
│   ├── main.tsx
│   ├── App.tsx                 # 라우팅
│   ├── ThemeContext.tsx        # 테마 상태 + 동적 <link> 관리
│   ├── components/
│   │   └── Layout.tsx          # Topbar / Header / Footer + 테마 스위치
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Business.tsx
│       ├── Projects.tsx
│       ├── Sustainability.tsx
│       └── Support.tsx
└── .github/workflows/deploy.yml
```

## 테마 시스템

두 개의 독립된 CSS 파일을 `public/themes/` 에 두고, 런타임에 `<link id="joeun-theme-css">` 의 `href`
를 바꿔치기하는 방식입니다.

- 선택값은 `localStorage.joeun-theme` 에 저장 → 새로고침해도 유지
- `index.html` 의 인라인 스크립트가 React 마운트 전에 미리 stylesheet 를 주입 → FOUC 최소화
- 토글 UI 는 `Layout.tsx` 의 `<ThemeSwitch />` (Topbar 좌측)

새 테마를 추가하려면:
1. `public/themes/<name>.css` 추가
2. `src/ThemeContext.tsx` 의 `Theme` 유니온에 이름 추가
3. `Layout.tsx` 의 `ThemeSwitch` 에 버튼 추가

## 라우팅

`react-router-dom` 의 **HashRouter** 를 사용합니다. GitHub Pages 에서 직접 URL 접근 / 새로고침
시 404 가 발생하지 않는 가장 안전한 방식입니다. URL 은 `https://<user>.github.io/<repo>/#/about`
형태가 됩니다.

`BrowserRouter` 로 바꾸고 싶다면 별도 SPA 폴백(404.html 리다이렉트 트릭)이 필요합니다.

## GitHub Pages 배포

### 1) GitHub Actions 자동 배포 (권장)

`.github/workflows/deploy.yml` 이 이미 포함되어 있습니다.

1. 리포지토리 생성 후 푸시
   ```bash
   git init
   git add .
   git commit -m "init: 조은건설 코퍼레이트 사이트"
   git branch -M main
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```
2. 리포지토리 **Settings → Pages**
   - Source: `GitHub Actions`
3. 푸시 시 워크플로가 자동으로:
   - `npm ci`
   - `VITE_BASE=/<REPO>/ npm run build`
   - `dist/` 를 Pages 에 배포

빌드 직후 Actions 탭에서 진행 상황과 배포 URL 을 확인할 수 있습니다.

### 2) 수동 배포 (`gh-pages` 패키지)

```bash
npm run deploy
```
`gh-pages` 가 `dist/` 를 `gh-pages` 브랜치로 푸시합니다.
이 경우 Settings → Pages 의 Source 를 `Deploy from a branch` → `gh-pages` 로 변경해야 합니다.

### Base URL 설정

`vite.config.ts` 의 `base` 기본값은 `/joeun-website/` 입니다. 리포지토리 이름과 다르다면:

| 사용 형태 | 설정 |
|---|---|
| Project Pages (`<user>.github.io/<repo>/`) | `base: '/<repo>/'` 또는 Actions 의 `VITE_BASE` 가 자동 처리 |
| User/Org Pages (`<user>.github.io/`) | `base: '/'` 로 변경 |
| 커스텀 도메인 | `base: '/'` + `public/CNAME` 파일에 도메인 기재 |

## 콘텐츠 수정 가이드

| 무엇을 바꾸려면 | 어디 |
|---|---|
| 회사명 / 로고 | `src/components/Layout.tsx` 의 `<Header>`, `<Footer>` |
| 색상 (테마별) | `public/themes/classic.css` `:root`, `public/themes/sleek.css` `:root` |
| 폰트 | `index.html` 의 Google Fonts / Pretendard 링크 |
| 회사 정보 (주소·전화 등) | `src/components/Layout.tsx` Footer + `src/pages/Support.tsx` |
| 프로젝트 카드 | `src/pages/Projects.tsx` 의 `PROJECTS` 배열 |
| 사업분야 블록 | `src/pages/Business.tsx` 의 `BLOCKS`, `INDUSTRIES` 배열 |
| 연혁 | `src/pages/About.tsx` 의 `.timeline` |
| FAQ | `src/pages/Support.tsx` 의 `FAQS` 배열 |

## 자리표시자 (실제 값으로 교체 필요)

- 사업자등록번호: `123-45-67890`
- 대표이사: `김조은`
- 주소: `서울특별시 강남구 테헤란로 000, 10층`
- 전화: `02-0000-0000`, `1588-0000`
- 이메일: `contact@joeun-enc.co.kr`, `sales@joeun-enc.co.kr`, `partners@joeun-enc.co.kr`
- 통계 수치 (27년, 480+, 99.7%, -32% 등)
- 프로젝트 목록의 발주처 표현
- 지도 영역: Kakao/Naver Map 임베드 코드로 교체 (`src/pages/Support.tsx`)

## 문의 폼

현재는 `alert()` 만 띄우는 더미입니다. 실제 운영 시:
- 외부 폼 서비스 (Formspree, Getform 등) 액션 URL 로 변경
- 또는 자체 API 호출 — `src/pages/Support.tsx` 의 `handleSubmit` 수정

## 기술 스택

- Vite 5 + React 18 + TypeScript 5
- React Router 6 (HashRouter)
- 폰트: Pretendard (모던 테마), Noto Sans/Serif KR (클래식 테마)
- 의존성 최소화 — UI 라이브러리/CSS 프레임워크 없음
