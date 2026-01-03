import { Star } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';



const testimonials = [
  {
    name: 'Mr. Dheeraj Agarwal',
    image: testimonial1,
    text: 'The Shining Star School is very good. Our children get to learn new things here every day. My child is learning very good habits in this school. Hiyansh goes home and recites new poems and talks about shapes. One day, he suddenly told a story to his grandparents, which made them very happy.',
    rating: 5,
  
  },
    {
    name: 'Mrs. Pooja Gupta',
    image: testimonial3,
    text: 'They are focusing well on the students to help build up their curriculum. He is able to write lowercase letters on his own in literacy class, which is quite amazing.',
    rating: 5,
  },
  {
    name: 'Mrs. Monalisha Nayak',
    image: testimonial2,
    text: 'The Shining Star School is the most experimental school in the area. My child is doing very well. The school is the most popular and highly recommended school in the community. The school highlights environment, activities, and values.',
    rating: 5,
  },

];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-pink-50 to-red-100">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 font-poppins mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from families who trust us with their children's education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon-yellow text-neon-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
