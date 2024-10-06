"use client"

import { useState } from "react"
import { User, Mail, Lock, Camera, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function EditProfile() {
  const [profileImage, setProfileImage] = useState("/placeholder-user.jpg")

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF0D1] text-[#3B3030] py-8">
      <div className="container mx-auto px-4">
        <Link href="/seller/dashboard" passHref className="inline-flex items-center text-[#795757] hover:text-[#664343] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#795757]">Edit Profile</CardTitle>
            <CardDescription>Update your personal information and settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={profileImage} alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex items-center">
                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <Label
                  htmlFor="picture"
                  className="cursor-pointer bg-[#664343] text-white hover:bg-[#3B3030] inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                >
                  <Camera className="mr-2 h-4 w-4" /> Change Picture
                </Label>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#795757]">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[#664343]" />
                  <Input id="name" placeholder="John Doe" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#795757]">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#664343]" />
                  <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#795757]">Change Password</h3>
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-[#795757]">
                  Current Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#664343]" />
                  <Input id="current-password" type="password" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-[#795757]">
                  New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#664343]" />
                  <Input id="new-password" type="password" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-[#795757]">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#664343]" />
                  <Input id="confirm-password" type="password" className="pl-10" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#664343] text-white hover:bg-[#3B3030]">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}