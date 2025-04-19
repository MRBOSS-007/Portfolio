import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-16 overflow-hidden">
      {/* Background Image Layer */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <motion.h1 className="text-5xl font-semibold leading-tight mb-4">
            <motion.span variants={textVariant}>Hey, I'm</motion.span>
            <br />
            <motion.span
              variants={textVariant}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold"
            >
              Vishnu Suresh
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="text-gray-400 text-lg mb-8 max-w-md"
          >
            I am currently pursuing a degree in Computer Science and Engineering, with a keen
            interest in Blockchain technology and Web Development.
          </motion.p>

          <motion.div variants={textVariant} className="flex gap-4">
            <a
              href="/Sri Vishnu Suresh (3).pdf"
              download
              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Glowing Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative flex-shrink-0 w-[400px] h-[400px] rounded-full">
            {/* Glowing Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 blur-3xl opacity-75 animate-pulse"></div>

            {/* Image */}
            {/* Image */}
<div className="w-[400px] h-[400px] relative z-10 flex items-center justify-center">
  <img
    src="/my.png"
    alt="Designer"
    className="w-[400px] h-[400px] object-cover rounded-full border-4 border-black"
  />
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
