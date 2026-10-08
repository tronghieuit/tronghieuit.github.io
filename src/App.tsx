import { useState } from 'react';
import repositoryStars from './repo-stars.json';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  AudioLines,
  ExternalLink,
  Github,
  Radio,
  Star,
} from '@/components/icons';

function Home() {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const vi = language === 'vi';
  const copy = {
    navWork: vi ? 'Dự án' : 'Work',
    navFocus: vi ? 'Hướng tiếp cận' : 'Approach',
    navCredentials: vi ? 'Chứng chỉ' : 'Credentials',
    kicker: vi ? 'AI / ML · Tập trung vào tiếng nói' : 'AI / ML · Speech-focused',
    firstName: vi ? 'Lê Trọng' : 'Lê Trọng',
    lastName: vi ? 'Hiếu.' : 'Hiếu.',
    intro: vi
      ? <>Tôi xây dựng những hệ thống <strong>speech machine learning nhỏ, nhanh và thực dụng</strong> — để tiếng nói AI hữu ích hơn trong thế giới thật.</>
      : <>I build <strong>small, fast, practical speech machine-learning systems</strong> — making voice AI more useful in the real world.</>,
    github: vi ? 'Xem GitHub của tôi' : 'Explore my GitHub',
    repository: vi ? 'Mã nguồn' : 'Repository',
    tagsVtts: vi ? ['TTS tiếng Việt', 'Đa người nói', 'Zero-shot'] : ['Vietnamese TTS', 'Multi-speaker', 'Zero-shot'],
    tagsTiny: vi ? ['TTS tiếng Anh', 'Mô hình gọn nhẹ', 'Suy luận hiệu quả'] : ['English TTS', 'Compact model', 'Efficient inference'],
    work: vi ? 'Dự án nổi bật' : 'Selected work',
    workDescription: vi ? 'Các dự án mã nguồn mở tập trung vào tổng hợp tiếng nói — từ tiếng Việt đến suy luận gọn nhẹ.' : 'Open-source work in speech synthesis — from Vietnamese voices to compact inference.',
    aside: vi ? 'Tập trung vào mô hình tiếng nói chạy gọn, hỗ trợ nhiều giọng và dễ đưa vào sử dụng.' : 'Focused on speech models that run lean, support more voices, and are easier to put to work.',
    project1: vi ? 'Tổng hợp tiếng Việt nhẹ với TTS đa người nói và nhân bản giọng nói zero-shot.' : 'Lightweight Vietnamese text-to-speech with multi-speaker TTS and zero-shot voice cloning.',
    project2: vi ? 'Mô hình tiếng Anh gọn nhẹ, được thiết kế cho suy luận hiệu quả.' : 'A compact English TTS model designed for efficient inference.',
    approach: vi ? 'Cách tôi tiếp cận' : 'How I approach it',
    approachDesc: vi ? 'Speech AI không chỉ là mô hình. Tôi quan tâm đến toàn bộ con đường từ giọng nói đến trải nghiệm sử dụng.' : 'Speech AI is more than a model. I care about the whole path from voice to a useful experience.',
    p1Title: vi ? 'Tiếng Việt trước' : 'Vietnamese at the core',
    p1: vi ? 'Xây dựng công cụ tổng hợp tiếng nói cho ngôn ngữ và giọng đọc Việt.' : 'Building synthesis tools for Vietnamese language and voices.',
    p2Title: vi ? 'Nhiều giọng nói' : 'More than one voice',
    p2: vi ? 'Khám phá tổng hợp đa người nói và nhân bản giọng nói zero-shot.' : 'Exploring multi-speaker synthesis and zero-shot voice cloning.',
    p3Title: vi ? 'Sẵn sàng triển khai' : 'Ready to run',
    p3: vi ? 'Ưu tiên mô hình nhỏ gọn, suy luận hiệu quả và công cụ mã nguồn mở.' : 'Prioritizing compact models, efficient inference, and open-source tooling.',
    credentials: vi ? 'Chứng chỉ & ghi nhận' : 'Credentials & recognition',
    credentialsEyebrow: vi ? 'Học tập · Cộng đồng · Chứng nhận' : 'Learning · Community · Certification',
    githubStars: vi ? 'sao GitHub' : 'GitHub stars',
    viewKaggle: vi ? 'Xem hồ sơ Kaggle' : 'View Kaggle profile',
    stackTitle: vi ? 'Công cụ trong tay' : 'Tools in hand',
    stackDesc: vi ? 'Một bộ công cụ tập trung, từ thử nghiệm mô hình đến suy luận trên thiết bị.' : 'A focused toolkit, from model experiments to inference at the edge.',
    closingEyebrow: vi ? 'Mã nguồn mở · Speech AI' : 'Open source · Speech AI',
    closingTitle: vi ? 'Cùng làm tiếng nói tốt hơn.' : 'Let’s make voice work better.',
    closingText: vi ? 'Tìm hiểu các dự án, mô hình và ghi chú thực hành của tôi trên GitHub.' : 'Explore my projects, models, and practical notes on GitHub.',
    closingLink: vi ? 'GitHub · tronghieuit' : 'GitHub · tronghieuit',
    footer: vi ? 'Mã nguồn mở · Speech AI' : 'Open source · Speech AI',
    avatar: vi ? 'Ảnh đại diện pixel' : 'Pixel portrait',
  };
  const waveBars = [8,13,18,27,35,23,45,62,38,25,54,74,44,29,48,66,32,20,39,56,30,18,38,26,13,20,10,15,8,12,7,10,6,9,6,7,5,7,4,6,4,5,4,6,3,4,3,5,3,4,3,4,3,3,3,4,2,3,2,3,2,2,3,2,2,2];
  const credentials = [
    { title: 'Kaggle Notebook Master', detail: vi ? 'Kaggle' : 'Kaggle', icon: <AudioLines size={15} /> },
    { title: 'AWS Certified Solutions Architect – Associate', detail: 'AWS SAA', icon: <Radio size={15} />, href: 'https://www.credly.com/badges/70bb428a-394e-4400-95ca-ec3001031dcc/public_url' },
  ];
  const formatStars = new Intl.NumberFormat(vi ? 'vi-VN' : 'en-US');
  return (
    <main className="portfolio">
      <div className="wrap">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Lê Trọng Hiếu, home"><span className="brand-mark">lh</span><span>tronghieuit</span></a>
          <nav className="nav-links" aria-label={vi ? 'Điều hướng chính' : 'Main navigation'}>
            <a href="#work">{copy.navWork}</a><a href="#approach">{copy.navFocus}</a><a href="#credentials">{copy.navCredentials}</a>
          </nav>
          <div className="top-actions">
            <button className="lang-toggle" type="button" onClick={() => setLanguage(vi ? 'en' : 'vi')} aria-label={vi ? 'Switch language to English' : 'Chuyển ngôn ngữ sang tiếng Việt'} aria-pressed={vi}>{vi ? 'VI / EN' : 'EN / VI'}</button>
            <a className="github-top" href="https://github.com/tronghieuit" aria-label="GitHub profile: tronghieuit" target="_blank" rel="noreferrer"><Github size={17} /></a>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="hero-kicker eyebrow rise"><span className="live-dot" />{copy.kicker}</p>
            <h1 className="rise delay">{copy.firstName}<span>{copy.lastName}</span></h1>
            <p className="hero-lede rise delay-more">{copy.intro}</p>
            <div className="hero-ctas rise delay-more">
              <a className="button-primary" href="https://github.com/tronghieuit" target="_blank" rel="noreferrer">{copy.github}<ArrowUpRight size={16} /></a>
              <a className="button-quiet" href="#work">{copy.work}<ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label={copy.avatar}>
            <div className="signal-board">
              <div className="portrait-frame"><img src="/images/profile-avatar.jpg" alt="Pixel-art portrait of Lê Trọng Hiếu" /></div>
              <div className="orbital-wave" aria-hidden="true">{waveBars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              <span className="orbit-label one">VIETNAMESE TTS</span><span className="orbit-label two">VOICE / MODEL / CODE</span><span className="orbit-label three">ZERO-SHOT × MULTI-SPEAKER</span>
            </div>
            <span className="hero-index mono">01 — SPEECH SYSTEMS</span>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <div><span className="eyebrow">01 / {copy.work}</span><h2>{copy.work}</h2></div>
            <p>{copy.workDescription}</p>
          </div>
          <div className="work-intro">
            <div className="work-aside"><p>{copy.aside}</p><span className="mono">TTS · VOICE CLONING · INFERENCE</span></div>
            <div className="project-list">
              <article className="project">
                <span className="project-number mono">01</span><div><div className="project-heading"><h3>v-tts</h3><span className="project-stars"><Star size={14} /><strong>{formatStars.format(repositoryStars['v-tts'])}</strong><span>{copy.githubStars}</span></span></div><p>{copy.project1}</p><div className="project-tags">{copy.tagsVtts.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <a className="project-link" href="https://github.com/tronghieuit/v-tts" target="_blank" rel="noreferrer" aria-label={vi ? 'Xem kho mã v-tts trên GitHub' : 'View v-tts repository on GitHub'}>{copy.repository} <ArrowUpRight size={15} /></a>
              </article>
              <article className="project">
                <span className="project-number mono">02</span><div><div className="project-heading"><h3>tiny-tts</h3><span className="project-stars"><Star size={14} /><strong>{formatStars.format(repositoryStars['tiny-tts'])}</strong><span>{copy.githubStars}</span></span></div><p>{copy.project2}</p><div className="project-tags">{copy.tagsTiny.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <a className="project-link" href="https://github.com/tronghieuit/tiny-tts" target="_blank" rel="noreferrer" aria-label={vi ? 'Xem kho mã tiny-tts trên GitHub' : 'View tiny-tts repository on GitHub'}>{copy.repository} <ArrowUpRight size={15} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="section-heading"><div><span className="eyebrow">02 / {copy.approach}</span><h2>{copy.approach}</h2></div><p>{copy.approachDesc}</p></div>
          <div className="principles">
            <article className="principle"><span className="mono">A — LANGUAGE</span><h3>{copy.p1Title}</h3><p>{copy.p1}</p></article>
            <article className="principle"><span className="mono">B — VOICE</span><h3>{copy.p2Title}</h3><p>{copy.p2}</p></article>
            <article className="principle"><span className="mono">C — SYSTEM</span><h3>{copy.p3Title}</h3><p>{copy.p3}</p></article>
          </div>
        </section>
      </div>

      <section className="credentials" id="credentials">
        <div className="wrap">
          <div className="credentials-head"><h2>{copy.credentials}</h2><span className="eyebrow">03 / {copy.credentialsEyebrow}</span></div>
          <a className="featured-credential" href="https://www.kaggle.com/backtracking" target="_blank" rel="noreferrer" aria-label={vi ? 'Kaggle Competition Expert, Solo — xem hồ sơ Kaggle' : 'Kaggle Competition Expert, Solo — view Kaggle profile'}>
            <span className="featured-credential-copy">
              <span className="featured-credential-eyebrow"><span className="featured-credential-icon"><Award size={18} /></span><span className="mono">KAGGLE / COMPETITIONS</span></span>
              <span className="featured-credential-title">Kaggle Competition Expert</span>
              <span className="featured-credential-action">{copy.viewKaggle}<ArrowUpRight size={14} /></span>
            </span>
            <span className="featured-credential-stamp"><Award size={24} /><span>SOLO</span></span>
          </a>
          <div className="credential-list">
            {credentials.map((item) => <div className="credential" key={item.title}>
              <div className="credential-title"><span className="credential-icon">{item.icon}</span>{item.title}</div>
              {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.detail}<ExternalLink size={13} /><span className="sr-only"> — AWS certificate verification</span></a> : <span className="credential-label">{item.detail}</span>}
            </div>)}
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="section stack-section">
          <div><span className="eyebrow">04 / STACK</span><h2>{copy.stackTitle}</h2><p>{copy.stackDesc}</p></div>
          <div>
            <div className="stack-cloud" aria-label={vi ? 'Công nghệ' : 'Technologies'}><span>Python</span><span>PyTorch</span><span>ONNX Runtime</span><span>Speech AI</span></div>
            <div className="profile-links" aria-label={vi ? 'Hồ sơ bên ngoài' : 'External profiles'}>
              <a href="https://www.kaggle.com/backtracking" target="_blank" rel="noreferrer">Kaggle <ArrowUpRight size={14} /></a>
              <a href="https://huggingface.co/backtracking" target="_blank" rel="noreferrer">Hugging Face <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </div>

      <section className="connect">
        <div className="wrap connect-inner">
          <div><span className="eyebrow">{copy.closingEyebrow}</span><h2>{copy.closingTitle}</h2><p>{copy.closingText}</p></div>
          <a className="connect-link" href="https://github.com/tronghieuit" target="_blank" rel="noreferrer">{copy.closingLink}<ArrowRight size={16} /></a>
        </div>
      </section>
      <footer className="wrap footer"><span>© Lê Trọng Hiếu</span><span>{copy.footer}</span><a href="https://github.com/tronghieuit" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a></footer>
    </main>
  );
}

export default Home;
