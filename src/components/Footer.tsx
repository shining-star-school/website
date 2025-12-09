// // import { Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import logo from '@/assets/logo.jpg';

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gradient-hero text-primary-foreground mt-20">
// //       <div className="container mx-auto px-4 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {/* School Info */}
// //           <div>
// //             <div className="flex items-center space-x-3 mb-4">
// //               <img src={logo} alt="Logo" className="h-20 w-25" />
// //               <h3 className="font-bold text-xl">The Shining Star School</h3>
// //             </div>
// //             <p className="text-primary-foreground/80 text-sm">
// //               15+ Years of Excellence in Education. Nurturing Young Minds from Pre-Primary to K-10.
// //             </p>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
// //             <ul className="space-y-2">
// //               <li>
// //                 <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
// //                   About Us
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
// //                   Admissions
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
// //                   Contact
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
// //             <ul className="space-y-3">
// //               <li className="flex items-start gap-2">
// //                 <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
// //                 <span className="text-sm text-primary-foreground/80">
// //                   Jaipur, Rajasthan, India
// //                 </span>
// //               </li>
// //               <li className="flex items-center gap-2">
// //                 <Phone className="h-5 w-5 flex-shrink-0" />
// //                 <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
// //                   +91 98765 43210
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-2">
// //                 <Mail className="h-5 w-5 flex-shrink-0" />
// //                 <a href="mailto:info@shiningstarschool.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
// //                   info@shiningstarschool.com
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* School Hours */}
// //           <div>
// //             <h4 className="font-semibold text-lg mb-4">School Hours</h4>
// //             <div className="flex items-start gap-2 mb-4">
// //               <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
// //               <div className="text-sm text-primary-foreground/80">
// //                 <p>Monday - Friday</p>
// //                 <p className="font-semibold">8:00 AM - 2:00 PM</p>
// //                 <p className="mt-2">Saturday</p>
// //                 <p className="font-semibold">8:00 AM - 12:00 PM</p>
// //               </div>
// //             </div>
// //             <a
// //               href="https://facebook.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
// //             >
// //               <Facebook className="h-5 w-5" />
// //               <span className="text-sm">Follow us on Facebook</span>
// //             </a>
// //           </div>
// //         </div>

// //         <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
// //           <p className="text-sm text-primary-foreground/80">
// //             &copy; {new Date().getFullYear()} The Shining Star School. All rights reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import { Link } from 'react-router-dom';
// import { Clock } from 'lucide-react';
// import footerImage from '@/assets/footer_image.jpg'; 

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-hero text-primary-foreground mt-20">
//       {/* Top Image */}
//       <div className="w-full">
//         <img
//           src={footerImage}
//           alt="Footer Banner"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admissions"
//                   className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
//                 >
//                   Admissions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* School Hours */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">School Hours</h4>
//             <div className="flex items-start gap-2 mb-4">
//               <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
//               <div className="text-sm text-primary-foreground/80">
//                 <p>Monday - Friday</p>
//                 <p className="font-semibold">8:00 AM - 2:00 PM</p>
//                 <p className="mt-2">Saturday</p>
//                 <p className="font-semibold">8:00 AM - 12:00 PM</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
//           <p className="text-sm text-primary-foreground/80">
//             &copy; {new Date().getFullYear()} The Shining Star School. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Link } from 'react-router-dom';
// import footerImage from '@/assets/footer_image.jpg'; // replace with actual image path

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-white via-pink-50 to-red-100 text-gray-800 mt-20 rounded-t-3xl shadow-inner overflow-hidden">
//       <div className="container mx-auto px-4 py-6 flex flex-col items-center">
        
//         {/* Top Image */}
//         <div className="w-full flex justify-center mb-4">
//           <img
//             src={footerImage}
//             alt="Footer Banner"
//             className="w-full max-w-5xl h-auto rounded-2xl shadow-md object-contain"
//           />
//         </div>

//         {/* Middle Section */}
//         <div className="flex flex-col md:flex-row justify-center items-start gap-16 text-center md:text-left w-full md:w-auto">
          
//           {/* Quick Links */}
//           <div className="flex flex-col items-center">
//             <h4 className="font-semibold text-lg mb-2 text-red-700 text-center">Quick Links</h4>
//             <ul className="flex flex-row gap-6 text-gray-700 text-sm flex-wrap justify-center">
//               <li>
//                 <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-red-700 transition-colors">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/admissions" className="hover:text-red-700 transition-colors">Admissions</Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-red-700 transition-colors">Contact</Link>
//               </li>
//             </ul>
//           </div>

//           {/* School Hours */}
//           <div className="flex flex-col items-center">
//             <h4 className="font-semibold text-lg mb-2 text-red-700 text-center">School Hours</h4>
//             <div className="flex flex-col text-gray-700 text-sm items-center">
//               <p>Mon–Fri: <span className="font-semibold">8:00 AM – 2:00 PM</span></p>
//               <p>Sat: <span className="font-semibold">8:00 AM – 12:00 PM</span></p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright */}
//         <div className="border-t border-red-200 mt-6 pt-3 text-center w-full">
//           <p className="text-sm text-gray-600">
//             &copy; {new Date().getFullYear()} The Shining Star School. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














import { Link } from 'react-router-dom';
import footerImage from '@/assets/footer_image.jpg'; // make sure this path is correct

const Footer = () => {
  return (
    // REMOVED 'mt-20'. 
    // This allows the footer to sit immediately after the previous section.
    // The previous section (Gallery) has padding-bottom, which is enough spacing.
    <footer className="bg-gradient-to-r from-white via-pink-50 to-red-100 text-gray-800 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        
        {/* Top Image */}
        {/* Added hover effect to make it interactive */}
        <div className="w-full flex justify-center mb-8">
          <img
            src={footerImage}
            alt="Footer Banner"
            className="w-full max-w-5xl h-auto rounded-2xl shadow-md object-contain transform hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 text-center md:text-left w-full md:w-auto mb-8">
          
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl mb-4 text-red-600 font-poppins">Quick Links</h4>
            <ul className="flex flex-row gap-6 text-gray-700 font-medium flex-wrap justify-center font-quicksand">
              <li>
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-red-600 transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl mb-4 text-red-600 font-poppins">School Hours</h4>
            <div className="flex flex-col text-gray-700 font-medium items-center font-quicksand">
              <p className="mb-1">Mon-Sat: <span className="font-bold text-gray-900">8:00 AM – 2:00 PM</span></p>
              {/* <p>Sat: <span className="font-bold text-gray-900">8:00 AM – 12:00 PM</span></p> */}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-red-200 mt-2 pt-6 text-center w-full">
          <p className="text-sm text-gray-500 font-quicksand">
            &copy; {new Date().getFullYear()} The Shining Star School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;