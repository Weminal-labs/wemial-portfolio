'use client'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={handleToggleTheme} className="uppercase">
      Change Theme
    </button>
  )
}

export default ToggleTheme
