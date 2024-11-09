'use client'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className={`
        inline-flex items-center rounded-full border border-zinc-700/50
        bg-zinc-800/30 p-1 backdrop-blur-md transition-colors duration-200

        dark:border-zinc-200/50 dark:bg-zinc-50/30 dark:hover:bg-zinc-50/50

        hover:bg-zinc-800/50
      `}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <FiSun
        className={`
          mr-1 size-8 rounded-full p-1.5 transition-all duration-300 ease-in-out

          hover:rotate-45

          ${
            theme === 'dark' ?
              'bg-transparent ttext-white scale-90 font-bold opacity-70'
            : 'scale-100 bg-yellow-400 text-yellow-950 opacity-100'
          }
        `}
      />
      <FiMoon
        className={`
          size-8 rounded-full p-1.5 transition-all duration-300 ease-in-out

          hover:rotate-12

          ${
            theme === 'dark' ?
              'scale-100 bg-indigo-500 text-white opacity-100'
            : 'scale-90 text-white opacity-70'
          }
        `}
      />
    </button>
  )
}

export default ToggleTheme
