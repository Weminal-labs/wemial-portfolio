'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

export function Parallax({ children }: { readonly children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
