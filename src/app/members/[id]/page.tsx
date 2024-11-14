/* eslint-disable @next/next/no-img-element */
'use client'

import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import {
  SiDocker,
  SiEvernote,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si'
import { TbInfinity } from 'react-icons/tb'

import { type Member } from '@/components/Members'
import { supabase } from '@/lib/supabase/client'

interface MemberDetailProps {
  params: { id: string }
}

export default function Page({ params: { id } }: MemberDetailProps) {
  const [member, setMember] = useState<Member | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const { data } = await supabase
        .from('members')
        .select('*')
        .eq('id', id)
        .single()
      if (data) setMember(data as Member)

      setIsLoading(false)
    })()
  }, [])

  return isLoading ?
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" size={30} />
      </div>
    : <>
        {!member ?
          <div className="flex h-screen w-screen items-center justify-center">
            <h1
              className={`
                font-bebas-neue text-lg uppercase

                lg:text-8xl

                md:text-4xl
              `}
            >
              USER NOT FOUND
            </h1>
          </div>
        : <div
            className={`
              relative min-h-screen bg-white

              dark:bg-black
            `}
          >
            <div
              className={`
                absolute left-0 top-10 hidden h-px w-full bg-gray-300

                dark:bg-gray-700

                md:block
              `}
            />
            <div
              className={`
                absolute left-[48%] top-0 hidden h-full w-px bg-gray-300

                dark:bg-gray-700

                md:block
              `}
            />
            <div
              className={`
                absolute bottom-10 left-0 hidden h-px w-full bg-gray-300

                dark:bg-gray-700

                md:block
              `}
            />

            <div
              className={`
                container h-full px-2 py-8

                md:py-16
              `}
            >
              <div
                className={`
                  h-full grid-cols-1 gap-8

                  lg:grid-cols-12

                  md:grid md:gap-24
                `}
              >
                {/* Left Column */}
                <div
                  className={`
                    col-span-12 mx-4

                    md:col-span-5
                  `}
                >
                  {/* Profile Section */}
                  <div className="flex flex-col items-start">
                    <div
                      className={`
                        relative mx-auto size-40

                        md:mx-0 md:size-[150px]
                      `}
                    >
                      <Image
                        className="rounded-full object-cover"
                        src={member.img}
                        alt=""
                        sizes="auto"
                        fill
                      />
                    </div>

                    <div
                      className={`
                        mx-auto my-6 text-start

                        md:mx-0 md:mt-4
                      `}
                    >
                      <p
                        className={`
                          mb-4 text-center text-xl font-medium text-gray-600

                          dark:text-gray-400

                          md:text-left md:text-2xl md:font-normal
                        `}
                      >
                        {member.email}
                      </p>
                      <div
                        className={`
                          flex justify-center gap-6 text-gray-600

                          dark:text-gray-400

                          md:justify-start
                        `}
                      >
                        <a
                          href={
                            member.links.find((link) => link.name === 'github')
                              ?.value
                          }
                          target="_blank"
                          className={`
                            dark:hover:text-gray-200

                            hover:text-gray-900
                          `}
                        >
                          <FaGithub size={24} />
                        </a>
                        <a
                          href={
                            member.links.find(
                              (link) => link.name === 'linkedin',
                            )?.value
                          }
                          className={`
                            dark:hover:text-gray-200

                            hover:text-gray-900
                          `}
                        >
                          <FaLinkedin size={24} />
                        </a>
                        <a
                          href={
                            member.links.find((link) => link.name === 'x')
                              ?.value
                          }
                          className={`
                            dark:hover:text-gray-200

                            hover:text-gray-900
                          `}
                        >
                          <FaTwitter size={24} />
                        </a>
                        <a
                          href={
                            member.links.find(
                              (link) => link.name === 'telegram',
                            )?.value
                          }
                          className={`
                            dark:hover:text-gray-200

                            hover:text-gray-900
                          `}
                        >
                          <FaTelegram size={24} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div
                    className={`
                      space-y-12 text-left

                      md:space-y-14
                    `}
                  >
                    <h1
                      className={`
                        mt-4 scale-y-150 text-3xl font-bold leading-tight
                        text-neutral-800

                        dark:text-white

                        md:text-3xl md:tracking-[-2px]
                      `}
                    >
                      <span
                        className={`
                          hidden

                          md:inline-block
                        `}
                      >
                        HI, I&apos;M
                      </span>
                      <span
                        className={`
                          block w-full text-center

                          md:ml-4 md:inline-block md:w-auto md:text-left
                        `}
                      >
                        {member.name}
                      </span>
                    </h1>

                    <p
                      className={`
                        m-0 !mt-5 text-justify text-lg leading-relaxed
                        text-gray-600

                        dark:text-gray-400

                        md:text-left md:text-base
                      `}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div
                  className={`
                    col-span-12 mx-4 mt-8 flex flex-col

                    md:col-span-7 md:mx-0 md:mt-0
                  `}
                >
                  {/* Tech Stack Section */}
                  <div
                    className={`
                      order-2 text-center

                      md:order-1 md:text-right
                    `}
                  >
                    <h3
                      className={`
                        scale-y-150 text-2xl font-bold leading-tight
                        tracking-[-2px] text-black

                        dark:text-white

                        md:text-3xl md:tracking-[-3px]
                      `}
                    >
                      TECH STACK
                    </h3>
                    <div
                      className={`
                        my-6 flex flex-row flex-wrap justify-end gap-4

                        lg:flex-col lg:justify-center

                        md:items-end md:gap-6
                      `}
                    >
                      <TechIcon icon={<SiNodedotjs size={24} />} />
                      <TechIcon icon={<TbInfinity size={24} />} />
                      <TechIcon icon={<SiDocker size={24} />} />
                      <TechIcon icon={<SiPython size={24} />} />
                      <TechIcon icon={<SiNextdotjs size={24} />} />
                      <TechIcon icon={<SiEvernote size={24} />} />
                    </div>
                  </div>

                  {/* Developer Title */}
                  <h1
                    className={`
                      mb-5 scale-y-150 text-center font-pp-neue-montreal
                      text-3xl font-bold uppercase leading-tight tracking-[-2px]

                      md:text-right
                    `}
                  >
                    {member.role}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        }
      </>
}

const TechIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div
      className={`
        flex size-10 items-center justify-center text-gray-600

        dark:text-gray-400 dark:hover:text-gray-200

        hover:text-gray-900

        md:size-12
      `}
    >
      {icon}
    </div>
  )
}
