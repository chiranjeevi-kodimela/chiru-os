const projects = [
    {
        number: '01',
        name: 'Job Tracker',
        category: 'FULL-STACK WEB APPLICATION',
        description:
            'A job application manager for tracking applications, companies, interviews, and progress in one place.',
        stack: ['React', 'Node.js', 'Express', 'MySQL'],
        link: 'https://github.com/chiranjeevi-kodimela/job-tracker',
        live: 'https://job-tracker-eta-six-12.vercel.app/',
        label: 'View repository',
        liveLabel: 'Live demo'
    },
    {
        number: '02',
        name: 'C++ Mini Compiler',
        category: 'C++ / LANGUAGE PROCESSING',
        description:
            'A mini compiler featuring lexical analysis, parsing, an abstract syntax tree, and expression evaluation.',
        stack: ['C++', 'Lexer', 'Parser', 'AST'],
        link: 'https://github.com/chiranjeevi-kodimela',
        label: 'Explore GitHub',
    },
    {
        number: '03',
        name: 'Password Generator',
        category: 'WEB DEVELOPMENT',
        description:
            'A simple web tool for generating passwords through a clean and convenient interface.',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        link: 'https://github.com/chiranjeevi-kodimela/password-generator',
        live: 'https://instantpasswords.netlify.app/',
        label: 'View repository',
        liveLabel: 'Live demo',
    },
    {
        number: '04',
        name: 'Reaction Hunter',
        category: 'INTERACTIVE WEB GAME',
        description:
            'An interactive reaction-time game for testing reflexes and challenging yourself to respond quickly.',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        link: 'https://github.com/chiranjeevi-kodimela/reaction_hunter',
        live: 'https://reaction-hunter.netlify.app/',
        label: 'View repository',
        liveLabel: 'Play game',
    },
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="section-heading">
                <span className="section-index">02 / SELECTED WORK</span>
                <span className="section-note">THINGS I'VE BUILT</span>
            </div>

            <div className="projects-intro">
                <h2>
                    Selected work.
                    <span> Real projects.</span>
                </h2>
                <p>Learning through building, debugging, and shipping.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-card-top">
                            <span className="project-number">{project.number}</span>
                            <span className="project-category">{project.category}</span>
                        </div>

                        <h3>{project.name}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="project-tags">
                            {project.stack.map((tech) => (
                                <span className="skill-tag" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                {project.label} <span>↗</span>
                            </a>

                            {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer">
                                    {project.liveLabel || 'Live demo'} <span>↗</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            <a
                className="other-works"
                href="https://github.com/chiranjeevi-kodimela"
                target="_blank"
                rel="noreferrer"
            >
                <div>
                    <span className="section-index">MORE IN THE WORKSPACE</span>
                    <h3>Other works & experiments</h3>
                    <p>
                        Explore more repositories, coding experiments, and projects
                        on my GitHub profile.
                    </p>
                </div>

                <span className="other-works-arrow">↗</span>
            </a>
        </section>
    );
}

export default Projects;