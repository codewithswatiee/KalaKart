"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Bell, ChevronDown, HelpCircle, Package, Settings, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
]

const orders = [
  { id: 1, customer: "John Doe", product: "Handcrafted Vase", status: "Pending", total: 89.99 },
  { id: 2, customer: "Jane Smith", product: "Woven Basket", status: "Shipped", total: 64.99 },
  { id: 3, customer: "Bob Johnson", product: "Ceramic Mug Set", status: "Completed", total: 49.99 },
]

const faqs = [
  {
    question: "How do I add a new product?",
    answer: "To add a new product, go to the Product Management page and click on the 'Add Product' button. Fill in the required details and upload product images.",
  },
  {
    question: "How can I track my orders?",
    answer: "You can track your orders in the Order Management section. Each order card shows the current status, and you can update it as needed.",
  },
  {
    question: "How do I update my seller profile?",
    answer: "To update your profile, go to the Profile Settings tab. Here you can change your personal information, update your password, and upload a new profile picture.",
  },
]

export default function SellerPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [orderFilter, setOrderFilter] = useState("all")

  const filteredOrders = orders.filter(order => {
    if (orderFilter === "all") return true
    return order.status.toLowerCase() === orderFilter
  })

  return (
    <div className="min-h-screen bg-[#FFF0D1]">
      <header className="bg-[#795757] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Artisan Seller Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Artisan User</p>
                    <p className="text-xs leading-none text-muted-foreground">artisan@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href='/seller/edit-profile' passHref>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-[#664343] text-white">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#b1a8a8]">Dashboard</TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-[#b1a8a8]">Orders</TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#b1a8a8]">Profile</TabsTrigger>
            <TabsTrigger value="help" className="data-[state=active]:bg-[#b1a8a8]">Help & Support</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$5,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Products Listed</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 new this week</p>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Product Management</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Manage your product listings and inventory</p>
                  <Link href="/seller/product-management">
                    <Button className="w-full bg-[#664343] text-white hover:bg-[#3B3030]">
                      Go to Product Management
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#795757" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>You have {orders.length} total orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>{order.customer[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                      </div>
                      <div className="ml-auto font-medium">+${order.total.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>Manage and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Button
                      variant={orderFilter === "all" ? "default" : "outline"}
                      onClick={() => setOrderFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={orderFilter === "pending" ? "default" : "outline"}
                      onClick={() => setOrderFilter("pending")}
                    >
                      Pending
                    </Button>
                    <Button
                      variant={orderFilter === "shipped" ? "default" : "outline"}
                      onClick={() => setOrderFilter("shipped")}
                    >
                      Shipped
                    </Button>
                    <Button
                      variant={orderFilter === "completed" ? "default" : "outline"}
                      onClick={() => setOrderFilter("completed")}
                    >
                      Completed
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {filteredOrders.map(order => (
                      <Card key={order.id}>
                        <CardContent className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">{order.customer}</p>
                            <p className="text-sm text-muted-foreground">{order.product}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={order.status.toLowerCase() === "completed" ? "default" : "outline"}>
                              {order.status}
                            </Badge>
                            <span className="font-medium">${order.total.toFixed(2)}</span>
                            {order.status.toLowerCase() !== "completed" && (
                              <Button variant="outline" size="sm">
                                Mark as Shipped
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your seller profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Artisan User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="artisan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avatar">Profile Picture</Label>
                  <Input id="avatar" type="file" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="help" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Help & Support</CardTitle>
                <CardDescription>Frequently asked questions and support options</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6">
                  <h3 className="text-lg font-medium">Need more help?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    If you can't find the answer to your question, please contact our support team.
                  </p>
                  <Button className="mt-4">Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}