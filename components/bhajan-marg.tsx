import { PlayCircle } from 'lucide-react';

const bhajans = [
  { title: "Shri Krishna Govind Hare Murari", videoId: "ADYP32VV-ak?si=wENICfqVAKgEmLQ4" },
  { title: "Achyutam Keshavam", videoId: "5-Xoh7jKVo8?si=42wX8ONT7xVzNRKN" },
  { title: "Radhe Radhe Govind Gopal Radhe", videoId: "A859CeMM31U?si=UwAemmeDyyz3AKgg" },
  { title: "Om Jai Jagdish Hare", videoId: "3ucCEjXS9n8?si=0NSngUEIIB5OIcI2" },
];

export function BhajanMarg() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FF9933] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Bhajan Marg</h2>
        <p className="text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Immerse yourself in the divine melodies of our bhajans. Let the spiritual vibrations elevate your consciousness and bring you closer to the divine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {bhajans.map((bhajan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${bhajan.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-2 md:p-4 flex items-center justify-between">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#B22222]">{bhajan.title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${bhajan.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9933] hover:text-[#B22222] transition-colors duration-300"
                >
                  <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
