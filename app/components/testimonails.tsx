'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  image: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Shree Radha Mohan Seva Trust has been doing incredible work. Their dedication to service is truly inspiring."
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I've been supporting this trust for years. Their commitment to helping those in need is unparalleled."
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The work done by Shree Radha Mohan Seva Trust has touched many lives. I'm proud to be associated with them."
  },
  {
    id: 4,
    name: "Sunita Gupta",
    image: "https://images.pexels.com/photos/3727997/pexels-photo-3727997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "This trust is making a real difference in our community. Their selfless service is truly commendable."
  }
]

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)  // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-yellow-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Donors Say About Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{testimonials[currentTestimonial].name}</h3>
            <p className="text-lg text-center mb-8">{testimonials[currentTestimonial].text}</p>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

