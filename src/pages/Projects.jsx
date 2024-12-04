import PageBar from '@/components/Header/PageBar'
import ProjectList from '@/components/Projects/ProjectList'
import React from 'react'

function Projects() {
  return (
    <div>
      <PageBar leftText={"Latest Projects"} />
      <ProjectList />
    </div>
  )
}

export default Projects