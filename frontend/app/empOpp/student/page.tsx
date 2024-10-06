'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Star, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

// Mock data for artisans
const artisans = [
  {
    id: 1,
    name: "Rajesh Kumar",
    craft: "Pottery",
    rating: 4.8,
    distance: 2.5,
    address: "123 Clay St, Ceramic Town",
    phone: "+91 98765 43210",
    email: "rajesh@pottery.com",
    description: "Master potter specializing in traditional Indian designs with a modern twist.",
    image: "/artisan.jpg"
  },
  {
    id: 2,
    name: "Meera Devi",
    craft: "Textile Weaving",
    rating: 4.9,
    distance: 3.2,
    address: "456 Loom Lane, Weaver's Village",
    phone: "+91 87654 32109",
    email: "meera@textiles.com",
    description: "Expert in handloom techniques, creating exquisite sarees and fabrics.",
    image: "/artisan.jpg"
  },
  {
    id: 3,
    name: "Amit Singh",
    craft: "Wood Carving",
    rating: 4.7,
    distance: 1.8,
    address: "789 Chisel Road, Carver's Corner",
    phone: "+91 76543 21098",
    email: "amit@woodcraft.com",
    description: "Skilled woodworker known for intricate designs and sustainable practices.",
    image: "/artisan.jpg"
  },
  // Add more artisans as needed
]

export default function ArtisanLocator() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const filteredArtisans = artisans.filter(artisan => 
    artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.craft.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#FFF0D1] text-[#3B3030]">
      {/* Header */}
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

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Input
            type="text"
            placeholder="Search by name or craft..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button variant="secondary">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>

        {/* Artisan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArtisans.map((artisan) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="relative h-48 mb-4">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#664343]">{artisan.name}</CardTitle>
                    <CardDescription className="text-[#795757]">{artisan.craft}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span>{artisan.rating}</span>
                      </div>
                      <div className="flex items-center text-[#795757]">
                        <MapPin className="h-5 w-5 mr-1" />
                        <span>{artisan.distance} km away</span>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{artisan.description}</p>
                    <AnimatePresence>
                      {expandedCard === artisan.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="space-y-2 text-sm">
                            <p className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-[#795757]" />
                              {artisan.address}
                            </p>
                            <p className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-[#795757]" />
                              {artisan.phone}
                            </p>
                            <p className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-[#795757]" />
                              {artisan.email}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setExpandedCard(expandedCard === artisan.id ? null : artisan.id)}
                    >
                      {expandedCard === artisan.id ? (
                        <>
                          <ChevronUp className="mr-2 h-4 w-4" /> Less Info
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-2 h-4 w-4" /> More Info
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#664343] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Artisan Locator</h2>
              <p>Connecting students with local artisans</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFF0D1] transition-colors">About</a>
              <a href="#" className="hover:text-[#FFF0D1] transition-colors">Contact</a>
              <a href="#" className="hover:text-[#FFF0D1] transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} KalaKart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}