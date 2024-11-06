'use client'
import 'swiper/css'
import 'swiper/css/navigation'

import { Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import {
  Swiper,
  type SwiperProps,
  SwiperRef,
  SwiperSlide,
  useSwiper,
} from 'swiper/react'

import { SECTION_IDS } from '@/constants'
import { supabase } from '@/lib/supabase/client'

const swiperConfig: SwiperProps = {
  modules: [Autoplay],
  spaceBetween: 2,
  slidesPerView: 1.2,
  loop: true,
  navigation: false,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2.4,
    },
    1024: {
      slidesPerView: 3.7,
    },
    1280: {
      slidesPerView: 5.3,
    },
  },
}

export interface Member {
  id: string
  bio: string
  email: string
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
    <div id={SECTION_IDS.OUR_TEAM}>
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
      <p className="mx-auto my-10 max-w-xl text-center font-pp-neue-montreal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        nisi sit amet ultrices tempor, odio magna tempus libero, in volutpat
        odio turpis sit amet urna. Integer a ex nec risus scelerisque dapibus.
        Nam cursus metus vel lorem varius, a iaculis ligula sodales.
      </p>

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
          {members.map((m) => (
            <SwiperSlide key={m.id}>
              <Link href={`/members/${m.id}`}>
                <div
                  className={`
                    relative h-80 w-full overflow-hidden rounded-lg

                    md:h-96
                  `}
                >
                  <Image
                    src={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s'
                    }
                    className="object-cover object-center"
                    alt=""
                    sizes="auto"
                    fill
                  />
                </div>
                <div className="my-4">
                  <p className="font-bebas-neue text-2xl leading-none">
                    {m.name}
                  </p>
                  <p className="font-pp-neue-montreal text-lg leading-none">
                    {m.role}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  )
}

export default Members
