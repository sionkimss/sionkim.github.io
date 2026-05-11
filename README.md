# Sion Kim Next.js Portfolio

기존 `index.html` 기반 포트폴리오를 React + Next.js 구조로 전환한 버전입니다.

## 핵심 변경점

- `index.html` 한 파일 구조 → `app/page.jsx`, `app/layout.jsx`, `app/globals.css` 구조
- 반복되는 포트폴리오 카드, 스킬 카드, 경력 내용을 배열 데이터로 분리
- React `map()` 렌더링으로 유지보수성 개선
- Next.js App Router 사용
- GitHub Pages 배포를 위한 static export 설정 포함

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인합니다.

## 빌드 방법

```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다.

## GitHub Pages 배포용 빌드

현재 저장소명이 `sionkim.github.io`이고 주소가 `/sionkim.github.io/` 경로를 쓰기 때문에 아래처럼 빌드합니다.

```bash
GITHUB_PAGES=true npm run build
```

그 후 `out/` 폴더 내용을 GitHub Pages에 배포하면 됩니다.

## 포트폴리오에서 설명하면 좋은 문장

> 기존 HTML/CSS/JavaScript 기반 정적 포트폴리오를 Next.js App Router 구조로 마이그레이션했습니다. 반복 UI를 React 컴포넌트와 데이터 배열로 분리해 유지보수성을 개선했고, GitHub Pages 배포를 고려한 static export 환경을 구성했습니다.
