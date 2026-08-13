import { useState } from 'react'
import { useLang, useCart } from '../store'
import { AnnouncementBar } from './AnnouncementBar'

const CATS = ['men', 'kids']

export function Header({ navigate, page }) {
  const { t, lang, setLang } = useLang()
  const { cartCount, setCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const go = (to) => {
    setMenuOpen(false)
    setSearchOpen(false)
    navigate(to)
  }

  const onSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      go({ name: 'shop', query: query.trim(), category: null })
      setQuery('')
    }
  }

  const cat = (key) =>
    CATS.find((c) => page.name === 'shop' && page.category === c) === key

  return (
    <>
      <AnnouncementBar />
      <header className="header">
        <div className="header__inner container">
          <button
            className="header__burger"
            onClick={() => setMenuOpen(true)}
            aria-label={t.menu}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="header__nav">
            <button
              className={`header__link ${page.name === 'home' ? 'is-active' : ''}`}
              onClick={() => go({ name: 'home' })}
            >
              {t.home}
            </button>
            <button
              className={`header__link ${page.name === 'shop' && !page.category ? 'is-active' : ''}`}
              onClick={() => go({ name: 'shop', category: null })}
            >
              {t.newFeatured}
            </button>
            {CATS.map((c) => (
              <button
                key={c}
                className={`header__link ${cat(c) ? 'is-active' : ''}`}
                onClick={() => go({ name: 'shop', category: c })}
              >
                {t[c]}
              </button>
            ))}
            <button
              className="header__link header__link--sale"
              onClick={() => go({ name: 'shop', category: 'sale' })}
            >
              {t.sale}
            </button>
          </nav>

          <button className="header__logo" onClick={() => go({ name: 'home' })}>
            <span className="header__logo-main">{t.brand}</span>
            <span className="header__logo-sub">{t.brandSub}</span>
          </button>

          <div className="header__actions">
            <button
              className="header__icon"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label={t.search}
            >
              <SearchIcon />
            </button>
            <button
              className="header__lang"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              aria-label="Switch language"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              className="header__icon"
              onClick={() => setCartOpen(true)}
              aria-label={t.cart}
            >
              <BagIcon />
              {cartCount > 0 && <span className="header__cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>

        <div className={`header__search ${searchOpen ? 'is-open' : ''}`}>
          <form className="container header__search-form" onSubmit={onSearch}>
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              autoFocus={searchOpen}
            />
            <button type="button" onClick={() => setSearchOpen(false)}>
              {t.close}
            </button>
          </form>
        </div>

        <div className={`header__mobile ${menuOpen ? 'is-open' : ''}`}>
          <div className="header__mobile-top">
            <span className="header__logo-main">{t.brand}</span>
            <button className="header__close" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          </div>
          <nav className="header__mobile-nav">
            <button onClick={() => go({ name: 'home' })}>{t.home}</button>
            <button onClick={() => go({ name: 'shop', category: null })}>
              {t.newFeatured}
            </button>
            {CATS.map((c) => (
              <button key={c} onClick={() => go({ name: 'shop', category: c })}>
                {t[c]}
              </button>
            ))}
            <button onClick={() => go({ name: 'shop', category: 'sale' })}>
              {t.sale}
            </button>
          </nav>
          <div className="header__mobile-foot">
            <button
              className="btn btn--accent"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 7h12l1 13H5L6 7Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  )
}
