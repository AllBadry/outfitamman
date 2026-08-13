export function Stars({ rating, count }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100))
  return (
    <div className="stars">
      <div className="stars__base" aria-hidden="true">
        ★★★★★
      </div>
      <div className="stars__fill" style={{ width: `${pct}%` }} aria-hidden="true">
        ★★★★★
      </div>
      {typeof count === 'number' && <span className="stars__count">({count})</span>}
    </div>
  )
}
