"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Sun, Settings } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description:
      "Professional plumbing services including repairs, installations, and maintenance for residential and commercial properties.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Licensed electricians for wiring, repairs, installations, and electrical system maintenance with safety guaranteed.",
  },
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Complete solar energy solutions from consultation to installation and maintenance by certified solar technicians.",
  },
  {
    icon: Settings,
    title: "Appliance Repair",
    description:
      "Expert repair services for home and office appliances including refrigerators, washing machines, and more.",
  },
]

export function ServicesSection() {
  const handleRequestService = (service: string) => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional utility services delivered by verified technicians across Kampala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">{service.description}</CardDescription>
                <Button
                  onClick={() => handleRequestService(service.title)}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Request Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
