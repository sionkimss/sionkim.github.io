'use client';

import { useEffect, useMemo, useState } from 'react';

const navItems = [
  ['Skills', '#skills'],
  ['Work', '#portfolio'],
  ['Global', '#global'],
  ['Career', '#career'],
  ['Contact', '#contact']
];

const skills = [
  {
    icon: '🧱',
    title: '퍼블리싱 · 마크업',
    desc: '웹표준·접근성 준수 시맨틱 마크업, 반응형 CSS, jQuery 인터랙션, 카페24·그누보드·아임웹 커스터마이징.',
    items: [
      ['devicon-html5-plain', 'HTML5'],
      ['devicon-css3-plain', 'CSS3'],
      ['devicon-javascript-plain', 'JS'],
      ['devicon-jquery-plain', 'jQuery'],
      ['devicon-wordpress-plain', 'WordPress']
    ]
  },
  {
    icon: '🎨',
    title: 'UI/UX · 디자인 툴',
    desc: 'Figma·Adobe XD UI 가이드 제작, Photoshop·Illustrator 웹 배너·패키지 디자인, InDesign 편집 디자인.',
    items: [
      ['devicon-figma-plain', 'Figma'],
      ['devicon-xd-plain', 'Adobe XD'],
      ['devicon-photoshop-plain', 'Photoshop'],
      ['devicon-illustrator-plain', 'Illustrator']
    ]
  },
  {
    icon: '⚛️',
    title: 'React · Next.js 확장',
    desc: '기존 HTML/CSS 포트폴리오를 컴포넌트 기반 Next.js 구조로 전환. 반복 UI를 데이터 배열과 map 렌더링으로 관리합니다.',
    items: [
      ['devicon-react-original', 'React'],
      ['devicon-nextjs-original', 'Next.js'],
      ['devicon-javascript-plain', 'JSX'],
      ['devicon-github-original', 'Pages']
    ]
  },
  {
    icon: '🤖',
    title: 'AI 도구 활용',
    desc: 'ChatGPT·Claude·힉스필드·나노바나나 활용 AI 이미지 생성 및 프롬프트 엔지니어링. 카카오톡 AI 챗봇 1인 제작 경험.',
    custom: ['ChatGPT', 'Claude', '힉스필드', '나노바나나', '카카오챗봇']
  },
  {
    icon: '🌐',
    title: '협업 · 버전관리',
    desc: 'Git·GitHub 협업, VS Code 개발 환경, Google Analytics·Tag Manager SEO 설정, 다국어 CMS 운영.',
    items: [
      ['devicon-git-plain', 'Git'],
      ['devicon-github-original', 'GitHub'],
      ['devicon-vscode-plain', 'VS Code']
    ]
  }
];

const aiTools = [
  ['🤖', 'ChatGPT', '이미지 생성, 콘텐츠 기획, 카피라이팅, 코드 디버깅에 활용.', ['이미지 생성', '카피라이팅', '코드 보조']],
  ['✦', 'Claude', '문서 작성, 기획서 구조화, UI 텍스트 최적화에 활용.', ['문서 기획', 'UI 텍스트', '콘텐츠 구조']],
  ['⚡', '힉스필드', '의료·뷰티 분야 고퀄리티 AI 광고 이미지 생성 및 보정.', ['광고 이미지', '모델 보정', '의료 비주얼']],
  ['🍌', '나노바나나', 'SNS 카드뉴스, 이벤트 이미지, 배너 등 마케팅 이미지 자동 생성.', ['SNS 콘텐츠', '배너', '이벤트 이미지']],
  ['💬', '카카오 챗봇', '미클리닉 카카오톡 AI 챗봇 1인 기획·시나리오 설계·제작·연동 완료.', ['시나리오 설계', '1인 개발', '웹사이트 연동']]
];

const works = [
  {
    title: '신상성형외과 사이트 리뉴얼 & SNS 런칭',
    meta: '2026 · 신상성형외과',
    desc: '사이트 리뉴얼 기획·UI 디자인(Figma·XD), 피부과 런칭 인스타그램 오픈 피드 D-7~D-1 21장 제작, 그랜드 오프닝 이미지 제작. ChatGPT·Claude·힉스필드·나노바나나 활용 AI 이미지 생성 및 보정.',
    icon: '🏥', label: '성형외과 리뉴얼 · AI 이미지 제작', cats: ['design', 'ai'], wide: true,
    tags: ['Figma', 'Adobe XD', 'AI 이미지', 'SNS 콘텐츠 21장', 'UI 기획'], badges: ['의료', 'AI 활용', '재직중'], links: [['🖼 작업 이미지 보기', '/gallery#sinsung']]
  },
  {
    title: '나나성형외과 글로벌 홈페이지', meta: '2024.12–2026.03 · (주)지투지',
    desc: '7개국 다국어 리뉴얼·유지보수. CMS 구조 개선, 반응형 HTML/CSS/JS, SEO 최적화.',
    icon: '🌏', label: 'Global 7 Countries', cats: ['pub'], tags: ['HTML5', 'CSS3', 'JS', 'CMS', 'SEO'], badges: ['Global', 'Live'],
    links: [['🌐 영어', 'https://en.nanahospital.com/'], ['🇯🇵 일본', 'https://jp.nanahospital.com/'], ['🇨🇳 중국', 'https://cn.nanahospital.com/']]
  },
  {
    title: '미클리닉 피부과 홈페이지', meta: '2023.07–2024.09 · (주)티티엘홀딩스',
    desc: '그누보드 기반 유지보수, 반응형 퍼블리싱, 신규 예약 서비스 제작, AI 챗봇 연동.',
    icon: '💉', label: '피부과 홈페이지', cats: ['pub'], tags: ['그누보드', 'HTML5/CSS3', 'jQuery'], badges: ['의료', 'Live'],
    links: [['🔗 홈페이지', 'https://www.mecl0.com/']]
  },
  {
    title: '미클리닉 서비스 랜딩페이지 (립필러·튠)', meta: '2023.07–2024.09 · (주)티티엘홀딩스',
    desc: '각 시술별 마케팅 랜딩페이지 1인 기획·디자인·퍼블리싱. 클라이언트 소통, 반응형 최적화, GA 연동 전 과정 담당.',
    icon: '📄', label: '랜딩페이지 1인 기획·제작', cats: ['pub'], wide: true,
    tags: ['HTML5/CSS3', 'jQuery', 'GA 연동', '1인 기획~퍼블'], badges: ['랜딩', 'Live'],
    links: [['🔗 립필러 LP', 'https://www.mecl2.com/landing/lipfiller.php'], ['🔗 튠 LP', 'https://www.mecl2.com/landing/tune.php']]
  },
  {
    title: '미클리닉 카카오톡 AI 챗봇', meta: '2023.07–2024.09 · (주)티티엘홀딩스',
    desc: '엔티티·엔트리 기반 시나리오 설계부터 챗봇 제작, 반응형 웹 연동까지 1인 전담.',
    icon: '🤖', label: 'AI 챗봇 1인 개발', cats: ['bot', 'ai'], tags: ['카카오 챗봇', '시나리오 설계', 'HTML5/JS'], badges: ['AI', 'KakaoTalk'], links: [['🔒 내부 프로젝트', '#']]
  },
  {
    title: '이매진스 이모티콘·스티커 콘텐츠', meta: '2023.12–현재 · 게티이미지코리아',
    desc: '트렌드 분석 기반 이모티콘·스티커 제작 및 판매. 대중성과 감성을 결합한 캐릭터 디자인.',
    icon: '😊', label: '이모티콘 작가', cats: ['design'], tags: ['Illustrator', 'Procreate', '콘텐츠 기획'], badges: ['이모티콘', '판매중'], links: [['🔗 게티이미지코리아', 'https://www.gettyimageskorea.com/'], ['🖼 이모티콘 보기', '/gallery#emoticon']]
  },
  {
    title: '라미스떼 화장품 브랜드 디자인', meta: '2023.07–2024.09 · 티티엘홀딩스',
    desc: '홈페이지·네이버 스마트스토어 광고 이미지, 배너·상세페이지 디자인. 브랜드 아이덴티티 반영.',
    icon: '🧴', label: '화장품 브랜드 디자인', cats: ['design'], tags: ['Photoshop', 'Illustrator', '스마트스토어'], badges: ['브랜딩'], links: [['🖼 작업물 보기', '/gallery#lamisthe']]
  },
  {
    title: '보테지앙 패키지 디자인', meta: '2023.07–2024.09 · 티티엘홀딩스',
    desc: '다이어트 단백질 쉐이크 브랜드 패키지 디자인 2인 협업. Photoshop·Illustrator로 브랜드 아이덴티티 구현.',
    icon: '📦', label: '패키지 디자인', cats: ['design'], tags: ['Photoshop', 'Illustrator', '패키지 디자인'], badges: ['패키지'], links: [['🖼 작업물 보기', '/gallery#botejian']]
  }
];

const countries = [
  ['🇺🇸', '영어권', 'en.nanahospital.com', 'https://en.nanahospital.com/'],
  ['🇯🇵', '일본', 'jp.nanahospital.com', 'https://jp.nanahospital.com/'],
  ['🇨🇳', '중국', 'cn.nanahospital.com', 'https://cn.nanahospital.com/'],
  ['🇻🇳', '베트남', 'vn.nanahospital.com', 'https://vn.nanahospital.com/'],
  ['🇹🇭', '태국', 'th.nanahospital.com', 'https://th.nanahospital.com/'],
  ['🇲🇳', '몽골', 'mn.nanahospital.com', 'https://mn.nanahospital.com/'],
  ['🇮🇩', '인도네시아', 'id.nanahospital.com', 'https://id.nanahospital.com/']
];

const careers = [
  ['2026.03 — 현재 · 재직중', '신상성형외과', '웹퍼블리셔 · UI/UX 디자이너', '사이트 리뉴얼 기획·Figma·XD 활용 UI 가이드 제작. 피부과 런칭 인스타그램 D-7~D-1 오픈 피드 21장 제작, 그랜드 오프닝 이미지 제작. ChatGPT·Claude·힉스필드·나노바나나 활용 AI 이미지 생성 및 보정.', ['Figma', 'Adobe XD', 'AI 이미지', 'SNS 콘텐츠']],
  ['2024.12 — 2026.03 · 1년 4개월', '(주)지투지 국제 디자인팀', '웹퍼블리셔', '나나성형외과 7개국 홈페이지 리뉴얼 및 정기 유지보수. CMS 입력 항목 확장 및 DB 저장 기능 구현. 중국 시장 대응, Adobe XD PC/모바일 UI 가이드 제작, SEO·GA·GTM 설정.', ['HTML5/CSS3/JS', 'CMS', 'SEO', '7개국 운영', 'Adobe XD']],
  ['2023.12 — 현재 · 프리랜서 병행', '게티이미지코리아', '이매진스 이모티콘·스티커 프리랜서 작가', '이모티콘·스티커 콘텐츠 기획 및 판매. 트렌드 빠르게 읽고 대중성·감성 결합 캐릭터 디자인.', ['Illustrator', 'Procreate', '콘텐츠 기획']],
  ['2023.07 — 2024.09 · 1년 3개월', '(주)티티엘홀딩스', '디자인팀 웹퍼블리셔', '카카오톡 AI 챗봇 1인 제작·반응형 웹 연동. 그누보드·아임웹 웹사이트 구축. 미클리닉 홈페이지 유지보수, 랜딩페이지·마케팅 디자인 1인 전담.', ['HTML5/CSS3/JS', '그누보드', '카카오챗봇', '랜딩페이지']],
  ['2020.03 — 2022.09 · 2년 7개월', '로맨티크', '프리랜서 디자이너', 'SNS 콘텐츠 디자인·마케팅 운영. Procreate·Photoshop·Illustrator 활용 맞춤 디자인 제작.', ['Procreate', 'SNS 마케팅', '콘텐츠 제작']]
];

function SectionHead({ eyebrow, title, sub }) {
  return <div className="s-head reveal"><div className="eyebrow">{eyebrow}</div><h2 className="s-title">{title}</h2>{sub && <p className="s-sub">{sub}</p>}</div>;
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const filteredWorks = useMemo(() => works.filter(work => filter === 'all' || work.cats.includes(filter)), [filter]);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal,.pf-card').forEach(el => obs.observe(el));
    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, [filter]);

  return (
    <>
      <nav className="nav" id="nav">
        <a href="#top" className="nav-logo">SION<span>.</span></a>
        <ul className="nav-links">{navItems.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        <a href="mailto:lpoint__@naver.com" className="nav-cta">Contact</a>
        <button className={`ham ${menuOpen ? 'open' : ''}`} aria-label="메뉴 열기" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
      </nav>
      <div className={`mob-menu ${menuOpen ? 'show' : ''}`}>{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="mailto:lpoint__@naver.com" className="mob-cta">lpoint__@naver.com</a></div>

      <header id="top" className="hero">
        <div className="hero-left">
          <div className="hero-tag">Web Publisher · UI/UX · Brand Designer</div>
          <h1 className="hero-name">디자인과 개발,<br />AI를 <em>연결하는</em><br />김시온</h1>
          <p className="hero-desc">HTML5·CSS3·JavaScript 기반 반응형 퍼블리싱과<br />7개국 글로벌 홈페이지 운영, Adobe 툴·AI 도구를<br />함께 활용하는 실무형 웹퍼블리셔입니다.</p>
          <div className="hero-btns"><a href="#portfolio" className="btn-p">포트폴리오 보기 →</a><a href="#contact" className="btn-o">연락하기</a></div>
        </div>
        <div className="hero-right reveal">
          <div className="hero-stats-grid">{[['7+', 'Years Exp.'], ['7', '국가 운영'], ['50+', 'Projects'], ['AA', '접근성 등급']].map(([n, l]) => <div className="h-stat" key={l}><span className="h-stat-n">{n}</span><span className="h-stat-l">{l}</span></div>)}</div>
          <div className="hero-badge-row"><span className="h-badge blue">HTML/CSS/JS</span><span className="h-badge blue">React/Next.js</span><span className="h-badge">Adobe XD · Figma</span><span className="h-badge red">AI 이미지 생성</span><span className="h-badge">7개국 글로벌</span></div>
        </div>
      </header>

      <hr className="divider" />
      <section className="section" id="skills">
        <SectionHead eyebrow="Skills" title="사용 기술 & 도구" sub="마크업부터 디자인, React/Next.js 전환, AI 도구 활용까지 — 웹 전 과정을 커버합니다." />
        <div className="skills-wrap">{skills.map(skill => <article className="skill-card reveal" key={skill.title}><div className="sk-head"><span className="sk-emoji">{skill.icon}</span><span className="sk-title">{skill.title}</span></div><p className="sk-desc">{skill.desc}</p><div className="icon-grid">{skill.items?.map(([cls, label]) => <div className="icon-item" key={label}><i className={cls}></i><span>{label}</span></div>)}{skill.custom?.map(label => <div className="icon-item" key={label}><div className="ai-icon">AI</div><span>{label}</span></div>)}</div></article>)}</div>
      </section>

      <section className="tech-case section">
        <SectionHead eyebrow="React / Next.js Case" title="기존 포트폴리오를 컴포넌트 기반으로 전환" sub="반복되는 카드·스킬·경력 정보를 배열 데이터로 분리하고, React map 렌더링으로 유지보수하기 쉽게 구성했습니다." />
        <div className="case-grid reveal"><div><strong>Before</strong><p>HTML 파일 하나에 모든 마크업, CSS, 스크립트가 들어간 정적 페이지</p></div><div><strong>After</strong><p>Next.js App Router + React 컴포넌트 + 데이터 배열 기반 포트폴리오</p></div><div><strong>Portfolio Point</strong><p>“기존 퍼블리싱 결과물을 React/Next.js로 마이그레이션한 경험”으로 설명 가능</p></div></div>
      </section>

      <section className="ai-section"><div className="ai-inner"><div className="ai-eyebrow">AI Tools</div><h2 className="ai-title">AI를 적극 활용하는<br />퍼블리셔·디자이너</h2><p className="ai-sub">단순 도구 사용을 넘어 프롬프트 설계부터 결과물 편집·적용까지 실무에 AI를 녹여냅니다.</p><div className="ai-tools">{aiTools.map(([icon, name, desc, uses]) => <article className="ai-tool reveal" key={name}><div className="ai-tool-head"><div className="ai-tool-icon">{icon}</div><span className="ai-tool-name">{name}</span></div><p className="ai-tool-desc">{desc}</p><div className="ai-use">{uses.map(use => <span key={use}>{use}</span>)}</div></article>)}</div><a href="/gallery" className="ai-gallery-link">AI 작업물 갤러리 보기 →</a></div></section>

      <section className="section" id="portfolio">
        <div className="pf-head reveal"><div><div className="eyebrow">Portfolio</div><h2 className="s-title">Selected Work</h2></div><div className="pf-filter">{[['all','전체'], ['pub','퍼블리싱'], ['design','디자인'], ['bot','챗봇'], ['ai','AI 작업']].map(([key, label]) => <button key={key} className={`fb ${filter === key ? 'on' : ''}`} onClick={() => setFilter(key)}>{label}</button>)}</div></div>
        <div className="pf-grid">{filteredWorks.map(work => <article className={`pf-card ${work.wide ? 'wide' : ''}`} key={work.title}><div className="pf-thumb"><div className="pf-thumb-inner"><span className="pf-thumb-icon">{work.icon}</span><span className="pf-thumb-lbl">{work.label}</span></div><div className="pf-bgs">{work.badges.map(b => <span className="bg-tag" key={b}>{b}</span>)}</div></div><div className="pf-body"><div className="pf-meta">{work.meta}</div><h3 className="pf-title">{work.title}</h3><p className="pf-desc">{work.desc}</p><div className="pf-pills">{work.tags.map(tag => <span className="pf-pill" key={tag}>{tag}</span>)}</div><div className="pf-foot">{work.links.map(([label, href]) => <a className="pf-lk" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{label}</a>)}</div></div></article>)}</div>
      </section>

      <hr className="divider" />
      <section className="section" id="global"><SectionHead eyebrow="Global Work" title="7개국 홈페이지 운영" sub="(주)지투지에서 나나성형외과 글로벌 홈페이지 7개국 버전을 리뉴얼·운영·유지보수했습니다." /><div className="global-wrap reveal">{countries.map(([flag, name, url, href]) => <a className="country-card" href={href} target="_blank" rel="noopener noreferrer" key={url}><span className="flag">{flag}</span><span className="cn-name">{name}</span><span className="cn-url">{url}</span></a>)}</div></section>

      <hr className="divider" />
      <section className="section" id="career"><SectionHead eyebrow="Career" title="경력 기술서" sub="총 7년 8개월 · 퍼블리싱·디자인·AI 도구 활용을 아우르는 복합 실무 경력" /><div className="career-list reveal">{careers.map(([period, company, role, desc, tags], idx) => <article className="cr-item" key={company}><div className={`cr-dot ${idx > 1 ? 'past' : ''}`} /><div className="cr-period">{period}</div><h3 className="cr-company">{company}</h3><div className="cr-role">{role}</div><p className="cr-desc">{desc}</p><div className="cr-pills">{tags.map(tag => <span className="cr-pill" key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <hr className="divider" />
      <section className="section" id="contact"><SectionHead eyebrow="Contact" title="함께 일해요" sub="프로젝트 문의, 협업 제안, 채용 문의 모두 환영합니다." /><div className="contact-mail reveal"><a href="mailto:lpoint__@naver.com">lpoint__@naver.com</a></div><div className="contact-cards reveal"><a className="c-card" href="mailto:lpoint__@naver.com"><span className="c-icon">✉️</span><div><div className="c-lbl">Email</div><div className="c-val">lpoint__@naver.com</div></div></a><a className="c-card" href="https://github.com/sionkimss/sionkim.github.io" target="_blank" rel="noopener noreferrer"><span className="c-icon">⚛️</span><div><div className="c-lbl">GitHub</div><div className="c-val">Next.js Portfolio</div></div></a></div></section>

      <footer><div className="foot-logo">SION<span>.</span></div><div>© 2026 김시온 · Web Publisher & UI Designer</div><a className="foot-url" href="https://sionkimss.github.io/sionkim.github.io/" target="_blank" rel="noopener noreferrer">sionkimss.github.io/sionkim.github.io/</a></footer>
    </>
  );
}
