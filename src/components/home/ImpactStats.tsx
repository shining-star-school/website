// import { Award, Users, Heart, GraduationCap } from 'lucide-react';

// const stats = [
//   {
//     icon: Award,
//     value: '15+',
//     label: 'Years of Excellence',
//     color: 'text-neon-yellow',
//   },
//   {
//     icon: Users,
//     value: '1000+',
//     label: 'Families',
//     color: 'text-neon-cyan',
//   },
//   {
//     icon: Heart,
//     value: '100%',
//     label: 'Parent Satisfaction',
//     color: 'text-neon-pink',
//   },
//   {
//     icon: GraduationCap,
//     value: '30+',
//     label: 'Impactful Staff',
//     color: 'text-primary',
//   },
// ];

// const ImpactStats = () => {
//   return (
//     <section className="py-16 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <stat.icon className={`h-12 w-12 mb-4 ${stat.color}`} strokeWidth={1.5} />
//                 <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
//                   {stat.value}
//                 </h3>
//                 <p className="text-sm md:text-base font-medium text-muted-foreground">
//                   {stat.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImpactStats;



import { useState, useEffect, useRef } from 'react';

const ImpactStats = () => {
  const [counters, setCounters] = useState({
    years: 0,
    families: 0,
    satisfaction: 0,
    staff: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    years: 12,
    families: 1000,
    satisfaction: 98,
    staff: 30
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounter = (key: keyof typeof finalValues, target: number) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      Object.entries(finalValues).forEach(([key, value]) => {
        animateCounter(key as keyof typeof finalValues, value);
      });
    }
  }, [isVisible]);

  const impactItems = [
    {
      number: counters.years,
      suffix: '+',
      label: 'Years of Excellence',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      number: counters.families,
      suffix: '+',
      label: 'Happy Families',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-blue-400 to-purple-500'
    },
    {
      number: counters.satisfaction,
      suffix: '%',
      label: 'Parent Satisfaction',
      icon: '💯',
      color: 'from-green-400 to-blue-500'
    },
    {
      number: counters.staff,
      suffix: '+',
      label: 'Staff',
      icon: '👨‍🏫',
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-white via-pink-50 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 font-poppins mb-4 animate-fade-in">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 font-quicksand max-w-2xl mx-auto">
            Celebrating our journey of nurturing young minds and building bright futures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactItems.map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce-gentle`}>
                {item.icon}
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins">
                  {item.number}<span className="text-2xl">{item.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium font-quicksand">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-6 py-3 rounded-full">
            <span className="text-2xl">🌟</span>
            <span className="text-lg font-semibold text-red-600 font-poppins">
              Making a difference, one child at a time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
