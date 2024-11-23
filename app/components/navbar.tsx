import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FF9933] text-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold md:text-2xl">श्री राधा मोहन सेवा ट्रस्ट</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-lg font-medium hover:text-[#DAA520] transition-colors" href="/">
            Home
          </Link>
          <Link className="text-lg font-medium hover:text-[#DAA520] transition-colors" href="/about">
            About Us
          </Link>
          <Link className="text-lg font-medium hover:text-[#DAA520] transition-colors" href="/seva">
            Our Seva
          </Link>
          <Link className="text-lg font-medium hover:text-[#DAA520] transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#B22222] hover:bg-[#8B0000] text-white">Donate Now</Button>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

