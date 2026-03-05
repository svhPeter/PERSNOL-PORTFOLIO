import { ThreeElements } from '@react-three/fiber'
import { MotionValue } from 'framer-motion'
import { RefObject } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

declare module 'framer-motion' {
  export function useScroll(options?: {
    target?: RefObject<HTMLElement | null>
    container?: RefObject<HTMLElement | null>
    offset?: string[]
    layoutEffect?: boolean
  }): {
    scrollX: MotionValue<number>
    scrollY: MotionValue<number>
    scrollXProgress: MotionValue<number>
    scrollYProgress: MotionValue<number>
  }
}
