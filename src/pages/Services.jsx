import PageBar from '@/components/Header/PageBar'
import OurServices from '@/components/Services/Services'
import React from 'react'

function Services() {
  return (
    <div>
      <PageBar leftText={"Our Services"}/>
      <OurServices />
    </div>
  )
}

export default Services