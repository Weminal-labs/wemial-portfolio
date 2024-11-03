'use client'
import clsx from 'clsx'
import { Menu, X, Users, Eye, Award, Gift, Folder, UserCircle } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaFacebook
} from "react-icons/fa";
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import ToggleTheme from '@/components/ToggleTheme'
import { SECTION_IDS } from '@/constants'

const headerItems = [
  {
    title: 'Who we are',
    path: SECTION_IDS.WHO_WE_ARE,
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Vision',
    path: SECTION_IDS.VISION,
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: 'Awards',
    path: SECTION_IDS.AWARDS,
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: 'Prize',
    path: SECTION_IDS.PRIZE,
    icon: <Gift className="h-5 w-5" />,
  },
  {
    title: 'Projects',
    path: SECTION_IDS.PROJECTS,
    icon: <Folder className="h-5 w-5" />,
  },
  {
    title: 'Our team',
    path: SECTION_IDS.OUR_TEAM,
    icon: <UserCircle className="h-5 w-5" />,
  },
]

const socialLinks = [
  {
    name: 'Twitter',
    icon: <FaTwitter className="h-5 w-5" />,
    href: 'https://twitter.com',
  },
  {
    name: 'Github',
    icon: <FaGithub className="h-5 w-5" />,
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="h-5 w-5" />,
    href: 'https://linkedin.com',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="h-5 w-5" />,
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
    <>
      <div
        className={clsx(
          `fixed left-0 top-0 z-50 w-full 
          bg-gradient-to-b from-background/20 via-background/5 to-transparent
          backdrop-blur-sm py-4 transition-all duration-300`,
          {
            'bg-background/20 backdrop-blur-md shadow-lg': isActiveScroll
          },
        )}
      >
        <nav className="container flex items-center justify-between font-medium">
          <div className="hidden md:flex items-center gap-8 flex-1 justify-between">
            {headerItems.map((item) => (
              <button
                key={item.title}
                className={clsx(
                  "uppercase relative py-2 transition-colors flex items-center gap-2",
                  {
                    'text-primary': activeClass === item.path,
                    'hover:text-primary/70': activeClass !== item.path
                  }
                )}
                onClick={() => handleScrollToSection(item.path)}
              >
                <span className={clsx(
                  "transition-colors",
                  {
                    'text-primary': activeClass === item.path,
                    'text-muted-foreground': activeClass !== item.path
                  }
                )}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
                {activeClass === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                  />
                )}
              </button>
            ))}

            <div className="hidden md:flex items-center gap-2">
              <ToggleTheme />
            </div>

          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-background/95 backdrop-blur-md border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col p-6 h-full">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
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
                    className="p-2 hover:bg-accent rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {headerItems.map((item) => (
                    <button
                      key={item.title}
                      className={clsx(
                        "text-left py-3 px-4 rounded-lg transition-all duration-200 flex items-center gap-3",
                        {
                          'bg-primary/10 text-primary font-medium': activeClass === item.path,
                          'hover:bg-accent hover:translate-x-1': activeClass !== item.path
                        }
                      )}
                      onClick={() => {
                        handleScrollToSection(item.path)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <span className={clsx(
                        "transition-colors",
                        {
                          'text-primary': activeClass === item.path,
                          'text-muted-foreground': activeClass !== item.path
                        }
                      )}>
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.title}</span>
                      {activeClass === item.path && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border">
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
                          className="p-2 hover:bg-accent rounded-full transition-colors"
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
