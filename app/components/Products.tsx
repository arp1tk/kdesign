"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const categories = ["All", "Flooring", "Windows & Doors", "Wall Solutions", "Outdoor"]

const products = [
  {
    id: 1,
    category: "Flooring",
    brand: "ARGIL",
    name: "SPC Flooring",
    slug: "spc-flooring",
    description: "Stone Plastic Composite flooring made from limestone powder, PVC, and stabilizers",
    variants: ["Highland Black Veins", "Walden Oak Ash Veins", "Highland Grey Veins", "Creek Oak White Veins"],
    image: "/products/spc-fl.png",
  },
  {
    id: 2,
    category: "Flooring",
    brand: "ARGIL",
    name: "Quartz Stone Slab",
    slug: "quartz-stone-slab",
    description: "Engineered quartz that resembles granite, unaffected by stains, scratches, and cracks",
    variants: ["Calcatta Neoleth", "Calcatta Gioa", "Statuario Fantastico", "Nero Marquina"],
    image: "/products/stone.png",
  },
  {
    id: 3,
    category: "Windows & Doors",
    brand: "VISTA",
    name: "Premium Blinds",
    slug: "premium-blinds",
    description: "Control light, privacy, and mood with sleek blinds",
    variants: ["Roller", "Venetian (Wood/Aluminium)", "Zebra (Day-Night)", "Honeycomb/Cellular"],
    image: "/products/blinds.png",
  },
  {
    id: 4,
    category: "Outdoor",
    brand: "VISTA",
    name: "Awnings",
    slug: "awnings",
    description: "Protective coverings for shade and shelter, enhancing comfort and energy efficiency",
    variants: ["Pergola Awnings", "Retractable (Manual/Motorized)", "Canopy Awnings", "Fixed Awnings"],
    image: "/products/awnings.png",
  },
  {
    id: 5,
    category: "Flooring",
    brand: "VISTA",
    name: "Wooden Flooring",
    slug: "wooden-flooring",
    description: "Timeless, natural aesthetic with warmth and durability",
    variants: ["Wood Series", "Stone Series", "Modern Series", "Herringbone Series"],
    image: "/products/floorings.png",
  },
  {
    id: 6,
    category: "Outdoor",
    brand: "KARA",
    name: "Premium Decking",
    slug: "premium-decking",
    description: "Combines aesthetic appeal of exotic hardwoods with composite durability",
    variants: ["Driftwood", "Silverwood", "Dunewood", "Ironwood"],
    image: "/products/decking.png",
  },
  {
    id: 7,
    category: "Windows & Doors",
    brand: "VISTA",
    name: "Curtain Rods",
    slug: "curtain-rods",
    description: "Functional and decorative fixtures for hanging curtains",
    variants: ["Single/Double Rods", "Track Curtain System", "Extendable Rods", "Motorized Rods"],
    image: "/products/curt.png",
  },
  {
    id: 8,
    category: "Outdoor",
    brand: "DECK",
    name: "Outdoor Blinds",
    slug: "outdoor-blinds",
    description: "Weather-resistant blinds for outdoor spaces",
    variants: ["Roll up Bamboo", "Zip Track", "PVC Outdoor", "Outdoor Roman"],
    image: "/products/deck-blinds.png",
  },
  {
    id: 9,
    category: "Flooring",
    brand: "DECK",
    name: "Specialty Flooring",
    slug: "specialty-flooring",
    description: "Eco-friendly and durable flooring solutions",
    variants: ["WPC Decking", "Artificial Grass", "PVC Deck Tiles", "Natural Wood (Teak/IPE)"],
    image: "/products/deck-floorig.png",
  },
  {
    id: 10,
    category: "Wall Solutions",
    brand: "HOME SHANTI",
    name: "Wall Panelling",
    slug: "wall-panelling",
    description: "Enhances interior walls with added texture and depth",
    variants: ["Wood Veneer", "3D Panels", "MDF Panels", "Acoustic Panels", "PVC Panels", "Fabric-Wrapped Panels"],
    image: "/products/wall-panel.png",
  },
  {
    id: 11,
    category: "Windows & Doors",
    brand: "ADWIN",
    name: "UPVC Doors",
    slug: "upvc-doors",
    description: "Excellent durability, thermal insulation, and low maintenance",
    variants: ["Casement", "Lift & Slide", "Sliding", "Folding"],
    image: "/products/upvc-door.png",
  },
  {
    id: 12,
    category: "Windows & Doors",
    brand: "ADWIN",
    name: "UPVC Windows",
    slug: "upvc-windows",
    description: "Weather-resistant, corrosion-proof, and noise-reducing windows",
    variants: ["Casement", "Tilt & Turn", "Sliding", "Villa Window"],
    image: "/products/upvc-windows.png",
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="section-padding bg-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="section-title"
        >
          Our Premium Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center text-content text-lg mb-8 max-w-3xl mx-auto"
        >
          We curate premium products from leading brands like Vista, Home Shanti, Kaara, Argil, Adwin & Deck
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-[var(--burgundy)] text-white"
                  : "bg-[var(--sand)] text-[var(--charcoal)]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)]">{product.name}</h3>
                    <span className="text-xs font-medium text-[var(--burgundy)] bg-[var(--sand)] px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                  <p className="text-content mb-3 text-sm">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--charcoal)] mb-2">Available Variants:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.variants.slice(0, 2).map((variant, idx) => (
                        <span key={idx} className="text-xs bg-[var(--cream)] text-[var(--charcoal)] px-2 py-1 rounded">
                          {variant}
                        </span>
                      ))}
                      {product.variants.length > 2 && (
                        <span className="text-xs text-[var(--burgundy)]">
                          +{product.variants.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <Link href={`/products/${product.slug}`} className="w-full">
                  <button className="btn btn-primary w-full text-sm py-2 mt-auto">Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
