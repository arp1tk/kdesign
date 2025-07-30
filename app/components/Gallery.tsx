'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Modern', 'Classic', 'Minimal']

const projects = [
  {
    id: 1,
    category: 'Modern',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60%20Stunning%20Brown%20and%20White%20Living%20Room%20Ideas%20for%20Home%20Decoration.jpg-ueKkmQadTg7bIYi1o1rN052g6VyWhj.jpeg',
    title: 'Contemporary Living Space'
  },
  {
    id: 2,
    category: 'Classic',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pre-cut%204%20Cm%20Mouldings%20Kit%20Wall%20Art%20White%20Wall%20Panel,%20Water,%20Damage%20Resistant%20Peel&stick%20Ready%20Assemble%20Covering%20Wall%20Molding%20Kit%20-%20Etsy%20UK.jpg-uu0tdCeV7cYHMICDTBlloLFO1KOMwM.jpeg',
    title: 'Classic Bedroom Design'
  },
  {
    id: 3,
    category: 'Minimal',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Warmth%20and%20Elegance_%20Wooden%20Bedroom%20Design%20Inspiration.jpg-yI0GB1Nzsng461aUL0OtMcrJfWdnZL.jpeg',
    title: 'Minimalist Bedroom'
  },
  {
    id: 4,
    category: 'Classic',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elegant%20Colonial%20Chic%20Home%20Decor%20Ideas.jpg-1iZHC3HJPw62ql0oQ6Q4yc0MYhr785.jpeg',
    title: 'Elegant Living Room'
  },
  {
    id: 5,
    category: 'Minimal',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How%20to%20Design%20Your%20Japandi%20Apartment%20+%2020%20Examples%20Ideas.jpg-Uk7lynq3ZG4vGvVKvwenKQbLKlQuhi.jpeg',
    title: 'Japandi Style Interior'
  },
  {
    id: 6,
    category: 'Modern',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peaceful%20Living%20Room%20I%20A&D%20Studio.jpg-oLhD5OpMN68Vc61R4oTsIm3A3epBhH.jpeg',
    title: 'Modern Living Space'
  },
  {
    id: 7,
    category: 'Minimal',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exploring%20Wabi-Sabi,%20Minimalist,%20and%20Modern%20Japandi%20Designs%20%E2%80%93%20Making%20A%20Green%20Life%20by%20Lily.jpg-RDRYPPCvt5mLWkW805UENHZlBLYsaX.jpeg',
    title: 'Minimalist Living Room'
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-[var(--cream)]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our Gallery
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category 
                ? 'bg-[var(--earth)] text-white' 
                : 'bg-[var(--sand)] text-[var(--charcoal)]'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-light mb-2">{project.title}</h3>
                  <span className="text-sm text-white/80">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
