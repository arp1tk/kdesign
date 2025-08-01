export const products = [
  {
    id: 1,
    category: "Flooring",
    brand: "ARGIL",
    name: "SPC Flooring",
    slug: "spc-flooring",
    description: "Stone Plastic Composite flooring made from limestone powder, PVC, and stabilizers",
    fullDescription:
      "SPC (Stone Plastic Composite) flooring is a modern and durable flooring solution that combines the beauty of natural materials with advanced technology. Made from a mix of limestone powder, PVC, and stabilizers, it offers exceptional durability and water resistance. This innovative flooring solution is perfect for both residential and commercial spaces, providing the aesthetic appeal of natural wood with superior performance characteristics.", // Information from source 13
    additionalInfo:
      "The unique composition ensures 100% waterproof properties, making it ideal for kitchens, bathrooms, and high-moisture areas. With its click-lock installation system, SPC flooring offers easy maintenance and long-lasting beauty that withstands heavy foot traffic.",
    variants: [
      {
        name: "Highland Black Veins",
        code: "1105",
        image: "/product-images/spc-flooring/black.jpg",
        additionalImages: [
          "/product-images/spc-flooring/black.jpg",
          "/product-images/spc-flooring/grey.jpg",
          "/placeholder.svg?height=600&width=800&text=SPC+Black+Veins+3",
        ],
      },
      {
        name: "Highland Grey Veins",
        code: "1104",
        image: "/product-images/spc-flooring/grey.jpg",
        additionalImages: [
          "/placeholder.svg?height=600&width=800&text=SPC+Black+Veins+1",
          "/placeholder.svg?height=600&width=800&text=SPC+Black+Veins+2",
          "/placeholder.svg?height=600&width=800&text=SPC+Black+Veins+3",
        ],
      },
      {
        name: "Pedy Oak Golden Veins",
        code: "1103",
        image: "/product-images/spc-flooring/og.jpg",
      },
      {
        name: "Walden Oak Ash Veins",
        code: "1101",
        image: "/product-images/spc-flooring/oa.png",
      },
      {
        name: "Creek Oak White Veins",
        code: "1116",
        image: "/product-images/spc-flooring/ow.jpg",
      },
      {
        name: "Creek Oak Grey",
        code: "1117",
        image: "/product-images/spc-flooring/ogrey.jpg",
      },
    ],
    image: "/placeholder.svg?height=250&width=350&text=SPC+Flooring",
    overviewImage: "/products/spc-fl.png",
  },
  {
    id: 2,
    category: "Flooring",
    brand: "ARGIL",
    name: "Quartz Stone Slab",
    slug: "quartz-stone-slab",
    description: "Engineered quartz that resembles granite, unaffected by stains, scratches, and cracks",
    fullDescription:
      "Composite or engineered quartz is a very solid material that resembles real granite in both look and utility. Engineered quartz is unaffected by stains, scratches, and cracks. It is also resistant to heat and cold. Engineered by blending quartz or granite aggregates with resins and pigments, man-made products like stone or quartz are created by quartz manufacturers in India, which are mostly generated from natural materials.", // Information from source 26, 27
    additionalInfo:
      "The composition of engineered quartz slabs is typically 90% pulverised natural quartz and 10% polyresin. However, these percentages may vary slightly depending on the kind of quartz used. This makes it an ideal choice for kitchen countertops, bathroom vanities, and other high-use surfaces.",
    variants: [
      {
        name: "Calcatta Neoleth",
        image: "/product-images/quartz-stone-slab/neoleth.jpg",
      },
      {
        name: "Nero Marquina",
        image: "/product-images/quartz-stone-slab/nero-marq.jpg",
      },
      {
        name: "Himalayan White",
        image: "/product-images/quartz-stone-slab/himal-white.jpg",
      },
      {
        name: "Calcatta Belo",
        image: "/product-images/quartz-stone-slab/belo.jpg",
      },
      {
        name: "Calcatta Gioa",
        image: "/product-images/quartz-stone-slab/gioia.jpg",
      },
      {
        name: "Calcatta Oro",
        image: "/product-images/quartz-stone-slab/oro.jpg",
      },
      {
        name: "Crema Marfil",
        image: "/product-images/quartz-stone-slab/creama-marfil.jpg",
      },
      {
        name: "Glacier White",
        image: "/product-images/quartz-stone-slab/glaciar-white.jpg",
      },
      {
        name: "Statuario Fantastico",
        image: "/product-images/quartz-stone-slab/statuario.jpg",
      },
      {
        name: "Black Night",
        image: "/product-images/quartz-stone-slab/black-night.jpg",
      },
      {
        name: "Calcatta Novus",
        image: "/product-images/quartz-stone-slab/novus.jpg",
      },
    ],
    image: "/products/stone.png",
    overviewImage: "/products/stone.png",
  },
  {
    id: 3,
    category: "Windows & Doors",
    brand: "VISTA",
    name: "Premium Blinds",
    slug: "premium-blinds",
    description: "Control light, privacy, and mood with sleek blinds",
    fullDescription:
      "Control light, privacy, and mood with sleek blinds that add both style and function to any space. Our premium blinds collection offers clean, minimal style with adjustable slats for perfect light control. These blinds provide thermal insulation and sound absorption while maintaining an elegant aesthetic that complements any interior design.", // Information from source 44, 45, 49, 53
    additionalInfo:
      "Available in various materials including wood, aluminum, and fabric, our blinds feature layered fabric with dual control options. The easy operation and maintenance make them perfect for both residential and commercial applications.", // Information from source 51
    variants: [
      {
        name: "Roller",
        image: "/product-images/premium-blinds/roller.png",
      },
      {
        name: "Zebra (Day-Night)",
        image: "/product-images/premium-blinds/zebra.png",
      },
      {
        name: "Venetian (Wood/Aluminium)",
        image: "/product-images/premium-blinds/wood.png",
      },
      {
        name: "Honeycomb/Cellular",
        image: "/product-images/premium-blinds/hc.png",
      },
    ],
    image: "/placeholder.svg?height=250&width=350&text=Premium+Blinds",
    overviewImage: "/products/blinds.png",
  },
  {
    id: 4,
    category: "Outdoor",
    brand: "VISTA",
    name: "Awnings",
    slug: "awnings",
    description: "Protective coverings for shade and shelter, enhancing comfort and energy efficiency",
    fullDescription:
      "Protective fabric or metal coverings installed over windows or doors to provide shade and shelter from the elements, enhancing both comfort and energy efficiency. Perfect for outdoor spaces and commercial applications, our awnings extend your living space while providing UV protection and weather resistance.", // Information from source 59, 60
    additionalInfo:
      "Available in both manual and motorized options, our awnings feature customizable designs and colors to match your architectural style. They significantly reduce energy costs by blocking harmful UV rays and reducing heat gain in your home or business.",
    variants: [
      {
        name: "Pergola Awnings",
        image: "/product-images/awnings/pa.png",
      },
      {
        name: "Canopy Awnings",
        image: "/product-images/awnings/ca1.png",
      },
      {
        name: "Retractable (Manual or Motorized)",
        image: "/product-images/awnings/retrac.png",
      },
      {
        name: "Fixed Awnings",
        image: "/product-images/awnings/fixed.png",
      },
    ],
    image: "/placeholder.svg?height=250&width=350&text=Awnings",
    overviewImage: "/products/awnings.png",
  },
  {
    id: 5,
    category: "Flooring",
    brand: "VISTA",
    name: "Wooden Flooring",
    slug: "wooden-flooring",
    description: "Timeless, natural aesthetic with warmth and durability",
    fullDescription:
      "Timeless, natural aesthetic with warmth and durability, available in various finishes like hardwood, engineered, or laminate for different interiors. Perfect for creating elegant and comfortable living spaces, our wooden flooring collection brings the beauty of nature indoors while providing exceptional durability and easy maintenance.", // Information from source 72
    additionalInfo:
      "Our wooden flooring features natural wood grain patterns that add character and value to your property. Suitable for various interior styles from traditional to contemporary, each plank is carefully selected and finished to ensure consistent quality and long-lasting beauty.",
      variants: [
      {
        name: "Wood Series",
        image: "/product-images/wooden-flooring/wood.png",
      },
      {
        name: "Modern Series",
        image: "/product-images/wooden-flooring/modern.png",
      },
      {
        name: "Stone Series",
        image: "/product-images/wooden-flooring/stone.png",
      },
      {
        name: "Herringbone Series",
        image: "/product-images/wooden-flooring/herring.png",
      },
    ],
    image: "/products/wooden-flooring.png",
    overviewImage: "/products/floorings.png",
  },
  {
    id: 6,
    category: "Outdoor",
    brand: "KARA",
    name: "Premium Decking",
    slug: "premium-decking",
    description: "Combines aesthetic appeal of exotic hardwoods with composite durability",
    fullDescription:
      "Combines the aesthetic appeal of exotic hardwoods with the durability of composite materials, making it ideal for outdoor flooring applications. Perfect for patios, balconies, and outdoor entertainment areas, our premium decking solutions offer the natural beauty of wood with enhanced weather resistance and longevity.", // Information from source 82, 83
    additionalInfo:
      "Our decking materials are engineered to withstand harsh weather conditions while maintaining their appearance year after year. The slip-resistant surface and eco-friendly composition make them safe for families and environmentally conscious homeowners.",
  variants: [
      {
        name: "Driftwood",
        image: "/product-images/premium-decking/driftwood.png",
      },
      {
        name: "Dunewood",
        image: "/product-images/premium-decking/dunewod.png",
      },
      {
        name: "Silverwood",
        image: "/product-images/premium-decking/silverwood.png",
      },
      {
        name: "Ironwood",
        image: "/product-images/premium-decking/ironwood.png",
      },
    ],
    image: "/products/premium-decking.png",
    overviewImage: "/products/decking.png",
  },
  {
    id: 7,
    category: "Windows & Doors",
    brand: "VISTA",
    name: "Curtain Rods",
    slug: "curtain-rods",
    description: "Functional and decorative fixtures for hanging curtains",
    fullDescription:
      "Functional and decorative fixtures used to hang curtains, available in various materials and styles to complement different interior themes. Perfect for both single and layered curtain setups, our curtain rod collection offers solutions for every window treatment need, from minimalist designs to elaborate decorative systems.", // Information from source 95, 96, 100
    additionalInfo:
      "Our curtain rods feature adjustable lengths to fit any window width, with options for concealed mounting for a clean, minimalist look. Motorized options are available for modern smart homes, providing convenient remote control operation.", // Information from source 102, 104, 105
   variants: [
      {
        name: "Single/Double Rods",
        image: "/product-images/curtain-rods/single.jpg",
      },
      {
        name: "Extendable Rods",
        image: "/product-images/curtain-rods/ex.png",
      },
      {
        name: "Track curtain system",
        image: "/product-images/curtain-rods/track.png",
      },
      {
        name: "Motorized Rods",
        image: "/product-images/curtain-rods/motorized.png",
      },
    ],
    image: "/products/curt.png",
    overviewImage: "/products/curt.png",
  },
  {
    id: 8,
    category: "Outdoor",
    brand: "DECK",
    name: "Outdoor Blinds",
    slug: "outdoor-blinds",
    description: "Weather-resistant blinds for outdoor spaces",
    fullDescription:
      "Control light, privacy, and mood with sleek blinds that add both style and function to any outdoor space. Our outdoor blinds feature natural, breathable aesthetics with sleek, windproof, and modern weatherproof options. These blinds are specifically designed to withstand outdoor conditions while maintaining their beauty and functionality.", // Information from source 109, 110, 115, 119
    additionalInfo:
      "Available in various materials including bamboo, PVC, and fabric, our outdoor blinds provide UV protection and weather resistance. The soft, foldable designs offer flexibility while the robust construction ensures long-lasting performance in all weather conditions.", // Information from source 116, 120
    variants: [
      {
        name: "Roll up Bamboo",
        image: "/product-images/outdoor-blinds/roll-up-bamboo.jpg",
      },
      {
        name: "PVC outdoor",
        image: "/product-images/outdoor-blinds/pvc-outdoor.png",
      },
      {
        name: "Zip Track",
        image: "/product-images/outdoor-blinds/zip-track.png",
      },
      {
        name: "Outdoor Roman",
        image: "/product-images/outdoor-blinds/outdoor-roman.png",
      },
    ],
    image: "/products/outdoor-blinds.png",
    overviewImage: "/products/deck-blinds.png",
  },
  {
    id: 9,
    category: "Flooring",
    brand: "DECK",
    name: "Specialty Flooring",
    slug: "specialty-flooring",
    description: "Eco-friendly and durable flooring solutions",
    fullDescription:
      "Bring warmth and elegance to your interiors with specialty flooring that blends timeless charm with modern durability. Our eco-friendly and comfortable options provide natural looks with premium texture that ages gracefully. These modular and easy-to-install solutions offer versatility for various applications.", // Information from source 125, 129, 130, 133, 134
    additionalInfo:
      "Our specialty flooring collection includes innovative materials that combine sustainability with performance. From artificial grass for indoor-outdoor living to natural wood options, each product is designed to meet specific needs while maintaining environmental responsibility.",
   variants: [
      {
        name: "WPC Decking",
        image: "/product-images/specialty-flooring/wpc-decking.png",
      },
      {
        name: "PVC Deck Tiles",
        image: "/product-images/specialty-flooring/pvc-tiles.png",
      },
      {
        name: "Artifical Grass",
        image: "/product-images/specialty-flooring/grass.png",
      },
      {
        name: "Natural Wood (Teak/IPE)",
        image: "/product-images/specialty-flooring/natural-wood.png",
      },
    ],
    image: "/products/specialty-flooring.png",
    overviewImage: "/products/deck-floorig.png",
  },
  {
    id: 10,
    category: "Wall Solutions",
    brand: "HOME SHANTI",
    name: "Wall Panelling",
    slug: "wall-panelling",
    description: "Enhances interior walls with added texture and depth",
    fullDescription:
      "Enhances interior walls with added texture and depth, using materials like wood, MDF, or PVC to create a refined and elegant look. Perfect for creating feature walls and adding character to any space, our wall panelling solutions offer easy installation with a variety of textures and finishes to suit any design aesthetic.", // Information from source 140, 145, 146, 147, 151, 152, 153
    additionalInfo:
      "Our wall panelling systems improve acoustics while providing durable and long-lasting wall treatments. With customizable designs ranging from classic wood veneer to contemporary 3D panels, each option is engineered for both beauty and functionality.",
    variants: [
      {
        name: "Wood veener",
        image: "/product-images/wall-panelling/wood.png",
      },
      {
        name: "MDF Panels",
        image: "/product-images/wall-panelling/mdf.png",
      },
      {
        name: "PVC Panels",
        image: "/product-images/wall-panelling/pvc.png",
      },
      {
        name: "3D Panels",
        image: "/product-images/wall-panelling/3d.png",
      },
      {
        name: "Acoustic Panels",
        image: "/product-images/wall-panelling/acoustic.png",
      },
      {
        name: "Fabric-Wrapped Panels",
        image: "/product-images/wall-panelling/fabric.png",
      },
    ],
    image: "/products/wall-panelling.png",
    overviewImage: "/products/wall-panel.png",
  },
  {
    id: 11,
    category: "Windows & Doors",
    brand: "ADWIN",
    name: "UPVC Doors",
    slug: "upvc-doors",
    description: "Excellent durability, thermal insulation, and low maintenance",
    fullDescription:
      "Made from unplasticized polyvinyl chloride, offering excellent durability, thermal insulation, and low maintenance. They are resistant to weather, corrosion, and noise, making them ideal for modern homes and offices. Our UPVC doors provide superior energy efficiency while maintaining aesthetic appeal and security.", // Information from source 158, 159
    additionalInfo:
      "These doors feature advanced locking systems and weather sealing technology. With various opening mechanisms including casement, sliding, and folding options, they offer flexibility in design while providing consistent performance and security for years to come.",
   variants: [
      {
        name: "Casement",
        image: "/product-images/upvc-doors/casement.png",
      },
      {
        name: "Sliding",
        image: "/product-images/upvc-doors/sliding.png",
      },
      {
        name: "Lift & Slide",
        image: "/product-images/upvc-doors/lift-slide.png",
      },
      {
        name: "Folding",
        image: "/product-images/upvc-doors/folding.png",
      },
    ],
    image: "/products/upvc-doors.png",
    overviewImage: "/products/upvc-door.png",
  },
  {
    id: 12,
    category: "Windows & Doors",
    brand: "ADWIN",
    name: "UPVC Windows",
    slug: "upvc-windows",
    description: "Weather-resistant, corrosion-proof, and noise-reducing windows",
    fullDescription:
      "Made from unplasticized polyvinyl chloride, offering excellent durability, thermal insulation, and low maintenance. They are resistant to weather, corrosion, and noise, making them ideal for modern homes and offices. Our UPVC windows provide superior energy efficiency and sound insulation while maintaining crystal-clear views and easy operation.", // Information from source 171, 172
    additionalInfo:
      "These windows feature multi-point locking systems and advanced glazing options for enhanced security and energy performance. Available in various configurations including casement, tilt & turn, and sliding mechanisms to suit different architectural requirements and personal preferences.",
    variants: [
      {
        name: "Casement",
        image: "/product-images/upvc-windows/casement.png",
      },
      {
        name: "Sliding",
        image: "/product-images/upvc-windows/sliding.png",
      },
      {
        name: "Tilt & Turn",
        image: "/product-images/upvc-windows/tilt-turn.png",
      },
      {
        name: "Villa Window",
        image: "/product-images/upvc-windows/villa.png",
      },
    ],
    image: "/products/upvc-windows.png",
    overviewImage: "/products/upvc-windows.png",
  },
];