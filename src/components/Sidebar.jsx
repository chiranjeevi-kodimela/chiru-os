import { useEffect, useState } from 'react';

const navItems = [
    { id: 'home', number: '01', label: 'Home' },
    { id: 'about', number: '02', label: 'About' },
    { id: 'projects', number: '03', label: 'Projects' },
    { id: 'skills', number: '04', label: 'Skills' },
    { id: 'contact', number: '05', label: 'Contact' },
];

function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

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
                rootMargin: '-15% 0px -65% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <span className="sidebar-label">NAVIGATION</span>

                <nav className="sidebar-nav" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''
                                }`}
                            onClick={() => setActiveSection(item.id)}
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
            </div>
        </aside>
    );
}

export default Sidebar;