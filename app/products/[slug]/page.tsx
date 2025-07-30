"use client"

import { useParams, useRouter } from "next/navigation"
import { products } from "../../../data/products"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()

  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--charcoal)] mb-4">Product Not Found</h1>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[var(--cream)] pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.back()}
            className="flex items-center text-[var(--burgundy)] hover:text-[var(--dark-red)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-center text-[var(--charcoal)] tracking-wide"
          >
            {product.name}
          </motion.h1>
        </div>
      </div>

      {/* Product Variants Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {product.variants.map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 shadow-lg">
                  <img
                    src={variant.image || "/placeholder.svg"}
                    alt={variant.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-[var(--charcoal)] tracking-wide">
                    {variant.name.toUpperCase()}
                  </h3>
                  {variant.code && (
                    <p className="text-sm text-[var(--burgundy)] mt-1 font-medium">Code: {variant.code}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-[var(--cream)] py-16">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                <img
                  src={product.overviewImage || product.image}
                  alt={`${product.name} Overview`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-light text-[var(--charcoal)] tracking-wide">Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--charcoal)] leading-relaxed text-justify">{product.fullDescription}</p>
                {product.additionalInfo && (
                  <p className="text-[var(--charcoal)] leading-relaxed text-justify mt-4">
                    {product.additionalInfo}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <span className="bg-[var(--burgundy)] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {product.brand}
                </span>
                <span className="bg-white text-[var(--charcoal)] px-4 py-2 rounded-full text-sm border">
                  {product.category}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-light text-[var(--charcoal)] mb-6">Interested in this product?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+919625351264"
                className="bg-[var(--burgundy)] text-white px-8 py-3 rounded-full hover:bg-[var(--dark-red)] transition-colors font-medium"
              >
                Call for Quote
              </Link>
              <Link
                href="#contact"
                className="bg-[var(--sand)] text-[var(--charcoal)] px-8 py-3 rounded-full hover:bg-[var(--gold)] transition-colors font-medium"
              >
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
