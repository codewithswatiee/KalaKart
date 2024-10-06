"use client"
import Link from 'next/link'
import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  portfolioLink: string;
  experience: string;
  equipment: string;
  editingSoftware: string;
  availability: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
  experience?: string;
  equipment?: string;
  editingSoftware?: string;
  availability?: string;
}

export default function PhotographerForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    portfolioLink: '',
    experience: '',
    equipment: '',
    editingSoftware: '',
    availability: ''
  })

  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    let newErrors: Errors = {}

    // Full name validation
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required'
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Phone number validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number'
    }

    // Experience validation (max 200 words)
    if (!formData.experience) {
      newErrors.experience = 'Photography experience is required'
    } else if (formData.experience.trim().split(/\s+/).length > 200) {
      newErrors.experience = 'Experience description should not exceed 200 words'
    }

    // Equipment validation
    if (!formData.equipment) {
      newErrors.equipment = 'Equipment information is required'
    }

    // Editing Software validation
    if (!formData.editingSoftware) {
      newErrors.editingSoftware = 'Editing software information is required'
    }

    // Availability validation
    if (!formData.availability) {
      newErrors.availability = 'Availability information is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      alert('Application submitted successfully!')
    }
  }

  return (
    <>
      <header className="bg-[#795757] text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">KalaKart</h1>
          <nav>
            <ul className="flex space-x-4">
              <Link href='/empOpp/main' passHref> <li className='text-lg underline'>Back</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    <div className="min-h-screen bg-[#FFF0D1] flex items-center justify-center p-4">
      
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#795757] p-6">
          <h2 className="text-2xl font-bold text-white">Photographer Application</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#664343]">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#664343]">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#664343]">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Portfolio Link */}
          <div className="space-y-2">
            <Label htmlFor="portfolioLink" className="text-[#664343]">Portfolio Link</Label>
            <Input
              id="portfolioLink"
              name="portfolioLink"
              type="url"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="https://your-portfolio-site.com"
            />
          </div>

          {/* Photography Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-[#664343]">Describe your Photography Experience</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Max 200 words. Include any work related to local products or events"
              required
            />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          </div>

          {/* Equipment */}
          <div className="space-y-2">
            <Label htmlFor="equipment" className="text-[#664343]">Photography Equipment</Label>
            <Textarea
              id="equipment"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Please list the equipment you have experience with, e.g., camera, lenses"
              required
            />
            {errors.equipment && <p className="text-red-500 text-sm">{errors.equipment}</p>}
          </div>

          {/* Editing Software */}
          <div className="space-y-2">
            <Label htmlFor="editingSoftware" className="text-[#664343]">Editing Software</Label>
            <Input
              id="editingSoftware"
              name="editingSoftware"
              value={formData.editingSoftware}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="e.g., Adobe Photoshop, Lightroom"
              required
            />
            {errors.editingSoftware && <p className="text-red-500 text-sm">{errors.editingSoftware}</p>}
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <Label htmlFor="availability" className="text-[#664343]">Availability</Label>
            <Textarea
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Please indicate your availability to work: days of the week and hours"
              required
            />
            {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
          </div>

          {/* Submit Button */}
          <Link href='/empOpp/photographer' passHref>
          <Button type="submit" className="w-full bg-[#664343] hover:bg-[#795757] text-white">
            Submit Application
          </Button>
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}
