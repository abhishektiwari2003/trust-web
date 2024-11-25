"use client"

import { motion } from 'framer-motion'
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UniqueFeatures } from "@/components/unique-features"
import { TaxExemptions } from "@/components/tax-exemptions"
import { Footer } from "@/components/footer"
import { DecorativeOm } from "@/components/decorative-om"
import { DonationCalculator } from "@/components/donation-calculator"
import { VirtualPuja } from "@/components/virtual-puja"
import { DailyVerse } from "@/components/daily-verse"
import { CommunityStories } from "@/components/community-stories"
import { CowAdoption } from "@/components/cow-adoption"
import { ImageShowcase } from "@/components/image-showcase"
import { BhajanMarg } from "@/components/bhajan-marg"
import { ScrollToTop } from "@/components/scroll-to-top"

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <DecorativeOm />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          id="about"
        >
          <UniqueFeatures />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <DonationCalculator />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <ImageShowcase />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <VirtualPuja />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <BhajanMarg />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <DailyVerse />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <CommunityStories />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <CowAdoption />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <TaxExemptions />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          id="seva"
        >
          <Features />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}