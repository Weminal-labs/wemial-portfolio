'use client'
import React, { useEffect } from 'react'

import { HeroParallax } from '@/components/ui/hero-parallax'
import { SECTION_IDS } from '@/constants'
import { supabase } from '@/lib/supabase/client'

interface Project {
  title: string
  link: string
  thumbnail: string
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
    <div id={SECTION_IDS.PROJECTS}>
      <HeroParallax products={projects} />
    </div>
  )
}

export default Projects
