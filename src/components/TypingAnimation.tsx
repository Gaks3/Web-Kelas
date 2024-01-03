'use client'

import { TypeAnimation } from 'react-type-animation'

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={['Welcome To', 1000, 'XI SIJA 1', 1000]}
      wrapper='span'
      speed={20}
      className='font-black text-center h-14 text-5xl lg:text-6xl bg-gradient-to-b from-black dark:from-white dark:via-neutral-300 to-neutral-500 dark:to-neutral-400 text-transparent bg-clip-text'
      repeat={1000}
    />
  )
}
