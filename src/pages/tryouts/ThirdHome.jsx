import GoalAndObj from '@/components/Home/GoalAndObj'
import HeroSection from '@/components/Home/HeroSection'
import Projects from '@/components/Home/Projects'
import HomePage from '@/components/Home/tryouts/Home'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function ThirdHome() {
  return (
    <div>
        <HeroSection/>
        <GoalAndObj />
        <Projects />

    </div>
  )
}

export default ThirdHome