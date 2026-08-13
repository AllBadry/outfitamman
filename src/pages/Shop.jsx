import { useMemo, useState, useEffect } from 'react'
import { useLang, useData, useUI } from '../store'
import { ProductCard } from '../components/ProductCard'
import { CategoryHero } from '../components/CategoryHero'
import { Reveal, RevealGroup } from '../components/Reveal'
import { productInStock, isActiveCategory, isUnderwear } from '../utils'

const CAT_KEY = {
  rgal: 'men',
  atfal: 'kids',
}

export function Shop({ navigate, category, initialQuery = '' }) {
  const { t } = useLang()
  const { products } = useData()
  const { openQuickView } = useUI()
  const [cat, setCat] = useState(category)
  const [sort, setSort] = useState('new')
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [cat])

  const allProducts = useMemo(
    () =>
      products.filter((p) => isActiveCategory(p) && productInStock(p) && !isUnderwear(p)),
    [products],
  )

  const menProducts = useMemo(
    () => allProducts.filter((p) => p.main_category === 'rgal'),
    [allProducts],
  )
  const kidsProducts = useMemo(
    () => allProducts.filter((p) => p.main_category === 'atfal'),
    [allProducts],
  )

  const topRated = useMemo(
    () =>
      [...allProducts].sort(
        (a, b) => b.reviews_count - a.reviews_count || b.rating - a.rating,
      ),
    [allProducts],
  )

  const hero = useMemo(() => {
    const pick = (list) => list.find((p) => p.image_url)?.image_url
    const base = {
      all: {
        kicker: t.newDrops,
        titleLines: t.shopHeroAllTitle,
        sub: t.shopHeroAllSub,
        image: pick(topRated),
      },
      new: {
        kicker: t.shop,
        titleLines: t.shopHeroNewTitle,
        sub: t.shopHeroNewSub,
        image: pick(allProducts.filter((p) => p.categories?.includes('Summer 2026'))),
      },
      men: {
        kicker: t.men,
        titleLines: t.shopHeroMenTitle,
        sub: t.shopHeroMenSub,
        image: pick([...menProducts].sort((a, b) => b.reviews_count - a.reviews_count)),
      },
      kids: {
        kicker: t.kids,
        titleLines: t.shopHeroKidsTitle,
        sub: t.shopHeroKidsSub,
        image: pick([...kidsProducts].sort((a, b) => b.reviews_count - a.reviews_count)),
      },
      sale: {
        kicker: t.sale,
        titleLines: t.shopHeroSaleTitle,
        sub: t.shopHeroSaleSub,
        image: pick(topRated),
      },
    }
    return base[cat] || base.all
  }, [cat, t, topRated, menProducts, kidsProducts, allProducts])

  const filtered = useMemo(() => {
    let list = allProducts
    if (cat === 'sale' || cat === 'new') {
      list = allProducts.filter((p) => p.categories?.includes('Summer 2026'))
    } else if (cat) {
      const mc = Object.keys(CAT_KEY).find((k) => CAT_KEY[k] === cat)
      if (mc) list = allProducts.filter((p) => p.main_category === mc)
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      )
    }

    switch (sort) {
      case 'price_asc':
        list = [...list].sort((a, b) => a.price_jod - b.price_jod)
        break
      case 'price_desc':
        list = [...list].sort((a, b) => b.price_jod - a.price_jod)
        break
      case 'rating':
        list = [...list].sort(
          (a, b) => b.rating - a.rating || b.reviews_count - a.reviews_count,
        )
        break
      default:
        list = [...list].sort((a, b) => b.id - a.id)
    }
    return list
  }, [allProducts, cat, query, sort])

  const title = cat
    ? cat === 'sale'
      ? t.sale
      : cat === 'new'
        ? t.newDrops
        : t[cat]
    : t.shopAll

  const tabs = [
    { key: null, label: t.all },
    { key: 'new', label: t.newDrops },
    { key: 'men', label: t.men },
    { key: 'kids', label: t.kids },
    { key: 'sale', label: t.sale },
  ]

  return (
    <section className="shop">
      <CategoryHero
        key={cat || 'all'}
        kicker={hero.kicker}
        titleLines={hero.titleLines}
        sub={hero.sub}
        image={hero.image}
        count={filtered.length}
        cta={t.shopNow}
        onCta={() =>
          document.getElementById('shop-list')?.scrollIntoView({ behavior: 'smooth' })
        }
      />

      <Reveal className="shop__head container">
        <div>
          <span className="shop__kicker">{t.shop}</span>
          <h1>{title}</h1>
        </div>
        <p className="shop__count">
          {filtered.length} {t.results}
        </p>
      </Reveal>

      <Reveal delay={80} className="shop__toolbar container">
        <div className="shop__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key || 'all'}
              className={`shop__tab ${cat === tab.key ? 'is-active' : ''}`}
              onClick={() => setCat(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="shop__controls">
          <label className="shop__search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
            />
          </label>
          <select
            className="shop__sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label={t.sortBy}
          >
            <option value="new">{t.sortBy}</option>
            <option value="price_asc">{t.lowToHigh}</option>
            <option value="price_desc">{t.highToLow}</option>
            <option value="rating">{t.topRated}</option>
          </select>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <div className="container shop__empty">{t.noResults}</div>
      ) : (
        <RevealGroup className="container pgrid" id="shop-list" stagger={60}>
          {filtered.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              featured={i === 0}
              onOpen={(prod) => navigate({ name: 'product', slug: prod.slug })}
              onQuickView={openQuickView}
            />
          ))}
        </RevealGroup>
      )}
    </section>
  )
}
