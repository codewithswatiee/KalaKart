"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFF0D1] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mb-4">
        <Link href="/" className="inline-flex items-center text-[#795757] hover:text-[#664343]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-[#795757]">Login</CardTitle>
          <CardDescription className="text-center text-[#664343]">
            Welcome to Artisan Marketplace, where creativity meets commerce. Connect with unique handcrafted goods and the artisans behind them.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#795757]">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="border-[#664343]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#795757]">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-[#664343] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#664343] hover:text-[#3B3030]"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-[#664343] text-[#795757]" />
            <Label htmlFor="remember" className="text-sm text-[#664343]">Remember me</Label>
          </div>
          <div className="text-sm text-right">
            <Link href="/forgot-password" className="text-[#795757] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
        <Link href='/buyer/dashboard' passHref>
          <Button className="w-full bg-[#795757] hover:bg-[#664343] text-white">
            Login
          </Button>
          </Link>
          <p className="text-sm text-center text-[#664343]">
            Don't have an account?{" "}
            <Link href="/buyer/dashboard" className="text-[#795757] hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}