import { useEffect, useState } from "react";

const sections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];

function Sidebar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-15% 0px -65% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <nav className="navigation">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`nav-link ${activeSection === section.id ? "active" : ""
                                }`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            {section.label}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;