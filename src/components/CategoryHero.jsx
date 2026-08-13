import { useLang } from '../store'
import { useParallax } from '../hooks'

export function CategoryHero({ titleLines, kicker, sub, image, alt = '', cta, onCta, count }) {
  const { t } = useLang()
  const bgOffset = useParallax(0.35)
  const contentOffset = useParallax(0.12)

  return (
    <section className="cathero">
      {image && (
        <div
          className="cathero__bg"
          style={{ transform: `translateY(${bgOffset}px)` }}
        >
          <img src={image} alt={alt} />
          <div className="cathero__scrim" />
        </div>
      )}

      <div className="container cathero__content" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className="cathero__text">
          {kicker && <span className="cathero__kicker">{kicker}</span>}

          <h1 className="cathero__title">
            {titleLines.map((line, i) => (
              <span className="cathero__line-wrap" key={i} style={{ '--i': i }}>
                <span className="cathero__line">{line}</span>
              </span>
            ))}
          </h1>

          {sub && <p className="cathero__sub">{sub}</p>}

          {typeof count === 'number' && (
            <span className="cathero__count">
              {count} {t.results}
            </span>
          )}

          {cta && (
            <button className="btn btn--accent cathero__cta" onClick={onCta}>
              {cta}
            </button>
          )}
        </div>
      </div>

      <div className="cathero__scroll">
        <span>{t.scrollText}</span>
        <i />
      </div>
    </section>
  )
}
