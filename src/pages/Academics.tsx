// // import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart } from 'lucide-react';

// // const features = [
// //   {
// //     icon: BookOpen,
// //     title: 'Comprehensive Curriculum',
// //     description: 'Our curriculum spans Pre-Primary to K-10, carefully designed to meet international standards while being relevant to Indian culture and values. We integrate CBSE guidelines with innovative teaching methods.',
// //     highlights: ['Age-appropriate learning', 'Skill-based education', 'Regular assessments', 'Personalized learning paths'],
// //   },
// //   {
// //     icon: Lightbulb,
// //     title: 'Experiential Learning Approach',
// //     description: 'We believe in learning by doing. Our experiential learning programs include hands-on activities, field trips, science experiments, and real-world problem solving that make education engaging and memorable.',
// //     highlights: ['Interactive sessions', 'Project-based learning', 'Field trips & excursions', 'Practical applications'],
// //   },
// //   {
// //     icon: Users,
// //     title: 'Expert Faculty',
// //     description: 'Our teachers are more than educators—they are mentors, guides, and role models. With qualifications from top institutions and continuous professional development, they bring the best teaching practices to the classroom.',
// //     highlights: ['IIT/IIM alumni management', 'Regular training programs', 'Low student-teacher ratio', 'Dedicated support staff'],
// //   },
// //   {
// //     icon: Building2,
// //     title: 'World-Class Infrastructure',
// //     description: 'Our campus features state-of-the-art facilities designed to provide a safe, comfortable, and inspiring learning environment. From modern classrooms to well-equipped labs and sports facilities.',
// //     highlights: ['Smart classrooms', 'Science & computer labs', 'Sports facilities', 'Safe and secure campus'],
// //   },
// //   {
// //     icon: Trophy,
// //     title: 'Focus on Excellence',
// //     description: 'We maintain high academic standards while encouraging students to excel in sports, arts, and extracurricular activities. Our holistic approach ensures well-rounded development.',
// //     highlights: ['Academic excellence', 'Sports achievements', 'Cultural programs', 'Competition success'],
// //   },
// //   {
// //     icon: Heart,
// //     title: 'Nurturing Environment',
// //     description: 'We create a warm, inclusive atmosphere where every child feels valued and supported. Our focus on emotional well-being and character development helps students grow into confident, compassionate individuals.',
// //     highlights: ['Individual attention', 'Counseling support', 'Parent involvement', 'Character building programs'],
// //   },
// // ];

// // const WhyShiningStar = () => {
// //   return (
// //     <main className="py-20">
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
// //             Why Choose The Shining Star School?
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// //             Discover what makes us Jaipur's most trusted educational institution
// //           </p>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="space-y-12">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col ${
// //                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
// //               } gap-8 items-center animate-fade-in`}
// //               style={{ animationDelay: `${index * 0.1}s` }}
// //             >
// //               <div className="flex-1">
// //                 <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
// //                   <div className="flex items-center gap-4 mb-6">
// //                     <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
// //                       <feature.icon className="h-8 w-8 text-primary-foreground" />
// //                     </div>
// //                     <h2 className="text-3xl font-bold">{feature.title}</h2>
// //                   </div>
// //                   <p className="text-lg text-muted-foreground leading-relaxed mb-6">
// //                     {feature.description}
// //                   </p>
// //                   <ul className="grid grid-cols-2 gap-3">
// //                     {feature.highlights.map((highlight, i) => (
// //                       <li key={i} className="flex items-center gap-2 text-muted-foreground">
// //                         <div className="w-2 h-2 rounded-full bg-accent" />
// //                         <span>{highlight}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>

// //               <div className="flex-1">
// //                 <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${
// //                   index % 3 === 0 ? 'from-primary to-accent' :
// //                   index % 3 === 1 ? 'from-accent to-neon-cyan' :
// //                   'from-neon-pink to-primary'
// //                 } opacity-20`} />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Call to Action */}
// //         <div className="mt-20 text-center bg-gradient-hero text-primary-foreground rounded-2xl p-12 shadow-glow animate-fade-in">
// //           <h2 className="text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
// //           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
// //             Experience the difference that quality education makes. Schedule a campus tour today!
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <a
// //               href="/admissions"
// //               className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
// //             >
// //               Apply Now
// //             </a>
// //             <a
// //               href="/contact"
// //               className="inline-block bg-transparent border-2 border-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
// //             >
// //               Contact Us
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default WhyShiningStar;


// import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart, Star, Sparkles } from 'lucide-react';


// const academics = () => {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
//       {/* Hero Section */}
//       <div className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-hero opacity-5" />
//         <div className="container mx-auto px-4 relative">
//           <div className="text-center mb-8 animate-fade-in">
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <Star className="w-12 h-12 text-neon-yellow fill-neon-yellow animate-pulse" />
//               <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 bg-clip-text text-transparent">
//                 Why Shining Star?
//               </h1>
//               <Sparkles className="w-12 h-12 text-accent animate-pulse" />
//             </div>
//             <p className="text-2xl md:text-3xl font-semibold text-black-600 mb-4">
//               Where Bright Minds Shine Brighter! ✨
//             </p>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Jaipur's most loved school for a reason - discover what makes us special
//             </p>
//           </div>
//         </div>
//       </div>

      
     


//       <div className="container mx-auto px-4 pb-20">
//   <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-500 to-red-400 p-12 md:p-16 shadow-glow animate-fade-in">
//     {/* Subtle overlay for depth */}
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />

//     <div className="relative text-center text-white">
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">
//         Ready to Join Our Family? 🎉
//       </h2>
//       <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
//         Experience the difference that quality education makes. Schedule a campus tour today!
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 justify-center">
//         <a
//           href="/admissions"
//           className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
//         >
//           Apply Now 🚀
//         </a>

//         <a
//           href="/contact"
//           className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
//         >
//           Contact Us 📞
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//     </main>
//   );
// };


// import prePrimaryHero from '../assets/c1.jpg'; // Recommended: A bright, happy photo of your pre-primary kids

// export default academics;




import React, { useState } from 'react'; // Make sure useState is imported
import { 
  BookOpen, Users, Building2, Lightbulb, Trophy, Heart, Star, Sparkles,
  // --- Icons for new sections ---
  Brain, Palette, Search, Smile, Layers, FlaskConical, Computer, Bus, Music, BookUser
} from 'lucide-react';
import montessoriImage from '/src/assets/c3.jpg';

// --- Placeholder Images ---
// (Remember to replace these paths with your actual images)
// Example: import prePrimaryHero from '../assets/images/pre-primary-kids-playing.jpg';
const prePrimaryHero = montessoriImage;
const brainDevImage = montessoriImage;
const primaryWingImage = montessoriImage;


// --- Main Component ---
const Academics = () => {
  // State for the Pre-Primary tabs
  const [activeTab, setActiveTab] = useState('approach');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      
      {/* ================================== */}
      {/* 1. YOUR EXISTING HERO SECTION      */}
      {/* ================================== */}
      <div className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-12 h-12 text-yellow-400 fill-yellow-400 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-extrabold text-red-600">
                Academics
              </h1>
              <Sparkles className="w-12 h-12 text-pink-400 animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Where Bright Minds Shine Brighter! ✨
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our curriculum is designed to nurture curiosity, creativity, and a lifelong love for learning.
            </p>
          </div>
        </div>
      </div>

      
      {/* ================================== */}
      {/* 2. NEW SECTION: PRE-PRIMARY WING   */}
      {/* ================================== */}
      <section className="py-16 container mx-auto px-4 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Pre-Primary Wing <span className="text-red-600">(PG - UKG)</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            A safe, secure, and happy environment where every child's unique potential is celebrated.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-5/12">
            <img 
              src={prePrimaryHero} 
              alt="Pre-Primary Children Playing" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Side: Tabbed Content */}
          <div className="w-full lg:w-7/12">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('approach')}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'approach' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow-sm hover:bg-gray-100'
                }`}
              >
                Our Approach
              </button>
              <button
                onClick={() => setActiveTab('focus')}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'focus' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow-sm hover:bg-gray-100'
                }`}
              >
                Key Focus Areas
              </button>
              <button
                onClick={() => setActiveTab('brain')}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'brain' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow-sm hover:bg-gray-100'
                }`}
              >
                Brain Development
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[400px]">
              
              {/* --- Tab 1: Our Approach --- */}
              {activeTab === 'approach' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">A World of Discovery</h3>
                  <p className="text-gray-600 mb-6">
                    We combine the world's best pedagogies to create an innovative, experiential curriculum.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3">
                      <Layers className="w-6 h-6 text-red-600" />
                      <span className="font-semibold text-gray-700">EYFS-UK Curriculum</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
                      <Smile className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-700">Montessori Lab</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3">
                      <Palette className="w-6 h-6 text-green-600" />
                      <span className="font-semibold text-gray-700">Reggio Emilia Approach</span>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl flex items-center gap-3">
                      <Search className="w-6 h-6 text-yellow-600" />
                      <span className="font-semibold text-gray-700">Theme Based Education</span>
                    </div>
                  </div>
                </div>
              )}

              {/* --- Tab 2: Key Focus Areas --- */}
              {activeTab === 'focus' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">We Prepare Children To Be...</h3>
                  <p className="text-gray-600 mb-6">
                    Our goal is holistic development, nurturing children to be happy, confident, and responsible individuals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> <span className="text-gray-700">Confident to take risks</span></li>
                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> <span className="text-gray-700">Active thinkers and imaginative</span></li>
                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> <span className="text-gray-700">Good listeners and communicators</span></li>
                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> <span className="text-gray-700">Respectful and tolerant</span></li>
                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> <span className="text-gray-700">Ready for challenges</span></li>
                  </ul>
                </div>
              )}

              {/* --- Tab 3: Brain Development --- */}
              {activeTab === 'brain' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">The Critical Early Years</h3>
                  <p className="text-gray-600 mb-6">
                    The brain develops most rapidly between 0-5 years. Our program is designed to maximize this crucial window of opportunity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <img src={brainDevImage} alt="Brain Development" className="rounded-xl shadow-md object-cover w-full h-40" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="bg-red-100 p-4 rounded-lg text-center">
                        <span className="text-3xl font-bold text-red-600">75%</span>
                        <p className="font-semibold text-gray-700">Brain development before age 3</p>
                      </div>
                      <div className="bg-blue-100 p-4 rounded-lg text-center">
                        <span className="text-3xl font-bold text-blue-600">90%</span>
                        <p className="font-semibold text-gray-700">Brain development before age 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ================================== */}
      {/* 3. NEW SECTION: PRIMARY WING       */}
      {/* ================================== */}
      <section className="py-16 bg-gradient-to-r from-red-50/30 via-pink-50/30 to-red-50/30 mt-16">
        <div className="container mx-auto px-4 animate-fade-in">
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            
            {/* Right Side: Image */}
            <div className="w-full lg:w-5/12">
              <img 
                src={primaryWingImage} 
                alt="Primary Students in Lab" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Primary Wing <span className="text-red-600">(1st - 8th)</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                Building strong foundations with the CBSE pattern, our primary wing focuses on academic excellence, digital literacy, and hands-on learning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <BookUser className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">CBSE Pattern & Expert Faculty</h3>
                  <p className="text-gray-600 text-sm">
                    Structured curriculum delivered by qualified and trained teachers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Computer className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Classes & IT Center</h3>
                  <p className="text-gray-600 text-sm">
                    Integrating technology for modern, interactive learning experiences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Engaging with Science Experiments, Language Labs, and more.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <Bus className="w-6 h-6 text-yellow-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Beyond the Classroom</h3>
                  <p className="text-gray-600 text-sm">
                    Learning through Educational Field Trips, Music, and Dance.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================== */}
      {/* 4. YOUR EXISTING CTA SECTION       */}
      {/* ================================== */}
      <div className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-500 to-red-400 p-12 md:p-16 shadow-glow animate-fade-in">
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />

          <div className="relative text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Join Our Family? 🎉
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the difference that quality education makes. Schedule a campus tour today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Apply Now 🚀
              </a>

              <a
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact Us 📞
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Academics;