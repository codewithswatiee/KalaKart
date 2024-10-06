'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Camera, GraduationCap, Globe2, Facebook, Twitter, Instagram } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Artisan',
    text: 'This platform has transformed my business, connecting me with customers I never thought I could reach.',
    image: '/profilePicture.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Student',
    text: 'Working with local artisans has been an incredible learning experience. I\'ve gained skills I couldn\'t learn in a classroom.',
    image: '/profilePicture.jpg',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Photographer',
    text: 'Collaborating with artisans has allowed me to capture the essence of traditional craftsmanship in my work.',
    image: '/profilePicture.jpg',
  },
];

const languages = [
  { code: 'en', name: 'English', icon: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', icon: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', icon: '🇮🇳' },
  { code: 'mr', name: 'मराठी', icon: '🇮🇳' },
];

const workshops = [
  {
    id: 1,
    title: 'Traditional Weaving',
    description: 'Learn the art of traditional handloom weaving from expert artisans.',
    image: '/woven1.jpg',
  },
  {
    id: 2,
    title: 'Pottery Mastery',
    description: 'Discover the techniques of creating beautiful pottery pieces.',
    image: '/pottery.jpg',
  },
  {
    id: 3,
    title: 'Woodcarving Essentials',
    description: 'Master the basics of intricate woodcarving from skilled craftsmen.',
    image: '/wood1.jpg',
  },
];

export default function ModernLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF0D1] text-[#3B3030] font-sans">
      {/* Language Selector */}
      <div className="bg-[#795757] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <label htmlFor="language-selector" className="text-sm">
            Choose your language:
        </label>
        <select
            id="language-selector"
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="bg-[#664343] text-white px-2 py-1 rounded"
            aria-label="Choose your language" // Additional accessible name
        >
            {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
                {lang.icon} {lang.name}
            </option>
            ))}
        </select> */}

        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#795757] text-white py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold" aria-label="Home">
            KalaKart
          </Link>
          <div className="hidden text-base md:flex text-[1.1rem] items-center space-x-8">
            <Link href="/" className="hover:text-[#FFF0D1] transition duration-300" passHref>Home</Link>
            <Link href="/buyer/products" className="hover:text-[#FFF0D1] transition duration-300" passHref>Shop</Link>
            <a href="#learn" className="hover:text-[#FFF0D1] transition duration-300">Learn</a>
            <a href="#" className="hover:text-[#FFF0D1] transition duration-300">About</a>
            <Link href="#" className="hover:text-[#FFF0D1] transition duration-300" passHref>Employment</Link>
            <div className="relative group">
  {/* Dropdown menu */}
  <div className="absolute left-0 mt-2 w-56 hidden group-hover:block bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-out">
    <ul className="py-2">
      <li>
        <Link href="/photographer" className="block px-4 py-3 text-gray-700 hover:bg-[#FFF0D1] hover:text-gray-900 transition-colors duration-200 ease-in-out">
          Get employed as a Photographer
        </Link>
      </li>
      <li>
        <Link href="/student" className="block px-4 py-3 text-gray-700 hover:bg-[#FFF0D1] hover:text-gray-900 transition-colors duration-200 ease-in-out">
          Get employed as a Student Coordinator
        </Link>
      </li>
    </ul>
  </div>
</div>


            <button className="bg-white text-[#795757] hover:bg-[#FFF0D1] font-bold py-2 px-4 rounded transition duration-300">
              Login
            </button>
            <button className="bg-white text-[#795757] hover:bg-[#FFF0D1] font-bold py-2 px-4 rounded transition duration-300">
              SignUp
            </button>
          </div>
          <button className="md:hidden" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/main.jpg"
          alt="Artisans at work"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Local Artisans, Enriching Your Life</h1>
          <p className="text-xl md:text-2xl mb-8">Discover unique handcrafted products and support local artisans</p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#664343' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#795757] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Discover Artisan Products
          </motion.button>
        </motion.div>
      </section>

      {/* Learning Opportunities */}
      <section id='learn' className="py-16 px-4 md:px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Learning Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFF0D1] rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <Play className="text-white w-12 h-12" aria-label="Play video" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                <p className="text-[#664343] mb-4">{workshop.description}</p>
                <Link href='/buyer/learn' passHref>
                  <button className="bg-[#795757] hover:bg-[#664343] text-white font-bold py-2 px-4 rounded transition duration-300">
                  Learn Now
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Employment Opportunities */}
      <section id='employment' className="py-16 px-4 md:px-8 bg-[#795757] text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Employment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#664343] rounded-lg p-6"
          >
            <GraduationCap className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Students</h3>
            <p className="mb-4">Gain hands-on experience assisting artisans and learning traditional crafts.</p>
            <Link href='employment-opportunities' passHref>
            <button className="bg-white text-[#795757] hover:bg-[#FFF0D1] font-bold py-2 px-4 rounded transition duration-300">
              Get Employment
            </button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#664343] rounded-lg p-6"
          >
            <Camera className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Photographers</h3>
            <p className="mb-4">Capture the beauty of artisanal crafts and help showcase their work to the world.</p>
            <button className="bg-white text-[#795757] hover:bg-[#FFF0D1] font-bold py-2 px-4 rounded transition duration-300">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFF0D1] rounded-lg shadow-lg p-6 flex items-center"
            >
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={80}
                height={80}
                className="rounded-full mr-6"
              />
              <div>
                <p className="text-xl italic mb-4">"{testimonials[currentTestimonial].text}"</p>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-[#664343]">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-[#795757] text-white rounded-full p-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-[#795757] text-white rounded-full p-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B3030] text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">Our Story</Link></li>
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">Mission</Link></li>
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">Team</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">FAQ</Link></li>
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#FFF0D1] transition duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#FFF0D1] transition duration-300" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-[#FFF0D1] transition duration-300" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-[#FFF0D1] transition duration-300" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white text-[#3B3030] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#795757]"
                required
              />
              <button
                type="submit"
                className="bg-[#795757] hover:bg-[#664343] px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KalaKart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
