import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Stop observing after the element has been revealed */
  once?: boolean
}

function getReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ScrollReveal({
  children,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => getReducedMotion())

  useEffect(() => {
    const el = ref.current
    if (!el || getReducedMotion()) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px 64px 0px',
        threshold: 0,
      },
    )

    observer.observe(el)
    const pending = observer.takeRecords()
    for (const entry of pending) {
      if (entry.isIntersecting) {
        if (once) observer.unobserve(entry.target)
        queueMicrotask(() => setVisible(true))
        break
      }
    }

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={[
        'scroll-reveal',
        visible ? 'scroll-reveal-visible' : 'scroll-reveal-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
