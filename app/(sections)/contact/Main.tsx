// "use client";
// import { motion } from "framer-motion";
// import {
//   FiMail,
//   FiMapPin,
//   FiPhone,
//   FiSend,
//   FiLinkedin,
//   FiGithub,
//   FiTwitter,
//   FiX,
// } from "react-icons/fi";
// import { FaTelegram, FaWhatsapp } from "react-icons/fa";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const form = useRef<HTMLFormElement>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const publicKey = process.env.NEXT_PUBLIC_APP_PUBLIC_KEY;
//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_5ifjm2o",
//           "template_r7a2599",
//           form.current,
//           publicKey // Replace with your EmailJS user ID
//           //take the fields from the form and pass them here.. name, email, subject and messsage!!!
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             setShowSuccess(true);
//             setIsSubmitting(false);
//             if (form.current) {
//               form.current.reset();
//             }
//           },
//           (error) => {
//             console.log(error.text);
//             setShowError(true);
//             setIsSubmitting(false);
//           }
//         );
//     }
//   };

//   const closeModal = () => {
//     setShowSuccess(false);
//     setShowError(false);
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
//       {/* Success Modal */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full"
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
//                 Message Sent!
//               </h3>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               >
//                 <FiX className="w-6 h-6" />
//               </button>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               Thank you for reaching out! I&apos;ve received your message and
//               will get back to you as soon as possible.
//             </p>
//             <div className="flex gap-4">
//               <button
//                 onClick={closeModal}
//                 className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex-1"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => {
//                   closeModal();
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-colors flex-1"
//               >
//                 Send Another
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Error Modal */}
//       {showError && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full"
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
//                 Sending Failed
//               </h3>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               >
//                 <FiX className="w-6 h-6" />
//               </button>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               There was an error sending your message. Please try again later or
//               contact me through one of the alternative methods listed below.
//             </p>
//             <div className="flex gap-4">
//               <button
//                 onClick={closeModal}
//                 className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex-1"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => {
//                   closeModal();
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-colors flex-1"
//               >
//                 Try Again
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
//       <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />
//       <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//             Let&apos;s Build Something Amazing
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             Whether you&apos;re a recruiter with an exciting opportunity or a
//             client with a project idea, I&apos;d love to hear from you.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//               Send Me a Message
//             </h2>
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                   placeholder="Opportunity or Project Inquiry"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                   placeholder="Tell me about your opportunity or project..."
//                   required
//                 ></textarea>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     Send Message <FiSend className="ml-1" />
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
//               <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//                 Contact Information
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
//                     <FiMail className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900 dark:text-white">
//                       Email
//                     </h3>
//                     <a
//                       href="mailto:clemyjele@gmail.com"
//                       className="text-blue-600 dark:text-blue-400 hover:underline"
//                     >
//                       Clemyjele@gmail.com
//                     </a>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                       Typically responds within 24 hours
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
//                     <FiMapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900 dark:text-white">
//                       Location
//                     </h3>
//                     <p className="text-gray-700 dark:text-gray-300">
//                       Gauteng, South Africa
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                       Available for remote & hybrid opportunities
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
//                     <FiPhone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900 dark:text-white">
//                       Direct Contact
//                     </h3>
//                     <a
//                       href="tel:+27736416519"
//                       className="text-blue-600 dark:text-blue-400 hover:underline"
//                     >
//                       +27 73 641 6519
//                     </a>
//                     <div className="flex gap-3 mt-3">
//                       <a
//                         href="https://wa.me/27662288267"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-green-500"
//                         aria-label="Contact via WhatsApp"
//                       >
//                         <FaWhatsapp className="w-5 h-5" />
//                       </a>
//                       <a
//                         href="#"
//                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-blue-400"
//                       >
//                         <FaTelegram className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
//               <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//                 Connect With Me
//               </h2>
//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
//                 >
//                   <FiLinkedin className="w-5 h-5" />
//                   LinkedIn
//                 </a>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
//                 >
//                   <FiGithub className="w-5 h-5" />
//                   GitHub
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors"
//                 >
//                   <FiTwitter className="w-5 h-5" />
//                   Twitter
//                 </a>
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-blue-200 dark:border-blue-900/50">
//               <div className="flex items-start gap-4">
//                 <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900 dark:text-white">
//                     Current Availability
//                   </h3>
//                   <p className="text-gray-700 dark:text-gray-300">
//                     Open for new opportunities and select client projects
//                   </p>
//                   <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
//                     Available for immediate start
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
"use client";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiX,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const publicKey = process.env.NEXT_PUBLIC_APP_PUBLIC_KEY;
    if (form.current) {
      emailjs
        .sendForm(
          "service_5ifjm2o",
          "template_r7a2599",
          form.current,
          publicKey // Replace with your EmailJS user ID
          //take the fields from the form and pass them here.. name, email, subject and messsage!!!
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowSuccess(true);
            setIsSubmitting(false);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
            setShowError(true);
            setIsSubmitting(false);
          }
        );
    }
  };

  const closeModal = () => {
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                Message Sent!
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Thank you for reaching out! I&apos;ve received your message and
              will get back to you as soon as possible.
            </p>
            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex-1"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeModal();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-colors flex-1"
              >
                Send Another
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
                Sending Failed
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              There was an error sending your message. Please try again later or
              contact me through one of the alternative methods listed below.
            </p>
            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex-1"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeModal();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-colors flex-1"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re a recruiter with an exciting opportunity or a
            client with a project idea, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Opportunity or Project Inquiry"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tell me about your opportunity or project..."
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FiSend className="ml-1" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:clemyjele@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Clemyjele@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Typically responds within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Gauteng, South Africa
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available for remote & hybrid opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Direct Contact
                    </h3>
                    <a
                      href="tel:+27736416519"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +27 73 641 6519
                    </a>
                    <div className="flex gap-3 mt-3">
                      <a
                        href="https://wa.me/27662288267"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-green-500"
                        aria-label="Contact via WhatsApp"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-blue-400"
                      >
                        <FaTelegram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                  Twitter
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-blue-200 dark:border-blue-900/50">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Current Availability
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Open for new opportunities and select client projects
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Available for immediate start
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
