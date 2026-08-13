import { useRef, useState, useEffect, useCallback } from 'react'
import { useUI } from '../store'
import { ProductCard } from './ProductCard'

export function ProductScroller({ products, onOpen, wideFirst = true }) {
  const ref = useRef(null)
  const { openQuickView } = useUI()
  const [nav, setNav] = useState({ left: false, right: true })

  const updateNav = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const pos = Math.abs(el.scrollLeft)
    setNav({ left: pos > 12, right: pos < max - 12 })
  }, [])

  useEffect(() => {
    updateNav()
    window.addEventListener('resize', updateNav)
    return () => window.removeEventListener('resize', updateNav)
  }, [updateNav, products.length])

  const scroll = useCallback((dir) => {
    const el = ref.current
    if (!el) return
    const isRtl = getComputedStyle(document.documentElement).direction === 'rtl'
    const fwd = isRtl ? -1 : 1
    const amount = dir * el.clientWidth * 0.85
    const target = el.scrollLeft + fwd * amount
    el.scrollTo({ left: target, behavior: 'smooth' })
  }, [])

  return (
    <div className="pscroller">
      <div className="pscroller__track" ref={ref} onScroll={updateNav}>
        {products.map((p, i) => (
          <div
            key={p.id}
            className={`pscroller__item ${i === 0 && wideFirst ? 'is-wide' : ''}`}
            style={{ '--i': Math.min(i, 8) }}
          >
            <ProductCard
              product={p}
              onOpen={onOpen}
              onQuickView={openQuickView}
            />
          </div>
        ))}
      </div>

      <div className="pscroller__nav">
        <button
          className="pscroller__arrow"
          disabled={!nav.left}
          onClick={() => scroll(-1)}
          aria-label="previous"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 7H2M7 1 1 7l6 6" />
          </svg>
        </button>
        <button
          className="pscroller__arrow"
          disabled={!nav.right}
          onClick={() => scroll(1)}
          aria-label="next"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M1 7h19M15 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
