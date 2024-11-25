"use client"

import Image from "next/image"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Sacred Cow"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700]"
        >
          Shree Radha Mohan Seva Trust
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90"
        >
          Dedicated to serving humanity and protecting sacred cows
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            className="bg-[#B22222] hover:bg-[#8B0000] text-white text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Seva
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0 120L1440 120V0L720 120L0 0V120Z" fill="#FFFDD0" />
        </svg>
      </div>
    </section>
  )
}

