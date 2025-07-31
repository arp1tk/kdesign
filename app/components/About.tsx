"use client"

import { motion } from "framer-motion"

export default function About() {
  const features = ["Custom home designs", "Interior renovation services", "Collaborative brand partnerships"]

  return (
   <section id="about" className="section-padding px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">

      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="section-title text-[var(--burgundy)]"
        >
          About K Designs
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full md:w-1/2 mb-10 md:mb-0"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elegant%20Colonial%20Chic%20Home%20Decor%20Ideas.jpg-1iZHC3HJPw62ql0oQ6Q4yc0MYhr785.jpeg"
              alt="K Designs' signature living room design"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full md:w-1/2 md:pl-10"
          >
            <p className="text-content text-lg mb-6">
              At K Designs, we transform spaces into beautiful, functional homes that reflect your unique style and
              needs. With over 30 years of experience, our team of expert designers has a track record of award-winning
              projects and personalized service. We collaborate with leading brands to bring you the latest trends and
              innovations in home decor.
            </p>
            <ul className="mb-6">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-center mb-2 text-content"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-[var(--burgundy)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-[var(--burgundy)] hover:bg-[var(--dark-burgundy)]"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
