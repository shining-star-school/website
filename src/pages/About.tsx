






import React from 'react';
// Added new icons for the Core Values section
import { Target, Eye, Award, Users, Star, ShieldCheck, Lightbulb, Heart } from 'lucide-react';
import principalImage from '../assets/principal1.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    // Use the theme's background gradient
    <main className="py-20 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
            About The Shining Star School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-quicksand">
            Where Excellence Meets Compassion in Education
          </p>
        </div>

          
        {/* ============================== */}
        {/* 1. PRINCIPAL'S MESSAGE (No Changes) */}
        {/* ============================== */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
              {/* Column 1: Principal's Photo */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src={principalImage} // Use your imported image
                    alt="Mrs. Upma Gupta, Principal"
                    className="rounded-3xl shadow-xl object-cover w-80 h-96 md:w-96 md:h-[30rem]"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-2xl -z-10 opacity-80" />
                </div>
              </div>

              {/* Column 2: Message Card */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Award className="h-8 w-8 text-red-600" />
                    Principal’s Message
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
                    At Shining Star School, we believe that true education goes beyond textbooks — it is an experience that nurtures curiosity, creativity, and character. Our teaching philosophy is grounded in scientific and experiential learning, inspired by globally acclaimed pedagogies such as Maria Montessori, Reggio Emilia, and our own Reading Proficiency Programme. Together, these approaches ensure that every child learns through exploration, expression, and meaningful engagement. <strong className="font-bold text-gray-700">With over 18 years of experience in early childhood education, Mrs. Upma Gupta, our Principal,</strong> brings unmatched expertise and a deep understanding of how young minds grow and thrive. Her compassionate leadership ensures that each child’s unique potential is recognized, nurtured, and celebrated — making every student feel seen, valued, and inspired.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
                    We take pride in providing an environment that feels like a second home — warm, joyful, and secure. Our teachers share a motherly connection with each child, fostering both emotional well-being and intellectual confidence. At The Shining Star, parents are our partners in the journey of learning. Every idea and concern is valued, as we believe that education flourishes through collaboration and care.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
                    Under <strong className="font-bold text-gray-700">Upma Ma’am’s</strong> guidance, it is a core principle that every child participates in every activity, cultivating confidence, teamwork, and holistic growth.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
                    <strong className="font-bold text-gray-700">Since our inception in 2013, The Shining Star School has stood as an exclusive foundation school where innovation meets compassion — shaping young minds into confident learners, kind individuals, and future leaders.</strong>
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-xl font-bold text-red-600 font-poppins">
                      Mrs. Upma Gupta
                    </h4>
                    <p className="text-gray-500 font-quicksand">Principal, The Shining Star School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* ============================== */}
        {/* 2. OUR LEGACY (Updated Text)     */}
        {/* ============================== */}
        <section className="my-20 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-800">
              <Award className="h-8 w-8 text-red-600" />
              Our Legacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
              Established in 2013, Shining Star School has grown from a humble beginning into India’s most trusted name in experiential education. Guided by the vision of Upma Ma’am, we have set new benchmarks in early childhood learning through our blend of scientific teaching methods, personal attention, and motherly care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
              Our legacy lives in the bright, confident children who began their journey here — children who think deeply, act kindly, and shine brightly. As we continue to evolve, our commitment remains steadfast: to inspire lifelong learners and nurture the leaders of tomorrow.
            </p>
          </div>
        </section>



        {/* ============================== */}
        {/* 3. MISSION & VISION (Updated Text) */}
        {/* ============================== */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Our Mission */}
          <div className="bg-gradient-to-br from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in">
            <Target className="h-12 w-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90 mb-6 font-quicksand">
              Since our founding in 2013, our mission has been clear — to make learning a meaningful experience for every child. We are committed to:
            </p>
            <ul className="space-y-3 font-quicksand">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">1.</span>
                <span>Delivering scientifically designed, experience-based learning that nurtures creativity and critical thinking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">2.</span>
                <span>Providing a warm, inclusive, and child-centered environment where every student feels valued and supported.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">3.</span>
                <span>Encouraging 100% participation in all activities to promote confidence, teamwork, and holistic development.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">4.</span>
                <span>Partnering with parents to ensure every child’s emotional, social, and academic growth.</span>
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-red-100 animate-fade-in">
            <Eye className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
              At Shining Star School, our vision is to redefine early education through the power of experiential learning. As India’s best experiential school, we aspire to create curious, confident, and compassionate learners who think independently and act with integrity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4 font-quicksand">
              By integrating globally acclaimed pedagogies — including Maria Montessori, Reggio Emilia, and the Reading Proficiency Programme — we envision a future where every child learns through discovery, innovation, and joy.
            </p>
          </div>
        </section>

        
        {/* ============================== */}
        {/* 4. CORE VALUES (Redesigned)    */}
        {/* ============================== */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl text-red-600 font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-poppins mb-2">Indivisuality</h3>
              <p className="text-gray-600 font-quicksand">
                Striving for the highest standards in everything we do
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-poppins mb-2">Creativity</h3>
              <p className="text-gray-600 font-quicksand">
                Building character through honesty and ethical behavior
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-poppins mb-2">Curiosity</h3>
              <p className="text-gray-600 font-quicksand">
                Embracing new ideas and modern teaching methods
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-poppins mb-2">Happitude</h3>
              <p className="text-gray-600 font-quicksand">
                Creating a caring environment for all students
              </p>
            </div>

          </div>
        </section>

        
        {/* ============================== */}
        {/* 5. LEADERSHIP (Updated Text)   */}
        {/* ============================== */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-800">
            <Users className="h-8 w-8 text-red-600" />
            Leadership Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
            At Shining Star School, we believe that great education begins with great leadership. Our institution is guided by a distinguished team of professionals from IITs and IIMs, along with seasoned educators possessing over 20 years of experience in school leadership and child development.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
            This blend of academic brilliance and practical expertise ensures that our approach to learning remains innovative, purposeful, and deeply rooted in child-centric values. </p>
          {/* </ReadMore> */}
          <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
            Under the visionary guidance of <strong className="font-bold text-gray-700">  Mrs. Upma Gupta </strong>, our Principal with <strong className="font-bold text-gray-700">18+ years</strong> of experience in early childhood education, the leadership team continues to set new benchmarks in experiential learning and holistic development.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
            Together, they uphold the school’s commitment to nurturing confident learners, compassionate individuals, and responsible future leaders.
          </p>
        </section>
    </div>
    </main>
  );
};

export default About;


















// import { Target, Eye, Award, Users } from 'lucide-react';
// import principalImage from '../assets/c1.jpg'; // Adjust the path as necessary

// const About = () => {
//   return (
//     <main className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
//             About The Shining Star School
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Where Excellence Meets Compassion in Education
//           </p>
//         </div>


//         {/* <section className="mb-20 animate-fade-in">
//           <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
//             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
//               <Award className="h-8 w-8 text-red-600" />
//               Principal's Message
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-4">
//               For years, we have nurtured young minds with an education that goes beyond academics. Our approach blends modern learning with timeless values, helping children grow not only intellectually, but emotionally and socially, becoming confident and compassionate individuals. 
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our legacy lies in the lives we’ve shaped—students who are curious, resilient, and purposeful. Every milestone reflects our commitment to holistic development, preparing each child to step into the world with knowledge, wisdom, and heart.

//             </p>
//           </div>
//         </section> */}

//           {/* Principal's Message Section */}
//           <section className="py-16 bg-gradient-to-r from-red-50/20 via-white to-red-50/20">
//       <div className="container mx-auto px-4">
        
//         <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
          
//           {/* Column 1: Principal's Photo */}
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <div className="relative">
//               <img
//                 src={principalImage} // Use your imported image
//                 alt="Mrs. Upma Gupta, Principal"
//                 // Updated larger size
//                 className="rounded-3xl shadow-xl object-cover w-80 h-96 md:w-96 md:h-[30rem]"
//               />
//               {/* Decorative accent element */}
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-2xl -z-10 opacity-80" />
//             </div>
//           </div>

//           {/* Column 2: Message Card */}
//           <div className="w-full lg:w-2/3">
//             <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//                 <Award className="h-8 w-8 text-red-600" />
//                 Principal’s Message
//               </h2>
              
//               {/* --- UPDATED TEXT WITH BOLDING --- */}
//               <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
//                 At Shining Star School, we believe that true education goes beyond textbooks — it is an experience that nurtures curiosity, creativity, and character. Our teaching philosophy is grounded in scientific and experiential learning, inspired by globally acclaimed pedagogies such as Maria Montessori, Reggio Emilia, and our own Reading Proficiency Programme. Together, these approaches ensure that every child learns through exploration, expression, and meaningful engagement. <strong className="font-bold text-gray-700">With over 18 years of experience in early childhood education, Mrs. Upma Gupta, our Principal,</strong> brings unmatched expertise and a deep understanding of how young minds grow and thrive. Her compassionate leadership ensures that each child’s unique potential is recognized, nurtured, and celebrated — making every student feel seen, valued, and inspired.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
//                 We take pride in providing an environment that feels like a second home — warm, joyful, and secure. Our teachers share a motherly connection with each child, fostering both emotional well-being and intellectual confidence. At The Shining Star, parents are our partners in the journey of learning. Every idea and concern is valued, as we believe that education flourishes through collaboration and care.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed mb-4 font-quicksand">
//                 Under <strong className="font-bold text-gray-700">Upma Ma’am’s</strong> guidance, it is a core principle that every child participates in every activity, cultivating confidence, teamwork, and holistic growth.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
//                 <strong className="font-bold text-gray-700">Since our inception in 2013, The Shining Star School has stood as an exclusive foundation school where innovation meets compassion — shaping young minds into confident learners, kind individuals, and future leaders.</strong>
//               </p>
//               {/* --- END OF UPDATED TEXT --- */}


//               {/* Signature */}
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <h4 className="text-xl font-bold text-red-600 font-poppins">
//                   Mrs. Upma Gupta
//                 </h4>
//                 <p className="text-gray-500 font-quicksand">Principal, The Shining Star School</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>

        
//         {/* Legacy Section */}
//         <section className="mb-20 animate-fade-in">
//           <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
//             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
//               <Award className="h-8 w-8 text-primary" />
//               Our Legacy
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-4">
//               For years, we have nurtured young minds with an education that goes beyond academics. Our approach blends modern learning with timeless values, helping children grow not only intellectually, but emotionally and socially, becoming confident and compassionate individuals.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our legacy lies in the lives we’ve shaped—students who are curious, resilient, and purposeful. Every milestone reflects our commitment to holistic development, preparing each child to step into the world with knowledge, wisdom, and heart.

//             </p>
//           </div>
//         </section>



//         {/* Mission & Vision */}
//         <section className="grid md:grid-cols-2 gap-8 mb-20">
//           <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 shadow-glow animate-fade-in">
//             <Target className="h-12 w-12 mb-6" />
//             <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//             <p className="text-lg leading-relaxed opacity-90">
//               To inspire and empower every child to reach their fullest potential through holistic education that balances knowledge, creativity, and character. We aim to cultivate curious minds, compassionate hearts, and confident individuals who can thrive in a rapidly changing world.
//             </p>
//           </div>

//           <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border-2 border-accent animate-fade-in">
//             <Eye className="h-12 w-12 text-accent mb-6" />
//             <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               To be a nurturing and innovative learning community where every child blossoms into a confident, compassionate, and creative individual. We envision a world where education empowers learners to think critically, act responsibly, and contribute positively to society.
//             </p>
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className="mb-20 animate-fade-in">
//           <h2 className="text-4xl text-red-600 font-bold text-center mb-12 bg-clip-text text-transparent">
//             Our Core Values
//           </h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
//               { title: 'Integrity', description: 'Building character through honesty and ethical behavior' },
//               { title: 'Innovation', description: 'Embracing new ideas and modern teaching methods' },
//               { title: 'Compassion', description: 'Creating a caring environment for all students' },
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-secondary rounded-xl p-6 hover:shadow-card transition-all duration-300"
//               >
//                 <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
//                 <p className="text-muted-foreground">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Management */}
//         <section className="bg-card rounded-2xl p-8 md:p-12 shadow-card animate-fade-in">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
//             <Users className="h-8 w-8 text-primary" />
//             Leadership Excellence
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed mb-4">
//             The Shining Star School is managed by a team of experienced educators with backgrounds from 
//             premier institutions including IIT and IIM. This unique combination of academic excellence 
//             and management expertise ensures that our institution remains at the forefront of educational 
//             innovation.
//           </p>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Our leadership team brings decades of combined experience in education, curriculum development, 
//             and child psychology. They work tirelessly to ensure that every child receives personalized 
//             attention and the best possible learning environment.
//           </p>
//         </section>

//         {/* Learning Philosophy */}
//         <section className="mt-20 text-center animate-fade-in">
//           <h2 className="text-4xl font-bold mb-6 text-red-600 bg-gradient-hero bg-clip-text text-transparent">
//             Our Learning Philosophy
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
//             We believe that education is not just about textbooks and exams. From Pre-Primary to K-10, 
//             our curriculum is designed to foster critical thinking, creativity, and social responsibility. 
//             We emphasize experiential learning, where students learn by doing, exploring, and discovering. 
//             Our approach ensures that children not only excel academically but also develop essential life 
//             skills, emotional intelligence, and a love for learning that lasts a lifetime.
//           </p>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default About;