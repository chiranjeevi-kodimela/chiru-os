function Home() {
  return (
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
          I build practical software, explore how systems work,
          and turn ideas into things people can actually use.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore my work <span>↗</span>
          </a>
          <a className="text-link" href="#contact">
            Get in touch <span>↗</span>
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
          <div className="hero-index">PORTFOLIO / 2026</div>
          <span className="terminal-title">developer.profile</span>
        </div>

        <div className="terminal-body">
          <p><span className="prompt">$</span> whoami</p>
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
            <span className="status-dot" /> Ready to build something
          </p>

          <p className="terminal-cursor">$ <span>_</span></p>
        </div>
      </div>

      
    </section>
  );
}

export default Home;