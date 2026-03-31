import { createContext, useContext } from 'react'

const ContactModalContext = createContext(null)

function useContactModal() {
  const context = useContext(ContactModalContext)

  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }

  return context
}

export { ContactModalContext, useContactModal }
