import { useState } from 'react';
import { FileText, CheckCircle, Calendar, Users, Star, ShieldCheck, Lightbulb, Heart, BookOpen } from 'lucide-react';
// Assuming these are your shadcn/ui components.
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// --- CONFIGURATION ---

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYXAs_GTLx2tmqOuUUBbcn3YfVYPx7KHO0JZnRLxSLPder3dqmaR0Pn5Id7IUTsxmP/exec"; 

// --- Main Admissions Component ---
const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    // Create form data object for Google Sheets
    const form = new FormData();
    form.append('childName', formData.childName);
    form.append('childAge', formData.childAge);
    form.append('parentName', formData.parentName);
    form.append('phone', formData.phone);
    form.append('address', formData.address);

    try {
      // Send data to Google Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors', // Important for Google Apps Script
      });

      // Success Feedback
      toast({
        title: "Enquiry Submitted Successfully! 🎉",
        description: "We have received your details and will contact you shortly.",
        variant: "default",
      });

      // Reset form
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        phone: '',
        address: '',
      });

    } catch (error) {
      console.error("Error submitting form", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call on 94144 56312.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    // Updated main background
    <main className="py-20 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* ============================== */}
        {/* 1. Header                      */}
        {/* ============================== */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
            Admissions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-quicksand">
            Join the family of 2000+ satisfied parents. Enroll your child today!
          </p>
        </div>

        
        {/* ============================== */}
        {/* 2. Admission Process           */}
        {/* ============================== */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              { icon: FileText, title: 'Submit Enquiry', description: 'Fill out the admission enquiry form online or visit our campus', color: 'red' },
              { icon: Calendar, title: 'Campus Tour', description: 'Schedule a visit to see our facilities and meet our faculty', color: 'blue' },
              { icon: Users, title: 'Interaction', description: 'Meet with our counselors and discuss your child\'s educational needs', color: 'green' },
              { icon: CheckCircle, title: 'Enrollment', description: 'Complete the documentation and secure your child\'s admission', color: 'yellow' },
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
              >
                {/* Updated Icon Styling */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
                  ${step.color === 'red' && 'bg-red-100'}
                  ${step.color === 'blue' && 'bg-blue-100'}
                  ${step.color === 'green' && 'bg-green-100'}
                  ${step.color === 'yellow' && 'bg-yellow-100'}
                `}>
                  <step.icon className={`h-8 w-8 
                    ${step.color === 'red' && 'text-red-600'}
                    ${step.color === 'blue' && 'text-blue-600'}
                    ${step.color === 'green' && 'text-green-600'}
                    ${step.color === 'yellow' && 'text-yellow-600'}
                  `} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-poppins mb-3">{step.title}</h3>
                <p className="text-gray-600 font-quicksand">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        
        {/* ============================== */}
        {/* 3. Age Criteria (Updated)      */}
        {/* ============================== */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 relative z-10">
              Age Criteria <span className="text-red-600">&</span> Eligibility
            </h2>

            <div className="grid md:grid-cols-2 gap-8 relative z-10 items-stretch">
              
              {/* --- Pre-Primary Column (Pink) --- */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Pre-Primary Wing</h3>
                </div>

                <div className="bg-red-50/50 rounded-2xl p-2 border border-red-100 flex-1">
                  {/* PG Item */}
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Playgroup (PG)</h4>
                      <p className="text-sm text-gray-500 font-quicksand mt-1">Duration: 6 months - 1 year</p>
                    </div>
                    <div className="bg-red-50 px-4 py-2 rounded-lg text-red-700 font-bold font-quicksand text-sm border border-red-100">
                      2.5 - 3.5 Years
                    </div>
                  </div>

                  {/* Nursery Item */}
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
                    <h4 className="font-bold text-gray-800 text-lg">Nursery</h4>
                    <div className="bg-orange-50 px-4 py-2 rounded-lg text-orange-700 font-bold font-quicksand text-sm border border-orange-100">
                      3+ Years
                    </div>
                  </div>

                  {/* LKG Item */}
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
                    <h4 className="font-bold text-gray-800 text-lg">Junior KG (LKG)</h4>
                    <div className="bg-yellow-50 px-4 py-2 rounded-lg text-yellow-700 font-bold font-quicksand text-sm border border-yellow-100">
                      4+ Years
                    </div>
                  </div>

                  {/* HKG Item */}
                  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                    <h4 className="font-bold text-gray-800 text-lg">Senior KG (HKG)</h4>
                    <div className="bg-green-50 px-4 py-2 rounded-lg text-green-700 font-bold font-quicksand text-sm border border-green-100">
                      5+ Years
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Primary & Middle Column (Blue) --- */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Primary & Middle Wing</h3>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex-1 flex flex-col">
                  {/* Timeline Container */}
                  <div className="relative border-l-2 border-blue-200 ml-3 my-2 flex-1">
                      
                      {/* Class 1 */}
                      <div className="relative pl-8 mb-10">
                          {/* Dot */}
                          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">Class 1</h4>
                          <p className="text-gray-600 font-quicksand leading-relaxed">
                              Minimum <span className="font-bold text-blue-700">6 years</span> as of April 1st of the academic year.
                          </p>
                      </div>

                      {/* Class 2 to 8 */}
                      <div className="relative pl-8">
                          {/* Dot */}
                          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">Class 2 to 8</h4>
                          <p className="text-gray-600 font-quicksand leading-relaxed">
                              Admission is based on <span className="font-bold text-blue-700">CBSE guidelines</span> and the student's previous academic performance.
                          </p>
                      </div>
                  </div>
                  
                  {/* Note Box */}
                  <div className="mt-6 bg-white p-4 rounded-xl border border-blue-100 flex gap-3 shadow-sm">
                    <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 font-quicksand">
                      We ensure age-appropriate placement to support your child's social and emotional development.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        
        {/* ============================== */}
        {/* 4. Required Documents (Revamped) */}
        {/* ============================== */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-red-50 rounded-br-full opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-50 rounded-tl-full opacity-60 pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 relative z-10">
              Required <span className="text-red-600">Documents</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 max-w-5xl mx-auto">
              {[
                'Birth Certificate (Original & Copy)',
                'Transfer Certificate (if applicable)',
                'Previous Academic Records',
                'Passport Size Photographs (Child & Parents)',
                'Address Proof (Aadhar/Passport/Utility Bill)',
                'Medical Records (If any)',
                'Aadhar Card Copy (Child & Parents)',
                'Parent ID Proof',
              ].map((doc, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white border border-red-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-700 font-quicksand font-medium text-lg">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================== */}
        {/* 5. FAQ (Revamped)              */}
        {/* ============================== */}
        <section className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Admission <span className="text-red-600">FAQs</span>
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* FAQ Item 1 */}
              <AccordionItem value="item-1" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
                  When does the admission process start?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
                  Admissions typically open in <span className="font-bold text-red-600">January</span> for the upcoming academic year. However, we accept applications throughout the year based on seat availability. We recommend applying early to secure a spot.
                </AccordionContent>
              </AccordionItem>
              
              {/* FAQ Item 2 */}
              <AccordionItem value="item-2" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
                  Is there an entrance test?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
                  For <span className="font-bold text-red-600">Pre-Primary</span> classes, there is a simple, friendly interaction with the child and parents to understand the child's readiness. For <span className="font-bold text-red-600">Primary & Middle</span> classes, a basic written assessment may be conducted to understand the child's current academic level in English, Math, and Science.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="item-3" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
                  What is the fee structure?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
                  Our fee structure varies by grade level. Please fill out the enquiry form or contact our admissions office directly at <span className="font-bold text-gray-800">+91-9414456312</span> for the detailed fee breakdown. We offer flexible payment plans (quarterly/annually).
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem value="item-4" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
                  Do you offer transportation facilities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
                  Yes, we provide safe and reliable bus transportation covering various routes across Jaipur (Jhotwara, Niwaru Road, Ganesh Nagar, etc.). 
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* ============================== */}
        {/* 6. Enquiry Form                */}
        {/* ============================== */}
        <section className="animate-fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
              Submit Your Enquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="childName" className="font-quicksand font-semibold text-gray-700">Child's Name *</Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  required
                  className="bg-gray-50 mt-2 focus:border-red-500"
                />
              </div>

              <div>
                <Label htmlFor="childAge" className="font-quicksand font-semibold text-gray-700">Child's Age *</Label>
                <Input
                  id="childAge"
                  type="number"
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  required
                  className="bg-gray-50 mt-2 focus:border-red-500"
                />
              </div>

              <div>
                <Label htmlFor="parentName" className="font-quicksand font-semibold text-gray-700">Parent's Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                  className="bg-gray-50 mt-2 focus:border-red-500"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-quicksand font-semibold text-gray-700">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-gray-50 mt-2 focus:border-red-500"
                />
              </div>

              <div>
                <Label htmlFor="address" className="font-quicksand font-semibold text-gray-700">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                  className="bg-gray-50 mt-2 focus:border-red-500"
                />
              </div>

              {/* Updated Button Style with Loading State */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white text-lg py-6 rounded-full font-bold hover:bg-red-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </form>
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default Admissions;



















































// import { useState } from 'react';
// import { FileText, CheckCircle, Calendar, Users, Star, ShieldCheck, Lightbulb, Heart, BookOpen } from 'lucide-react';
// // Assuming these are your shadcn/ui components.
// // I've added 'cn' for utility if you have it.
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';

// // --- Main Admissions Component ---
// const Admissions = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     childName: '',
//     childAge: '',
//     parentName: '',
//     phone: '',
//     address: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Enquiry Submitted!",
//       description: "We will contact you soon to schedule a meeting.",
//     });
//     // Reset form
//     setFormData({
//       childName: '',
//       childAge: '',
//       parentName: '',
//       phone: '',
//       address: '',
//     });
//   };

//   return (
//     // Updated main background
//     <main className="py-20 bg-gradient-to-b from-white via-red-50 to-white">
//       <div className="container mx-auto px-4">
        
//         {/* ============================== */}
//         {/* 1. Header                      */}
//         {/* ============================== */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-bold text-red-600 font-poppins mb-4">
//             Admissions
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto font-quicksand">
//             Join the family of 1000+ satisfied parents. Enroll your child today!
//           </p>
//         </div>

        
//         {/* ============================== */}
//         {/* 2. Admission Process           */}
//         {/* ============================== */}
//         <section className="mb-20 animate-fade-in">
//           <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Admission Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
//             {[
//               { icon: FileText, title: 'Submit Enquiry', description: 'Fill out the admission enquiry form online or visit our campus', color: 'red' },
//               { icon: Calendar, title: 'Campus Tour', description: 'Schedule a visit to see our facilities and meet our faculty', color: 'blue' },
//               { icon: Users, title: 'Interaction', description: 'Meet with our counselors and discuss your child\'s educational needs', color: 'green' },
//               { icon: CheckCircle, title: 'Enrollment', description: 'Complete the documentation and secure your child\'s admission', color: 'yellow' },
//             ].map((step, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
//               >
//                 {/* Updated Icon Styling */}
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
//                   ${step.color === 'red' && 'bg-red-100'}
//                   ${step.color === 'blue' && 'bg-blue-100'}
//                   ${step.color === 'green' && 'bg-green-100'}
//                   ${step.color === 'yellow' && 'bg-yellow-100'}
//                 `}>
//                   <step.icon className={`h-8 w-8 
//                     ${step.color === 'red' && 'text-red-600'}
//                     ${step.color === 'blue' && 'text-blue-600'}
//                     ${step.color === 'green' && 'text-green-600'}
//                     ${step.color === 'yellow' && 'text-yellow-600'}
//                   `} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 font-poppins mb-3">{step.title}</h3>
//                 <p className="text-gray-600 font-quicksand">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

        
//         {/* ============================== */}
//         {/* 3. Age Criteria (Updated)      */}
//         {/* ============================== */}
//         <section className="mb-20 animate-fade-in">
//           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-50 relative overflow-hidden">
//             {/* Decorative background element */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
            
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 relative z-10">
//               Age Criteria <span className="text-red-600">&</span> Eligibility
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 relative z-10 items-stretch">
              
//               {/* --- Pre-Primary Column (Pink) --- */}
//               <div className="flex flex-col h-full">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-3 bg-red-100 rounded-xl">
//                     <Star className="w-6 h-6 text-red-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">Pre-Primary Wing</h3>
//                 </div>

//                 <div className="bg-red-50/50 rounded-2xl p-2 border border-red-100 flex-1">
//                   {/* PG Item */}
//                   <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
//                     <div>
//                       <h4 className="font-bold text-gray-800 text-lg">Playgroup (PG)</h4>
//                       <p className="text-sm text-gray-500 font-quicksand mt-1">Duration: 6 months - 1 year</p>
//                     </div>
//                     <div className="bg-red-50 px-4 py-2 rounded-lg text-red-700 font-bold font-quicksand text-sm border border-red-100">
//                       2.5 - 3.5 Years
//                     </div>
//                   </div>

//                   {/* Nursery Item */}
//                   <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
//                     <h4 className="font-bold text-gray-800 text-lg">Nursery</h4>
//                     <div className="bg-orange-50 px-4 py-2 rounded-lg text-orange-700 font-bold font-quicksand text-sm border border-orange-100">
//                       3+ Years
//                     </div>
//                   </div>

//                   {/* LKG Item */}
//                   <div className="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between">
//                     <h4 className="font-bold text-gray-800 text-lg">Junior KG (LKG)</h4>
//                     <div className="bg-yellow-50 px-4 py-2 rounded-lg text-yellow-700 font-bold font-quicksand text-sm border border-yellow-100">
//                       4+ Years
//                     </div>
//                   </div>

//                   {/* HKG Item */}
//                   <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
//                     <h4 className="font-bold text-gray-800 text-lg">Senior KG (HKG)</h4>
//                     <div className="bg-green-50 px-4 py-2 rounded-lg text-green-700 font-bold font-quicksand text-sm border border-green-100">
//                       5+ Years
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* --- Primary & Middle Column (Blue) --- */}
//               <div className="flex flex-col h-full">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-3 bg-blue-100 rounded-xl">
//                     <BookOpen className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">Primary & Middle Wing</h3>
//                 </div>

//                 <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex-1 flex flex-col">
//                   {/* Timeline Container */}
//                   <div className="relative border-l-2 border-blue-200 ml-3 my-2 flex-1">
                      
//                       {/* Class 1 */}
//                       <div className="relative pl-8 mb-10">
//                           {/* Dot */}
//                           <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
//                           <h4 className="font-bold text-gray-800 text-xl mb-2">Class 1</h4>
//                           <p className="text-gray-600 font-quicksand leading-relaxed">
//                               Minimum <span className="font-bold text-blue-700">6 years</span> as of April 1st of the academic year.
//                           </p>
//                       </div>

//                       {/* Class 2 to 8 */}
//                       <div className="relative pl-8">
//                           {/* Dot */}
//                           <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
//                           <h4 className="font-bold text-gray-800 text-xl mb-2">Class 2 to 8</h4>
//                           <p className="text-gray-600 font-quicksand leading-relaxed">
//                               Admission is based on <span className="font-bold text-blue-700">CBSE guidelines</span> and the student's previous academic performance.
//                           </p>
//                       </div>
//                   </div>
                  
//                   {/* Note Box */}
//                   <div className="mt-6 bg-white p-4 rounded-xl border border-blue-100 flex gap-3 shadow-sm">
//                     <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
//                     <p className="text-sm text-gray-500 font-quicksand">
//                       We ensure age-appropriate placement to support your child's social and emotional development.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

        
//         {/* ============================== */}
//         {/* 4. Required Documents (Revamped) */}
//         {/* ============================== */}
//         <section className="mb-20 animate-fade-in">
//           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
//             {/* Decorative background accent */}
//             <div className="absolute top-0 left-0 w-40 h-40 bg-red-50 rounded-br-full opacity-60 pointer-events-none" />
//             <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-50 rounded-tl-full opacity-60 pointer-events-none" />

//             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 relative z-10">
//               Required <span className="text-red-600">Documents</span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 max-w-5xl mx-auto">
//               {[
//                 'Birth Certificate (Original & Copy)',
//                 'Transfer Certificate (if applicable)',
//                 'Previous Academic Records',
//                 'Passport Size Photographs (Child & Parents)',
//                 'Address Proof (Aadhar/Passport/Utility Bill)',
//                 'Medical Records (If any)',
//                 'Aadhar Card Copy (Child & Parents)',
//                 'Parent ID Proof',
//               ].map((doc, index) => (
//                 <div 
//                   key={index} 
//                   className="flex items-center gap-4 bg-white border border-red-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
//                     <CheckCircle className="h-5 w-5 text-red-600" />
//                   </div>
//                   <span className="text-gray-700 font-quicksand font-medium text-lg">{doc}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>


//         {/* ============================== */}
//         {/* 5. FAQ (Revamped)              */}
//         {/* ============================== */}
//         <section className="mb-20 animate-fade-in">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
//               Admission <span className="text-red-600">FAQs</span>
//             </h2>
            
//             <Accordion type="single" collapsible className="space-y-4">
              
//               {/* FAQ Item 1 */}
//               <AccordionItem value="item-1" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
//                 <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
//                   When does the admission process start?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
//                   Admissions typically open in <span className="font-bold text-red-600">January</span> for the upcoming academic year. However, we accept applications throughout the year based on seat availability. We recommend applying early to secure a spot.
//                 </AccordionContent>
//               </AccordionItem>
              
//               {/* FAQ Item 2 */}
//               <AccordionItem value="item-2" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
//                 <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
//                   Is there an entrance test?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
//                   For <span className="font-bold text-red-600">Pre-Primary</span> classes, there is a simple, friendly interaction with the child and parents to understand the child's readiness. For <span className="font-bold text-red-600">Primary & Middle</span> classes, a basic written assessment may be conducted to understand the child's current academic level in English, Math, and Science.
//                 </AccordionContent>
//               </AccordionItem>

//               {/* FAQ Item 3 */}
//               <AccordionItem value="item-3" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
//                 <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
//                   What is the fee structure?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
//                   Our fee structure varies by grade level. Please fill out the enquiry form or contact our admissions office directly at <span className="font-bold text-gray-800">+91-9414456312</span> for the detailed fee breakdown. We offer flexible payment plans (quarterly/annually).
//                 </AccordionContent>
//               </AccordionItem>

//               {/* FAQ Item 4 */}
//               <AccordionItem value="item-4" className="bg-white border border-red-50 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all duration-300">
//                 <AccordionTrigger className="text-lg font-poppins font-semibold text-gray-800 hover:text-red-600 hover:no-underline py-6">
//                   Do you offer transportation facilities?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-600 font-quicksand text-base pb-6 leading-relaxed">
//                   Yes, we provide safe and reliable bus transportation covering various routes across Jaipur (Jhotwara, Niwaru Road, Ganesh Nagar, etc.). 
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </section>
        
//         {/* ============================== */}
//         {/* 6. Enquiry Form                */}
//         {/* ============================== */}
//         <section className="animate-fade-in">
//           <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
//               Submit Your Enquiry
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Label htmlFor="childName" className="font-quicksand font-semibold text-gray-700">Child's Name *</Label>
//                 <Input
//                   id="childName"
//                   value={formData.childName}
//                   onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
//                   required
//                   className="bg-gray-50 mt-2 focus:border-red-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="childAge" className="font-quicksand font-semibold text-gray-700">Child's Age *</Label>
//                 <Input
//                   id="childAge"
//                   type="number"
//                   value={formData.childAge}
//                   onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
//                   required
//                   className="bg-gray-50 mt-2 focus:border-red-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="parentName" className="font-quicksand font-semibold text-gray-700">Parent's Name *</Label>
//                 <Input
//                   id="parentName"
//                   value={formData.parentName}
//                   onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
//                   required
//                   className="bg-gray-50 mt-2 focus:border-red-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="phone" className="font-quicksand font-semibold text-gray-700">Phone Number *</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   required
//                   className="bg-gray-50 mt-2 focus:border-red-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="address" className="font-quicksand font-semibold text-gray-700">Address</Label>
//                 <Textarea
//                   id="address"
//                   value={formData.address}
//                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                   rows={3}
//                   className="bg-gray-50 mt-2 focus:border-red-500"
//                 />
//               </div>

//               {/* Updated Button Style */}
//               <Button 
//                 type="submit" 
//                 className="w-full bg-red-600 text-white text-lg py-6 rounded-full font-bold hover:bg-red-700 transition-colors duration-300"
//               >
//                 Submit Enquiry
//               </Button>
//             </form>
//           </div>
//         </section>
        
//       </div>
//     </main>
//   );
// };

// export default Admissions;



















// // import { useState } from 'react';
// // import { FileText, CheckCircle, Calendar, Users } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Textarea } from '@/components/ui/textarea';
// // import { useToast } from '@/hooks/use-toast';
// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from '@/components/ui/accordion';







// // const Admissions = () => {
// //   const { toast } = useToast();
// //   const [formData, setFormData] = useState({
// //     childName: '',
// //     childAge: '',
// //     parentName: '',
// //     phone: '',
// //     address: '',
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     toast({
// //       title: "Application Submitted!",
// //       description: "We will contact you soon to schedule a meeting.",
// //     });
// //     setFormData({
// //       childName: '',
// //       childAge: '',
// //       parentName: '',
// //       phone: '',
// //       address: '',
// //     });
// //   };

// //   return (
// //     <main className="py-20">
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-600 bg-clip-text text-transparent">
// //             Admissions
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// //             Join the family of 1000+ satisfied parents. Enroll your child today!
// //           </p>
// //         </div>

// //         {/* Admission Process */}
// //         <section className="mb-20 animate-fade-in">
// //           <h2 className="text-4xl font-bold text-center mb-12">Admission Process</h2>
// //           <div className="grid md:grid-cols-4 gap-6">
// //             {[
// //               { icon: FileText, title: 'Submit Enquiry', description: 'Fill out the admission enquiry form online or visit our campus' },
// //               { icon: Calendar, title: 'Campus Tour', description: 'Schedule a visit to see our facilities and meet our faculty' },
// //               { icon: Users, title: 'Interaction', description: 'Meet with our counselors and discuss your child\'s educational needs' },
// //               { icon: CheckCircle, title: 'Enrollment', description: 'Complete the documentation and secure your child\'s admission' },
// //             ].map((step, index) => (
// //               <div key={index} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
// //                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-glow">
// //                   <step.icon className="h-8 w-8 text-primary-foreground" />
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-3">{step.title}</h3>
// //                 <p className="text-muted-foreground">{step.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Age Criteria */}
// //         <section className="mb-20 animate-fade-in">
// //           <div className="bg-card rounded-2xl p-8 shadow-card">
// //             <h2 className="text-3xl font-bold mb-6">Age Criteria & Class Eligibility</h2>
// //             <div className="grid md:grid-cols-2 gap-6">
// //               <div>
// //                 <h3 className="text-xl font-semibold mb-4 text-primary">Pre-Primary</h3>
// //                 <ul className="space-y-2 text-muted-foreground">
// //                   <li className="flex items-center gap-2">
// //                     <div className="w-2 h-2 rounded-full bg-accent" />
// //                     Nursery: 2.5 - 3.5 years
// //                   </li>
// //                   <li className="flex items-center gap-2">
// //                     <div className="w-2 h-2 rounded-full bg-accent" />
// //                     LKG: 3.5 - 4.5 years
// //                   </li>
// //                   <li className="flex items-center gap-2">
// //                     <div className="w-2 h-2 rounded-full bg-accent" />
// //                     UKG: 4.5 - 5.5 years
// //                   </li>
// //                 </ul>
// //               </div>
// //               <div>
// //                 <h3 className="text-xl font-semibold mb-4 text-primary">Primary & Secondary</h3>
// //                 <ul className="space-y-2 text-muted-foreground">
// //                   <li className="flex items-center gap-2">
// //                     <div className="w-2 h-2 rounded-full bg-accent" />
// //                     Class 1-5: As per CBSE guidelines
// //                   </li>
// //                   <li className="flex items-center gap-2">
// //                     <div className="w-2 h-2 rounded-full bg-accent" />
// //                     Class 6-10: Based on previous academic performance
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Required Documents */}
// //         <section className="mb-20 animate-fade-in">
// //           <div className="bg-secondary rounded-2xl p-8">
// //             <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
// //             <div className="grid md:grid-cols-2 gap-4">
// //               {[
// //                 'Birth Certificate (Original & Copy)',
// //                 'Transfer Certificate (if applicable)',
// //                 'Previous Academic Records',
// //                 'Passport Size Photographs (Child & Parents)',
// //                 'Address Proof',
// //                 'Medical Records / Immunization Certificate',
// //                 'Aadhar Card Copy',
// //                 'Parent ID Proof',
// //               ].map((doc, index) => (
// //                 <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
// //                   <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
// //                   <span>{doc}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* FAQ */}
// //         <section className="mb-20 animate-fade-in">
// //           <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Admission FAQs</h2>
// //           <Accordion type="single" collapsible className="max-w-3xl mx-auto">
// //             <AccordionItem value="item-1">
// //               <AccordionTrigger className="text-lg font-semibold">
// //                 When does the admission process start?
// //               </AccordionTrigger>
// //               <AccordionContent className="text-muted-foreground">
// //                 Admissions typically open in January for the upcoming academic year. However, we accept applications throughout the year based on seat availability.
// //               </AccordionContent>
// //             </AccordionItem>
            
// //             <AccordionItem value="item-2">
// //               <AccordionTrigger className="text-lg font-semibold">
// //                 Is there an entrance test?
// //               </AccordionTrigger>
// //               <AccordionContent className="text-muted-foreground">
// //                 For Pre-Primary classes, there is a simple interaction with the child. For higher classes, a basic assessment may be conducted to understand the child's current academic level.
// //               </AccordionContent>
// //             </AccordionItem>

// //             <AccordionItem value="item-3">
// //               <AccordionTrigger className="text-lg font-semibold">
// //                 What is the fee structure?
// //               </AccordionTrigger>
// //               <AccordionContent className="text-muted-foreground">
// //                 Our fee structure varies by grade level. Please contact our admissions office for detailed information. We also offer flexible payment plans to support families.
// //               </AccordionContent>
// //             </AccordionItem>

// //             <AccordionItem value="item-4">
// //               <AccordionTrigger className="text-lg font-semibold">
// //                 Do you offer transportation facilities?
// //               </AccordionTrigger>
// //               <AccordionContent className="text-muted-foreground">
// //                 Yes, we provide safe and reliable bus transportation covering various routes across Jaipur. Transportation fees are separate from tuition fees.
// //               </AccordionContent>
// //             </AccordionItem>
// //           </Accordion>
// //         </section>

// //         {/* Enquiry Form */}
// //         <section className="animate-fade-in">
// //           <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card max-w-2xl mx-auto">
// //             <h2 className="text-3xl font-bold mb-6 text-center text-red-600 bg-clip-text text-transparent">
// //               Submit Your Enquiry
// //             </h2>
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div>
// //                 <Label htmlFor="childName">Child's Name *</Label>
// //                 <Input
// //                   id="childName"
// //                   value={formData.childName}
// //                   onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <Label htmlFor="childAge">Child's Age *</Label>
// //                 <Input
// //                   id="childAge"
// //                   type="number"
// //                   value={formData.childAge}
// //                   onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <Label htmlFor="parentName">Parent's Name *</Label>
// //                 <Input
// //                   id="parentName"
// //                   value={formData.parentName}
// //                   onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <Label htmlFor="phone">Phone Number *</Label>
// //                 <Input
// //                   id="phone"
// //                   type="tel"
// //                   value={formData.phone}
// //                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <Label htmlFor="address">Address</Label>
// //                 <Textarea
// //                   id="address"
// //                   value={formData.address}
// //                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
// //                   rows={3}
// //                 />
// //               </div>

// //               <Button type="submit" className="w-full bg-gradient-hero shadow-glow text-lg py-6">
// //                 Submit Enquiry
// //               </Button>
// //             </form>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Admissions;
