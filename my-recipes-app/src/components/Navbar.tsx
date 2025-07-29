import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white shadow">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-200">
          🍴 מתכונים שלי
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-200">
            דף הבית
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            אודות
          </Link>
        <ThemeToggle/>
        </div>
      </nav>
    </header>
  );
}
