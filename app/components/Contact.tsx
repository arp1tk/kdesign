"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (res.ok) {
        setSuccessMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setErrorMessage(data.message || "Failed to send message.")
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="section-title text-[var(--burgundy)]"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-4 text-[var(--burgundy)]">Get in Touch</h3>
            <p className="text-content mb-6">
              At K Design, we believe in creating spaces that reflect your unique style and needs. Feel free to reach
              out to us for any inquiries or to discuss your next project.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-content">
                <Mail className="w-6 h-6 mr-2 text-[var(--burgundy)]" />
                <span>info@kdesign-interiors.com</span>
              </li>
              <li className="flex items-center text-content">
                <Phone className="w-6 h-6 mr-2 text-[var(--burgundy)]" />
                <span>+91 9625351264</span>
              </li>
              <li className="flex items-center text-content">
                <Phone className="w-6 h-6 mr-2 text-[var(--burgundy)]" />
                <span>+91 8851619320</span>
              </li>
              <li className="flex items-center text-content">
                <MapPin className="w-6 h-6 mr-2 text-[var(--burgundy)]" />
                <span>Crossing Republic, Ghaziabad, 201016</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--burgundy)] focus:ring focus:ring-[var(--burgundy)] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--charcoal)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--burgundy)] focus:ring focus:ring-[var(--burgundy)] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--burgundy)] focus:ring focus:ring-[var(--burgundy)] focus:ring-opacity-50"
              ></textarea>
            </div>

            {/* Status Messages */}
            {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
