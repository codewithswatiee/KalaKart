"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Video } from "lucide-react"

// Mock data for existing tutorials
const initialTutorials = [
  {
    id: 1,
    title: "Introduction to Madhubani Painting",
    artform: "Madhubani Painting",
    requirements: "Paper, colors, brushes",
    keyLearning: "Basic patterns and color combinations",
    description: "Learn the fundamental techniques of Madhubani painting from a master artisan.",
    videoUrl: "https://example.com/madhubani-intro.mp4",
  },
  {
    id: 2,
    title: "Advanced Madhubani Techniques",
    artform: "Madhubani Painting",
    requirements: "Special paper, natural colors, fine brushes",
    keyLearning: "Complex patterns and traditional color mixing",
    description: "Take your Madhubani skills to the next level with advanced techniques and compositions.",
    videoUrl: "https://example.com/madhubani-advanced.mp4",
  },
]

export default function KalaLearnArtisan() {
  const [tutorials, setTutorials] = useState(initialTutorials)
  const [newTutorial, setNewTutorial] = useState({
    title: '',
    artform: '',
    requirements: '',
    keyLearning: '',
    description: '',
    videoUrl: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewTutorial(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const tutorialToAdd = {
      id: tutorials.length + 1,
      ...newTutorial
    }
    setTutorials(prev => [tutorialToAdd, ...prev])
    setNewTutorial({
      title: '',
      artform: '',
      requirements: '',
      keyLearning: '',
      description: '',
      videoUrl: '',
    })
  }

  return (
    <div className="min-h-screen bg-[#FFF0D1] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#3B3030]">KalaLearn Artisan Dashboard</h1>

        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#3B3030]">Add New Tutorial</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-[#664343]">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newTutorial.title}
                    onChange={handleInputChange}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="artform" className="text-[#664343]">Artform</Label>
                  <Input
                    id="artform"
                    name="artform"
                    value={newTutorial.artform}
                    onChange={handleInputChange}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-[#664343]">Requirements</Label>
                  <Input
                    id="requirements"
                    name="requirements"
                    value={newTutorial.requirements}
                    onChange={handleInputChange}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keyLearning" className="text-[#664343]">Key Learning</Label>
                  <Input
                    id="keyLearning"
                    name="keyLearning"
                    value={newTutorial.keyLearning}
                    onChange={handleInputChange}
                    className="border-[#795757] focus:ring-[#664343]"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#664343]">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newTutorial.description}
                  onChange={handleInputChange}
                  className="border-[#795757] focus:ring-[#664343]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="videoUrl" className="text-[#664343]">Video URL</Label>
                <Input
                  id="videoUrl"
                  name="videoUrl"
                  type="url"
                  value={newTutorial.videoUrl}
                  onChange={handleInputChange}
                  className="border-[#795757] focus:ring-[#664343]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#795757] hover:bg-[#664343] text-white">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Tutorial
              </Button>
            </form>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4 text-[#3B3030]">Your Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#3B3030]">{tutorial.title}</CardTitle>
                <CardDescription className="text-[#664343]">{tutorial.artform}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-[#795757] rounded-md mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#664343]">
                    <strong>Requirements:</strong> {tutorial.requirements}
                  </p>
                  <p className="text-sm text-[#664343]">
                    <strong>Key Learning:</strong> {tutorial.keyLearning}
                  </p>
                  <p className="text-sm text-[#3B3030]">{tutorial.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#795757] text-[#795757] hover:bg-[#795757] hover:text-white">
                  Edit Tutorial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}