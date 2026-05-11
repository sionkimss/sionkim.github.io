import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">Contact</p>
      <h2>AI를 활용해 더 빠르게 구현하고,<br />더 나은 UI로 완성하는 웹퍼블리셔</h2>
      <div className="contact-actions">
        <a className="primary-btn" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="ghost-btn light" href={profile.portfolio} target="_blank" rel="noreferrer">Published Portfolio</a>
      </div>
    </section>
  );
}
