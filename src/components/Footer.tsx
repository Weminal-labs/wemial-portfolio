'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Eye, Award, Gift, Folder, UserCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { SECTION_IDS } from '@/constants'

const footerItems = [
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

const Footer = () => {
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
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:pb-8 md:pt-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo.png"
              alt="Weminal"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">Weminal</span>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground max-w-md">
            Where Ideas begin with a Hackathon.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <button
                onClick={() => handleScrollToSection(item.path)}
                className="group flex flex-col items-center gap-2 transition-colors hover:text-primary"
              >
                <span className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Weminal, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
