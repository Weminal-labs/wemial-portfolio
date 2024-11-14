'use client'

import { Award, Eye, Folder, Gift, UserCircle, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { SECTION_IDS } from '@/constants'

const footerItems = [
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
    href: 'https://x.com/WeminalHack',
  },
  {
    name: 'Github',
    icon: <FaGithub className="size-5" />,
    href: 'https://github.com/Weminal-labs',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="size-5" />,
    href: 'https://www.facebook.com/groups/weminalhack',
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
    <footer
      className={`
        mt-10 border-t border-border

        lg:mt-16

        md:m-14

        xl:mt-20
      `}
    >
      <div
        className={`
          mx-auto max-w-7xl px-6 py-12

          md:pb-8 md:pt-12
        `}
      >
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
          <p className="mt-4 max-w-md text-center text-sm text-muted-foreground">
            Where Ideas begin with a Hackathon.
          </p>
        </div>

        {/* Social Links */}
        <div className="my-5 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                rounded-full p-3 transition-colors

                hover:bg-accent
              `}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <div
            className={`
              flex flex-col items-center justify-between gap-4

              md:flex-row
            `}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Weminal, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className={`
                  text-sm text-muted-foreground

                  hover:text-foreground
                `}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className={`
                  text-sm text-muted-foreground

                  hover:text-foreground
                `}
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
