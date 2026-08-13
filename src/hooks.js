import { useEffect, useState } from 'react'

export function useParallax(factor = 0.35) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY)
        raf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return offset * factor
}

export const clamp01 = (v) => Math.min(1, Math.max(0, v))

export const easeOut = (t) => 1 - Math.pow(1 - t, 3)

export const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    if (mq.addEventListener) mq.addEventListener('change', onChange)
    else mq.addListener(onChange)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange)
      else mq.removeListener(onChange)
    }
  }, [])

  return reduced
}

export function useScrollProgress(
  ref,
  { mode = 'enter', start = 0.88, end = 0.16, disabled = false } = {},
) {
  const [p, setP] = useState(disabled ? 1 : 0)

  useEffect(() => {
    if (disabled) return
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) {
        setP(0)
        return
      }
      const vh = window.innerHeight || 1
      const rect = el.getBoundingClientRect()
      let prog
      if (mode === 'travel') {
        const total = vh + rect.height
        prog = total > 0 ? (vh - rect.top) / total : 0
      } else {
        const s = vh * start
        const e = vh * end
        prog = (s - rect.top) / (s - e)
      }
      setP(clamp01(prog))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref, mode, start, end, disabled])

  return p
}

