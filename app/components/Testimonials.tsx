"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Amit Verma ",
    role: "Homeowner",
    content: "K Designs transformed our house into a dream home with their innovative use of sustainable materials.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karan Bhatia",
    role: "Business Owner",
    content:
      "We hired K Designs for our office redesign and the results were beyond our expectations. Their branding expertise is top-notch!",
    rating: 5,
  },
  {
    id: 3,
    name: "Pooja Iyer",
    role: "Real Estate Agent",
    content:
      "I've worked with many interior designers, but K Designs stands out for their professionalism and eco-friendly designs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Menon",
    role: "Architect",
    content: "Collaborating with K Designs on projects is always a pleasure. Their vision and execution are top-notch.",
    rating: 5,
  },
  {
    id: 5,
    name: "Radhika Sharma",
    role: "Hotel Manager",
    content:
      "K Designs' redesign of our hotel lobby has received countless compliments from our guests. Exceptional work!",
    rating: 5,
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-[var(--cream)]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[var(--wood)] mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[var(--burgundy)] text-white flex items-center justify-center font-semibold text-lg mr-4">
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--charcoal)]">{testimonial.name}</h4>
                        <p className="text-[var(--wood)] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[var(--burgundy)] hover:text-[var(--gold)] transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[var(--burgundy)] hover:text-[var(--gold)] transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-[var(--burgundy)]" : "bg-[var(--sand)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
