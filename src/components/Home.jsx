
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
          I build and deploy practical software using React,
          Node.js, Express, and MySQL. I enjoy solving problems,
          debugging systems, and turning ideas into working
          applications.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects <span>↗</span>
          </a>

          <a
            className="primary-button"
            href="/Chiranjeevi_Kodimela_Resume.pdf"
            download="Chiranjeevi_Kodimela_Resume.pdf"
          >
            Download Resume <span>↓</span>
          </a>

          <a
            className="text-link"
            href="https://github.com/chiranjeevi-kodimela"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
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
            <span className="prompt">$</span> tech_stack
          </p>
          <p>React · JavaScript · Node.js</p>
          <p>Express · MySQL · C++</p>

          <p className="terminal-command">
            <span className="prompt">$</span> currently_building
          </p>
          <p>Practical software projects</p>
          <p>Learning by building and shipping</p>

          <p className="terminal-command">
            <span className="prompt">$</span> status
          </p>
          <p>
            <span className="status-dot" /> Open to software opportunities
          </p>

          <p className="terminal-cursor">$ <span>_</span></p>
        </div>
      </div>
    </section>
  );
}

export default Home;
