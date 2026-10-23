
const projects = [
    {
        name: 'Job Tracker',
        category: 'FULL-STACK WEB APPLICATION',
        description:
            'A full-stack application that helps job seekers organize applications, manage company details, track interviews, and monitor progress.',
        highlight:
            'Connected a React frontend, Express API, and MySQL database; deployed the application online.',
        stack: ['React', 'Node.js', 'Express', 'MySQL'],
        link: 'https://github.com/chiranjeevi-kodimela/job-tracker',
        live: 'https://job-tracker-eta-six-12.vercel.app/',
        label: 'View repository',
        liveLabel: 'Live demo'
    },
    {
        name: 'C++ Mini Compiler',
        category: 'C++ / LANGUAGE PROCESSING',
        description:
            'A mini compiler that processes expressions through lexical analysis, parsing, abstract syntax tree construction, and evaluation.',
        highlight:
            'Separated the lexer, parser, and evaluator into distinct C++ modules.',
        stack: ['C++', 'Lexer', 'Parser', 'AST'],
        link: 'https://github.com/chiranjeevi-kodimela/mini-compiler',
        label: 'View repository',
    },
    {
        name: 'Password Generator',
        category: 'WEB DEVELOPMENT',
        description:
            'A browser-based utility for generating passwords through a simple, focused interface.',
        highlight:
            'Built a lightweight frontend using JavaScript, HTML, and CSS.',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        link: 'https://github.com/chiranjeevi-kodimela/password-generator',
        live: 'https://instantpasswords.netlify.app/',
        label: 'View repository',
        liveLabel: 'Live demo',
    },
    {
        name: 'Reaction Hunter',
        category: 'INTERACTIVE WEB GAME',
        description:
            'A browser game that challenges players to react quickly to on-screen events.',
        highlight:
            'Built an interactive game experience using browser events and JavaScript.',
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
                <span className="section-index"></span>
                <span className="section-note">THINGS I'VE BUILT</span>
            </div>

            <div className="projects-intro">
                <h2>
                    Selected work.
                    <span> Real projects.</span>
                </h2>
                <p>Learning through building and debugging.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.name}>
                        <div className="project-card-top">
                            <span className="project-category">{project.category}</span>
                        </div>

                        <h3>{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <p className="project-highlight">
                            <span>↳</span> {project.highlight}
                        </p>
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