import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa'
import {
  SiNodedotjs,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiGraphql,
  SiEvernote,
} from 'react-icons/si'
import { TbInfinity } from 'react-icons/tb'

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative">
      {/* Divider Lines - Ẩn trên mobile */}
      <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gray-300 dark:bg-gray-700" />
      <div className="hidden md:block absolute top-0 left-[48%] w-[1px] h-full bg-gray-300 dark:bg-gray-700" />
      <div className="hidden md:block absolute bottom-10 left-0 w-full h-[1px] bg-gray-300 dark:bg-gray-700" />

      <div className="container mx-auto px-10 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
          {/* Left Column */}
          <div className="mx-4 md:mx-0 space-y-6 md:space-y-[80px] col-span-12 md:col-span-5">
            {/* Profile Section */}
            <div className="flex flex-col items-start">
              <img
                src="/avatar/avatar.png"
                alt="Profile"
                className="w-full md:w-[150px] dark:brightness-90"
              />

              <div className="text-start mt-10 mb-40 md:mt-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium text-[26px] md:text-base md:font-normal">
                  membersmail@mail.xyz
                </p>
                <div className="flex justify-start gap-6 text-gray-600 dark:text-gray-400">
                  <a
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <FaTelegram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="text-left space-y-12 md:space-y-10">
              <h1 className="text-3xl md:text-5xl mt-4 font-bold leading-tight scale-y-150 md:tracking-[-2px] text-neutral-800 dark:text-white">
                HI, I'M MEMBER'S NAME
              </h1>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg md:text-base text-justify md:text-left">
                Lorem ipsum dolor sit amet consectetur. Hac viverra parturient
                aliquet ut proin consectetur non nunc amet. Quis in in lacus ac
                sapien massa tellus massa. Dictum tellus diam viverra leo. Porta
                quis ultricies sed rhoncus.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between md:justify-between col-span-12 md:col-span-7 mt-8 md:mt-0 mx-4 md:mx-0">
            {/* Tech Stack Section */}
            <div className="text-center md:text-right order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight scale-y-150 tracking-[-2px] md:tracking-[-3px] text-black dark:text-white">
                TECH STACK
              </h3>
              <div className="flex flex-row md:flex-col justify-center md:items-end flex-wrap my-6 gap-4 md:gap-6">
                <TechIcon icon={<SiNodedotjs size={24} />} />
                <TechIcon icon={<TbInfinity size={24} />} />
                <TechIcon icon={<SiDocker size={24} />} />
                <TechIcon icon={<SiPython size={24} />} />
                <TechIcon icon={<SiNextdotjs size={24} />} />
                <TechIcon icon={<SiEvernote size={24} />} />
              </div>
            </div>

            {/* Developer Title */}
            <h1 className="text-3xl md:text-5xl my-[120%] md:my-0 md:mt-4 font-bold leading-tight scale-y-150 tracking-[-2px] md:tracking-[-3px] text-neutral-800 dark:text-white text-right order-1 md:order-2">
              I'M A FULL STACK <br />
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
    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
      {icon}
    </div>
  )
}
