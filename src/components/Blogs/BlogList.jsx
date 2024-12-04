import React from 'react'
import { motion } from 'framer-motion'
import BlogBox from './BlogBox'
import { blogPosts } from '../jsons/blogs'

export default function BlogList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="container mx-auto p-8 my-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Blog Posts
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <BlogBox post={post} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}