import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function Footer() {
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
    <footer className="bg-[#FF9933] text-white py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <p className="text-sm md:text-base">Shree Radha Mohan Seva Trust is dedicated to serving humanity and protecting sacred cows.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm md:text-base hover:text-[#DAA520] transition-colors" onClick={(e) => handleNavClick(e, '/')}>Home</Link></li>
              <li><Link href="/#about" className="text-sm md:text-base hover:text-[#DAA520] transition-colors" onClick={(e) => handleNavClick(e, '/#about')}>About Us</Link></li>
              <li><Link href="/#seva" className="text-sm md:text-base hover:text-[#DAA520] transition-colors" onClick={(e) => handleNavClick(e, '/#seva')}>Our Seva</Link></li>
              <li><Link href="/contact" className="text-sm md:text-base hover:text-[#DAA520] transition-colors" onClick={(e) => handleNavClick(e, '/contact')}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <p className="text-sm md:text-base">123 Seva Marg, Vrindavan</p>
            <p className="text-sm md:text-base">Uttar Pradesh, India 281121</p>
            <p className="text-sm md:text-base">Phone: +91 1234567890</p>
            <p className="text-sm md:text-base">Email: info@shreeradhamohan.org</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#DAA520] text-center">
          <p className="text-sm md:text-base">&copy; 2023 Shree Radha Mohan Seva Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

