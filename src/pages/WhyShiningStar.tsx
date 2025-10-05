// import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart } from 'lucide-react';

// const features = [
//   {
//     icon: BookOpen,
//     title: 'Comprehensive Curriculum',
//     description: 'Our curriculum spans Pre-Primary to K-10, carefully designed to meet international standards while being relevant to Indian culture and values. We integrate CBSE guidelines with innovative teaching methods.',
//     highlights: ['Age-appropriate learning', 'Skill-based education', 'Regular assessments', 'Personalized learning paths'],
//   },
//   {
//     icon: Lightbulb,
//     title: 'Experiential Learning Approach',
//     description: 'We believe in learning by doing. Our experiential learning programs include hands-on activities, field trips, science experiments, and real-world problem solving that make education engaging and memorable.',
//     highlights: ['Interactive sessions', 'Project-based learning', 'Field trips & excursions', 'Practical applications'],
//   },
//   {
//     icon: Users,
//     title: 'Expert Faculty',
//     description: 'Our teachers are more than educators—they are mentors, guides, and role models. With qualifications from top institutions and continuous professional development, they bring the best teaching practices to the classroom.',
//     highlights: ['IIT/IIM alumni management', 'Regular training programs', 'Low student-teacher ratio', 'Dedicated support staff'],
//   },
//   {
//     icon: Building2,
//     title: 'World-Class Infrastructure',
//     description: 'Our campus features state-of-the-art facilities designed to provide a safe, comfortable, and inspiring learning environment. From modern classrooms to well-equipped labs and sports facilities.',
//     highlights: ['Smart classrooms', 'Science & computer labs', 'Sports facilities', 'Safe and secure campus'],
//   },
//   {
//     icon: Trophy,
//     title: 'Focus on Excellence',
//     description: 'We maintain high academic standards while encouraging students to excel in sports, arts, and extracurricular activities. Our holistic approach ensures well-rounded development.',
//     highlights: ['Academic excellence', 'Sports achievements', 'Cultural programs', 'Competition success'],
//   },
//   {
//     icon: Heart,
//     title: 'Nurturing Environment',
//     description: 'We create a warm, inclusive atmosphere where every child feels valued and supported. Our focus on emotional well-being and character development helps students grow into confident, compassionate individuals.',
//     highlights: ['Individual attention', 'Counseling support', 'Parent involvement', 'Character building programs'],
//   },
// ];

// const WhyShiningStar = () => {
//   return (
//     <main className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
//             Why Choose The Shining Star School?
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Discover what makes us Jaipur's most trusted educational institution
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="space-y-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               } gap-8 items-center animate-fade-in`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex-1">
//                 <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
//                       <feature.icon className="h-8 w-8 text-primary-foreground" />
//                     </div>
//                     <h2 className="text-3xl font-bold">{feature.title}</h2>
//                   </div>
//                   <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                     {feature.description}
//                   </p>
//                   <ul className="grid grid-cols-2 gap-3">
//                     {feature.highlights.map((highlight, i) => (
//                       <li key={i} className="flex items-center gap-2 text-muted-foreground">
//                         <div className="w-2 h-2 rounded-full bg-accent" />
//                         <span>{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${
//                   index % 3 === 0 ? 'from-primary to-accent' :
//                   index % 3 === 1 ? 'from-accent to-neon-cyan' :
//                   'from-neon-pink to-primary'
//                 } opacity-20`} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-20 text-center bg-gradient-hero text-primary-foreground rounded-2xl p-12 shadow-glow animate-fade-in">
//           <h2 className="text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Experience the difference that quality education makes. Schedule a campus tour today!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/admissions"
//               className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
//             >
//               Apply Now
//             </a>
//             <a
//               href="/contact"
//               className="inline-block bg-transparent border-2 border-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default WhyShiningStar;


import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart, Star, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum spans Pre-Primary to K-10, carefully designed to meet international standards while being relevant to Indian culture and values.',
    highlights: ['Age-appropriate learning', 'Skill-based education', 'Regular assessments', 'Personalized learning paths'],
    color: 'from-primary to-neon-cyan',
  },
  {
    icon: Lightbulb,
    title: 'Experiential Learning',
    description: 'We believe in learning by doing. Our hands-on activities, field trips, and real-world problem solving make education engaging and memorable.',
    highlights: ['Interactive sessions', 'Project-based learning', 'Field trips & excursions', 'Practical applications'],
    color: 'from-neon-yellow to-accent',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Our teachers are mentors, guides, and role models. With qualifications from top institutions, they bring the best teaching practices to the classroom.',
    highlights: ['IIT/IIM alumni management', 'Regular training programs', 'Low student-teacher ratio', 'Dedicated support staff'],
    color: 'from-accent to-neon-pink',
  },
  {
    icon: Building2,
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art facilities designed to provide a safe, comfortable, and inspiring learning environment for every student.',
    highlights: ['Smart classrooms', 'Science & computer labs', 'Sports facilities', 'Safe and secure campus'],
    color: 'from-neon-cyan to-neon-green',
  },
  {
    icon: Trophy,
    title: 'Focus on Excellence',
    description: 'We maintain high academic standards while encouraging students to excel in sports, arts, and extracurricular activities.',
    highlights: ['Academic excellence', 'Sports achievements', 'Cultural programs', 'Competition success'],
    color: 'from-neon-green to-primary',
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'A warm, inclusive atmosphere where every child feels valued and supported. We focus on emotional well-being and character development.',
    highlights: ['Individual attention', 'Counseling support', 'Parent involvement', 'Character building programs'],
    color: 'from-neon-pink to-accent',
  },
];

const WhyShiningStar = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-12 h-12 text-neon-yellow fill-neon-yellow animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 bg-clip-text text-transparent">
                Why Shining Star?
              </h1>
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-black-600 mb-4">
              Where Bright Minds Shine Brighter! ✨
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jaipur's most loved school for a reason - discover what makes us special
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-black p-12 md:p-16 shadow-glow animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
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
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
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
      </div> */}


      <div className="container mx-auto px-4 pb-20">
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

export default WhyShiningStar;