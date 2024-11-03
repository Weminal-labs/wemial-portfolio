'use client'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0.2,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
  delay?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration || 1,
        delay: stagger(delay),
      },
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`
                 opacity-0
              `}
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return <div className={cn('font-bold', className)}>{renderWords()}</div>
}
