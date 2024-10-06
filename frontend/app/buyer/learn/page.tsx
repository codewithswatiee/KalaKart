"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, HelpCircle, Package, Settings, ShoppingCart, User } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Define the structure of a tutorial
interface Tutorial {
  id: number;
  title: string;
  artform: string;
  requirements: string;
  keyLearning: string;
  description: string;
  videoUrl: string;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Introduction to Madhubani Painting",
    artform: "Madhubani Painting",
    requirements: "Paper, colors, brushes",
    keyLearning: "Basic patterns and color combinations",
    description:
      "Learn the fundamental techniques of Madhubani painting from a master artisan.",
    videoUrl: "https://youtu.be/WBwaGVc3sI4",
  },
  {
    id: 2,
    title: "Pottery Wheel Basics",
    artform: "Pottery",
    requirements: "Clay, pottery wheel, water",
    keyLearning: "Centering clay and basic vessel shapes",
    description:
      "Start your journey in pottery with this beginner-friendly wheel throwing tutorial.",
    videoUrl: "https://youtu.be/-YCGK33c0xs?si=QLT6-XkYqjrqXDYE",
  },
  {
    id: 3,
    title: "Warli Art Techniques",
    artform: "Warli Painting",
    requirements: "Canvas, white paint, bamboo stick",
    keyLearning: "Creating basic Warli figures and patterns",
    description:
      "Discover the ancient art of Warli painting and its unique stick figure style.",
    videoUrl: "https://youtu.be/HSPq6C45ZEw?si=YNut63yfbdec6pLO",
  },
  {
    id: 4,
    title: "Beginner's Guide to Block Printing",
    artform: "Block Printing",
    requirements: "Fabric, wooden blocks, fabric paint",
    keyLearning: "Carving simple blocks and creating repeating patterns",
    description:
      "Learn how to create beautiful patterns on fabric using traditional block printing methods.",
    videoUrl: "https://youtu.be/AYtEKRc2iRU?si=khMagBkCT6LRkB2Q",
  },
  {
    id: 5,
    title: "Intricate Mehndi Designs",
    artform: "Mehndi",
    requirements: "Henna paste, applicator cone",
    keyLearning: "Basic mehndi patterns and application techniques",
    description:
      "Master the art of applying intricate mehndi designs with this step-by-step tutorial.",
    videoUrl: "https://youtu.be/yUtzuqmne-Q?si=DUYakel6h0T27B59",
  },
];

// Function to check if a URL is from YouTube
function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

const KalaLearn: React.FC = () => {
  return (
   <>
       <header className="bg-[#795757] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">KalaLearn</h1>
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
                <Link href='/buyer/edit-profile' passHref>
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
    <div className="min-h-screen bg-[#FFF0D1] py-8">
      
      <div className="container mx-auto px-4">
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
            <Card
              key={tutorial.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-[#3B3030]">{tutorial.title}</CardTitle>
                <CardDescription className="text-[#664343]">{tutorial.artform}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-[#795757] rounded-md mb-4">
                  {isYouTubeUrl(tutorial.videoUrl) ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={tutorial.videoUrl.replace(
                        "youtu.be",
                        "youtube.com/embed"
                      )}
                      title={tutorial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-cover rounded-md"
                    ></iframe>
                  ) : (
                    <video
                      src={tutorial.videoUrl}
                      controls
                      className="w-full h-full object-cover rounded-md"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
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
   </>
  );
};

export default KalaLearn;
