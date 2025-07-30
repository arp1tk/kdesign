"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
   <footer className="bg-[var(--charcoal)] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4">K Designs</h3>
            <p className="mb-4 text-[var(--sand)]">Timeless Interiors, Tailored for You.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                <Linkedin />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-[var(--gold)] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[var(--gold)] transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[var(--gold)] transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[var(--gold)] transition duration-300">
                  Testimonials
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Residential Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Commercial Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Space Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Interior Renovation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--gold)] transition duration-300">
                  Exterior Design
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-[var(--sand)]">456 Style Avenue</p>
            <p className="mb-2 text-[var(--sand)]">Elegance Borough, NY 67890</p>
            <p className="mb-2 text-[var(--sand)]">Phone: (678) 901-2345</p>
            <p className="text-[var(--sand)]">Email: contact@kdesigns.com</p>
          </motion.div>
        </div>
        <div className="border-t border-[var(--wood)] mt-8 pt-8 text-center">
          <p className="text-[var(--sand)]">&copy; {new Date().getFullYear()} K Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
