function Contact() {
  return (
    <section className="contact-section placeholder-section" id="contact">
      <div className="section-heading">
        <span className="section-index">04 / CONTACT</span>
        <span className="section-note">LET'S CONNECT</span>
      </div>

      <h2>Have a problem worth solving?</h2>
      <p>I'm looking for entry-level software opportunities and projects worth building.</p>

      <div className="contact-links">
        <a className="primary-button" href="mailto:chirurdx223s@gmail.com">
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
    </section>
  );
}

export default Contact;