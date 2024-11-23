import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Features } from "./components/features"
import { Footer } from "./components/footer"
import { DecorativeOm } from "./components/decorsative-om"
import { TaxExemptions } from "./components/tax-exemption"
import TestimonialSection from "./components/testimonails"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DecorativeOm />
        <Features />
        <TaxExemptions/>
        <TestimonialSection/>
      </main>
      <Footer />
    </div>
  )
}

