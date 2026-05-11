import { ArrowUpRight, Sparkles } from 'lucide-react';
import { metrics, profile } from '@/data/profile';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="badge"><Sparkles size={16}/> 2026 AI-Driven Web Publisher</div>
        <h1>
          AI와 디자인 감각을<br />
          실무 퍼블리싱에 연결하는<br />
          <span>김시온</span>입니다.
        </h1>
        <p>{profile.summary}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#work">프로젝트 보기 <ArrowUpRight size={18}/></a>
          <a className="ghost-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub 보기</a>
        </div>
      </div>

      <div className="hero-panel">
        <p className="panel-kicker">POSITIONING</p>
        <ul>
          {profile.positioning.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="metric-grid">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
