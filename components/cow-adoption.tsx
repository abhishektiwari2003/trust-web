"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DonateNowForm } from "./donate-now-form"

const cows = [
  { name: "Ganga", image: "https://static.toiimg.com/photo/109535983.cms", description: "A gentle cow rescued from a dairy farm" },
  { name: "Yamuna", image: "https://www.shutterstock.com/image-photo/young-calf-eats-hay-barn-600nw-2492847027.jpg", description: "A playful calf born in our sanctuary" },
  { name: "Nandi", image: "https://www.astrology.com/img/hubs/spiritual-animals/Bull.png", description: "A majestic bull saved from slaughter" },
]

export function CowAdoption() {
  const [selectedCow, setSelectedCow] = useState(cows[0])

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8"
        >
          Virtual Cow Adoption Program
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCow.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedCow.image}
                  alt={selectedCow.name}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </AnimatePresence>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCow.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-[#FF9933] mb-2">{selectedCow.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedCow.description}</p>
                </motion.div>
              </AnimatePresence>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    Adopt {selectedCow.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Adopt {selectedCow.name}</DialogTitle>
                  </DialogHeader>
                  <DonateNowForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            {cows.map((cow) => (
              <Button
                key={cow.name}
                onClick={() => setSelectedCow(cow)}
                variant={selectedCow.name === cow.name ? "default" : "outline"}
                className={selectedCow.name === cow.name ? "bg-[#FF9933]" : ""}
              >
                {cow.name}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

