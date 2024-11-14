"use client"
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

import { type Project } from '@/components/Projects'
import { supabase } from '@/lib/supabase/client'

interface ProjectDetailProps {
  params: { id: string }
}

const ProjectDetail = ({ params: { id } }: ProjectDetailProps) => {
  const [project, setMember] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()
      if (data) setMember(data as Project)

      setIsLoading(false)
    })()
  }, [])

  return isLoading ?
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" size={30} />
      </div>
    : <></>
}

export default ProjectDetail
