import useTheme from '../../hooks/useTheme'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer className="footer">
      <button
        type="button"
        className="footer-theme-toggle"
        onClick={toggle}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true"></i>
        <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
      </button>
      <p className="footer-copy">&copy; {year} Nico&#8482;. All rights reserved.</p>
    </footer>
  )
}
