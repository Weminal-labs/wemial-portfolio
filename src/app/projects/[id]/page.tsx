/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Loader } from 'lucide-react'
import Image from 'next/image'
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

  return isLoading || !project ?
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" size={30} />
      </div>
    : <div
        className={`
          h-screen grid-cols-1

          lg:grid lg:grid-cols-2
        `}
      >
        <div
          className={`
            flex items-start px-6

            lg:items-center lg:px-28
          `}
        >
          <div className="flex flex-col gap-4">
            <div
              className={`
                mt-10

                lg:mt-0
              `}
            >
              <h1
                className={`
                  text-center font-bebas-neue text-5xl

                  lg:text-left lg:text-7xl
                `}
              >
                {project?.title}
              </h1>
              <p
                className={`
                  mt-4

                  lg:mt-0
                `}
              >
                {project?.description}
              </p>
            </div>

            <div className="flex flex-col gap-y-6 uppercase">
              <div
                className={`
                  justify-start gap-10

                  lg:flex
                `}
              >
                <p className="min-w-52 font-medium uppercase">
                  project members
                </p>
                <div className="flex flex-1 flex-wrap gap-3">
                  {project.members.map((m) => (
                    <p className="font-semibold" key={m.name}>
                      {m.name}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className={`
                  justify-start gap-10

                  lg:flex
                `}
              >
                <p className="min-w-52 font-medium uppercase">techstacks</p>
                <div className="flex flex-1 flex-wrap gap-4">
                  {project.techstack.map((t) => (
                    <p className="font-semibold" key={t}>
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            relative mt-10 h-72 w-full

            lg:mt-0 lg:h-screen

            md:h-96
          `}
        >
          <Image
            src={project.thumbnail}
            alt=""
            sizes="auto"
            fill
            className={`
              object-cover

              lg:object-contain
            `}
          />
        </div>
      </div>
}

export default ProjectDetail
