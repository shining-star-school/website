



import React from 'react';
import montessoriImage from '/src/assets/c3.jpg';

// 1. INTERFACE DEFINITION
// Defines the shape of our USP data
interface USPItem {
  id: number;
  title: string;
  description: string;
  image: string; // URL for the image
  titleColor: string; // Tailwind class for the title color (e.g., 'text-red-600')
}

// 2. DATA CONSTANTS
// All the content for the section is defined here

const whyUsData: USPItem[] = [
  {
    id: 1,
    title: 'Maria Montessori Approach',
    description: 'The most innovative entrepreneurs were very lucky to have been raised in an atmosphere where inquisitiveness was encouraged... A number of them went to Montessori schools, where they learned to follow their curiosity. -Harvard Business Review',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-red-600', // Your primary red
  },
  {
    id: 2,
    title: 'Theme Based Education',
    description: 'Is beneficial in several ways. Children of all ages benefit from the connections made across the curriculum, rather than teaching each skill or topic in isolation.',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-blue-600', 
  },
  {
    id: 3,
    title: 'Reggio Emilia',
    description: '"The potential of all children to think, learn, and construct knowledge". Reggio Emilia is a progressive, childcentered approach to education. The idea is that the child must be free to discover and to learn for himself.',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-green-600',
  },
  {
    id: 4,
    title: 'Dr. Howard Gardner',
    description: '"If a child is not learning the way you are teaching, then you must teach in the way the child learns." This principle highlights individualized learning.',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-pink-600',
  },
  {
    id: 5,
    title: 'Values & Discipline',
    description: '"Train up a child in the way he should go; even when he is old he will not depart from it." Pre school is the age to inculcate in them the right values and discipline.',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-yellow-600',
  },
  {
    id: 6,
    title: 'Reading Proficient Programme',
    description: 'Reading Proficient Programme is a fun and child centred approach to teaching literacy through synthetic phonics.',
    image: montessoriImage, // Replace with your image
    titleColor: 'text-sky-600',
  },
];

const whyUsSummary: string[] = [
    'Innovative Curriculum',
    'Experiential Learning',
    'Minimum Student Teacher Ratio',
    'Experienced School Management',
    'Run by Group of Educationist',
    'World Class Educators',
    'Learning Spaces Designed by Experts'
];

const bottomHighlight = {
    title: 'We\'ve been quite selective about what we teach.',
    bulletPoints: [
        { color: 'bg-orange-500', text: 'Best Pedagogies & Methodologies in the World' },
        { color: 'bg-red-500', text: 'Specific Programs & Early Childhood Practices in the World' }
    ]
};


const WhyTSSS: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-16 px-4 leading-tight">
          Why The Shining Star School?
        </h2>

        {/* Mapped USP Items */}
        {whyUsData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between py-12 lg:py-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : '' // Alternates layout
            } gap-12 border-b border-gray-100 last:border-b-0`}
          >
            {/* Number and Text Content */}
            <div className="w-full md:w-1/2 relative px-4">
              {/* Large background number */}
              <span className="absolute -left-8 md:-left-16 lg:-left-20 top-0 text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-gray-400 opacity-80 z-0 leading-none">
                {item.id}
              </span>
              {/* Text content */}
              <div className="relative z-10 pl-16 md:pl-20 lg:pl-24">
                <h3 className={`text-2xl md:text-3xl font-bold ${item.titleColor} mb-4`}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-quicksand">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center p-4">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md object-cover"
              />
            </div>
          </div>
        ))}
        
        {/* Bottom Highlight with bullet points */}
        <div className="text-center mt-16 pt-8 border-t border-gray-100">
            <p className="text-lg font-semibold text-gray-700 mb-6">
                {bottomHighlight.title}
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
                {bottomHighlight.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${point.color}`}></span>
                        <span className="text-base text-gray-600 font-medium">
                            {point.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>


        {/* Summary section (from your other design) */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 shadow-inner border border-red-100 mt-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Why choose US ?</h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed flex flex-wrap justify-center gap-x-4 gap-y-2 font-quicksand">
                {whyUsSummary.map((item, index) => (
                    <React.Fragment key={index}>
                        <span>{item}</span>
                        {index < whyUsSummary.length - 1 && <strong className="text-red-500">|</strong>}
                    </React.Fragment>
                ))}
            </p>
        </div>

      </div>
    </section>
  );
};

export default WhyTSSS;