"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Import shadcn Accordion components

const faqs = [
  {
    question: "What services does K Designs offer?",
    answer:
      "K Designs specializes in curating premium interior design products and services including furniture, decor, and full-scale renovations for both residential and commercial spaces.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The duration of a project varies depending on its scope. A simple room redesign might take 4-6 weeks, while a full home renovation could take several months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with a client's existing furniture?",
    answer:
      "We're happy to incorporate your existing pieces into the new design. We'll assess your current furniture and suggest ways to repurpose or reupholster items to fit the new aesthetic.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process begins with an initial consultation, followed by concept development, design presentation, revision, implementation, and final reveal. We keep our clients involved throughout the process to ensure their vision is realized.",
  },
  {
    question: "What brands do you work with?",
    answer:
      "K Designs partners with a variety of premium brands to offer our clients the finest selection of interior design products.",
  },
  {
    question: "Do you offer product warranties?",
    answer: "Yes, we offer warranties on all products we sell to ensure your satisfaction and peace of mind.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Absolutely, we offer comprehensive installation services for all our products to ensure they are set up perfectly in your space.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[var(--cream)]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="section-title "
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
       <Accordion type="single" collapsible className="w-full">
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      className="mb-4" 
    >
      <AccordionItem value={`item-${index}`} className="border-b border-[var(--sand)]">
        <AccordionTrigger className="flex justify-between items-center w-full p-6 bg-white rounded-lg shadow-md focus:outline-none hover:bg-[var(--sand)] transition-colors duration-300 text-left">
          <span className="font-semibold text-sm text-[var(--charcoal)]">
            {faq.question}
          </span>
        </AccordionTrigger>
        <AccordionContent className="mt-2 px-6 py-4 bg-white rounded-lg shadow-md text-base"> 
          <p className="text-[var(--wood)]">{faq.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  ))}
</Accordion>

        </motion.div>
      </div>
    </section>
  )
}
