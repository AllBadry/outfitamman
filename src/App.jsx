import { useEffect, useState, useCallback, useMemo } from 'react'
import { translations } from './i18n'
import { LangContext, CartContext, DataContext, UIContext } from './store'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductPage } from './pages/ProductPage'
import { CartDrawer } from './components/CartDrawer'
import { QuickView } from './components/QuickView'
import './App.css'

const CART_KEY = 'outfit_cart_v1'

function App() {
  const [lang, setLangRaw] = useState(() => localStorage.getItem('outfit_lang') || 'ar')
  const [page, setPage] = useState({ name: 'home' })
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartOpen, setCartOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    fetch('/products.json')
      .then((r) => r.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = translations[lang].dir
    localStorage.setItem('outfit_lang', lang)
  }, [lang])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const setLang = useCallback((l) => setLangRaw(l), [])

  const t = useMemo(() => translations[lang], [lang])

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart])
  const cartTotal = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart],
  )

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === item.productId && i.color === item.color && i.size === item.size,
      )
      if (idx > -1) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + item.qty }
        return next
      }
      return [...prev, item]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const updateQty = useCallback((index, qty) => {
    setCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, qty: Math.max(1, qty) } : item)),
    )
  }, [])

  const navigate = useCallback((to) => {
    setPage(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <CartContext.Provider
        value={{ cart, cartCount, cartTotal, addToCart, removeFromCart, updateQty, setCartOpen }}
      >
        <DataContext.Provider value={{ products, loading }}>
          <UIContext.Provider
            value={{ openQuickView: (p) => setQuickView(p), closeQuickView: () => setQuickView(null) }}
          >
          <div className="app">
            <Header navigate={navigate} page={page} />
            {loading ? (
              <div className="app-loading">
                <div className="app-loading__bar" />
              </div>
            ) : page.name === 'home' ? (
              <Home navigate={navigate} />
            ) : page.name === 'shop' ? (
              <Shop
                key={`${page.category || 'all'}:${page.query || ''}`}
                navigate={navigate}
                category={page.category || null}
                initialQuery={page.query || ''}
              />
            ) : page.name === 'product' ? (
              <ProductPage key={page.slug} navigate={navigate} slug={page.slug} />
            ) : null}
            <Footer navigate={navigate} />
            <CartDrawer
              open={cartOpen}
              onClose={() => setCartOpen(false)}
              navigate={navigate}
            />
            <QuickView
              key={quickView?.id || 'qv'}
              product={quickView}
              onClose={() => setQuickView(null)}
            />
          </div>
          </UIContext.Provider>
        </DataContext.Provider>
      </CartContext.Provider>
    </LangContext.Provider>
  )
}

export default App
