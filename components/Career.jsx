import { career } from '@/data/profile';

export default function Career() {
  return (
    <section className="section career-section" id="career">
      <div className="section-head">
        <p className="eyebrow">Career Narrative</p>
        <h2>퍼블리싱 → 글로벌 운영 → AI 활용 → React/Next.js 확장</h2>
        <p>경력 흐름이 자연스럽게 “AI 활용형 웹퍼블리셔”로 보이도록 정리했습니다.</p>
      </div>
      <div className="timeline">
        {career.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.company}`}>
            <div className="time">{item.period}</div>
            <div className="timeline-body">
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
