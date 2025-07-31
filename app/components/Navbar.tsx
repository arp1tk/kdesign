"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="K Designs Logo"
              className="h-24 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1a1a1a] hover:text-[var(--burgundy)] px-3 py-2 rounded-md text-base font-semibold tracking-wide transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    const targetId = item.href.slice(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      const yOffset = -80
                      const y =
                        targetElement.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset
                      window.scrollTo({ top: y, behavior: "smooth" })
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--charcoal)] hover:text-[var(--burgundy)] hover:bg-[var(--sand)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--burgundy)]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--charcoal)] hover:text-[var(--burgundy)] block px-4 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  const targetId = item.href.slice(1)
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const yOffset = -80
                    const y =
                      targetElement.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
