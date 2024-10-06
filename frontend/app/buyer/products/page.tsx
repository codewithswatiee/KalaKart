"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, X } from 'lucide-react'

// Define a type for the product
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// This would typically come from your database
const products: Product[] = [
  { id: 1, name: 'Handwoven Scarf', price: 1200, image: '/placeholder.svg?height=200&width=300', description: 'A beautiful handwoven scarf made from the finest silk, perfect for any occasion.' },
  { id: 2, name: 'Ceramic Vase', price: 1500, image: '/placeholder.svg?height=200&width=300', description: 'Elegant ceramic vase handcrafted by local artisans, ideal for displaying your favorite flowers.' },
  { id: 3, name: 'Wooden Sculpture', price: 3000, image: '/placeholder.svg?height=200&width=300', description: 'Intricate wooden sculpture carved by skilled craftsmen, a unique piece of art for your home.' },
  { id: 4, name: 'Embroidered Cushion', price: 800, image: '/placeholder.svg?height=200&width=300', description: 'Soft cushion with beautiful hand-embroidered designs, adds a touch of elegance to any room.' },
]

export default function ProductListingPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#FFF0D1]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#3B3030]">Discover Unique Handcrafted Products</h1>
        
        <div className="mb-6 flex justify-center">
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="max-w-md w-full bg-white border-[#795757] focus:ring-[#664343] text-[#3B3030]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-2 right-2 flex space-x-2 z-10">
                <Button size="icon" variant="outline" className="bg-white hover:bg-[#FFF0D1]">
                  <ShoppingCart className="h-4 w-4 text-[#795757]" />
                </Button>
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-[#3B3030]">{product.name}</h2>
                <p className="text-[#664343] mb-4">₹{product.price}</p>
                <Button 
                  className="w-full bg-[#795757] hover:bg-[#664343] text-white"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl">
            <div className="relative">
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute top-2 right-2 text-[#3B3030]"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#3B3030]">{selectedProduct.name}</h2>
              <p className="text-xl text-[#664343] mb-4">₹{selectedProduct.price}</p>
              <p className="text-[#3B3030] mb-6">{selectedProduct.description}</p>
              <div className="flex space-x-4">
                <Button className="flex-1 bg-[#795757] hover:bg-[#664343] text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
