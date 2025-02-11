import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Sai Khant Kyaw
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href={`${pathname}#about`} className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
          <li>
            <Link href={`${pathname}#services`} className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
          </li>
          <li>
            <Link href={`${pathname}#contact`} className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

