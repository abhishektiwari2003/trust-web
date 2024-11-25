"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const verses = [
  { sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions." },
  { sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनंजय।", translation: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure." },
  { sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।", translation: "A person who is situated in wisdom rids himself of both good and bad reactions even in this life." },
]

export function DailyVerse() {
  const [verse, setVerse] = useState(verses[0])

  useEffect(() => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)]
    setVerse(randomVerse)
  }, [])

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8">Daily Bhagavad Gita Verse</h2>
        <div className="max-w-2xl mx-auto bg-[#FFFDD0] p-6 rounded-lg shadow-lg">
          <p className="text-lg md:text-xl font-semibold text-[#FF9933] mb-4">{verse.sanskrit}</p>
          <p className="text-gray-600 mb-6">{verse.translation}</p>
          <Button onClick={() => setVerse(verses[Math.floor(Math.random() * verses.length)])} className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white">
            Next Verse
          </Button>
        </div>
      </div>
    </section>
  )
}

