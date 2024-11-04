'use client'

import { SECTION_IDS } from '@/constants'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const awards = [
  {
    image: '/awards/award1.png',
    title: 'LOREM IPSUM'
  },
  {
    image: '/awards/award2.png',
    title: 'LOREM IPSUM'
  },
  {
    image: '/awards/award3.png',
    title: 'LOREM IPSUM'
  },
  {
    image: '/awards/award4.png',
    title: 'LOREM IPSUM'
  }
]

const awardStats = [
  {
    count: '10+',
    label: 'Awards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, nisi sit amet ultrices tempor, odio magna tempus libero, iris er'
  },
  {
    count: '15+',
    label: 'Awards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, nisi sit amet ultrices tempor, odio magna tempus libero, iris er'
  },
  {
    count: '20+',
    label: 'Awards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, nisi sit amet ultrices tempor, odio magna tempus libero, iris er'
  }
]

const AwardCard = ({ image, title, isActive }: { image: string; title: string; isActive: boolean }) => {
  return (
    <div className="relative aspect-square bg-black rounded-lg overflow-hidden group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradient overlay - Hiển thị khi hover trên desktop hoặc là slide active trên mobile */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-opacity duration-300
          md:opacity-0 md:group-hover:opacity-100
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Title - Hiển thị khi hover trên desktop hoặc là slide active trên mobile */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300
          md:translate-y-full md:group-hover:translate-y-0
          ${isActive ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <h3 className="text-2xl font-bold tracking-wider text-white">
          {title}
        </h3>
      </div>
    </div>
  )
}

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length)
  }

  return (
    <section id={SECTION_IDS.AWARDS} className="py-20 px-10 md:px-0">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-lg text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2 className="text-4xl font-bold">AWARDS</h2>
          <p className="mt-6 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, nisi sit amet ultrices tempor.
          </p>
        </div>

        {/* Awards Slider */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            {awards.map((award, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[25%] transition-all duration-500 px-1"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <AwardCard
                  image={award.image}
                  title={award.title}
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index
                  ? 'bg-primary w-4'
                  : 'bg-border hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-20 mt-20">
          {awardStats.map((stat, index) => (
            <div key={index} className={`${index !== 0 ? 'md:border-l border-border md:pl-8' : ''}`}>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-bold">{stat.count}</span>
                <span className="text-2xl">{stat.label}</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
