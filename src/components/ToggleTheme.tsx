'use client'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full border border-zinc-700/50 dark:border-zinc-200/50 p-1 bg-zinc-800/30 dark:bg-zinc-50/30 backdrop-blur-md transition-colors duration-200 hover:bg-zinc-800/50 dark:hover:bg-zinc-50/50"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <FiSun
        className={`size-8 rounded-full p-1.5 mr-1 transition-all duration-300 ease-in-out hover:rotate-45 ${theme === 'dark'
          ? 'bg-transparent ttext-white font-bold scale-90 opacity-70'
          : 'bg-yellow-400 text-yellow-950 scale-100 opacity-100'
          }`}
      />
      <FiMoon
        className={`size-8 rounded-full p-1.5 transition-all duration-300 ease-in-out hover:rotate-12 ${theme === 'dark'
          ? 'bg-indigo-500 text-white scale-100 opacity-100'
          : 'text-white scale-90 opacity-70'
          }`}
      />
    </button>
  )
}

export default ToggleTheme
