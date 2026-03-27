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
        'w-full ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100',
        'transition-opacity transition-transform duration-[400ms]',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
