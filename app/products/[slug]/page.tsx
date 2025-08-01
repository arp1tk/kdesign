"use client"

import { useParams, useRouter } from "next/navigation"
import { products } from "../../../data/products"
import { motion } from "framer-motion"
import { ArrowLeft, Maximize2 } from "lucide-react" // Import Maximize2 icon
import Link from "next/link"
import Image from "next/image" // Keep Image import
import { useMemo, useState } from "react"
import Head from "next/head"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" // 
import ImageViewerDialog from "@/app/components/MinimalImageViewer"

export default function ProductDetail() {
  const [imageViewerOpen, setImageViewerOpen] = useState(false)
const [selectedImage, setSelectedImage] = useState("")

  const params = useParams()
  const router = useRouter()
  const product = useMemo(() => {
    return products.find((p) => p.slug === params.slug)
  }, [params.slug])

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
    <>
      <Head>
        <title>{product.name} | Product Details</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-[var(--cream)] pt-20 pb-8">
          <div className="container mx-auto page-padding">
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
              className="text-4xl md:text-5xl font-light text-center text-[var(--charcoal)] tracking-wide font-serif"
            >
              {product.name}
            </motion.h1>
          </div>
        </div>
        {/* Product Variants Grid */}
        <div className="py-16">
          <div className="container mx-auto page-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {product.variants?.length > 0 ? (
                product.variants.map((variant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 shadow-lg relative">
                      <Image
                        src={variant.image || "/placeholder.svg"}
                        alt={variant.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        priority={index < 3} // preload first few images
                      />
                      {/* Explore More Photos button (appears on hover) */}
                      {variant.additionalImages && variant.additionalImages.length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                              <button className="flex items-center text-white px-4 py-2 rounded-full bg-[var(--burgundy)] hover:bg-[var(--dark-red)] transition-colors">
                                <Maximize2 className="w-5 h-5 mr-2" />
                                Explore More
                              </button>
                            </div>
                          </DialogTrigger>
                      <DialogContent className="max-w-6xl w-full h-full lg:h-[90vh] p-8 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
  <DialogHeader className="mb-6">
    <DialogTitle className="text-3xl font-semibold text-[var(--charcoal)]">
      More Photos of {variant.name}
    </DialogTitle>
    <DialogDescription className="text-base text-[var(--wood)] mt-1">
      Click an image to view it in detail.
    </DialogDescription>
  </DialogHeader>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto flex-grow pr-1.5 custom-scroll">
            {variant.additionalImages.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-md cursor-pointer"
                onClick={() => {
                  setSelectedImage(img)
                  setImageViewerOpen(true)
                }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${variant.name} additional photo ${imgIdx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
</DialogContent>
    <ImageViewerDialog
        open={imageViewerOpen}
        onOpenChange={setImageViewerOpen}
        imageSrc={selectedImage}
        alt={`Full view of ${variant.name}`}
      />
                        </Dialog>
                        
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-[var(--charcoal)] tracking-wide font-serif">
                        {variant.name?.toUpperCase()}
                      </h3>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">No variants available for this product.</p>
              )}
            </motion.div>
          </div>
        </div>
        {/* Overview Section */}
        <div className="bg-[var(--cream)] py-16">
          <div className="container mx-auto page-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="aspect-[3/2] relative w-full h-80">
                    <Image
                      src={product.overviewImage || product.image}
                      alt={`${product.name} Overview`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-light text-[var(--charcoal)] tracking-wide font-serif">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[var(--charcoal)] leading-relaxed text-justify">{product.fullDescription}</p>
                  {product.additionalInfo && (
                    <p className="text-[var(--charcoal)] leading-relaxed text-justify mt-4">{product.additionalInfo}</p>
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
        {/* Contact CTA */}
        <div className="py-12 bg-white">
          <div className="container mx-auto page-padding text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-light text-[var(--charcoal)] mb-6 font-serif">
                Interested in this product?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+918851619320"
                  className="bg-[var(--burgundy)] text-white px-8 py-3 rounded-full hover:bg-[var(--dark-red)] transition-colors font-medium"
                >
                  Call for Quote
                </Link>
                <Link
                  href="/#contact"
                  className="bg-[var(--sand)] text-[var(--charcoal)] px-8 py-3 rounded-full hover:bg-[var(--gold)] transition-colors font-medium"
                >
                  Send Inquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
