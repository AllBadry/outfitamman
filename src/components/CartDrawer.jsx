import { useEffect } from 'react'
import { useLang, useCart } from '../store'
import { formatPrice } from '../utils'

export function CartDrawer({ open, onClose, navigate }) {
  const { t } = useLang()
  const { cart, cartCount, cartTotal, removeFromCart, updateQty } = useCart()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div className={`drawer ${open ? 'is-open' : ''}`} onClick={onClose}>
      <aside className="drawer__panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer__head">
          <span>
            {t.cart} ({cartCount})
          </span>
          <button className="drawer__close" onClick={onClose} aria-label={t.close}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="drawer__empty">
            <BagIcon />
            <p>{t.emptyCart}</p>
            <button
              className="btn btn--dark"
              onClick={() => {
                onClose()
                navigate({ name: 'shop', category: null })
              }}
            >
              {t.continueShopping}
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {cart.map((item, i) => (
                <div className="citem" key={`${item.productId}-${item.color}-${item.size}`}>
                  <div className="citem__img">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div className="pcard__placeholder" />
                    )}
                  </div>
                  <div className="citem__info">
                    <span className="citem__name">{item.name}</span>
                    <span className="citem__meta">
                      {[item.color, item.size].filter(Boolean).join(' / ')}
                    </span>
                    <div className="citem__row">
                      <div className="pdp__qty citem__qty">
                        <button onClick={() => updateQty(i, item.qty - 1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(i, item.qty + 1)}>+</button>
                      </div>
                      <span className="citem__price">
                        {formatPrice(item.price * item.qty, t)}
                      </span>
                    </div>
                    <button className="citem__remove" onClick={() => removeFromCart(i)}>
                      {t.remove}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="drawer__foot">
              <div className="drawer__total">
                <span>{t.subtotal}</span>
                <span>{formatPrice(cartTotal, t)}</span>
              </div>
              <button className="btn btn--accent drawer__checkout">{t.checkout}</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function BagIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 7h12l1 13H5L6 7Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  )
}
