'use client'
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

export const Card = React.memo(
  ({
    role,
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: {
      title: string
      src: string
    }
    role: string
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        `
          relative h-80 w-full overflow-hidden rounded-lg bg-gray-100
          transition-all duration-300 ease-out

          dark:bg-neutral-900

          md:h-96
        `,
        hovered !== null && hovered !== index && 'blur-sm scale-[0.98]',
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 object-cover"
      />
      <div
        className={cn(
          `
            absolute inset-0 flex items-end bg-black/50 px-4 py-8
            transition-opacity duration-300
          `,
          hovered === index ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div>
          <p
            className={`
              bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text
              font-bebas-neue text-xl font-medium text-transparent

              md:text-3xl
            `}
          >
            {card.title}
          </p>
          <p
            className={`
              bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text
              font-bebas-neue text-lg text-transparent
            `}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  ),
)

Card.displayName = 'Card'

type Card = {
  title: string
  src: string
}
