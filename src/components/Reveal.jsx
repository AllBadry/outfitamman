import { useEffect, useRef } from 'react'

export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  style,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({
  children,
  className = '',
  variant = 'up',
  stagger = 70,
  threshold = 0.1,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll(':scope > *')
    if (typeof IntersectionObserver === 'undefined' || items.length === 0) {
      items.forEach((i) => i.classList.add('is-visible'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Array.prototype.indexOf.call(items, e.target)
            e.target.style.transitionDelay = `${Math.min(i * stagger, 700)}ms`
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -5% 0px' },
    )
    items.forEach((i) => obs.observe(i))
    return () => obs.disconnect()
  }, [stagger, threshold])

  return (
    <div ref={ref} className={`reveal-group reveal-group--${variant} ${className}`} {...rest}>
      {children}
    </div>
  )
}
