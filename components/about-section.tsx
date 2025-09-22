import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About UtilityLink</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UtilityLink is Kampala's premier multi-service dispatch platform, connecting customers with vetted,
              professional service providers across the city. Our mission is to make reliable utility services
              accessible with just one click.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We emphasize trust, speed, and professionalism in every interaction. Our carefully screened technicians
              are equipped with the skills and tools needed to handle your plumbing, electrical, solar, and appliance
              repair needs efficiently and safely.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/drillinglady.jpg"
              alt="Professional female technician working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
