"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MilkIcon as Cow, Book, Home, Users, Utensils, AnnoyedIcon as OldMan, HandIcon as PrayingHands, Flame, Leaf, TreesIcon as Tree } from 'lucide-react'

const features = [
  { icon: Cow, title: "Go-shala", description: "Care and protection for sacred cows" },
  { icon: Book, title: "Path Shala", description: "Education and spiritual learning center" },
  { icon: Home, title: "Ananth Ashram", description: "Spiritual retreat and accommodation" },
  { icon: Users, title: "Sadhu Sant Ashram", description: "Residence for spiritual seekers" },
  { icon: Utensils, title: "Ann-Daan Ki seva", description: "Food distribution service" },
  { icon: OldMan, title: "Vridh Ashram", description: "Elder care and support" },
  { icon: PrayingHands, title: "Bhagwan Ki Seva", description: "Temple services and worship" },
  { icon: Flame, title: "Yagya Shala", description: "Sacred fire ceremonies" },
  { icon: Leaf, title: "Parya Varan Seva", description: "Environmental protection" },
  { icon: Tree, title: "Vrish Aaropan Seva", description: "Tree plantation service" },
]

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" ref={ref} className="py-16 md:py-24 lg:py-32 bg-[#FFFDD0] decorative-border">
      <div className="container px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B22222]"
        >
          Our Seva Activities
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-[#DAA520] bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#FF9933]">
                    <feature.icon className="h-6 w-6" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

