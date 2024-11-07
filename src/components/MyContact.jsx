import { FaEnvelope, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { CONTACT } from "../constant"
import { motion } from "framer-motion"
const MyContact = () => {
  return (
    <section id="myContacts">
      <div className="border-b border-neutral-900 pb-20 my-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-19 text-center text-4xl">Contact Me</motion.h1>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-black bg-opacity-10  shadow-lg rounded-lg p-6 text-center">
            <div className="text-white-800 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <FaPhoneAlt /> {/* Icon */}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Number</h3>
            <p><a href="tel:+94776348896" className="text-purple-800 hover:underline">+94 77 634 8896</a></p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
            <div className="text-white-800 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <FaEnvelope /> {/* Icon */}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email Address</h3>
            <p><a href="mailto:sesmith.tharuka@gmail.com" className="text-purple-800 hover:underline">sesmith.tharuka@gmail.com</a></p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
            <div className="text-white-800 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <FaLinkedin /> {/* Icon */}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/sesmiththaruka/" className="text-purple-800 hover:underline">in/ Sesmith Tharuka</a></p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
            <div className="text-white-800 mb-4 flex items-center justify-center">
              <span className="text-2xl">
                <FaFacebook /> {/* Icon */}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Facebook</h3>
            <p><a href="https://www.facebook.com/sesmith.tharuka" className="text-purple-800 hover:underline">Sesmith Tharuka</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MyContact

// import React from 'react';

// const MyContact = () => {
//   return (
//     <section className="py-12" id="contact-section">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold uppercase text-gray-800">Contact</h1>
//           <h2 className="text-2xl font-semibold text-gray-600 mt-2 mb-4">Contact Me</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             I’d love to hear from you! Whether you have a question about my work, want to discuss a project,
//             or just want to connect, feel free to reach out. I'm always open to new opportunities and
//             collaborations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           <div className="bg-black bg-opacity-10  shadow-lg rounded-lg p-6 text-center">
//             <div className="text-gray-800 mb-4">
//               <span className="text-4xl inline-block mb-2">📞</span> {/* Icon placeholder */}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Number</h3>
//             <p><a href="tel:+94776348896" className="text-blue-500 hover:underline">+94 77 634 8896</a></p>
//           </div>

//           <div className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
//             <div className="text-gray-800 mb-4">
//               <span className="text-4xl inline-block mb-2">✉️</span> {/* Icon placeholder */}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Email Address</h3>
//             <p><a href="mailto:sesmith.tharuka@gmail.com" className="text-blue-500 hover:underline">sesmith.tharuka@gmail.com</a></p>
//           </div>

//           <div className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
//             <div className="text-gray-800 mb-4">
//               <span className="text-4xl inline-block mb-2">🔗</span> {/* Icon placeholder */}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">LinkedIn</h3>
//             <p><a href="https://www.linkedin.com/in/sesmiththaruka/" className="text-blue-500 hover:underline">in/ Sesmith Tharuka</a></p>
//           </div>

//           <div className="bg-black bg-opacity-10 shadow-lg rounded-lg p-6 text-center">
//             <div className="text-gray-800 mb-4">
//               <span className="text-4xl inline-block mb-2">📘</span> {/* Icon placeholder */}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Facebook</h3>
//             <p><a href="https://www.facebook.com/sesmith.tharuka" className="text-blue-500 hover:underline">Sesmith Tharuka</a></p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyContact;
