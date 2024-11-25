import Image from "next/image"

const images = [
  { src: "https://iskcongev.com/wp-content/uploads/2023/02/about-goshala-2.jpg", alt: "Goshala" },
  { src: "https://iskcongev.com/wp-content/uploads/elementor/thumbs/Annadan_2-q81ce4d6kt473m7znhzzfb4m4oycd8gdy3hzc1zkow.jpg", alt: "Annadaan seva" },
  { src: "https://www.hondaindiafoundation.org/Uploads/images/honda-ki-pathshala-inner.png", alt: "Pathshala" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHipXO4F9AL0ke8enqGji0Wuqrxs_mHYRZg&s", alt: "Yagya shala" },
  { src: "https://shibasram.org.in/wp-content/uploads/2023/06/o2-1.jpg", alt: "Vridh ashram" },
  { src: "https://annapoorna.org.in/wp-content/uploads/2017/06/Sapiens-1-2017.jpg", alt: "Tree plantation" },
]

export function ImageShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FFFDD0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8">Our Seva in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <span className="text-white text-sm md:text-base lg:text-lg font-semibold p-2 md:p-4">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

