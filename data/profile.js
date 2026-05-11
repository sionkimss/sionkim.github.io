export const profile = {
  name: '김시온',
  role: 'AI-Driven Web Publisher · UI/UX Designer',
  email: 'lpoint__@naver.com',
  github: 'https://github.com/sionkimss/sionkim.github.io',
  portfolio: 'https://sionkimss.github.io/sionkim.github.io/',
  summary:
    'HTML/CSS/JavaScript 기반 퍼블리싱 실무 경험에 AI 이미지·콘텐츠 제작, 글로벌 다국어 웹사이트 운영, React/Next.js 구조화를 더해 성장 중인 경력직 웹퍼블리셔입니다.',
  positioning: [
    'AI 도구를 실무 콘텐츠 제작과 코드 보조에 적극 활용',
    '7개국 글로벌 의료 홈페이지 리뉴얼·운영 경험',
    '반응형 웹, 웹표준, 접근성, SEO, GA/GTM 기본 이해',
    '퍼블리셔에서 React/Next.js 기반 프론트엔드 친화형 인재로 확장',
  ],
};

export const metrics = [
  { value: '7+', label: 'Years Experience' },
  { value: '7', label: 'Countries Website Ops' },
  { value: '50+', label: 'Projects & Assets' },
  { value: 'AI', label: 'Content · Design · Code Assist' },
];

export const techStack = [
  {
    title: 'Publishing Core',
    desc: '시맨틱 마크업, 반응형 UI, jQuery 인터랙션, CMS 커스터마이징',
    items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Web', 'Web Accessibility'],
  },
  {
    title: 'React / Next.js',
    desc: '컴포넌트 기반 UI 구조, 데이터 분리, 정적 export, GitHub Pages 배포',
    items: ['React', 'Next.js', 'App Router', 'Component UI', 'Static Export', 'GitHub Actions'],
  },
  {
    title: 'Design System',
    desc: 'Figma/XD 기반 UI 가이드, Adobe 툴을 활용한 웹·SNS·브랜드 디자인',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI Guide', 'Brand Visual'],
  },
  {
    title: 'AI Workflow',
    desc: '기획, 카피, 이미지 생성, 코드 보조, 프롬프트 설계까지 실무 적용',
    items: ['ChatGPT', 'Claude', 'Higgsfield', 'Nano Banana', 'Prompt Design', 'AI Image Editing'],
  },
];

export const aiWorkflow = [
  {
    step: '01',
    title: '기획 · 카피 구조화',
    body: 'ChatGPT/Claude로 랜딩페이지 메시지, SNS 오픈 피드 문구, 채용용 포트폴리오 설명을 구조화합니다.',
  },
  {
    step: '02',
    title: 'AI 비주얼 생성',
    body: '힉스필드·나노바나나 등으로 의료/뷰티 톤의 이미지 레퍼런스와 광고 비주얼을 생성하고 보정합니다.',
  },
  {
    step: '03',
    title: '퍼블리싱 적용',
    body: 'AI 결과물을 실제 반응형 페이지, 카드뉴스, 랜딩페이지 UI에 맞춰 편집·적용합니다.',
  },
  {
    step: '04',
    title: '코드 보조 · 개선',
    body: 'React/Next.js 구조화, CSS 정리, 배포 오류 해결 등에 AI를 보조 도구로 사용합니다.',
  },
];

export const projects = [
  {
    eyebrow: 'Current · Medical · AI',
    title: '신상성형외과 사이트 리뉴얼 & 피부과 런칭 콘텐츠',
    desc: 'Figma/XD 기반 UI 가이드와 SNS 오픈 피드 D-7~D-1 콘텐츠 제작. AI 이미지 생성·보정과 의료 광고 톤앤매너 설계를 함께 수행했습니다.',
    impact: ['AI 이미지 생성', 'SNS 21장 제작', 'UI 리뉴얼 기획', '의료 브랜딩'],
    tags: ['Figma', 'Adobe XD', 'ChatGPT', 'Claude', 'Higgsfield', 'Nano Banana'],
  },
  {
    eyebrow: 'Global · Publishing',
    title: '나나성형외과 7개국 글로벌 홈페이지 운영',
    desc: '영어·일본·중국·베트남·태국·몽골·인도네시아 페이지 리뉴얼/유지보수. 국가별 언어와 콘텐츠 구조를 고려한 다국어 퍼블리싱을 진행했습니다.',
    impact: ['7개국 운영', 'CMS 구조 개선', 'SEO/GA/GTM', '반응형 유지보수'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'CMS', 'SEO'],
    links: [
      { label: 'EN Site', href: 'https://en.nanahospital.com/' },
      { label: 'JP Site', href: 'https://jp.nanahospital.com/' },
      { label: 'CN Site', href: 'https://cn.nanahospital.com/' },
    ],
  },
  {
    eyebrow: 'Landing · Healthcare',
    title: '미클리닉 랜딩페이지 & 예약 서비스',
    desc: '그누보드 기반 홈페이지 유지보수, 시술별 랜딩페이지 기획·디자인·퍼블리싱, 신규 예약 서비스와 반응형 UI를 제작했습니다.',
    impact: ['1인 기획~퍼블리싱', 'GA 연동', '반응형 최적화', '마케팅 랜딩'],
    tags: ['Gnuboard', 'HTML/CSS', 'jQuery', 'GA'],
    links: [{ label: 'MECL Site', href: 'https://www.mecl0.com/' }],
  },
  {
    eyebrow: 'AI Bot · Kakao',
    title: '미클리닉 카카오톡 AI 챗봇',
    desc: '엔티티·엔트리 기반 시나리오 설계부터 챗봇 제작과 웹사이트 연동까지 1인으로 진행했습니다.',
    impact: ['1인 제작', '시나리오 설계', '웹 연동', '상담 UX 개선'],
    tags: ['Kakao Chatbot', 'Scenario Design', 'HTML/JS'],
  },
  {
    eyebrow: 'Brand · Design',
    title: '라미스떼·보테지앙 브랜드 디자인',
    desc: '화장품 브랜드 배너, 상세페이지, 스마트스토어 이미지, 패키지 디자인 등 커머스/브랜드 비주얼을 제작했습니다.',
    impact: ['상세페이지', '패키지', '배너', '커머스 디자인'],
    tags: ['Photoshop', 'Illustrator', 'Smart Store'],
  },
];

export const career = [
  {
    period: '2026.03 — 현재',
    company: '신상성형외과',
    role: '웹퍼블리셔 · UI/UX 디자이너',
    body: '사이트 리뉴얼 기획, Figma/XD UI 가이드 제작, 피부과 런칭 SNS 콘텐츠 21장 제작, AI 이미지 생성 및 보정.',
  },
  {
    period: '2024.12 — 2026.03',
    company: '(주)지투지 국제 디자인팀',
    role: '웹퍼블리셔',
    body: '나나성형외과 7개국 글로벌 홈페이지 리뉴얼·유지보수, CMS 개선, 중국 시장 대응, SEO/GA/GTM 설정.',
  },
  {
    period: '2023.12 — 현재',
    company: '게티이미지코리아',
    role: '이매진스 이모티콘·스티커 프리랜서 작가',
    body: '트렌드 기반 이모티콘·스티커 콘텐츠 기획 및 판매.',
  },
  {
    period: '2023.07 — 2024.09',
    company: '(주)티티엘홀딩스',
    role: '디자인팀 웹퍼블리셔',
    body: '카카오톡 AI 챗봇 1인 제작, 그누보드/아임웹 구축, 랜딩페이지 및 마케팅 디자인 전담.',
  },
  {
    period: '2020.03 — 2022.09',
    company: '로맨티크',
    role: '프리랜서 디자이너',
    body: 'SNS 콘텐츠 디자인과 마케팅 운영, 맞춤형 비주얼 제작.',
  },
];
