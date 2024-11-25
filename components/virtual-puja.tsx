"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const pujaSteps = [
  { 
    name: "Dhoop", 
    description: "Light the incense to purify the atmosphere", 
    image: "https://budhshiv.com/cdn/shop/products/brass-handcrafted-lotus-design-dhoop-burner-incense-burner-for-home-purificationbdld1-585310.jpg?v=1707024516&width=1946" 
  },
  { 
    name: "Diya", 
    description: "Light the lamp to dispel darkness", 
    image: "https://www.hindustantimes.com/ht-img/img/2023/11/11/1600x900/joshi-milestoner-EZ7S0jJt588-unsplash_1699680851887_1699680860974.jpg" 
  },
  { 
    name: "Pushpa", 
    description: "Offer flowers as a symbol of devotion", 
    image: "https://images.herzindagi.info/image/2021/Aug/hindu-gods-flowers-main.jpg" 
  },
  { 
    name: "Akshat", 
    description: "Offer rice as a symbol of prosperity", 
    image: "https://s3.amazonaws.com/RudraCentre/Test/ProductImages/blog/What-is-the-significance-of-Akshata-in-rituals-1.jpg" 
  },
  { 
    name: "Naivedya", 
    description: "Offer food to the deity", 
    image: "https://content3.jdmagicbox.com/comp/pune/u6/020pxx20.xx20.200224150104.s6u6/catalogue/naivedya-thali-restaurant-ghole-road-pune-restaurants-g0ps4e3hgf.jpg" 
  },
];

export function VirtualPuja() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % pujaSteps.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FFFDD0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8">Virtual Puja Experience</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="relative h-64 md:h-80 mb-6">
            <Image
              src={pujaSteps[currentStep].image}
              alt={pujaSteps[currentStep].name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#FF9933] mb-2">{pujaSteps[currentStep].name}</h3>
          <p className="text-gray-600 mb-6">{pujaSteps[currentStep].description}</p>
          <Button onClick={handleNextStep} className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white">
            {currentStep === pujaSteps.length - 1 ? "Start Over" : "Next Step"}
          </Button>
          <Button 
            onClick={() => window.open('https://example.com/book-puja', '_blank')}
            className="w-full mt-4 bg-[#FF9933] hover:bg-[#DAA520] text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Real Puja
          </Button>
        </div>
      </div>
    </section>
  );
}
