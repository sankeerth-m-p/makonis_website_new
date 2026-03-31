function SvgIcon({ className = 'h-5 w-5', children }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function FilterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 5h16l-6 7v5l-4 2v-7z" />
    </SvgIcon>
  )
}

export function MapPinIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </SvgIcon>
  )
}

export function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </SvgIcon>
  )
}

export function BuildingIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-3v17" />
      <path d="M19 21V11l-4-2.5" />
      <path d="M9 11h2" />
      <path d="M9 15h2" />
    </SvgIcon>
  )
}

export function EnvelopeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </SvgIcon>
  )
}

export function PhoneIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.66.38A2 2 0 0 1 22 16.92z" />
    </SvgIcon>
  )
}

export function BullseyeIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </SvgIcon>
  )
}

export function GearIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="m4.9 4.9 2.1 2.1" />
      <path d="m17 17 2.1 2.1" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m4.9 19.1 2.1-2.1" />
      <path d="m17 7 2.1-2.1" />
    </SvgIcon>
  )
}

export function ShieldIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.2 8.5 7 10 3.8-1.5 7-5 7-10V6z" />
    </SvgIcon>
  )
}

export function LightbulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-1.3 1.1-2 2.2-2 4H10c0-1.8-.7-2.9-2-4z" />
    </SvgIcon>
  )
}

export function HandshakeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 12 3 8" />
      <path d="M17 12l4-4" />
      <path d="M8 13l2 2c.8.8 2.2.8 3 0l2-2" />
      <path d="M8 9 6 7" />
      <path d="M16 9l2-2" />
      <path d="M7 12h4l2 2h4" />
    </SvgIcon>
  )
}

export function RocketIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14 3c3.5.4 6 2.9 6 6-2 1-4 1.4-6 1.4-1.1 0-2.1-.1-3-.3L7 14l-2-2 3.9-4C8.7 6.2 8.6 5.2 8.6 4.1 8.6 2.1 11 1 14 3z" />
      <path d="M9 15l-3 3 0 3 3-3" />
      <path d="M13 11 9 15" />
      <circle cx="16.5" cy="6.5" r="1.2" />
    </SvgIcon>
  )
}

export function GemIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m6 8 6-5 6 5-6 13z" />
      <path d="M6 8h12" />
      <path d="M12 3 9 8l3 13 3-13z" />
    </SvgIcon>
  )
}

export function QuoteIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 7H5v5h4v5H4v-6C4 7.9 5.8 6 8 6h1z" />
      <path d="M19 7h-4v5h4v5h-5v-6c0-2.1 1.8-4 4-4h1z" />
    </SvgIcon>
  )
}
