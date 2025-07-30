import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "K Designs - Home",
  description: "Welcome to K Designs, your premier source for innovative design solutions.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
