import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import {
  SiDocker,
  SiEvernote,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si'
import { TbInfinity } from 'react-icons/tb'

export default function MemberPortfolio() {
  return (
    <div
      className={`
        relative min-h-screen bg-white

        dark:bg-black
      `}
    >
      {/* Divider Lines - Ẩn trên mobile */}
      <div
        className={`
          absolute left-0 top-10 hidden h-px w-full bg-gray-300

          dark:bg-gray-700

          md:block
        `}
      />
      <div
        className={`
          absolute left-[48%] top-0 hidden h-full w-px bg-gray-300

          dark:bg-gray-700

          md:block
        `}
      />
      <div
        className={`
          absolute bottom-10 left-0 hidden h-px w-full bg-gray-300

          dark:bg-gray-700

          md:block
        `}
      />

      <div
        className={`
          container mx-auto px-10 py-8

          md:px-8 md:py-16
        `}
      >
        <div
          className={`
            grid grid-cols-1 gap-8

            md:grid-cols-12 md:gap-24
          `}
        >
          {/* Left Column */}
          <div
            className={`
              col-span-12 mx-4 space-y-6

              md:col-span-5 md:mx-0 md:space-y-[80px]
            `}
          >
            {/* Profile Section */}
            <div className="flex flex-col items-start">
              <img
                src="/avatar/avatar.png"
                alt="Profile"
                className={`
                  w-full

                  dark:brightness-90

                  md:w-[150px]
                `}
              />

              <div
                className={`
                  mb-40 mt-10 text-start

                  md:mb-0 md:mt-4
                `}
              >
                <p
                  className={`
                    mb-4 text-[26px] font-medium text-gray-600

                    dark:text-gray-400

                    md:text-base md:font-normal
                  `}
                >
                  membersmail@mail.xyz
                </p>
                <div
                  className={`
                    flex justify-start gap-6 text-gray-600

                    dark:text-gray-400
                  `}
                >
                  <a
                    href="#"
                    className={`
                      dark:hover:text-gray-200

                      hover:text-gray-900
                    `}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className={`
                      dark:hover:text-gray-200

                      hover:text-gray-900
                    `}
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className={`
                      dark:hover:text-gray-200

                      hover:text-gray-900
                    `}
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className={`
                      dark:hover:text-gray-200

                      hover:text-gray-900
                    `}
                  >
                    <FaTelegram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div
              className={`
                space-y-12 text-left

                md:space-y-10
              `}
            >
              <h1
                className={`
                  mt-4 scale-y-150 font-bebas-neue text-3xl font-bold
                  leading-tight text-neutral-800

                  dark:text-white

                  md:text-5xl md:tracking-[-2px]
                `}
              >
                HI, I&apos;M [MEMBER&apos;S NAME]
              </h1>

              <p
                className={`
                  text-justify text-lg leading-relaxed text-gray-600

                  dark:text-gray-400

                  md:text-left md:text-base
                `}
              >
                Lorem ipsum dolor sit amet consectetur. Hac viverra parturient
                aliquet ut proin consectetur non nunc amet. Quis in in lacus ac
                sapien massa tellus massa. Dictum tellus diam viverra leo. Porta
                quis ultricies sed rhoncus.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`
              col-span-12 mx-4 mt-8 flex flex-col justify-between

              md:col-span-7 md:mx-0 md:mt-0 md:justify-between
            `}
          >
            {/* Tech Stack Section */}
            <div
              className={`
                order-2 text-center

                md:order-1 md:text-right
              `}
            >
              <h3
                className={`
                  scale-y-150 text-2xl font-bold leading-tight tracking-[-2px]
                  text-black

                  dark:text-white

                  md:text-3xl md:tracking-[-3px]
                `}
              >
                TECH STACK
              </h3>
              <div
                className={`
                  my-6 flex flex-row flex-wrap justify-center gap-4

                  md:flex-col md:items-end md:gap-6
                `}
              >
                <TechIcon icon={<SiNodedotjs size={24} />} />
                <TechIcon icon={<TbInfinity size={24} />} />
                <TechIcon icon={<SiDocker size={24} />} />
                <TechIcon icon={<SiPython size={24} />} />
                <TechIcon icon={<SiNextdotjs size={24} />} />
                <TechIcon icon={<SiEvernote size={24} />} />
              </div>
            </div>

            {/* Developer Title */}
            <h1
              className={`
                order-1 my-[120%] scale-y-150 text-right font-bebas-neue
                text-3xl font-bold leading-tight tracking-[-2px]
                text-neutral-800

                dark:text-white

                md:order-2 md:my-0 md:mt-4 md:text-5xl md:tracking-[-3px]
              `}
            >
              I&apos;M A FULL STACK <br />
              DEVELOPER
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

const TechIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div
      className={`
        flex size-10 items-center justify-center text-gray-600

        dark:text-gray-400 dark:hover:text-gray-200

        hover:text-gray-900

        md:size-12
      `}
    >
      {icon}
    </div>
  )
}
