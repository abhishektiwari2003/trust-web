import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Sacred Cow"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="mb-4 text-3xl font-bold text-[#FFD700] md:text-5xl lg:text-6xl">
            Shree Radha Mohan Seva Trust
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Dedicated to serving humanity and protecting sacred cows
          </p>
          <Button className="bg-[#B22222] hover:bg-[#8B0000] text-white text-lg px-6 py-3">
            Explore Our Seva
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[60px] w-full md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path d="M0 120L1440 120V0L720 120L0 0V120Z" fill="#FFFDD0" />
        </svg>
      </div>
    </section>
  )
}

