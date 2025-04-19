import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const socials = [
    { icon: FaGithub, link: "https://github.com/MRBOSS-007", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/vishnu-suresh-897309256/", label: "LinkedIn" },
    { icon: FaEnvelope, link: "mailto:srivishnusuresh.@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg bg-gray-900 p-10 rounded-2xl shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
          >
            <div className="mb-6 text-left">
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6 text-left">
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6 text-left">
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                required
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex md:flex-col space-x-8 md:space-x-0 md:space-y-6"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-10 w-10" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
