import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

const HEADING_REVEAL_FLAG = '__makonisHeadingRevealInitialized'
const HEADING_REVEAL_DELAY_MS = 80

function initHeadingReveal() {
  if (window[HEADING_REVEAL_FLAG]) return
  window[HEADING_REVEAL_FLAG] = true

  const headings = Array.from(document.querySelectorAll('h2, h3'))

  if (!headings.length || !('IntersectionObserver' in window)) {
    return
  }

  const delays = new WeakMap()
  const groups = new Map()

  headings.forEach((heading) => {
    const parent = heading.parentElement

    if (!parent) {
      return
    }

    if (!groups.has(parent)) {
      groups.set(parent, [])
    }

    groups.get(parent).push(heading)
  })

  groups.forEach((group) => {
    if (group.length < 2) {
      return
    }

    group.forEach((heading, index) => {
      delays.set(heading, index * HEADING_REVEAL_DELAY_MS)
    })
  })

  const pending = new Set(headings)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        const target = entry.target
        const delay = delays.get(target) ?? 0

        window.setTimeout(() => {
          target.classList.add('in-view')
        }, delay)

        observer.unobserve(target)
        pending.delete(target)
      })

      if (pending.size === 0) {
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  headings.forEach((heading) => observer.observe(heading))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

initHeadingReveal()
