const projects = [
  {
    number: "01",
    name: "v-tts",
    category: "VIETNAMESE SPEECH",
    description:
      "Lightweight Vietnamese text-to-speech with multi-speaker synthesis and zero-shot voice cloning.",
    href: "https://github.com/tronghieuit/v-tts",
    visual: "voice",
    label: "VOICE / 01",
  },
  {
    number: "02",
    name: "tiny-tts",
    category: "EFFICIENT INFERENCE",
    description:
      "A compact English text-to-speech model designed for efficient inference, with just 1M parameters.",
    href: "https://github.com/tronghieuit/tiny-tts",
    visual: "engine",
    label: "MODEL / 02",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Speech synthesis",
    detail: "Vietnamese text-to-speech, speaker variation, and voice cloning.",
  },
  {
    number: "02",
    title: "Efficient systems",
    detail: "Small models and practical inference for everyday hardware.",
  },
  {
    number: "03",
    title: "Applied machine learning",
    detail: "Building useful tools with Python, PyTorch, and ONNX Runtime.",
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon">
      <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

function SignalGraphic() {
  return (
    <div className="signal-visual" aria-hidden="true">
      <div className="signal-grid" />
      <div className="signal-orbit signal-orbit-one" />
      <div className="signal-orbit signal-orbit-two" />
      <svg className="signal-wave" viewBox="0 0 520 220" fill="none">
        <path
          className="wave-shadow"
          d="M8 111h54l14-31 18 72 22-119 21 156 18-103 20 57 18-31h42l17-48 20 91 19-124 19 163 20-103 20 54 17-31h46l19-45 17 79 18-58 18 24h34"
        />
        <path
          className="wave-line"
          d="M8 111h54l14-31 18 72 22-119 21 156 18-103 20 57 18-31h42l17-48 20 91 19-124 19 163 20-103 20 54 17-31h46l19-45 17 79 18-58 18 24h34"
        />
        <circle className="wave-point" cx="260" cy="111" r="5" />
      </svg>
      <div className="signal-coordinate signal-coordinate-top">VOICE / SYSTEMS</div>
      <div className="signal-coordinate signal-coordinate-bottom">SPEECH / SYSTEMS</div>
      <div className="signal-chip">
        <span className="signal-chip-dot" />
        <span>BUILDING IN SPEECH AI</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div className="project-visual">
        <div className="project-visual-label">{project.label}</div>
        {project.visual === "voice" ? (
          <svg aria-hidden="true" viewBox="0 0 440 180" className="project-wave">
            <path d="M4 92h50l15-25 18 50 18-83 22 115 19-75 19 40 18-22h46l18-33 18 66 18-90 19 118 19-76 18 41 18-23h47" />
            <circle cx="220" cy="92" r="4" />
          </svg>
        ) : (
          <div className="engine-visual" aria-hidden="true">
            <div className="engine-core">1M</div>
            <span className="engine-ring engine-ring-one" />
            <span className="engine-ring engine-ring-two" />
            <span className="engine-node engine-node-one" />
            <span className="engine-node engine-node-two" />
            <span className="engine-node engine-node-three" />
          </div>
        )}
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
          View project <ArrowIcon diagonal />
        </a>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="Lê Trọng Hiếu, home">
          <span className="brand-mark" aria-hidden="true">
            LH
          </span>
          <span className="brand-name">Lê Trọng Hiếu</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#focus">Focus</a>
          <a href="#background">Background</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/tronghieuit"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowIcon diagonal />
        </a>
      </header>

      <main id="main">
        <section className="hero page-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="kicker-line" /> AI / ML DEVELOPER · SPEECH TECHNOLOGY
            </p>
            <h1 id="hero-title">
              Speech AI,
              <br />
              <em>made practical.</em>
            </h1>
            <p className="hero-description">
              I build lightweight, practical machine-learning systems. Right now,
              I’m focused on Vietnamese text-to-speech, multi-speaker synthesis,
              and zero-shot voice cloning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore projects <ArrowIcon />
              </a>
              <a
                className="button button-quiet"
                href="https://github.com/tronghieuit"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-index">01 /</span>
              <span>Small, fast, useful models.</span>
            </div>
          </div>
          <SignalGraphic />
          <div className="hero-footnote">
            <span>SELECTED WORK & IDEAS</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="work-section section-block" id="work" aria-labelledby="work-title">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-index">01 — SELECTED WORK</p>
                <h2 id="work-title">Built to speak.<br /><em>Made to run.</em></h2>
              </div>
              <p className="section-intro">
                A couple of experiments in making speech models smaller, more
                flexible, and easier to put to work.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
            <a
              className="all-work-link"
              href="https://github.com/tronghieuit?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Browse all repositories <ArrowIcon diagonal />
            </a>
          </div>
        </section>

        <section className="focus-section section-block" id="focus" aria-labelledby="focus-title">
          <div className="page-shell focus-layout">
            <div className="focus-heading">
              <p className="eyebrow section-index">02 — AREAS OF FOCUS</p>
              <h2 id="focus-title">A signal worth<br /><em>listening to.</em></h2>
              <p>
                My current focus is speech technology, efficient inference,
                and useful machine-learning tools.
              </p>
              <div className="focus-stamp" aria-hidden="true">
                <span>RESEARCH</span>
                <span>↓</span>
                <span>APPLICATION</span>
              </div>
            </div>
            <div className="focus-list">
              {focusAreas.map((area) => (
                <article className="focus-item" key={area.number}>
                  <span className="focus-number">{area.number}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.detail}</p>
                  </div>
                  <span className="focus-cross" aria-hidden="true">+</span>
                </article>
              ))}
              <div className="tool-strip">
                <span className="eyebrow">TOOLS I WORK WITH</span>
                <div className="tool-list" aria-label="Python, PyTorch, ONNX Runtime, Speech AI">
                  <span>Python</span><i />
                  <span>PyTorch</span><i />
                  <span>ONNX Runtime</span><i />
                  <span>Speech AI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="background-section section-block" id="background" aria-labelledby="background-title">
          <div className="page-shell background-layout">
            <div className="background-copy">
              <p className="eyebrow section-index">03 — BACKGROUND</p>
              <h2 id="background-title">Curiosity,<br /><em>with credentials.</em></h2>
              <p>
                I like the point where a model leaves the notebook and becomes
                a tool someone can actually use. My work spans speech, applied
                machine learning, and efficient inference.
              </p>
              <a className="text-link background-profile-link" href="https://github.com/tronghieuit" target="_blank" rel="noreferrer">
                More about me on GitHub <ArrowIcon diagonal />
              </a>
            </div>
            <div className="credential-panel">
              <div className="credential-panel-top">
                <span className="eyebrow">MILESTONES</span>
                <span className="credential-symbol" aria-hidden="true">✳</span>
              </div>
              <a className="credential-row" href="https://www.kaggle.com/backtracking" target="_blank" rel="noreferrer">
                <span className="credential-mark">K</span>
                <span className="credential-name">Kaggle Competition Expert <small>Solo</small></span>
                <ArrowIcon diagonal />
              </a>
              <a className="credential-row" href="https://www.kaggle.com/backtracking" target="_blank" rel="noreferrer">
                <span className="credential-mark">K</span>
                <span className="credential-name">Kaggle Notebook Master</span>
                <ArrowIcon diagonal />
              </a>
              <a className="credential-row" href="https://www.credly.com/badges/70bb428a-394e-4400-95ca-ec3001031dcc/public_url" target="_blank" rel="noreferrer">
                <span className="credential-mark aws-mark">A</span>
                <span className="credential-name">AWS Certified Solutions Architect <small>Associate</small></span>
                <ArrowIcon diagonal />
              </a>
              <div className="credential-panel-bottom">
                <span>LEARN · BUILD · SHARE</span>
                <span>OPEN SOURCE · SPEECH AI</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div>
            <p className="eyebrow footer-kicker">THANKS FOR STOPPING BY</p>
            <h2>Let’s make<br /><em>good things speak.</em></h2>
          </div>
          <div className="footer-links">
            <a href="https://github.com/tronghieuit" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
            <a href="https://www.kaggle.com/backtracking" target="_blank" rel="noreferrer">Kaggle <ArrowIcon diagonal /></a>
            <a href="https://huggingface.co/backtracking" target="_blank" rel="noreferrer">Hugging Face <ArrowIcon diagonal /></a>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <span>© {new Date().getFullYear()} LÊ TRỌNG HIẾU</span>
          <span>BUILT WITH CURIOSITY · POWERED BY SPEECH</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
