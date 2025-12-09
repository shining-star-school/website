import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// --- CONFIGURATION ---
// ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE AGAIN ⚠️
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE"; 

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form data object
    // Mapping Contact Form data to your existing Google Sheet columns
    const form = new FormData();
    form.append('childName', "General Enquiry"); // Acts as a tag so you know it's from Contact page
    form.append('childAge', "-"); 
    form.append('parentName', formData.name);
    form.append('phone', formData.phone);
    // Combine extra details into the Address column
    form.append('address', `[Email: ${formData.email}] [Subject: ${formData.subject}] Message: ${formData.message}`);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors',
      });

      toast({
        title: "Message Sent Successfully! 📨",
        description: "Thank you for reaching out. We will get back to you soon.",
        variant: "default",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error("Error submitting form", error);
      toast({
        title: "Message Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-20 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-quicksand">
            We'd love to hear from you. Whether you have a question about admissions, academics, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-8 animate-fade-in">
            
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 font-quicksand text-sm">
                  625-626, Ganesh Nagar Main, Niwaru Road, Jhotwara<br />
                  Jaipur - 302012
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 font-quicksand text-sm space-y-1">
                  <span className="block">+91 94144 56312</span>
                  <span className="block">+91 94140 17518</span>
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 font-quicksand text-sm">
                  theshiningstarschool@gmail.com
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">School Hours</h3>
                <p className="text-gray-600 font-quicksand text-sm">
                  Mon - Sat: 8:00 AM - 3:00 PM<br />
                  Sunday - Closed
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-red-600 rounded-2xl p-8 text-white shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Follow Our Journey</h3>
                <p className="text-red-100 font-quicksand">Stay updated with school activities & events.</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/the.shining.star.jp" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/theshiningstar_jaipur" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

          {/* --- Right Column: Form --- */}
          <div className="animate-fade-in delay-100">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50" />
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Your Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                      className="bg-gray-50 focus:border-red-500 h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                      className="bg-gray-50 focus:border-red-500 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                    className="bg-gray-50 focus:border-red-500 h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject</Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required 
                    className="bg-gray-50 focus:border-red-500 h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required 
                    rows={4}
                    className="bg-gray-50 focus:border-red-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </div>

        {/* Map Section - FIXED URL */}
        <section className="animate-fade-in delay-200">
          <div className="bg-white p-4 rounded-3xl shadow-lg border border-red-50">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.205655958038!2d75.72017027487003!3d26.96038595804131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d70042d00d%3A0x2bb93250ef625788!2sThe%20Shining%20Star%20School!5e0!3m2!1sen!2sin!4v1759659727369!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Shining Star School Location"
              />
          </div>
        </section>

      </div>
    </main>
  );
};

export default Contact;









































// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We will get back to you as soon as possible.",
//     });
//     setFormData({ name: '', phone: '', message: '' });
//   };

//   const handleWhatsApp = () => {
//     window.open('https://wa.me/919414017518?text=Hello! I would like to know more about The Shining Star School.', '_blank');
//   };

//   return (
//     <main className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-600 bg-clip-text text-transparent">
//             Contact Us
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             We're here to answer your questions and help you learn more about our school
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8 animate-fade-in">
//             <div className="bg-card rounded-2xl p-8 shadow-card">
//               <h2 className="text-3xl text-red-600 font-bold mb-6">Get in Touch</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 shadow-glow">
//                     <MapPin className="h-6 w-6 text-red" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Address</h3>
//                     <p className="text-muted-foreground">
//                       The Shining Star School<br />
//                       Jaipur, Rajasthan, India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 shadow-glow">
//                     <Phone className="h-6 w-6 text-black" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Phone</h3>
//                     <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
//                       +91 98765 43210
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 shadow-glow">
//                     <Mail className="h-6 w-6 " />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Email</h3>
//                     <a href="mailto:info.theshiningstarschool@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
//                       info.theshiningstarschool@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 shadow-glow">
//                     <Clock className="h-6 w-6 " />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">School Hours</h3>
//                     <p className="text-muted-foreground">
//                       Monday - Friday: 8:00 AM - 4:00 PM<br />
//                       Saturday: 8:00 AM - 12:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <Button
//                 onClick={handleWhatsApp}
//                 className="w-full mt-8 bg-[#25D366] hover:bg-[#20BA5A] text-white"
//                 size="lg"
//               >
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Chat on WhatsApp
//               </Button>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-fade-in">
//             <div className="bg-card rounded-2xl p-8 shadow-card">
//               <h2 className="text-3xl text-red-600 font-bold mb-6">Send us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Label htmlFor="name">Your Name *</Label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="message">Message *</Label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     rows={5}
//                     required
//                   />
//                 </div>

//                 <Button type="submit" className="w-full bg-gradient-hero shadow-glow" size="lg">
//                   Send Message
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="mt-16 animate-fade-in">
//           <div className="bg-card rounded-2xl p-4 shadow-card">
//             <h2 className="text-3xl font-bold text-red-600 mb-6 px-4">Find Us on Map</h2>
//             <div className="rounded-xl overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.205655958038!2d75.72017027487003!3d26.96038595804131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d70042d00d%3A0x2bb93250ef625788!2sThe%20Shining%20Star%20School!5e0!3m2!1sen!2sin!4v1759659727369!5m2!1sen!2sin"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="The Shining Star School Location"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;
