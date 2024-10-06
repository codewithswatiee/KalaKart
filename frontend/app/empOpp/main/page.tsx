"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConnectionPlatform() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#795757] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">KalaKart</h1>
          <nav>
            <ul className="flex space-x-4">
              <Link href='/' passHref> <li className='text-lg underline'>Back</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFF0D1] py-44">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join Us in Supporting Local Artisans</h2>
          <div className="flex justify-center space-x-4">
            <Button
              className="bg-[#664343] p-6 hover:bg-[#553333] text-white"
              asChild
            >
              <Link href="/empOpp/studentform">Students: Promote Artisan Products</Link>
            </Button>
            <Button
              className="bg-[#664343] p-6 hover:bg-[#553333] text-white"
              asChild
            >
              <Link href="/empOpp/photographerform">Photographers: Showcase Your Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                As a student, you have the unique opportunity to promote artisan products while gaining valuable experience. Learn about traditional crafts, develop marketing skills, and make a real impact on local artisans' lives.
              </CardDescription>
              <Button
                className="bg-[#664343] hover:bg-[#553333] text-white"
                asChild
              >
                <Link href="/empOpp/studentform">Student Form</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Photographers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Photographers play a crucial role in showcasing artisan products. Your skills can help bring these unique creations to life, telling the story behind each piece and helping artisans reach a wider audience.
              </CardDescription>
              <Button
                className="bg-[#664343] hover:bg-[#553333] text-white"
                asChild
              >
                <Link href="/empOpp/photographerform">Photographer Form</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#795757] text-white py-44">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Maria', role: 'Artisan', quote: 'This platform has connected me with talented students and photographers, helping me showcase my work to a wider audience.' },
              { name: 'Alex', role: 'Student', quote: 'I\'ve gained invaluable experience promoting artisan products, and it\'s incredibly rewarding to see the impact of my work.' },
              { name: 'Sam', role: 'Photographer', quote: 'Capturing the essence of artisan crafts has been a joy. This platform has opened up exciting new opportunities for me.' }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#FFF0D1]">
                <CardHeader>
                  <CardTitle className='font-extrabold text-lg'>{testimonial.name}</CardTitle>
                  <CardDescription className="text-black font-bold">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B3030] text-white py-8 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 KalaKart. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <ul className="flex space-x-4">
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}