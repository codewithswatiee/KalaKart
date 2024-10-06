import { useState, useEffect } from "react";
import { Bell, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

// Define types for sales data, orders, and low stock items
interface SalesData {
  name: string;
  sales: number;
}

interface Order {
  id: string;
  status: string;
  total: number;
}

interface LowStockItem {
  id: string;
  name: string;
  stock: number;
}

export default function SellerDashboard() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [lowStockItems, setLowStockItems] = useState<LowStockItem[]>([]);

  // Fetch sales data
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get<SalesData[]>('/api/sales-data'); // API endpoint for sales data
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  // Fetch orders data
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<Order[]>('/api/orders'); // API endpoint for orders
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Fetch low stock items
  useEffect(() => {
    const fetchLowStockItems = async () => {
      try {
        const response = await axios.get<LowStockItem[]>('/api/low-stock'); // API endpoint for low stock items
        setLowStockItems(response.data);
      } catch (error) {
        console.error("Error fetching low stock items:", error);
      }
    };

    fetchLowStockItems();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFEEAD]">
      <header className="bg-[#A66E38] text-white p-4">
        <h1 className="text-xl font-bold">Seller Dashboard</h1>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Sales Card */}
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-[#A66E38]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${salesData.reduce((acc, item) => acc + item.sales, 0).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          {/* Additional cards (Orders, Customers, Inventory) can be added here */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Sales Overview Chart */}
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

          {/* Recent Orders Table */}
          <Card className="md:col-span-3 bg-white">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <p>You have {orders.length} new orders</p>
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

        {/* Low Stock Alerts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="md:col-span-3 bg-white">
            <CardHeader>
              <CardTitle>Low Stock Alerts</CardTitle>
              <p>Items that need restocking</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="flex items-center p-2 bg-red-100 rounded-md">
                    <Bell className="h-4 w-4 mr-2 text-red-600" />
                    <div>
                      <strong>{item.name}</strong> - Only {item.stock} left in stock. Consider restocking soon.
                    </div>
                  </div>
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
  );
}
