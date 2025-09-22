import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Nakamya",
    location: "Bugolobi",
    text: "UtilityLink connected me with an excellent electrician who fixed my wiring issues quickly and professionally. Highly recommended!",
    rating: 5,
    image: "/professional-african-woman-smiling-headshot.jpg",
  },
  {
    name: "James Okello",
    location: "Kololo",
    text: "The solar installation team was knowledgeable and efficient. My energy bills have reduced significantly since the installation.",
    rating: 5,
    image: "/professional-african-man-smiling-headshot.jpg",
  },
  {
    name: "Grace Namuli",
    location: "Nakawa",
    text: "Fast, reliable plumbing service. The technician arrived on time and solved my problem within an hour. Great service!",
    rating: 5,
    image: "/professional-african-woman-business-attire-smiling.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Kampala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} - Customer`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
