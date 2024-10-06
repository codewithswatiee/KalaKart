'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Calendar, MapPin, Phone, Mail, Star, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

// Mock data for artisans
const artisans = [
  {
    id: 1,
    name: "Rajesh Kumar",
    craft: "Pottery",
    rating: 4.8,
    location: "Jaipur, Rajasthan",
    phone: "+91 98765 43210",
    email: "rajesh@pottery.com",
    description: "Master potter specializing in traditional Rajasthani blue pottery.",
    image: "/artisan.jpg",
    availableDates: ["2024-03-15", "2024-03-20", "2024-03-25"],
    preferredStyle: "Product Photography"
  },
  {
    id: 2,
    name: "Meera Devi",
    craft: "Textile Weaving",
    rating: 4.9,
    location: "Varanasi, Uttar Pradesh",
    phone: "+91 87654 32109",
    email: "meera@textiles.com",
    description: "Expert in Banarasi silk weaving, creating exquisite sarees and fabrics.",
    image: "/artisan.jpg",
    availableDates: ["2024-03-18", "2024-03-22", "2024-03-28"],
    preferredStyle: "Fashion Photography"
  },
  {
    id: 3,
    name: "Amit Singh",
    craft: "Wood Carving",
    rating: 4.7,
    location: "Saharanpur, Uttar Pradesh",
    phone: "+91 76543 21098",
    email: "amit@woodcraft.com",
    description: "Skilled woodworker known for intricate designs in traditional Saharanpur style.",
    image: "/artisan.jpg",
    availableDates: ["2024-03-17", "2024-03-23", "2024-03-30"],
    preferredStyle: "Documentary Photography"
  },
  // Add more artisans as needed
]

export default function PhotographerArtisanViewer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [filterCraft, setFilterCraft] = useState("All")
  const [filterStyle, setFilterStyle] = useState("All")

  const filteredArtisans = artisans.filter(artisan => 
    (artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.craft.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCraft === "All" || artisan.craft === filterCraft) &&
    (filterStyle === "All" || artisan.preferredStyle === filterStyle)
  )

  const uniqueCrafts = ["All", ...Array.from(new Set(artisans.map(a => a.craft)))];
  const uniqueStyles = ["All", ...Array.from(new Set(artisans.map(a => a.preferredStyle)))];

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

      {/* Search and Filter Bar */}
      <div className="bg-[#664343] text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center space-x-2 space-y-2">
            <Input
              type="text"
              placeholder="Search artisans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-white text-[#3B3030]"
            />
            <Select onValueChange={(value) => setFilterCraft(value)}>
              <SelectTrigger className="w-[180px] bg-white text-[#3B3030]">
                <SelectValue placeholder="Filter by Craft" />
              </SelectTrigger>
              <SelectContent>
                {uniqueCrafts.map((craft) => (
                  <SelectItem key={craft} value={craft}>{craft}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setFilterStyle(value)}>
              <SelectTrigger className="w-[180px] bg-white text-[#3B3030]">
                <SelectValue placeholder="Filter by Style" />
              </SelectTrigger>
              <SelectContent>
                {uniqueStyles.map((style) => (
                  <SelectItem key={style} value={style}>{style}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="secondary">
              <Filter className="mr-2 h-4 w-4" /> Apply Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Artisan Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArtisans.map((artisan) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
                        <span>{artisan.location}</span>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{artisan.description}</p>
                    <div className="flex items-center text-[#795757] mb-2">
                      <Camera className="h-5 w-5 mr-2" />
                      <span>{artisan.preferredStyle}</span>
                    </div>
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
                              <Phone className="h-4 w-4 mr-2 text-[#795757]" />
                              {artisan.phone}
                            </p>
                            <p className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-[#795757]" />
                              {artisan.email}
                            </p>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-[#795757]" />
                              <span>Available Dates:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {artisan.availableDates.map((date, index) => (
                                <span key={index} className="bg-[#FFF0D1] text-[#664343] px-2 py-1 rounded-full text-xs">
                                  {date}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      className="flex-1 mr-2"
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" className="flex-1">Book Session</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Book a Photography Session</DialogTitle>
                          <DialogDescription>
                            Schedule a session with {artisan.name} for {artisan.craft} photography.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="name" className="text-right">Name</label>
                            <Input id="name" value={artisan.name} className="col-span-3" readOnly />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="date" className="text-right">Date</label>
                            <Select>
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a date" />
                              </SelectTrigger>
                              <SelectContent>
                                {artisan.availableDates.map((date) => (
                                  <SelectItem key={date} value={date}>{date}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Confirm Booking</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
              <h2 className="text-2xl font-bold">Artisan Photography Hub</h2>
              <p>Connecting photographers with skilled artisans</p>
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