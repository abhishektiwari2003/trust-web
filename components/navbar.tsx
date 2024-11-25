import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DonateNowForm } from "./donate-now-form"
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const targetId = href.substring(2)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(href)
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FF9933] text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold">श्री राधा मोहन सेवा ट्रस्ट</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-sm lg:text-base font-medium hover:text-[#DAA520] transition-colors" href="/" onClick={(e) => handleNavClick(e, '/')}>
            Home
          </Link>
          <Link className="text-sm lg:text-base font-medium hover:text-[#DAA520] transition-colors" href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>
            About Us
          </Link>
          <Link className="text-sm lg:text-base font-medium hover:text-[#DAA520] transition-colors" href="/#seva" onClick={(e) => handleNavClick(e, '/#seva')}>
            Our Seva
          </Link>
          <Link className="text-sm lg:text-base font-medium hover:text-[#DAA520] transition-colors" href="tel:+919594996030">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#B22222] hover:bg-[#8B0000] text-white text-sm">Donate Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Donate Now</DialogTitle>
              </DialogHeader>
              <DonateNowForm />
            </DialogContent>
          </Dialog>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#FF9933] py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link className="text-base font-medium hover:text-[#DAA520] transition-colors" href="/" onClick={(e) => handleNavClick(e, '/')}>
              Home
            </Link>
            <Link className="text-base font-medium hover:text-[#DAA520] transition-colors" href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>
              About Us
            </Link>
            <Link className="text-base font-medium hover:text-[#DAA520] transition-colors" href="/#seva" onClick={(e) => handleNavClick(e, '/#seva')}>
              Our Seva
            </Link>
            <Link className="text-base font-medium hover:text-[#DAA520] transition-colors" href="tel:+919594996030">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}