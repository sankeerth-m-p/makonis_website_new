import { useMemo, useState } from 'react'
import ContactFormModal from './ContactFormModal.jsx'
import ContactOptionsModal from './ContactOptionsModal.jsx'
import { ContactModalContext } from './ContactModalContext.js'

function ContactModalProvider({ children }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const value = useMemo(
    () => ({
      openContactOptions: () => setIsOptionsOpen(true),
      openContactForm: () => setIsFormOpen(true),
      closeContactModals: () => {
        setIsOptionsOpen(false)
        setIsFormOpen(false)
      },
    }),
    [],
  )

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactOptionsModal
        isOpen={isOptionsOpen}
        onClose={() => setIsOptionsOpen(false)}
        onContactFormClick={() => {
          setIsOptionsOpen(false)
          setIsFormOpen(true)
        }}
      />
      <ContactFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </ContactModalContext.Provider>
  )
}
export { ContactModalProvider }
