import { useRef, useState, useLayoutEffect } from 'react'
import { useLang } from '../store'
import { useScrollProgress, useReducedMotion, clamp01, easeInOut } from '../hooks'
import { formatPrice } from '../utils'

export function Rise({
  as: Tag = 'section',
  children,
  className = '',
  style,
  distance = 80,
  ...rest
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const p = useScrollProgress(ref, { disabled: reduced })
  const opacity = clamp01(p / 0.4)
  const y = (1 - clamp01(p / 0.55)) * distance

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: reduced ? 1 : opacity,
        transform: reduced ? 'none' : `translate3d(0, ${y}px, 0)`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Horizon({ title, sub, products, onOpen, height = '340vh' }) {
  const { t } = useLang()
  const outer = useRef(null)
  const track = useRef(null)
  const reduced = useReducedMotion()
  const p = useScrollProgress(outer, { disabled: reduced, mode: 'travel' })
  const [max, setMax] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const el = track.current
      const vp = el?.parentElement
      if (!el || !vp) return
      setMax(Math.max(0, el.scrollWidth - vp.clientWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [products.length])

  const isRtl = typeof document !== 'undefined' && document.documentElement.dir === 'rtl'
  const eased = easeInOut(p)
  const x = reduced ? 0 : (isRtl ? 1 : -1) * max * eased

  return (
    <section ref={outer} className="horizon" style={{ height }}>
      <div className="horizon__sticky">
        <div className="container horizon__head">
          <h2>{title}</h2>
          <p className="sub">{sub}</p>
        </div>

        <div className="horizon__viewport">
          <div className="horizon__track" ref={track} style={{ transform: `translate3d(${x}px, 0, 0)` }}>
            {products.slice(0, 9).map((pr) => (
              <button
                key={pr.id}
                className="horizon__card"
                onClick={() => onOpen(pr)}
              >
                <span className="horizon__media">
                  <img src={pr.image_url} alt={pr.name} loading="lazy" />
                </span>
                <span className="horizon__name">{pr.name}</span>
                <span className="horizon__price">{formatPrice(pr.price_jod, t)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="horizon__bar">
          <i style={{ width: `${Math.round(p * 100)}%` }} />
        </div>
      </div>
    </section>
  )
}

const GRID_SLOTS = [
  { l: 2, t: 27, w: 23, h: 31 },
  { l: 26, t: 23, w: 23, h: 35 },
  { l: 50, t: 27, w: 23, h: 31 },
  { l: 74, t: 22, w: 23, h: 36 },
  { l: 2, t: 62, w: 23, h: 31 },
  { l: 26, t: 60, w: 23, h: 33 },
  { l: 50, t: 62, w: 23, h: 31 },
  { l: 74, t: 60, w: 23, h: 33 },
]

const SCATTER_OUT = [
  { x: -130, y: -110, r: -18 },
  { x: 140, y: -120, r: 16 },
  { x: -150, y: -70, r: 14 },
  { x: 160, y: -140, r: -15 },
  { x: -170, y: 150, r: 12 },
  { x: 130, y: 180, r: -14 },
  { x: -120, y: 200, r: 10 },
  { x: 150, y: 170, r: -12 },
]

export function Collage({ title, sub, products, onOpen }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const p = useScrollProgress(ref, { disabled: reduced, mode: 'travel' })
  const tp = easeInOut(clamp01(p))
  const phase = reduced ? 0 : 1 - Math.sin(Math.PI * tp)
  const items = products.slice(0, 8)

  return (
    <section ref={ref} className="collage">
      <div className="collage__sticky">
        <div className="container collage__head">
          <h2>{title}</h2>
          <p className="sub">{sub}</p>
        </div>

        <div className="collage__stage">
          {items.map((pr, i) => {
            const g = GRID_SLOTS[i]
            const s = SCATTER_OUT[i]
            return (
              <button
                key={pr.id}
                className="collage__item"
                style={{
                  left: `${g.l}%`,
                  top: `${g.t}%`,
                  width: `${g.w}%`,
                  height: `${g.h}%`,
                  transform: `translate3d(${s.x * phase}%, ${s.y * phase}%, 0) rotate(${s.r * phase}deg)`,
                  zIndex: i,
                }}
                onClick={() => onOpen(pr)}
              >
                <img src={pr.image_url} alt={pr.name} loading="lazy" />
                <span className="collage__tag">{pr.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CategoryShowcase({ categories, onNavigate }) {
  const { t } = useLang()
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const p = useScrollProgress(ref, { disabled: reduced, mode: 'travel' })
  const tp = easeInOut(clamp01(p))

  const enterA = clamp01(tp / 0.3)
  const enterB = clamp01((tp - 0.5) / 0.3)

  const a = categories[0]
  const b = categories[1]

  return (
    <section ref={ref} className="catshow">
      <div className="catshow__sticky">
        <CatSlide cat={a} anim="wipe" enter={reduced ? 1 : enterA} onNavigate={onNavigate} />
        <CatSlide cat={b} anim="zoom" enter={reduced ? 1 : enterB} onNavigate={onNavigate} />

        <div className="catshow__hint">{t.scrollText}</div>

        <div className="catshow__dots">
          <span className={tp < 0.5 ? 'is-active' : ''} />
          <span className={tp >= 0.5 ? 'is-active' : ''} />
        </div>
      </div>
    </section>
  )
}

function CatSlide({ cat, anim, enter, onNavigate }) {
  const { t } = useLang()
  const big = cat.imgs[0]
  const rest = cat.imgs.slice(1, 3)
  const clip =
    anim === 'wipe'
      ? `inset(0 ${(1 - enter) * 100}% 0 0)`
      : `inset(${(1 - enter) * 100}% 0 0 0)`

  return (
    <div className={`catshow__slide catshow__slide--${anim}`} style={{ clipPath: clip }}>
      <div className="catshow__media">
        {big ? (
          <img
            className="catshow__big"
            src={big}
            alt={cat.label}
            loading="lazy"
            style={{
              transform:
                anim === 'zoom'
                  ? `scale(${1.22 - 0.22 * enter})`
                  : `translate3d(${(1 - enter) * 70}px, 0, 0) scale(1.05)`,
            }}
          />
        ) : (
          <div className="catshow__placeholder" />
        )}
        {rest.map((src, i) => (
          <img
            key={i}
            className={`catshow__tile catshow__tile--${i + 1}`}
            src={src}
            alt=""
            loading="lazy"
            style={{
              transform: `translate3d(${(1 - enter) * (i === 0 ? -80 : 80)}px, ${
                (1 - enter) * 50
              }px, 0) rotate(${(1 - enter) * (i === 0 ? -8 : 8)}deg)`,
            }}
          />
        ))}
      </div>

      <div className="catshow__veil" />

      <div className="catshow__panel container">
        <span className="catshow__kicker">{t.featuredCat}</span>
        <h2 className="catshow__title">{cat.label}</h2>
        <svg className="catshow__scribble" viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M6 16 C 80 4, 200 26, 296 12"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - enter}
          />
        </svg>
        <p className="catshow__sub">{cat.sub}</p>
        <div className="catshow__cta">
          <button className="btn btn--accent" onClick={() => onNavigate(cat.key)}>
            {t.shopNow}
          </button>
        </div>
      </div>
    </div>
  )
}
