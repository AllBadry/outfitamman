import { useState, useEffect } from 'react'
import { useLang, useCart } from '../store'
import { formatPrice, productInStock, colorHex } from '../utils'
import { Stars } from './Stars'

export function QuickView({ product, onClose }) {
  const { t } = useLang()
  const { addToCart } = useCart()
  const [variant, setVariant] = useState(0)
  const [size, setSize] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (product) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  const inStock = productInStock(product)
  const v = product.variants[variant]

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
      qty: 1,
    })
    setAdded(true)
    setTimeout(onClose, 600)
  }

  return (
    <div className="qv" onClick={onClose}>
      <div className="qv__panel" onClick={(e) => e.stopPropagation()}>
        <button className="qv__close" onClick={onClose} aria-label={t.close}>
          ✕
        </button>
        <div className="qv__media">
          {product.image_url ? (
            <>
              <img src={product.image_url} alt={product.name} />
              {v && <div className="pdp__tint" style={{ background: colorHex(v.color) }} />}
            </>
          ) : (
            <div className="pcard__placeholder">{product.name}</div>
          )}
        </div>
        <div className="qv__body">
          <span className="pdp__cat">{product.categories?.join(' · ')}</span>
          <h3>{product.name}</h3>
          <div className="pdp__stars">
            <Stars rating={product.rating} count={product.reviews_count} />
          </div>
          <div className="pdp__price">{formatPrice(product.price_jod, t)}</div>

          {inStock ? (
            <>
              <div className="pdp__block">
                <span className="pdp__label">{t.pdpColors}</span>
                <div className="pdp__colors">
                  {product.variants.map((vv, i) => (
                    <button
                      key={vv.color}
                      className={`pdp__swatch ${i === variant ? 'is-active' : ''}`}
                      style={{ background: colorHex(vv.color) }}
                      onClick={() => {
                        setVariant(i)
                        setSize(null)
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
                      onClick={() => {
                        setSize(s.size)
                        setAdded(false)
                      }}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
                {!size && <span className="pdp__hint">{t.selectOption}</span>}
              </div>
              <button
                className={`btn btn--dark qv__add ${added ? 'is-added' : ''}`}
                disabled={!size}
                onClick={onAdd}
              >
                {added ? t.added : t.addToCart}
              </button>
            </>
          ) : (
            <div className="pdp__soldout">
              <span className="pcard__badge pcard__badge--sold">{t.outOfStock}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
