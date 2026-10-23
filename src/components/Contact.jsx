
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <span className="section-index"></span>
        <span className="section-note">OPEN TO OPPORTUNITIES</span>
      </div>

      <div className="contact-content">
        <p className="contact-eyebrow">HAVE SOMETHING IN MIND?</p>

        <h2>
          Let's build
          <br />
          <span>something useful.</span>
        </h2>

        <p className="contact-description">
          I'm looking for entry-level software opportunities where
          I can solve real problems, learn from a team, and contribute
          through practical engineering.
        </p>

        <div className="contact-links">
          <a
            className="primary-button"
            href="mailto:chirukodimela@gmail.com"
          >
            Email me <span>↗</span>
          </a>

          <a
            className="text-link"
            href="https://www.linkedin.com/in/chiranjeevi-kodimela/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
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

        <div className="contact-email">
          <span className="status-dot" />
          <span>chirukodimela@gmail.com</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
