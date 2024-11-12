'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

import { type Project } from '../Projects'

export const ParallaxScroll = ({
  projects,
  className,
}: {
  projects: Project[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(projects.length / 3)

  const firstPart = projects.slice(0, third)
  const secondPart = projects.slice(third, 2 * third)
  const thirdPart = projects.slice(2 * third)

  return (
    <div
      className={cn(
        `
          h-auto w-full items-start overflow-y-auto

          lg:h-[70vh]
        `,
        className,
      )}
      ref={gridRef}
    >
      <div
        className={`
          grid grid-cols-1 gap-8

          lg:hidden

          md:grid-cols-2
        `}
      >
        {projects.map((el, idx) => (
          <div key={idx}>
            <div className="relative h-80 w-full">
              <Image
                src={el.thumbnail}
                className={`
                  !m-0 h-80 w-full gap-10 rounded-lg object-cover
                  object-left-top !p-0
                `}
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
            <p className="my-3 text-center font-bebas-neue text-3xl">
              {el.title}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`
          mx-auto hidden grid-cols-1 items-start gap-10 px-10

          lg:grid lg:grid-cols-3

          md:grid-cols-2
        `}
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={'grid-1' + idx}>
              <Image
                src={el.thumbnail}
                className={`
                  !m-0 h-80 w-full gap-10 rounded-lg object-cover
                  object-left-top !p-0
                `}
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="my-3 text-center font-bebas-neue text-3xl">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <Image
                src={el.thumbnail}
                className={`
                  !m-0 h-80 w-full gap-10 rounded-lg object-cover
                  object-left-top !p-0
                `}
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="my-3 text-center font-bebas-neue text-3xl">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <Image
                src={el.thumbnail}
                className={`
                  !m-0 h-80 w-full gap-10 rounded-lg object-cover
                  object-left-top !p-0
                `}
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="my-3 text-center font-bebas-neue text-3xl">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
