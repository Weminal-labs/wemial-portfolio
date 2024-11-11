'use client'
import 'swiper/css'
import 'swiper/css/navigation'

import { Loader } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react'

import { Card } from '@/components/ui/focus-cards'
import { SECTION_IDS } from '@/constants'
import { supabase } from '@/lib/supabase/client'

const swiperConfig: SwiperProps = {
  modules: [Autoplay],
  spaceBetween: 2,
  slidesPerView: 1.2,
  loop: true,
  navigation: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1280: {
      slidesPerView: 4.8,
    },
  },
}

export interface Member {
  id: string
  bio: string
  email: string
  img: string
  links: {
    name: string
    value: string
  }[]
  name: string
  role: string
  techstack: string[]
}

const Members = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true)
      const { data } = await supabase.from('members').select('*')
      setIsLoading(false)
      setMembers(data as Member[])
    }

    fetchMembers()
  }, [])

  return (
    <div
      id={SECTION_IDS.OUR_TEAM}
      className={`
        my-10

        md:my-20
      `}
    >
      <h2
        className={`
          text-center font-bebas-neue text-4xl uppercase

          lg:text-6xl

          md:text-5xl

          xl:text-8xl
        `}
      >
        our DEDICATED team
      </h2>

      {isLoading ?
        <div className="flex h-96 items-center justify-center">
          <Loader className="animate-spin" size={30} />
        </div>
      : <Swiper
          {...swiperConfig}
          className={`
            mt-4

            md:mt-8
          `}
        >
          {members.map((m, _index) => (
            <SwiperSlide key={m.id}>
              <div className="relative">
                <Card
                  key={m.id}
                  card={{
                    src: m.img,
                    title: m.name,
                  }}
                  role={m.role}
                  index={_index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  )
}

export default Members
