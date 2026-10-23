const skillGroups = [
  {
    number: '01',
    title: 'Languages',
    description: 'The foundations I build with.',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'Java'],
  },
  {
    number: '02',
    title: 'Frontend',
    description: 'Building interfaces for the web.',
    skills: ['HTML5', 'CSS3', 'React', 'Vite'],
  },
  {
    number: '03',
    title: 'Backend & Data',
    description: 'Logic, APIs, and persistence.',
    skills: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
  },
  {
    number: '04',
    title: 'Developer Tools',
    description: 'Building, testing, and shipping.',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux'],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span className="section-index">03 / TOOLKIT</span>
        <span className="section-note">TOOLS OF THE TRADE</span>
      </div>

      <div className="skills-intro">
        <h2>
          My stack.
          <span> My toolkit.</span>
        </h2>
        <p>
          Technologies I use to build, debug, and ship practical software.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-arrow">↗</span>
            </div>

            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;