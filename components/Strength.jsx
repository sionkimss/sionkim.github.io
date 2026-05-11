import { techStack } from '@/data/profile';

export default function Strength() {
  return (
    <section className="section" id="strength">
      <div className="section-head">
        <p className="eyebrow">Core Strength</p>
        <h2>단순 마크업이 아니라, AI 시대에 맞는 퍼블리싱 역량</h2>
        <p>기존 HTML/CSS 기반 실무 경험을 React/Next.js 구조화, AI 콘텐츠 제작, 글로벌 운영 경험과 연결했습니다.</p>
      </div>
      <div className="stack-grid">
        {techStack.map((stack) => (
          <article className="stack-card" key={stack.title}>
            <h3>{stack.title}</h3>
            <p>{stack.desc}</p>
            <div className="chip-row">
              {stack.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
