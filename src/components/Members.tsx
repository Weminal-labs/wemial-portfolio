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

import { AnimatedTestimonials } from './ui/animated-testimonials'

const swiperConfig: SwiperProps = {
  modules: [Autoplay],
  spaceBetween: 2,
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

  // return (
  //   <div
  //     id={SECTION_IDS.OUR_TEAM}
  //     className={`
  //       my-10

  //       lg:my-48

  //       md:my-16
  //     `}
  //   >
  //     <h2
  //       className={`
  //         text-center font-bebas-neue text-4xl uppercase

  //         lg:text-6xl

  //         md:text-5xl

  //         xl:text-8xl
  //       `}
  //     >
  //       our DEDICATED team
  //     </h2>
  //     {/* <p className="mx-auto my-10 max-w-xl text-center font-pp-neue-montreal">
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
  //       nisi sit amet ultrices tempor, odio magna tempus libero, in volutpat
  //       odio turpis sit amet urna. Integer a ex nec risus scelerisque dapibus.
  //       Nam cursus metus vel lorem varius, a iaculis ligula sodales.
  //     </p> */}

  //     {isLoading ?
  //       <div className="flex h-96 items-center justify-center">
  //         <Loader className="animate-spin" size={30} />
  //       </div>
  //     : <Swiper
  //         {...swiperConfig}
  //         className={`
  //           mt-4

  //           md:mt-8
  //         `}
  //       >
  //         {members.map((m, _index) => (
  //           <SwiperSlide key={m.id}>
  //             <Link href={`/members/${m.id}`} className="relative">
  //               <Card
  //                 key={m.id}
  //                 card={{
  //                   src: m.img,
  //                   title: m.name,
  //                 }}
  //                 role={m.role}
  //                 index={_index}
  //                 hovered={hovered}
  //                 setHovered={setHovered}
  //               />
  //             </Link>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     }
  //   </div>
  // )

  return (
    <div className="flex h-screen items-center">
      <div className="container grid grid-cols-4 gap-10">
        <div className="flex items-center justify-center">
          <div>
            <p
              className={`
                font-bebas-neue text-4xl font-semibold

                xl:text-8xl
              `}
            >
              OUR MEMBERS
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptatibus corporis distinctio dolorem sunt illum, et
              recusandae! Quasi, quidem. Cum culpa temporibus iure, voluptate
              excepturi nemo ex suscipit voluptatibus. Consequuntur!
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <AnimatedTestimonials testimonials={members} />
        </div>
      </div>
    </div>
  )
}

export default Members
