import { aiWorkflow } from '@/data/profile';

export default function AIWorkflow() {
  return (
    <section className="ai-section" id="ai">
      <div className="section-head dark">
        <p className="eyebrow">AI Workflow</p>
        <h2>AI를 “쓸 줄 아는 사람”이 아니라, 결과물로 연결하는 사람</h2>
        <p>기획, 이미지 생성, 퍼블리싱 적용, 코드 개선까지 실제 업무 흐름 안에서 AI를 활용합니다.</p>
      </div>
      <div className="workflow-grid">
        {aiWorkflow.map((item) => (
          <article className="workflow-card" key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
