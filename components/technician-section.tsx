import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TechnicianSection() {
  return (
    <section id="join-technician" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/handshake.jpg"
              alt="Professional handshake representing partnership"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join as Technician</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Skilled in plumbing, electrical, or solar? Join UtilityLink and connect with customers across Kampala.
              Expand your business reach and grow your client base with our trusted platform.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide you with the tools and support needed to succeed while maintaining the highest standards of
              professionalism and service quality.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Join as Technician
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
