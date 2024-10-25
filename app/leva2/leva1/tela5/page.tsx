import { Search, Globe, ShoppingCart, Menu, ChevronDown, Star, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <Menu className="mr-4 h-6 w-6 text-gray-700 md:hidden" />
            <Image src="/udemy-logo.svg" alt="Udemy" width={91} height={34} />
          </div>
          <nav className="hidden md:flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
            <SearchBar />
            <a href="#" className="text-gray-700 hover:text-gray-900">Udemy Business</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Teach on Udemy</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <Button variant="outline" className="hidden md:inline-flex">Log in</Button>
            <Button className="hidden md:inline-flex bg-black text-white hover:bg-gray-800">Sign up</Button>
            <Button variant="outline" className="p-2">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroBanner />
        <CourseCategories />
        <FeaturedCourses />
        <TopCategories />
        <FeaturedTopics />
        <TrustedCompanies />
        <UdemyBusiness />
        <InstructorCTA />
      </main>

      <Footer />
    </div>
  )
}

function SearchBar() {
  return (
    <div className="relative flex-1 max-w-xl">
      <Input type="search" placeholder="Search for anything" className="w-full pl-10 pr-4 py-2 border-2 border-gray-700 rounded-full focus:border-purple-600 focus:ring-0" />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}

function HeroBanner() {
  return (
    <section className="relative bg-purple-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Learning that gets you</h1>
          <p className="text-xl mb-6">Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
      <Image src="/hero-banner.jpg" alt="Students learning" layout="fill" objectFit="cover" className="absolute inset-0 mix-blend-overlay" />
    </section>
  )
}

function CourseCategories() {
  const categories = [
    "Python", "Excel", "Web Development", "JavaScript", "Data Science", "Amazon AWS", "Drawing"
  ]

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">A broad selection of courses</h2>
        <p className="mb-6">Choose from over 210,000 online video courses with new additions published every month</p>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="text-sm whitespace-nowrap">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCourses() {
  const courses = [
    { title: "The Complete 2023 Web Development Bootcamp", instructor: "Dr. Angela Yu", rating: 4.7, students: 224_683, price: 84.99, discountPrice: 16.99 },
    { title: "100 Days of Code: The Complete Python Pro Bootcamp", instructor: "Dr. Angela Yu", rating: 4.7, students: 155_996, price: 84.99, discountPrice: 17.99 },
    { title: "Ultimate AWS Certified Solutions Architect Associate", instructor: "Stephane Maarek", rating: 4.7, students: 271_530, price: 124.99, discountPrice: 24.99 },
    { title: "Machine Learning A-Z™: AI, Python & R + ChatGPT", instructor: "Kirill Eremenko, Hadelin de Ponteves", rating: 4.5, students: 849_697, price: 129.99, discountPrice: 24.99 },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="border border-gray-300 p-8">
          <h2 className="text-2xl font-bold mb-4">Expand your career opportunities with Python</h2>
          <p className="mb-6 max-w-3xl">Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
          <Button className="mb-8">Explore Python</Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <div key={course.title} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <Image src="/course-image.jpg" alt={course.title} width={240} height={135} className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-orange-400 font-bold mr-1">{course.rating.toFixed(1)}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-2">R${course.discountPrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-600 line-through">R${course.price.toFixed(2)}</span>
                  </div>
                  <span className="inline-block mt-2 text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Bestseller</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TopCategories() {
  const categories = [
    { name: "Design", image: "/category-design.jpg" },
    { name: "Development", image: "/category-development.jpg" },
    { name: "Marketing", image: "/category-marketing.jpg" },
    { name: "IT and Software", image: "/category-it-software.jpg" },
    { name: "Personal Development", image: "/category-personal-dev.jpg" },
    { name: "Business", image: "/category-business.jpg" },
    { name: "Photography", image: "/category-photography.jpg" },
    { name: "Music", image: "/category-music.jpg" },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              <Image src={category.image} alt={category.name} width={300} height={300} className="rounded-full mb-4" />
              <h3 className="font-bold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedTopics() {
  const topics = [
    { category: "Development", items: ["Python", "Web Development", "Machine Learning"] },
    { category: "Business", items: ["Financial Analysis", "SQL", "PMP"] },
    { category: "IT and Software", items: ["Amazon AWS", "Ethical Hacking", "Cyber Security"] },
    { category: "Design", items: ["Photoshop", "Graphic Design", "Drawing"] },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured topics by category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <div key={topic.category}>
              <h3 className="font-bold mb-4">{topic.category}</h3>
              <ul className="space-y-4">
                {topic.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-purple-600 font-bold hover:underline">{item}</a>
                    <p className="text-sm text-gray-600 mt-1">1,000,000 students</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-8">Explore more topics</Button>
      </div>
    </section>
  )
}

function TrustedCompanies() {
  const companies = ["Nasdaq", "Volkswagen", "Box", "NetApp", "Eventbrite", "Tata Consultancy Services"]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-8">Trusted by over 14,400 companies and millions of learners around the world</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company) => (
            <Image key={company} src={`/${company.toLowerCase().replace(' ', '-')}-logo.svg`} alt={company} width={120} height={40} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UdemyBusiness() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/udemy-business.jpg" alt="Udemy Business" width={400} height={400} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Upskill your team with Udemy Business</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Unlimited access to 22,000+ top Udemy courses, anytime, anywhere</li>
              <li>International course collection in 14 languages</li>
              <li>Top certifications in tech and business</li>
            </ul>
            <div className="space-x-4">
              <Button>Get Udemy Business</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstructorCTA() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/instructor-cta.jpg" alt="Become an instructor" width={400} height={400} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Become an instructor</h2>
            <p className="mb-6">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
            <Button>Start teaching today</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = [
    { title: "Udemy Business", links: ["Teach on Udemy", "Get the app", "About us", "Contact us"] },
    { title: "Careers", links: ["Blog", "Help and Support", "Affiliate", "Investors"] },
    { title: "Terms", links: ["Privacy policy", "Cookie settings", "Sitemap", "Accessibility statement"] },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li  key={link}>
                    <a href="#" className="text-sm hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Button variant="outline" className="mb-4 w-full justify-start">
              <Globe className="mr-2 h-5 w-5" /> English
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <Image src="/udemy-logo-white.svg" alt="Udemy" width={91} height={34} />
          <p className="text-sm mt-4 md:mt-0">&copy; 2023 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  )
}