"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 8000)
  }

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book a Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Request a service and we'll connect you with a qualified technician in your area.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Service Request Form</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
                  <p>Your request has been received. Please wait while we assign a technician.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-6 py-4 rounded-lg">
                  <p className="font-medium">Next Steps:</p>
                  <p className="text-sm mt-1">
                    Our dispatch team will review your request and assign the best technician for your needs. You'll
                    receive technician details shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                method="POST"
                action="https://formsubmit.co/dispatch.utilitylink@gmail.com"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Service Request from UtilityLink Website" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required className="w-full" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="w-full"
                      placeholder="Your address or area"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <Select name="serviceType" required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plumbing">Plumbing</SelectItem>
                        <SelectItem value="Electricity">Electricity</SelectItem>
                        <SelectItem value="Water">Water</SelectItem>
                        <SelectItem value="Appliance Repair">Appliance Repair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full"
                      placeholder="+256 700 123456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional - for technician details)
                  </label>
                  <Input id="email" name="email" type="email" className="w-full" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description *
                  </label>
                  <Textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    required
                    className="w-full min-h-[100px]"
                    placeholder="Please describe what you need help with. For example: 'My fridge stopped cooling' or 'There's a leak in the bathroom.'"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Request Service
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
