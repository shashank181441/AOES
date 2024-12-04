import PageBar from '@/components/Header/PageBar'
import ProjectDescription from '@/components/Projects/ProjectDescription'
import React from 'react'

function ProjectDetails() {
  return (
    <div>
      <PageBar leftText={"Project Details"}/>
      <ProjectDescription />
    </div>
  )
}

export default ProjectDetails