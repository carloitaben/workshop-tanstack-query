import { Link } from "@tanstack/react-router"

export default function Footer() {
  return (
    <footer className="grid place-items-center border-t p-4">
      <Link to="/legal">Terms, conditions, other legal jargon</Link>
    </footer>
  )
}
