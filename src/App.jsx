import './App.css';

const navigation = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'About', href: '#about', number: '02' },
  { label: 'Projects', href: '#projects', number: '03' },
  { label: 'skills', href: '#skills', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
];

function App() {
  return (
    <div className="portfolio">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">&lt;/&gt</span>
          <span>CHIRU.OS</span>
        </a>

        <div className="system-status">
          <span className="status-dot" />
          AVAILABLE FOR OPPURTUNITIES.
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar">
          <p className="sidebar-label">WORKSPACE / 01</p>

          <nav className="navigation">
            {navigation.map((item, index) => (
              <a
                className={`nav-link ${index === 0 ? 'active' : ''}`}
                href={item.href}
                key={item.label}
              >
                <span className="nav-number">{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="sidebar-footer">
            <span className="status-dot" />
            <span>Building in public</span>
          </div>
        </aside>

        <main className="main-content" id="home">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">
                <span>HELLO, WORLD.</span> I'M A DEVELOPER
              </p>

              <h1>
                Chiranjeevi
                <br />
                <span>Kodimela.</span>
              </h1>

              <p className="hero-role">
                Computer Science Graduate
                <span className="role-divider">/</span>
                Software Developer
              </p>

              <p className="hero-description">
                I build practical software, explore how systems work, and turn ideas into things people can actually use.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#projects"> Explore my work
                  <span></span>
                </a>
                <a className="text-link" href="#contact">Get in touch
                  <span></span>
                </a>
              </div>
            </div>

            <div className="terminal">
              <div className="terminal-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="terminal-title">developer.profile</span>
              </div>

              <div className="terminal-body">
                <p><span className="prompt">$</span> whoami </p>
                <p className="terminal-value">chiranjeevi-kodimela</p>

                <p className="terminal-command">
                  <span className="prompt">$</span> current_focus
                </p>
                <p>Building useful software</p>
                <p>Learning by shipping projects</p>

                <p className="terminal-command">
                  <span className="prompt">$</span> status
                </p>
                <p>
                  <span className="status-dot" />Ready to build something
                </p>

                <p className="terminal-cursor">$ <span>_</span></p>
              </div>
            </div>

            <div className="hero-index">PORTFOLIO / 2026</div>
          </section>

          <section className="placeholder-section" id="projects">
            <span className="section-index">02 / SELECTED WORK</span>
            <p>Projects are coming into focus.</p>
          </section>

          <section className="placeholder-section" id="skills">
            <span className="section-index">03 / TOOLKIT</span>
            <p>Tools I use to turn ideas into software.</p>
          </section>

          <section className="placeholder-section" id="contact">
            <span className="section-index">04 / CONTACT</span>
            <p>Have a problem worth solving? Let's talk.</p>
          </section>

          <footer className="page-footer">
            <span>CHIRU.OS @ 2026</span>
            <span>DESIGNED TO KEEP BUILDING.</span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App;
