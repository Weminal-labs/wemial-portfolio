'use client'
import { Loader } from 'lucide-react'
import React, { useEffect } from 'react'

import { SECTION_IDS } from '@/constants'
import { supabase } from '@/lib/supabase/client'

import { ParallaxScroll } from './ui/parallax-scroll'

export interface Project {
  id: string
  title: string
  link: string
  thumbnail: string
  description: string
}

const Projects = () => {
  const [projects, setProjects] = React.useState<Project[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      const { data } = await supabase.from('projects').select('*')
      setIsLoading(false)
      setProjects(data as Project[])
    }

    fetchProjects()
  }, [])
  return (
    <div
      id={SECTION_IDS.PROJECTS}
      className={`
        py-10

        md:py-20
      `}
    >
      <h2
        className={`
          py-10 text-center font-bebas-neue text-4xl font-medium

          lg:text-8xl

          md:py-20 md:text-6xl
        `}
      >
        our projects
      </h2>
      {isLoading ?
        <div className="flex h-96 items-center justify-center">
          <Loader className="animate-spin" size={30} />
        </div>
      : <div className="mx-auto max-w-7xl">
          <ParallaxScroll projects={projects} />
        </div>
      }
    </div>
  )
}

export default Projects
