import { useState } from 'react'
import { useLang } from '../store'
import { formatPrice, productInStock, colorHex } from '../utils'
import { Stars } from './Stars'

export function ProductCard({ product, onOpen, onQuickView, featured = false }) {
  const { t } = useLang()
  const [imgErr, setImgErr] = useState(false)
  const inStock = productInStock(product)
  const secondImg = product.gallery?.[1]
  const showSwap = secondImg && !imgErr && !secondImg.includes('dummyimage')

  const img = !imgErr && product.image_url ? product.image_url : null
  const colors = product.variants.map((v) => v.color).filter(Boolean)

  return (
    <article className={`pcard ${featured ? 'pcard--featured' : ''}`}>
      <div className="pcard__media" onClick={() => onOpen(product)}>
        <div className="pcard__badge-wrap">
          {!inStock && <span className="pcard__badge pcard__badge--sold">{t.outOfStock}</span>}
          {product.categories?.includes('Summer 2026') && inStock && (
            <span className="pcard__badge">NEW</span>
          )}
        </div>
        {img ? (
          <>
            <img
              className="pcard__img"
              src={img}
              alt={product.name}
              loading="lazy"
              onError={() => setImgErr(true)}
            />
            {showSwap && (
              <img
                className="pcard__img pcard__img--alt"
                src={secondImg}
                alt={product.name}
                loading="lazy"
              />
            )}
          </>
        ) : (
          <div className="pcard__placeholder">{product.name}</div>
        )}
        <button className="pcard__add" onClick={() => onQuickView(product)}>
          + {t.quickAdd}
        </button>
      </div>
      <div className="pcard__meta" onClick={() => onOpen(product)}>
        <h3 className="pcard__name">{product.name}</h3>
        <div className="pcard__row">
          <Stars rating={product.rating} count={product.reviews_count} />
          {colors.length > 0 && (
            <div className="pcard__colors" aria-label={t.pdpColors}>
              {colors.slice(0, 5).map((c) => (
                <span
                  key={c}
                  className="pcard__swatch"
                  style={{ background: colorHex(c) }}
                  title={c}
                />
              ))}
              {colors.length > 5 && <span className="pcard__more">+{colors.length - 5}</span>}
            </div>
          )}
        </div>
        <div className="pcard__price">{formatPrice(product.price_jod, t)}</div>
      </div>
    </article>
  )
}
