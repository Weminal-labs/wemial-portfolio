/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

import { type Project } from '../Projects'
import { CardBody, CardContainer, CardItem } from './3d-card'

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

          lg:h-[80vh]
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
            <CardContainer className="inter-var">
              <CardBody
                className={`
                  relative size-auto border-black/[0.1] bg-gray-50 group/card
                  rounded-xl border p-6

                  dark:border-white/[0.2] dark:bg-black/5 dark:hover:shadow-2xl
                  dark:hover:shadow-emerald-500/[0.1]
                `}
              >
                <CardItem
                  translateZ="50"
                  className={`
                    font-bebas-neue text-xl font-bold text-neutral-600

                    dark:text-white
                  `}
                >
                  {el.title}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={el.thumbnail}
                    height="1000"
                    width="1000"
                    className={`
                      h-60 w-full rounded-xl object-cover

                      group-hover/card:shadow-xl
                    `}
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-6 flex items-center justify-between">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/projects/${el.id}`}
                    target="__blank"
                    className={`
                      rounded-xl px-4 py-2 text-xs font-normal

                      dark:text-white
                    `}
                  >
                    View more →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
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
              <CardContainer className="inter-var">
                <CardBody
                  className={`
                    relative size-auto border-black/[0.1] bg-gray-50 group/card
                    rounded-xl border p-6

                    dark:border-white/[0.2] dark:bg-black/5
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
                  `}
                >
                  <CardItem
                    translateZ="50"
                    className={`
                      font-bebas-neue text-xl font-bold text-neutral-600

                      dark:text-white
                    `}
                  >
                    {el.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`
                      mt-2 line-clamp-2 max-w-sm text-sm text-neutral-500

                      dark:text-neutral-300
                    `}
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                      src={el.thumbnail}
                      height="1000"
                      width="1000"
                      className={`
                        h-60 w-full rounded-xl object-cover

                        group-hover/card:shadow-xl
                      `}
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-6 flex items-center justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/projects/${el.id}`}
                      target="__blank"
                      className={`
                        rounded-xl px-4 py-2 text-xs font-normal

                        dark:text-white
                      `}
                    >
                      View more →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <CardContainer className="inter-var">
                <CardBody
                  className={`
                    relative size-auto border-black/[0.1] bg-gray-50 group/card
                    rounded-xl border p-6

                    dark:border-white/[0.2] dark:bg-black/5
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
                  `}
                >
                  <CardItem
                    translateZ="50"
                    className={`
                      font-bebas-neue text-xl font-bold text-neutral-600

                      dark:text-white
                    `}
                  >
                    {el.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`
                      mt-2 line-clamp-2 max-w-sm text-sm text-neutral-500

                      dark:text-neutral-300
                    `}
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                      src={el.thumbnail}
                      height="1000"
                      width="1000"
                      className={`
                        h-60 w-full rounded-xl object-cover

                        group-hover/card:shadow-xl
                      `}
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-6 flex items-center justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/projects/${el.id}`}
                      target="__blank"
                      className={`
                        rounded-xl px-4 py-2 text-xs font-normal

                        dark:text-white
                      `}
                    >
                      View more →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <CardContainer className="inter-var">
                <CardBody
                  className={`
                    relative size-auto border-black/[0.1] bg-gray-50 group/card
                    rounded-xl border p-6

                    dark:border-white/[0.2] dark:bg-black/5
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
                  `}
                >
                  <CardItem
                    translateZ="50"
                    className={`
                      font-bebas-neue text-xl font-bold text-neutral-600

                      dark:text-white
                    `}
                  >
                    {el.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`
                      mt-2 line-clamp-2 max-w-sm text-sm text-neutral-500

                      dark:text-neutral-300
                    `}
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                      src={el.thumbnail}
                      height="1000"
                      width="1000"
                      className={`
                        h-60 w-full rounded-xl object-cover

                        group-hover/card:shadow-xl
                      `}
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-6 flex items-center justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/projects/${el.id}`}
                      target="__blank"
                      className={`
                        rounded-xl px-4 py-2 text-xs font-normal

                        dark:text-white
                      `}
                    >
                      View more →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
