"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/technician1.jpg"
          alt="Professional technician at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Reliable Utility Services, One Click Away</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
          Connect with verified, professional technicians across Kampala for all your utility needs
        </p>
        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
        >
          Book a Technician
        </Button>
      </div>
    </section>
  )
}
