import './globals.css';

export const metadata = {
  title: 'Sion Kim · Web Publisher & UI Designer',
  description: '김시온 — 글로벌 웹퍼블리셔 & UI/UX 디자이너. 7개국 다국어 홈페이지 · 반응형 웹 · AI 활용 디자인',
  openGraph: {
    title: 'Sion Kim · Web Publisher & Designer',
    description: '디자인·개발·AI를 연결하는 실무형 웹퍼블리셔 김시온',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
