// components/AnimatedCard.jsx
import { useEffect, useRef } from 'react'

function AnimatedCard({
  children,
  className = '',
  entry = true,
  hover = true,
  delay = 50,
  threshold = 0.2,
  repeat = true,        // true = re-animates every time it enters view
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!entry) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('ac-visible')
          if (!repeat) observer.disconnect()   // one-shot mode
        } else {
          if (repeat) el.classList.remove('ac-visible')  // reset for next entry
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [entry, threshold, repeat])

  return (
    <>
      <style>{`
        .ac-entry {
          opacity: 0;
          transform: translateY(-20px);           /* ← top-to-bottom */
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ac-entry.ac-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ac-hover {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .ac-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  transition-delay: 0s;   /* ← kills the entry delay on hover */
}
      `}</style>

      <div
        ref={ref}
        data-animated-card-root="true"
        className={`
          ${entry ? 'ac-entry' : ''}
          ${hover ? 'ac-hover' : ''}
          ${className}
        `.trim()}
        style={entry && delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {children}
      </div>
    </>
  )
}

export default AnimatedCard
