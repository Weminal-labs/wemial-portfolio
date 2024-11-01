'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParallaxBanner } from 'react-scroll-parallax'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { SECTION_IDS } from '@/constants'
import { Parallax } from '@/providers/Parallax'

const Hero = () => {
  return (
    <Parallax>
      <div className="h-screen w-screen" id={SECTION_IDS.HERO}>
        <ParallaxBanner
          layers={[
            { image: '/images/cloud.png', speed: 20 },
            { image: '/images/city.png', speed: -20 },
          ]}
          className="size-full"
        >
          <div
            className={`
              absolute inset-0 flex items-center justify-center text-center
            `}
          >
            <div className="relative flex flex-col gap-4">
              <p className={`font-pp-neue-montreal text-3xl font-medium`}>
                WEMINAL
              </p>
              <div>
                <TextGenerateEffect
                  className={`font-bebas-neue text-8xl font-thin uppercase`}
                  words={'Road to the bangkok'}
                  duration={0.7}
                />
              </div>
              <motion.div
                animate={{
                  y: [10, 0],
                  x: [-120, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 1.5,
                    duration: 0.4,
                  },
                }}
                className="absolute -bottom-20 right-0 h-40 w-96"
              >
                <Image
                  src={'/images/white_line.png'}
                  className="object-contain"
                  sizes="auto"
                  alt=""
                  fill
                />
              </motion.div>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </Parallax>
  )
}

export default Hero
