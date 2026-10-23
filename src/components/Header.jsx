function Header({ darkMode, onToggleTheme }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <span className="brand-mark">&lt;/&gt;</span>
        <span>CHIRU.OS</span>
      </a>

      
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        title={`Switch to ${darkMode ? "light" : "dark"} mode`}
      >
        {darkMode ? "☀ Light" : "☾ Dark"}
      </button>
    </header>
  );
}

export default Header;