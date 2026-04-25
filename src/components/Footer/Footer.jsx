import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>&copy; {year} Nico&#8482; &mdash; All rights reserved.</p>
    </footer>
  )
}
