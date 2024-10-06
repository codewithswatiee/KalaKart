"use client"
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Settings, Clock, HelpCircle, Package, TrendingUp, Phone } from 'lucide-react'
import Image from 'next/image'

// Mock data
const buyer = {
  name: "Kamal Kumar",
  email: "kamal@example.com",
  phone: "+1234567890",
  address: "123 Main St, Anytown, AN 12345",
  avatar: "/profilePicture.jpg"
}

const stats = {
  totalOrders: 15,
  pendingOrders: 2,
  totalSpent: 25000,
}

const orders = [
  { id: 1, product: "Handwoven Scarf", status: "Delivered", date: "2023-05-15", image: "/handwovenShawl.jpg", price: 1200 },
  { id: 2, product: "Ceramic Vase", status: "In Transit", date: "2023-06-01", image: "/ceramicVase.jpg", price: 1500 },
  { id: 3, product: "Wooden Sculpture", status: "Processing", date: "2023-06-10", image: "/woodenScu.jpg", price: 3000 },
]

const cartItems = [
  { id: 1, product: "Embroidered Cushion", quantity: 2, price: 800, image: "/embCushon.jpg" },
  { id: 2, product: "Handmade Pottery", quantity: 1, price: 1200, image: "/handmadePottery.jpg" },
]

export default function BuyerDashboard() {
  const [activeSection, setActiveSection] = useState(null)
  const [showSupportNumber, setShowSupportNumber] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF0D1] py-8">
      <div className="container mx-auto px-4 space-y-8">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-[#3B3030]">Welcome {buyer.name}!</h1>
              <p className="text-[#664343]">Ready to explore more handcrafted wonders?</p>
            </div>
            <motion.img 
              src={buyer.avatar} 
              alt={buyer.name} 
              className="w-24 h-24 rounded-full border-4 border-[#795757]"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-4 w-[60%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tabs defaultValue="dashboard">
            <TabsList className="bg-[#664343] text-white w-full flex gap-9">
              <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-[#8f8282] data-[state=active]:text-white text-[1.1rem]">Dashboard</TabsTrigger>
              <Link href='/buyer/products' passHref>
              <TabsTrigger value="products" className="text-white data-[state=active]:bg-[#8f8282] data-[state=active]:text-white text-[1.1rem]">Products</TabsTrigger>
              </Link>
              <Link href='/buyer/edit-profile' passHref>
              <TabsTrigger value="profile" className="text-white data-[state=active]:bg-[#8f8282] data-[state=active]:text-white text-[1.1rem]">Edit-Profile</TabsTrigger>
              </Link>
              <Link href='/buyer/learn' passHref>
              <TabsTrigger value="learn" className="text-white data-[state=active]:bg-[#8f8282] data-[state=active]:text-white text-[1.1rem]">Learnings</TabsTrigger>
              </Link>
              
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Tabs defaultValue="dashboard">
            <TabsContent value="dashboard">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-2">
                  <Card className="bg-white shadow-lg h-full overflow-hidden">
                    <CardHeader className="bg-[#795757]">
                      <CardTitle className="text-white flex items-center">
                        <Package className="mr-2" /> Recent Orders
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-[#FFF0D1]">
                        {orders.map((order, index) => (
                          <motion.div 
                            key={order.id} 
                            className="p-4 hover:bg-[#FFF0D1] transition-colors duration-200"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-center space-x-4">
                              <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                <Image
                                  src={order.image}
                                  alt={order.product}
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-semibold text-[#3B3030]">{order.product}</h3>
                                <p className="text-sm text-[#664343]">Order ID: {order.id}</p>
                                <p className="text-[#795757] font-semibold">₹{order.price}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-[#795757] font-semibold">{order.status}</p>
                                <p className="text-sm text-[#664343]">{order.date}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="bg-white shadow-lg h-full">
                    <CardHeader className="bg-[#795757]">
                      <CardTitle className="text-white flex items-center">
                        <TrendingUp className="mr-2" /> Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div>
                          <p className="text-[#664343]">Total Orders</p>
                          <p className="text-2xl font-bold text-[#3B3030]">{stats.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-[#664343]">Pending Orders</p>
                          <p className="text-2xl font-bold text-[#3B3030]">{stats.pendingOrders}</p>
                        </div>
                        <div>
                          <p className="text-[#664343]">Total Spent</p>
                          <p className="text-2xl font-bold text-[#3B3030]">₹{stats.totalSpent}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="bg-white shadow-lg h-full">
                    <CardHeader className="bg-[#795757]">
                      <CardTitle className="text-white flex items-center">
                        <ShoppingCart className="mr-2" /> Your Cart
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="relative w-12 h-12 rounded-md overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.product}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <p className="font-semibold text-[#3B3030]">{item.product}</p>
                              <p className="text-sm text-[#664343]">Qty: {item.quantity}</p>
                            </div>
                            <p className="text-[#795757] font-semibold">₹{item.price * item.quantity}</p>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-[#795757] hover:bg-[#664343] text-white">
                        Go to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Your Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-semibold text-[#3B3030]">{order.product}</p>
                          <p className="text-sm text-[#664343]">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#795757] font-semibold">₹{order.price}</p>
                          <p className="text-sm text-[#664343]">{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-[#664343]">Name</Label>
                      <Input id="name" value={buyer.name} className="border-[#795757] focus:ring-[#664343]" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#664343]">Email</Label>
                      <Input id="email" value={buyer.email} className="border-[#795757] focus:ring-[#664343]" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#664343]">Phone</Label>
                      <Input id="phone" value={buyer.phone} className="border-[#795757] focus:ring-[#664343]" />
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-[#664343]">Address</Label>
                      <Input id="address" value={buyer.address} className="border-[#795757] focus:ring-[#664343]" />
                    </div>
                    <Button className="w-full bg-[#795757] hover:bg-[#664343] text-white">
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="help">
              <Card>
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  {showSupportNumber ? (
                    <div className="text-center">
                      <Phone className="w-8 h-8 mx-auto mb-2 text-[#795757]" />
                      <p className="text-[#3B3030] font-bold text-xl">+1 (800) 123-4567</p>
                      <p className="text-[#664343] mt-2">Our support team is available 24/7</p>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => setShowSupportNumber(true)} 
                      className="w-full bg-[#795757] hover:bg-[#664343] text-white"
                    >
                      Show Support Number
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}