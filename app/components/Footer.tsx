"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <h3 className="text-2xl font-bold mb-4">K Designs</h3>
            <p className="mb-4 text-[var(--sand)]">Timeless Interiors, <span className="text-[var(--gold)]">Tailored for You</span>.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "gallery", "testimonials"].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="hover:text-[var(--gold)] transition duration-300 capitalize">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Residential Design",
                "Commercial Design",
                "Space Planning",
                "Furniture Selection",
                "Interior Renovation",
                "Exterior Design",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-[var(--sand)]">Crossing Republic</p>
            <p className="mb-2 text-[var(--sand)]">Ghaziabad, 201016</p>
            <p className="mb-2 text-[var(--sand)]">Phone: 9625351264, 8851619320</p>
            <p className="text-[var(--sand)]">Email: info@kdesign-interiors.com</p>
          </motion.div>
        </div>

        {/* Bottom Footer Line */}
        <div className="border-t border-[var(--wood)] mt-8 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--sand)]">&copy; {new Date().getFullYear()} K Designs. All rights reserved.</p>

          <div className="flex items-center gap-2 text-[var(--sand)]">
            <span>Made by</span>
            <Link
              href="https://devixlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] hover:underline font-medium"
            >
              DevixLab
            </Link>
            <Link
              href="https://www.linkedin.com/company/devix-soulutions-llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--gold)] transition"
            >
              <Linkedin className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
