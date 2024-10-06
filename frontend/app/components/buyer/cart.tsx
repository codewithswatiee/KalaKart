"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus, Trash2, X } from 'lucide-react'

// Mock data for cart items and addresses
const initialCartItems = [
  { id: 1, name: 'Handwoven Scarf', price: 1200, quantity: 1, image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Ceramic Vase', price: 1500, quantity: 2, image: '/placeholder.svg?height=100&width=100' },
]

const savedAddresses = [
  { id: 1, address: '123 Main St, Anytown, AN 12345' },
  { id: 2, address: '456 Elm St, Othertown, OT 67890' },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0])
  const [showNewAddressForm, setShowNewAddressForm] = useState(false)
  const [newAddress, setNewAddress] = useState({
    flat: '',
    street: '',
    city: '',
    pincode: ''
  })

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const handleNewAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const fullAddress = `${newAddress.flat}, ${newAddress.street}, ${newAddress.city}, ${newAddress.pincode}`;
    const newAddressObj = { id: savedAddresses.length + 1, address: fullAddress }
    setSelectedAddress(newAddressObj)
    setShowNewAddressForm(false)
    setNewAddress({ flat: '', street: '', city: '', pincode: '' })
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#FFF0D1] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#3B3030]">Your Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#3B3030]">Delivery Address</h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <p className="text-[#664343] mb-2 sm:mb-0">{selectedAddress.address}</p>
            <Button className="bg-[#795757] hover:bg-[#664343] text-white">
              Change Address
            </Button>
          </div>
          <Button 
            variant="outline" 
            className="border-[#795757] text-[#795757] hover:bg-[#FFF0D1]"
            onClick={() => setShowNewAddressForm(true)}
          >
            Add New Address
          </Button>
        </div>

        {showNewAddressForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute top-2 right-2 text-[#3B3030]"
                onClick={() => setShowNewAddressForm(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <h2 className="text-2xl font-bold mb-4 text-[#3B3030]">Add New Address</h2>
              <form onSubmit={handleNewAddressSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="flat" className="text-[#664343]">Flat/House No.</Label>
                  <Input 
                    id="flat" 
                    value={newAddress.flat} 
                    onChange={(e) => setNewAddress({...newAddress, flat: e.target.value})}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="street" className="text-[#664343]">Street</Label>
                  <Input 
                    id="street" 
                    value={newAddress.street} 
                    onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[#664343]">City</Label>
                  <Input 
                    id="city" 
                    value={newAddress.city} 
                    onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-[#664343]">Pincode</Label>
                  <Input 
                    id="pincode" 
                    value={newAddress.pincode} 
                    onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#795757] hover:bg-[#664343] text-white">
                  Save Address
                </Button>
              </form>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col sm:flex-row items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-[#3B3030]">{item.name}</h3>
                  <p className="text-[#664343] mb-2">₹{item.price}</p>
                  <div className="flex items-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 mx-2 text-center"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 mt-4 sm:mt-0"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#3B3030]">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-[#664343]">{item.name} x {item.quantity}</span>
                  <span className="text-[#3B3030]">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#3B3030]">Total</span>
                  <span className="font-semibold text-[#3B3030]">₹{total}</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-[#795757] hover:bg-[#664343] text-white">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}