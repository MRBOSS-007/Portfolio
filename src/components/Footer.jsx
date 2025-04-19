import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Sri Vishnu Suresh. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
