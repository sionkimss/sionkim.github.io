import './globals.css';

export const metadata = {
  title: '김시온 | AI-Driven Web Publisher Portfolio',
  description: 'AI 도구와 React/Next.js를 활용하는 경력직 웹퍼블리셔 김시온 포트폴리오',
  openGraph: {
    title: '김시온 | AI-Driven Web Publisher',
    description: '글로벌 의료 웹사이트 운영, AI 이미지/콘텐츠 제작, React/Next.js 기반 포트폴리오',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
