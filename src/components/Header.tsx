'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import ToggleTheme from '@/components/ToggleTheme'
import { SECTION_IDS } from '@/constants'

const headerItems = [
  {
    title: 'Who we are',
    path: SECTION_IDS.WHO_WE_ARE,
  },
  {
    title: 'Vision',
    path: SECTION_IDS.VISION,
  },
  {
    title: 'Awards',
    path: SECTION_IDS.AWARDS,
  },
  {
    title: 'Prize',
    path: SECTION_IDS.PRIZE,
  },
  {
    title: 'Projects',
    path: SECTION_IDS.PROJECTS,
  },
  {
    title: 'Our team',
    path: SECTION_IDS.OUR_TEAM,
  },
]

const Header = () => {
  const [isActiveScroll, setIsActiveScroll] = useState(false)
  const [activeClass, setActiveClass] = useState(SECTION_IDS.HERO)

  const handleScroll = () => {
    setIsActiveScroll(window.scrollY > 150)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setActiveClass(entry.target.id as SECTION_IDS)
      },
      { threshold: 0.7 },
    )

    const elements = headerItems.map((item) => {
      const element = document.getElementById(item.path)
      if (element) observer.observe(element)
      return element
    })

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const handleScrollToSection = (path: string) => {
    const section = document.getElementById(path)

    if (section) {
      const { top } = section.getBoundingClientRect()

      window.scrollTo({
        top: top + window.scrollY,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      className={clsx(
        `
          fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-background/10
          to-transparent py-8 backdrop-opacity-10 transition-all
        `,
        { 'bg-background/20': isActiveScroll },
      )}
    >
      <nav className="container flex items-center justify-between font-medium">
        {headerItems.map((item) => (
          <button
            key={item.title}
            className="uppercase"
            onClick={() => {
              handleScrollToSection(item.path)
            }}
          >
            {item.title}
          </button>
        ))}
        <ToggleTheme />
      </nav>
    </div>
  )
}

export default Header
