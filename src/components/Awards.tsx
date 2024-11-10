'use client'

import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react'

import { SECTION_IDS } from '@/constants'
import { supabase } from '@/lib/supabase/client'

interface Award {
  id: string
  name: string
  img: string
  achievements: {
    Project: string
    Award: string
  }
}

const swiperConfig: SwiperProps = {
  modules: [Autoplay],
  spaceBetween: 10,
  slidesPerView: 1.2,
  loop: true,
  navigation: false,
  autoplay: {
    delay: 1400,
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

const Awards = () => {
  const [awards, setAwards] = useState<Award[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchAwards = async () => {
      setIsLoading(true)
      const { data } = await supabase.from('awards').select('*')
      setIsLoading(false)
      setAwards(data as Award[])
    }

    fetchAwards()
  }, [])

  return (
    <div
      id={SECTION_IDS.AWARDS}
      className={`
        px-4 py-10

        md:py-20
      `}
    >
      {isLoading ?
        <div className="flex h-96 items-center justify-center">
          <Loader className="animate-spin" size={30} />
        </div>
      : <div
          className={`
            grid grid-cols-1

            lg:grid-cols-3

            md:grid-cols-2

            xl:grid-cols-4
          `}
        >
          <div className="flex flex-col justify-center px-4">
            <p
              className={`
                font-bebas-neue text-4xl font-medium

                lg:text-8xl

                md:text-6xl
              `}
            >
              AWARDS
            </p>
            <p>
              Our commitment to innovation and quality has brought Weminal
              notable awards in the Web3 and technology community, including
              over 10 competitions, both domestic and international with a total
              prize value of over $60k.
            </p>
          </div>
          <Swiper
            {...swiperConfig}
            className={`
              col-span-3 mt-4 size-full

              md:mt-8
            `}
          >
            {awards.map((m) => (
              <SwiperSlide key={m.id}>
                <div className="h-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, aperiam. Itaque autem facilis cupiditate
                  similique quas, mollitia est deleniti quod veritatis rerum
                  illo quis neque, ipsam vero quibusdam officia nisi.
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      }
    </div>
  )
}

export default Awards
