import { useState } from 'react'
import { useLang } from '../store'

export function Footer({ navigate }) {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="footer__news">
        <div className="container footer__news-inner">
          <div>
            <h3 className="footer__news-title">{t.newsletterTitle}</h3>
            <p className="footer__news-sub">{t.newsletterSub}</p>
          </div>
          {subscribed ? (
            <span className="footer__news-ok">{t.newsletterOk}</span>
          ) : (
            <form className="footer__news-form" onSubmit={onSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                required
              />
              <button type="submit" className="btn btn--accent">
                {t.newsletterBtn}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>{t.brand}</span>
            <em>{t.brandSub}</em>
          </div>
          <p className="footer__tagline">{t.madeFor}</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6V11H8.4v3h2.4v7h2.7Z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3c.3 1.8 1.4 3 3.5 3.4v2.6c-1.3 0-2.5-.4-3.5-1v6.4a5.4 5.4 0 1 1-5.4-5.4c.3 0 .7 0 1 .1v2.7a2.7 2.7 0 1 0 1.9 2.6V3h2.5Z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t.support}</h4>
          <a href="#" onClick={() => navigate({ name: 'shop', category: null })}>{t.logInOrder}</a>
          <a href="#">{t.shipping}</a>
          <a href="#">{t.returns}</a>
          <a href="#">{t.faqs}</a>
          <a href="#">{t.contactUs}</a>
          <a href="#">{t.storeLocator}</a>
        </div>

        <div className="footer__col">
          <h4>{t.company}</h4>
          <a href="#">{t.ourStory}</a>
          <a href="#">{t.blog}</a>
          <a href="#" onClick={() => navigate({ name: 'shop', category: null })}>{t.shopAll}</a>
          <a href="#">{t.careers}</a>
        </div>

        <div className="footer__col">
          <h4>{t.resources}</h4>
          <a href="#">{t.reviews}</a>
          <a href="#">{t.promoRules}</a>
          <a href="#">{t.privacy}</a>
          <a href="#">{t.terms}</a>
          <a href="#">{t.sitemap}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 {t.rights}</span>
          <span>{t.currencyLabel} · AMMAN, JO</span>
        </div>
      </div>
    </footer>
  )
}
