import { profile } from '@/data/profile';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">SION<span>.</span>AI</a>
      <nav className="nav-links" aria-label="주요 메뉴">
        <a href="#strength">Strength</a>
        <a href="#ai">AI Workflow</a>
        <a href="#work">Work</a>
        <a href="#career">Career</a>
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>Contact</a>
    </header>
  );
}
