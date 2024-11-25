"use client"

import Image from "next/image"
import { motion } from 'framer-motion'

const features = [
  {
    title: "LIFETIME HOME",
    description: "We take care of abandoned, injured and slaughterhouse-rescued cows, bulls, and calves; by providing nutritious food, clean water, medical attention, and lifetime accommodation.",
    image: "https://iskcongev.com/wp-content/uploads/2022/01/Dangi-breed.jpg"
  },
  {
    title: "NOT A DAIRY",
    description: "Serving cows without profit in mind is our vision. So we strictly make sure that milk is for calves. We do not breed cows and gives preference to rescuing cows.",
    image: "https://www.shutterstock.com/image-photo/goshala-cow-shelter-wada-farm-260nw-1448333588.jpg"
  },
  {
    title: "MANAGED BY VOLUNTEERS",
    description: "All the trustees, governing members and management is run only by volunteers who have their full time jobs. There is zero Administrative cost.",
    image: "https://vandeguruparamparaam.wordpress.com/wp-content/uploads/2023/07/img_0777_original.jpg?w=700"
  }
]

export function UniqueFeatures() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-lg md:text-xl text-gray-600 mb-2">UNIQUE FEATURES OF</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#B22222]">
            SHREE RADHA MOHAN SEVA TRUST
          </h3>
        </motion.div>

        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24"
          >
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <h3 className="text-xl md:text-2xl font-bold text-[#FF9933] mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </div>
            <div className={`relative h-64 md:h-80 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

