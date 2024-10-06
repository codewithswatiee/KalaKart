import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const tutorials = [
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
    title: "Pottery Wheel Basics",
    artform: "Pottery",
    requirements: "Clay, pottery wheel, water",
    keyLearning: "Centering clay and basic vessel shapes",
    description: "Start your journey in pottery with this beginner-friendly wheel throwing tutorial.",
    videoUrl: "https://example.com/pottery-basics.mp4",
  },
  {
    id: 3,
    title: "Warli Art Techniques",
    artform: "Warli Painting",
    requirements: "Canvas, white paint, bamboo stick",
    keyLearning: "Creating basic Warli figures and patterns",
    description: "Discover the ancient art of Warli painting and its unique stick figure style.",
    videoUrl: "https://example.com/warli-techniques.mp4",
  },
  {
    id: 4,
    title: "Beginner's Guide to Block Printing",
    artform: "Block Printing",
    requirements: "Fabric, wooden blocks, fabric paint",
    keyLearning: "Carving simple blocks and creating repeating patterns",
    description: "Learn how to create beautiful patterns on fabric using traditional block printing methods.",
    videoUrl: "https://example.com/block-printing-guide.mp4",
  },
  {
    id: 5,
    title: "Intricate Mehndi Designs",
    artform: "Mehndi",
    requirements: "Henna paste, applicator cone",
    keyLearning: "Basic mehndi patterns and application techniques",
    description: "Master the art of applying intricate mehndi designs with this step-by-step tutorial.",
    videoUrl: "https://example.com/mehndi-designs.mp4",
  },
]

export default function KalaLearn() {
  return (
    <div className="min-h-screen bg-[#FFF0D1] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#3B3030]">KalaLearn</h1>
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#795757]" />
            <Input
              type="search"
              placeholder="Search tutorials..."
              className="pl-10 bg-white border-[#795757] focus:ring-[#664343] text-[#3B3030]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#3B3030]">{tutorial.title}</CardTitle>
                <CardDescription className="text-[#664343]">{tutorial.artform}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-[#795757] rounded-md mb-4">
                  <video
                    src={tutorial.videoUrl}
                    controls
                    className="w-full h-full object-cover rounded-md"
                  >
                    Your browser does not support the video tag.
                  </video>
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
                <Button className="w-full bg-[#795757] hover:bg-[#664343] text-white">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}