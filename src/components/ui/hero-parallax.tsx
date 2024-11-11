'use client'

import {
  motion,
  type MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 4)
  const secondRow = products.slice(5, 11)
  const thirdRow = products.slice(12, 20)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className={`
        relative flex flex-col self-auto overflow-hidden py-0 antialiased

        [perspective:1000px]

        [transform-style:preserve-3d]
      `}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div
          className={`mb-20 flex flex-row-reverse space-x-20 space-x-reverse`}
        >
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div
      className={`
        relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20

        md:py-40
      `}
    >
      <h2
        className={`
          font-bebas-neue text-3xl font-bold

          md:text-7xl
        `}
      >
        our projects
      </h2>
      <p
        className={`
          mt-4 max-w-2xl font-pp-neue-montreal text-base

          md:text-xl
        `}
      >
        At Weminal, we work on projects that include both useful applications
        and new ideas in the Web3 space. Every project goes through careful
        testing and improvement to make sure we meet real user needs and explore
        new possibilities.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <div
        className={`
          block overflow-hidden rounded-lg

          group-hover/product:shadow-2xl
        `}
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className={`
            absolute inset-0 size-full rounded-lg object-cover object-left-top
          `}
          alt={product.title}
        />
      </div>
      <div
        className={`
          pointer-events-none absolute inset-0 size-full rounded-lg bg-black
          opacity-0

          group-hover/product:opacity-50
        `}
      ></div>
      <h2
        className={`
          absolute bottom-4 left-4 text-white opacity-0

          group-hover/product:opacity-100
        `}
      >
        {product.title}
      </h2>
    </motion.div>
  )
}
