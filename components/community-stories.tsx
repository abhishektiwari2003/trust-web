import Image from 'next/image'

const stories = [
  { name: "Radha Devi", image: "https://idoy-hoboken.com/wp-content/uploads/2020/08/Radha-Devi-IDOY-Hoboken-Yoga-Instructor.png", story: "Thanks to the trust, I learned sustainable farming practices that have improved my crop yield and income." },
  { name: "Krishna Das", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dharmana_Krishnadas.jpg", story: "The trust's cow protection program gave me a new purpose in life. Now I care for these sacred beings daily." },
  { name: "Sita Sharma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJGZhb6MmyXYiyqiFevZfNjmJKQoL7vXo7A&s", story: "The free meals provided by the trust helped me focus on my studies without worrying about hunger." },
]

export function CommunityStories() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FFFDD0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8">Community Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold text-[#FF9933]">{story.name}</h3>
              </div>
              <p className="text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

