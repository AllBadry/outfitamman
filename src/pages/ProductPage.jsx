import { useMemo, useState } from 'react'
import { useLang, useData, useCart } from '../store'
import { formatPrice, productInStock, colorHex } from '../utils'
import { Stars } from '../components/Stars'

export function ProductPage({ navigate, slug }) {
  const { t } = useLang()
  const { products } = useData()
  const { addToCart } = useCart()

  const product = useMemo(
    () => products.find((p) => p.slug === slug) || null,
    [products, slug],
  )

  const [variant, setVariant] = useState(0)
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container shop__empty" style={{ paddingBlock: 80 }}>
        <p>{t.noResults}</p>
        <button className="btn btn--dark" onClick={() => navigate({ name: 'shop' })}>
          {t.backToShop}
        </button>
      </div>
    )
  }

  const inStock = productInStock(product)
  const v = product.variants[variant]
  const gallery = [
    ...(product.image_url ? [product.image_url] : []),
    ...(product.gallery || []).filter((g) => !g.includes('dummyimage')),
  ]
  const selectedSize = v?.sizes.find((s) => s.size === size)

  const chooseSize = (sz) => {
    setSize(sz)
    setAdded(false)
  }

  const onAdd = () => {
    if (!inStock || !size) return
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image_url,
      color: v?.color || '',
      size,
      price: product.price_jod,
      qty,
    })
    setAdded(true)
  }

  return (
    <section className="pdp">
      <div className="container pdp__grid">
        <div className="pdp__media">
          <div className="pdp__main">
            {gallery[activeImg] ? (
              <>
                <img src={gallery[activeImg]} alt={product.name} />
                {v && <div className="pdp__tint" style={{ background: colorHex(v.color) }} />}
              </>
            ) : (
              <div className="pcard__placeholder">{product.name}</div>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="pdp__thumbs">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  className={`pdp__thumb ${i === activeImg ? 'is-active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={g} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pdp__info">
          <span className="pdp__cat">
            {product.categories?.join(' · ')}
          </span>
          <h1 className="pdp__name">{product.name}</h1>
          <div className="pdp__stars">
            <Stars rating={product.rating} count={product.reviews_count} />
            <span>
              {product.reviews_count} {t.pdpReviews}
            </span>
          </div>
          <div className="pdp__price">{formatPrice(product.price_jod, t)}</div>

          {inStock ? (
            <>
              <div className="pdp__block">
                <span className="pdp__label">
                  {t.pdpColors}
                  {v && <em> — {v.color}</em>}
                </span>
                <div className="pdp__colors">
                  {product.variants.map((vv, i) => (
                    <button
                      key={vv.color}
                      className={`pdp__swatch ${i === variant ? 'is-active' : ''}`}
                      style={{ background: colorHex(vv.color) }}
                      onClick={() => {
                        setVariant(i)
                        setSize(null)
                        setActiveImg(0)
                        setAdded(false)
                      }}
                      aria-label={vv.color}
                      title={vv.color}
                    />
                  ))}
                </div>
              </div>

              <div className="pdp__block">
                <span className="pdp__label">{t.pdpSizes}</span>
                <div className="pdp__sizes">
                  {v?.sizes.map((s) => (
                    <button
                      key={s.size}
                      className={`pdp__size ${size === s.size ? 'is-active' : ''} ${s.stock === 0 ? 'is-disabled' : ''}`}
                      disabled={s.stock === 0}
                      onClick={() => chooseSize(s.size)}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
                {!size && <span className="pdp__hint">{t.selectOption}</span>}
              </div>

              <div className="pdp__buy">
                <div className="pdp__qty">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(selectedSize?.stock || 99, q + 1))}>
                    +
                  </button>
                </div>
                <button
                  className={`btn btn--dark pdp__add ${added ? 'is-added' : ''}`}
                  disabled={!size}
                  onClick={onAdd}
                >
                  {added ? t.added : t.addToCart}
                </button>
              </div>
            </>
          ) : (
            <div className="pdp__soldout">
              <span className="pcard__badge pcard__badge--sold">{t.outOfStock}</span>
            </div>
          )}

          <div className="pdp__desc">
            <span className="pdp__label">{t.pdpDescription}</span>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
