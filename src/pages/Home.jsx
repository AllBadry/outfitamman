import { useMemo, useRef, useState, useEffect } from 'react'
import { useLang, useData, useUI } from '../store'
import { ProductCard } from '../components/ProductCard'
import { ProductScroller } from '../components/ProductScroller'
import { Rise, Horizon, Collage, CategoryShowcase } from '../components/ScrollFx'
import { Stars } from '../components/Stars'
import { Reveal, RevealGroup } from '../components/Reveal'
import { useParallax } from '../hooks'
import { isActiveCategory, isUnderwear } from '../utils'

const categoryMeta = {
  rgal: { key: 'men', label: 'Men', color: '#e6312a' },
  atfal: { key: 'kids', label: 'Kids', color: '#1f8a4c' },
}

export function Home({ navigate }) {
  const { t } = useLang()
  const { products } = useData()

  const byCat = useMemo(() => {
    const map = {}
    for (const p of products) {
      const meta = categoryMeta[p.main_category]
      if (!meta) continue
      if (!map[meta.key]) map[meta.key] = []
      map[meta.key].push(p)
    }
    return map
  }, [products])

  const newDrops = useMemo(
    () =>
      [...products]
        .filter(
          (p) =>
            p.categories?.includes('Summer 2026') &&
            isActiveCategory(p) &&
            !isUnderwear(p),
        )
        .slice(0, 8),
    [products],
  )

  const bestSellers = useMemo(
    () =>
      [...products]
        .filter((p) => isActiveCategory(p) && !isUnderwear(p))
        .sort((a, b) => b.reviews_count - a.reviews_count)
        .slice(0, 8),
    [products],
  )

  const uniqueByImage = (arr, n) => {
    const seen = new Set()
    const out = []
    for (const p of arr) {
      if (!p?.image_url || p.image_url.includes('dummyimage') || seen.has(p.image_url)) continue
      seen.add(p.image_url)
      out.push(p)
      if (out.length >= n) break
    }
    return out
  }

  const lookbook = useMemo(
    () =>
      uniqueByImage([...products].filter((p) => isActiveCategory(p) && !isUnderwear(p)), 8),
    [products],
  )

  const openProduct = (p) => navigate({ name: 'product', slug: p.slug })

  const showcase = useMemo(() => {
    const imgs = (key, n) =>
      uniqueByImage(byCat[key] || [], n).map((p) => p.image_url)
    return [
      {
        key: 'men',
        label: t.men,
        sub: t.shopHeroMenSub,
        imgs: imgs('men', 3),
      },
      {
        key: 'kids',
        label: t.kids,
        sub: t.shopHeroKidsSub,
        imgs: imgs('kids', 3),
      },
    ]
  }, [byCat, t])

  const catImages = useMemo(() => {
    const out = {}
    for (const key of Object.keys(byCat)) {
      out[key] = (byCat[key] || [])
        .map((p) => p.image_url)
        .filter(Boolean)
        .slice(0, 4)
    }
    return out
  }, [byCat])

  return (
    <>
      <Hero navigate={navigate} images={catImages} />
      <Marquee accent items={t.announcement} />
      <CategoryShowcase
        categories={showcase}
        onNavigate={(key) => navigate({ name: 'shop', category: key })}
      />
      <ProductSection
        title={t.newDrops}
        sub={t.newDropsSub}
        viewAll={() => navigate({ name: 'shop', category: 'new' })}
        products={newDrops}
        onOpen={openProduct}
      />
      <Horizon
        title={t.horizonTitle}
        sub={t.horizonSub}
        products={bestSellers}
        onOpen={openProduct}
      />
      <Banner navigate={navigate} />
      <Reviews />
      <Collage
        title={t.collageTitle}
        sub={t.collageSub}
        products={lookbook}
        onOpen={openProduct}
      />
      <TriTiles navigate={navigate} byCat={byCat} />
      <ProductSection
        title={t.weGotYourBack}
        sub={t.weGotYourBackSub}
        viewAll={() => navigate({ name: 'shop', category: null })}
        products={bestSellers}
        onOpen={openProduct}
      />
      <MoveBanner navigate={navigate} />
    </>
  )
}

function Hero({ navigate, images }) {
  const { t, lang } = useLang()
  const bgOffset = useParallax(0.3)
  const contentOffset = useParallax(0.12)
  const cols = [
    ...(images.rgal || []).slice(0, 2),
    ...(images.atfal || []).slice(0, 2),
  ].filter(Boolean)

  return (
    <section className="hero">
      <div
        className="hero__grid"
        style={{ transform: `translateY(${bgOffset}px)` }}
      >
        {cols.map((src, i) => (
          <div className={`hero__cell hero__cell--${i + 1}`} key={i}>
            <img src={src} alt="" loading="eager" />
          </div>
        ))}
      </div>
      <div className="hero__overlay" />
      <div
        className="hero__content container"
        style={{ transform: `translateY(${contentOffset * -1}px)` }}
      >
        <span className="hero__kicker fade-up">{t.heroKicker}</span>
        <h1 className="hero__title fade-up" style={{ animationDelay: '0.08s' }}>
          {lang === 'ar' ? (
            <>
              {t.heroLine1}
              <br />
              <em>{t.heroLine2}</em>
              <br />
              {t.heroLine3}
            </>
          ) : (
            <>
              {t.heroLine1} <em>{t.heroLine2}</em> {t.heroLine3}
            </>
          )}
        </h1>
        <div className="hero__actions fade-up" style={{ animationDelay: '0.16s' }}>
          <button
            className="btn btn--accent"
            onClick={() => navigate({ name: 'shop', category: 'new' })}
          >
            {t.heroCta}
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => navigate({ name: 'shop', category: null })}
          >
            {t.heroCta2}
          </button>
        </div>
      </div>
      <div className="hero__scroll">
        <span>{t.scrollText}</span>
        <i />
      </div>
    </section>
  )
}

function Marquee({ items, accent }) {
  const loop = [...items, ...items]
  return (
    <div className={`marquee ${accent ? 'marquee--accent' : ''}`}>
      <div className="marquee__track">
        {loop.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  )
}

function ProductSection({ title, sub, viewAll, products, onOpen, scroller = true }) {
  const { t } = useLang()
  const { openQuickView } = useUI()
  return (
    <Rise as="section" className="psection">
      <Reveal className="container section-title">
        <div>
          <h2>{title}</h2>
          {sub && <p className="sub">{sub}</p>}
        </div>
        <button className="link-arrow" onClick={viewAll}>
          {t.viewAll}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 6h16M12 1l5 5-5 5" />
          </svg>
        </button>
      </Reveal>
      {scroller ? (
        <Reveal className="container">
          <ProductScroller products={products} onOpen={onOpen} />
        </Reveal>
      ) : (
        <RevealGroup className="container pgrid" stagger={60}>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={onOpen}
              onQuickView={openQuickView}
            />
          ))}
        </RevealGroup>
      )}
    </Rise>
  )
}

function Banner({ navigate }) {
  const { t } = useLang()
  return (
    <Rise as="section" className="banner">
      <Reveal className="banner__content container">
        <span className="banner__kicker">{t.summerBanner}</span>
        <h2 className="banner__title">{t.summerBannerTitle}</h2>
        <p className="banner__sub">{t.summerBannerSub}</p>
        <button
          className="btn btn--accent"
          onClick={() => navigate({ name: 'shop', category: 'new' })}
        >
          {t.summerBanner}
        </button>
      </Reveal>
    </Rise>
  )
}

const REVIEWS = [
  { name: 'Yazan K.', text: 'Pssssh this tee is so dope! great cut, bomber construction, a+ design.' },
  { name: 'Nancy B.', text: 'OUTFIT’s quality is the REAL DEAL. Love my new summer shorts, they fit perfect!' },
  { name: 'John H.', text: 'The fabric quality is insane. Your wallet will thank you before anything else.' },
  { name: 'Owen E.', text: 'I own several pieces from them now. Super comfy, insane durability.' },
  { name: 'Mauricio R.', text: "I'm impressed. Fast delivery in Amman and top quality. Thx!" },
]

function Reviews() {
  const { t } = useLang()
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const timer = useRef(null)

  const next = (dir) => {
    setFade(false)
    setTimeout(() => {
      setIdx((i) => (i + dir + REVIEWS.length) % REVIEWS.length)
      setFade(true)
    }, 250)
  }

  useEffect(() => {
    timer.current = setInterval(() => next(1), 5000)
    return () => clearInterval(timer.current)
  }, [])

  const r = REVIEWS[idx]
  return (
    <Rise as="section" className="reviews">
      <Reveal className="container reviews__inner">
        <div className="reviews__head">
          <h2>{t.reviewsTitle}</h2>
          <p className="sub">{t.reviewsSub}</p>
        </div>
        <div className="reviews__quote-wrap">
          <div className={`reviews__quote ${fade ? 'is-visible' : ''}`}>
            <span className="reviews__mark">“</span>
            <blockquote>{r.text}</blockquote>
            <div className="reviews__foot">
              <Stars rating={5} />
              <span className="reviews__name">{r.name}</span>
            </div>
          </div>
        </div>
        <div className="reviews__dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`reviews__dot ${i === idx ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`review ${i + 1}`}
            />
          ))}
        </div>
      </Reveal>
    </Rise>
  )
}

function TriTiles({ navigate, byCat }) {
  const { t } = useLang()
  const tiles = [
    { key: 'men', label: t.commute },
    { key: 'kids', label: t.reflect },
    { key: 'men', label: t.repel },
  ]
  const imgs = {
    men: byCat.men || [],
    kids: byCat.kids || [],
  }
  const idx = { men: 0, kids: 0 }
  return (
    <Rise as="section" className="tri">
      <RevealGroup className="container tri__grid" stagger={120}>
        {tiles.map((ti, i) => {
          const arr = imgs[ti.key]
          const src = arr[idx[ti.key]]?.image_url
          idx[ti.key] += 1
          return (
            <button
              key={i}
              className="tri__card"
              onClick={() => navigate({ name: 'shop', category: ti.key })}
            >
              <div className="tri__media">
                {src ? <img src={src} alt="" loading="lazy" /> : <div />}
                <span className="tri__label">{ti.label}</span>
              </div>
            </button>
          )
        })}
      </RevealGroup>
    </Rise>
  )
}

function MoveBanner({ navigate }) {
  const { t } = useLang()
  return (
    <Rise as="section" className="move">
      <Reveal className="container move__inner">
        <h2 className="move__title">{t.moveTitle}</h2>
        <p className="move__sub">{t.moveSub}</p>
        <button
          className="btn btn--light"
          onClick={() => navigate({ name: 'shop', category: null })}
        >
          {t.moveCta}
        </button>
      </Reveal>
    </Rise>
  )
}
