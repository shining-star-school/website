// import { useState } from 'react';
// import gallery1 from '@/assets/gallery-1.jpg';
// import gallery2 from '@/assets/gallery-2.jpg';
// import gallery3 from '@/assets/gallery-3.jpg';
// import gallery4 from '@/assets/gallery-4.jpg';
// import gallery5 from '@/assets/gallery-5.jpg';
// import gallery6 from '@/assets/gallery-6.jpg';

// const galleryItems = [
//   { image: gallery1, title: 'Sports Day Excellence' },
//   { image: gallery2, title: 'Science Lab Activities' },
//   { image: gallery3, title: 'Creative Arts Program' },
//   { image: gallery4, title: 'Technology Learning' },
//   { image: gallery5, title: 'Library & Reading' },
//   { image: gallery6, title: 'Cultural Events' },
// ];

// const Gallery = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="py-20 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
//             Our Vibrant Campus Life
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Explore the diverse activities and facilities at The Shining Star School
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in aspect-square"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent flex items-end p-6 transition-opacity duration-300 ${
//                   hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <h3 className="text-xl font-bold text-primary-foreground">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
import img4 from '@/assets/img4.jpg';
import img5 from '@/assets/img5.jpg';
import img6 from '@/assets/img6.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      type: 'image',
      src: img1,
      title: 'Happy Learning Moments'
    },
    {
      type: 'image',
      src: img2,
      title: 'Creative Activities'
    },
    {
      type: 'image',
      src: img3,
      title: 'School Tour Video'
    },
    {
      type: 'image',
      src: img4,
      title: 'Classroom Environment'
    },
    {
      type: 'image',
      src: img5,
      title: 'Outdoor Activities'
    },
    {
      type: 'image',
      src: img6,
      title: 'Student Achievements'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white via-pink-50 to-red-100 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 font-poppins mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 font-quicksand max-w-2xl mx-auto">
            Capturing precious moments of joy, learning, and growth at The Shining Star School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={item.type === 'image' ? item.src : item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold font-poppins">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Video Play Button */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-l-gray-800 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://drive.google.com/"><button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-black-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View More Photos & Videos
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
