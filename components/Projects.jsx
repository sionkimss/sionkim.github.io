import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/profile';

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">Selected Work</p>
        <h2>경력직 포트폴리오에서 바로 읽히는 프로젝트</h2>
        <p>의료·뷰티 업종 중심의 퍼블리싱, 글로벌 웹사이트 운영, AI 콘텐츠 제작 경험을 채용 관점에서 정리했습니다.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={index === 0 ? 'project-card featured' : 'project-card'} key={project.title}>
            <div className="project-top">
              <p>{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="impact-list">
              {project.impact.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="tag-row">
              {project.tags.map((tag) => <em key={tag}>{tag}</em>)}
            </div>
            {project.links && (
              <div className="link-row">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}<ExternalLink size={14}/>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
