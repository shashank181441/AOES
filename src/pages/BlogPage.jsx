import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { format } from "date-fns"
import { CalendarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { blogPosts } from '@/components/jsons/blogs'

export default function BlogPosts() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [currentPost, setCurrentPost] = useState(blogPosts[0])

  useEffect(() => {
    const post = blogPosts.find(post => post.slug === slug)
    if (post) {
      setCurrentPost(post)
    } else {
      navigate(`/blog/${blogPosts[0].slug}`)
    }
  }, [slug, navigate])

  const currentIndex = blogPosts.findIndex(post => post.slug === currentPost.slug)
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length]
  const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <img
          src={currentPost.featuredImage}
          alt={currentPost.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-4xl font-bold text-white mb-2">{currentPost.title}</h1>
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {currentPost.category}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentPost.author.image} alt={currentPost.author.name} />
            <AvatarFallback>{currentPost.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{currentPost.author.name}</p>
            <p className="text-sm text-muted-foreground">Author</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(new Date(currentPost.createdAt), "MMMM d, yyyy")}
          </span>
          <span className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            {Math.ceil(currentPost.description.length / 200)} min read
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#introduction" className="text-primary hover:underline">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#main-content" className="text-primary hover:underline">
                    Main Content
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="text-primary hover:underline">
                    Conclusion
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>

        <main className="md:col-span-3 space-y-8">
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              {currentPost.description.split('\n\n')[0]}
            </p>
          </section>

          <section id="main-content">
            <h2 className="text-2xl font-bold mb-4">Main Content</h2>
            <p className="text-muted-foreground">
              {currentPost.description.split('\n\n')[1]}
            </p>
          </section>

          <section id="conclusion">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-muted-foreground">
              {currentPost.description.split('\n\n')[2]}
            </p>
          </section>
        </main>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Other Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.filter(post => post.slug !== currentPost.slug).map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {post.description.split(' ').slice(0, 20).join(' ')}...
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-4">Stay up-to-date with the latest in technology and development.</p>
        <form className="flex gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <div className="mt-8 flex justify-between">
        <Link to={`/blog/${prevPost.slug}`}>
          <Button variant="outline" className="flex items-center">
            <ChevronLeftIcon className="mr-2 h-4 w-4" /> Previous Post
          </Button>
        </Link>
        <Link to={`/blog/${nextPost.slug}`}>
          <Button variant="outline" className="flex items-center">
            Next Post <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}