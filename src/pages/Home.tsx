// import HeroCarousel from '@/components/home/HeroCarousel';
// import ImpactStats from '@/components/home/ImpactStats';
// import USPSection from '@/components/home/USPSection';
// import Gallery from '@/components/home/Gallery';
// import Testimonials from '@/components/home/Testimonials';

// const Home = () => {
//   return (
//     <main>
//       <HeroCarousel />
//       <ImpactStats />
//       <USPSection />
//       <Gallery />
//       <Testimonials />
//     </main>
//   );
// };

// export default Home;




import HeroCarousel from '@/components/home/HeroCarousel';
import ImpactStats from '@/components/home/ImpactStats';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';


const Home = () => {
  const highlights = [
    {
      icon: '🌍',
      title: 'EYFS-UK Curriculum',
      description: 'World-class early years foundation stage curriculum'
    },
    {
      icon: '📚',
      title: 'Best Pedagogies',
      description: 'Montessori, Froebel Labs, Reggio Emilia approaches'
    },
    {
      icon: '🧠',
      title: '360° Development',
      description: 'Academic, emotional, and creative growth'
    },
    {
      icon: '🌈',
      title: 'Experiential Learning',
      description: "India's most innovative learning experiences"
    },
    {
      icon: '🎥',
      title: 'Modern Facilities',
      description: 'AV Room, Fully AC Classrooms'
    },
    {
      icon: '🌱',
      title: 'Values & Discipline',
      description: 'Strong moral foundation at the core'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <HeroCarousel />
      </section>

      {/* Impact Section */}
      <ImpactStats />

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-r from-white via-pink-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 font-poppins mb-4">
              Why The Shining Star School?
            </h2>
            <p className="text-lg text-gray-600 font-quicksand max-w-3xl mx-auto">
              We believe every child is unique and deserves an education that nurtures their individual potential while building strong foundations for lifelong learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-poppins mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 font-quicksand">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}  
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

     
    </div>
  );
};

export default Home;
