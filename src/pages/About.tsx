import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
            About The Shining Star School
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Excellence Meets Compassion in Education
          </p>
        </div>

        {/* Legacy Section */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Our Legacy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For years, we have nurtured young minds with an education that goes beyond academics. Our approach blends modern learning with timeless values, helping children grow not only intellectually, but emotionally and socially, becoming confident and compassionate individuals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our legacy lies in the lives we’ve shaped—students who are curious, resilient, and purposeful. Every milestone reflects our commitment to holistic development, preparing each child to step into the world with knowledge, wisdom, and heart.

            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 shadow-glow animate-fade-in">
            <Target className="h-12 w-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To inspire and empower every child to reach their fullest potential through holistic education that balances knowledge, creativity, and character. We aim to cultivate curious minds, compassionate hearts, and confident individuals who can thrive in a rapidly changing world.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border-2 border-accent animate-fade-in">
            <Eye className="h-12 w-12 text-accent mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be a nurturing and innovative learning community where every child blossoms into a confident, compassionate, and creative individual. We envision a world where education empowers learners to think critically, act responsibly, and contribute positively to society.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl text-red-600 font-bold text-center mb-12 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
              { title: 'Integrity', description: 'Building character through honesty and ethical behavior' },
              { title: 'Innovation', description: 'Embracing new ideas and modern teaching methods' },
              { title: 'Compassion', description: 'Creating a caring environment for all students' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 hover:shadow-card transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management */}
        <section className="bg-card rounded-2xl p-8 md:p-12 shadow-card animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Leadership Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The Shining Star School is managed by a team of experienced educators with backgrounds from 
            premier institutions including IIT and IIM. This unique combination of academic excellence 
            and management expertise ensures that our institution remains at the forefront of educational 
            innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our leadership team brings decades of combined experience in education, curriculum development, 
            and child psychology. They work tirelessly to ensure that every child receives personalized 
            attention and the best possible learning environment.
          </p>
        </section>

        {/* Learning Philosophy */}
        <section className="mt-20 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-red-600 bg-gradient-hero bg-clip-text text-transparent">
            Our Learning Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We believe that education is not just about textbooks and exams. From Pre-Primary to K-10, 
            our curriculum is designed to foster critical thinking, creativity, and social responsibility. 
            We emphasize experiential learning, where students learn by doing, exploring, and discovering. 
            Our approach ensures that children not only excel academically but also develop essential life 
            skills, emotional intelligence, and a love for learning that lasts a lifetime.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
