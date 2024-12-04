import BlogBox from '@/components/Blogs/BlogBox'
import BlogList from '@/components/Blogs/BlogList'
import PageBar from '@/components/Header/PageBar'
import React from 'react'

function Blogs() {
  return (
    <div>
      <PageBar leftText={"Blogs"}/>
      <BlogList/>
    </div>
  )
}

export default Blogs