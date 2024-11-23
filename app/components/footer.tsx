import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#FF9933] text-white py-8">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>Shree Radha Mohan Seva Trust is dedicated to serving humanity and protecting sacred cows.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#DAA520]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#DAA520]">About Us</Link></li>
              <li><Link href="/seva" className="hover:text-[#DAA520]">Our Seva</Link></li>
              <li><Link href="/contact" className="hover:text-[#DAA520]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>123 Seva Marg, Vrindavan</p>
            <p>Uttar Pradesh, India 281121</p>
            <p>Phone: +91 1234567890</p>
            <p>Email: info@shreeradhamohan.org</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#DAA520]">Facebook</a>
              <a href="#" className="hover:text-[#DAA520]">Twitter</a>
              <a href="#" className="hover:text-[#DAA520]">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-[#DAA520] pt-4">
          <p>&copy; 2023 Shree Radha Mohan Seva Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

