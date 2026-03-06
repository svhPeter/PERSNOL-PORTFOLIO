'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Catches ReactCurrentBatchConfig / ReactCurrentOwner errors from @react-three/fiber
 * on Vercel so the rest of the portfolio still loads.
 */
export default class EarthErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
