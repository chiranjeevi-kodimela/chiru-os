function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <span className="section-index">01 / ABOUT ME</span>
        <span className="section-note">A LITTLE CONTEXT</span>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <h2>
            Not just writing code.
            <br />
            <span>Building useful things.</span>
          </h2>

          <p>
            I'm a Computer Science graduate who enjoys turning ideas
            into practical software. I learn by building, debugging,
            and understanding how things work under the hood.
          </p>

          <p>
            From full-stack applications to a C++ mini compiler,
            I like projects that challenge me to think beyond just
            making something look good.
          </p>

          <a
            className="text-link"
            href="https://github.com/chiranjeevi-kodimela"
            target="_blank"
            rel="noreferrer"
          >
            More about my work <span>↗</span>
          </a>
        </div>

        <div className="about-details">
          <div className="detail-item">
            <span className="detail-label">EDUCATION</span>
            <strong>B.Tech, Computer Science</strong>
            <span className="detail-muted">
              University College of Engineering Kakinada
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">APPROACH</span>
            <strong>Learn → Build → Improve</strong>
            <span className="detail-muted">
              Practical projects and continuous learning
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">CURRENT FOCUS</span>
            <strong>Software Engineering</strong>
            <span className="detail-muted">
              Full-stack development, DSA, and backend fundamentals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;