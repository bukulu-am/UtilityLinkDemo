"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="UtilityLink"
                width={150}
                height={60}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Connecting Kampala with reliable utility services through verified, professional technicians. Your trusted
              partner for plumbing, electrical, solar, and appliance repair services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("join-technician")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Join as Technician
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Kampala, Bugolobi
                  <br />
                  Plot 95 Luthuli Avenue
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <div>+256 763 292 465</div>
                  <div>+256 758 561 947</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">info@utilitylinkug.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">www.utilitylinkug.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 UtilityLink. All rights reserved. | Connecting Kampala with reliable utility services.
          </p>
        </div>
      </div>
    </footer>
  )
}
