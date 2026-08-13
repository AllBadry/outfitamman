import { useLang } from '../store'

const MSGS = (t) => t.announcement

export function AnnouncementBar() {
  const { t } = useLang()
  const items = MSGS(t)
  const loop = [...items, ...items]
  return (
    <div className="announce">
      <div className="announce__track">
        {loop.map((m, i) => (
          <span key={i} className="announce__item">
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
