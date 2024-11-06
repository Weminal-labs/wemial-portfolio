'use client'
import clsx from 'clsx'
import { AnimatePresence,motion } from 'framer-motion'
import {
  Award,
  Eye,
  Folder,
  Gift,
  Menu,
  UserCircle,
  Users,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'

import ToggleTheme from '@/components/ToggleTheme'
import { SECTION_IDS } from '@/constants'

const headerItems = [
  {
    title: 'Who we are',
    path: SECTION_IDS.WHO_WE_ARE,
    icon: <Users className="size-5" />,
  },
  {
    title: 'Vision',
    path: SECTION_IDS.VISION,
    icon: <Eye className="size-5" />,
  },
  {
    title: 'Awards',
    path: SECTION_IDS.AWARDS,
    icon: <Award className="size-5" />,
  },
  {
    title: 'Projects',
    path: SECTION_IDS.PROJECTS,
    icon: <Folder className="size-5" />,
  },
  {
    title: 'Our team',
    path: SECTION_IDS.OUR_TEAM,
    icon: <UserCircle className="size-5" />,
  },
]

const socialLinks = [
  {
    name: 'Twitter',
    icon: <FaTwitter className="size-5" />,
    href: 'https://twitter.com',
  },
  {
    name: 'Github',
    icon: <FaGithub className="size-5" />,
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="size-5" />,
    href: 'https://linkedin.com',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="size-5" />,
    href: 'https://facebook.com',
  },
]

const Header = () => {
  const [isActiveScroll, setIsActiveScroll] = useState(false)
  const [activeClass, setActiveClass] = useState(SECTION_IDS.HERO)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ?
                prev
              : current
          })
          setActiveClass(mostVisible.target.id as SECTION_IDS)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-100px 0px -100px 0px',
      },
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
    <>
      <div
        className={clsx(
          `
            fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-background/20
            via-background/5 to-transparent py-4 backdrop-blur-sm transition-all
            duration-300
          `,
          {
            'bg-background/20 backdrop-blur-md shadow-lg': isActiveScroll,
          },
        )}
      >
        <nav className="container flex items-center justify-between font-medium">
          <div className={`
            hidden flex-1 items-center justify-between gap-8

            md:flex
          `}>
            {headerItems.map((item) => (
              <button
                key={item.title}
                className={clsx(
                  `
                    relative flex items-center gap-2 py-2 uppercase
                    transition-colors
                  `,
                  {
                    'text-primary': activeClass === item.path,
                    'hover:text-primary/70': activeClass !== item.path,
                  },
                )}
                onClick={() => handleScrollToSection(item.path)}
              >
                {/* <span className={clsx(
                  "transition-colors",
                  {
                    'text-primary': activeClass === item.path,
                    'text-muted-foreground': activeClass !== item.path
                  }
                )}>
                  {item.icon}
                </span> */}
                <span className="text-base font-bold">{item.title}</span>
                {activeClass === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}

            <div className={`
              hidden items-center gap-2

              md:flex
            `}>
              <ToggleTheme />
            </div>
          </div>

          <button
            className={`
              p-2

              md:hidden
            `}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`
                fixed inset-0 z-50 bg-black/50 backdrop-blur-sm

                md:hidden
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className={`
                fixed inset-y-0 right-0 z-50 w-[300px] border-l border-border
                bg-background/95 backdrop-blur-md

                md:hidden
              `}
            >
              <div className="flex h-full flex-col p-6">
                <div className={`
                  mb-8 flex items-center justify-between border-b border-border
                  pb-4
                `}>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo/logo.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <h2 className="text-xl font-semibold">Weminal</h2>
                  </div>
                  <button
                    className={`
                      rounded-full p-2 transition-colors

                      hover:bg-accent
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {headerItems.map((item) => (
                    <button
                      key={item.title}
                      className={clsx(
                        `
                          flex items-center gap-3 rounded-lg px-4 py-3 text-left
                          transition-all duration-200
                        `,
                        {
                          'bg-primary/10 text-primary font-medium':
                            activeClass === item.path,
                          'hover:bg-accent hover:translate-x-1':
                            activeClass !== item.path,
                        },
                      )}
                      onClick={() => {
                        handleScrollToSection(item.path)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <span
                        className={clsx('transition-colors', {
                          'text-primary': activeClass === item.path,
                          'text-muted-foreground': activeClass !== item.path,
                        })}
                      >
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.title}</span>
                      {activeClass === item.path && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="size-1.5 rounded-full bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-auto border-t border-border pt-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Change theme
                      </span>
                      <ToggleTheme />
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            rounded-full p-2 transition-colors

                            hover:bg-accent
                          `}
                          aria-label={`Visit our ${social.name}`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
