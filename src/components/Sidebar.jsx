const navigation = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'About', href: '#about', number: '02' },
  { label: 'Projects', href: '#projects', number: '03' },
  { label: 'Skills', href: '#skills', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-label">WORKSPACE / 01</p>

      <nav className="navigation">
        {navigation.map((item, index) => (
          <a
            className={`nav-link ${index === 0 ? 'active' : ''}`}
            href={item.href}
            key={item.label}
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
    </aside>
  );
}

export default Sidebar;