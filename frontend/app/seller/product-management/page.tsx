"use client"

import { useState } from "react"
import { Bell, ChevronDown, DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function SellerDashboard() {
  const [salesData] = useState([
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 2000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
  ])

  const [orders] = useState([
    { id: 1, customer: "Alice Smith", status: "Processing", product: "Handmade Vase", total: 89.99 },
    { id: 2, customer: "Bob Johnson", status: "Shipped", product: "Woven Basket", total: 45.50 },
    { id: 3, customer: "Carol Williams", status: "Delivered", product: "Pottery Set", total: 129.99 },
  ])

  const [lowStockItems] = useState([
    { id: 1, name: "Ceramic Mugs", stock: 3 },
    { id: 2, name: "Wooden Spoons", stock: 5 },
  ])

  return (
    <div className="flex flex-col min-h-screen bg-[#FFEEAD]">
      <header className="sticky top-0 z-10 bg-[#A66E38] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Artisan Dashboard</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Artisan Name</p>
                  <p className="text-xs leading-none text-muted-foreground">artisan@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-[#A66E38]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-[#A66E38]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+251</div>
              <p className="text-xs text-muted-foreground">+18.7% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              <Users className="h-4 w-4 text-[#A66E38]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+48</div>
              <p className="text-xs text-muted-foreground">+12.3% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
              <Package className="h-4 w-4 text-[#A66E38]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">132</div>
              <p className="text-xs text-muted-foreground">+3 added this month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="md:col-span-4 bg-white">
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
                  <Bar dataKey="sales" fill="#FFAD60" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="md:col-span-3 bg-white">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>You have {orders.length} new orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{order.status}</Badge>
                      </TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="md:col-span-4 bg-white">
            <CardHeader>
              <CardTitle>Earnings Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Pending Payments</p>
                    <p className="text-sm text-muted-foreground">$1,234.56</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium leading-none">68%</p>
                  </div>
                </div>
                <Progress
                value={68}
                className="h-2 bg-[#96CEB4]"
                style={{ background: "linear-gradient(to right, #FFAD60 68%, transparent 68%)" }}
                />

              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Completed Payments</p>
                    <p className="text-sm text-muted-foreground">$5,678.90</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium leading-none">32%</p>
                  </div>
                </div>
                <Progress
                value={32}
                className="h-2 bg-[#96CEB4]"
                style={{ background: "linear-gradient(to right, #A66E38 32%, transparent 32%)" }}
                />

              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-3 bg-white">
            <CardHeader>
              <CardTitle>Low Stock Alerts</CardTitle>
              <CardDescription>Items that need restocking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item) => (
                  <Alert key={item.id} variant="destructive">
                    <Bell className="h-4 w-4" />
                    <AlertTitle>Low Stock: {item.name}</AlertTitle>
                    <AlertDescription>
                      Only {item.stock} left in stock. Consider restocking soon.
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-[#A66E38] text-white p-4 text-center">
        <p>&copy; 2023 Artisan Marketplace. All rights reserved.</p>
      </footer>
    </div>
  )
}