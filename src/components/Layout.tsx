import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import { AuditModal } from './AuditModal'

export default function Layout() {
  const [auditOpen, setAuditOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header onOpenAudit={() => setAuditOpen(true)} />
      <main className="flex-1">
        <Outlet context={{ openAuditModal: () => setAuditOpen(true) }} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AuditModal open={auditOpen} onOpenChange={setAuditOpen} />
    </div>
  )
}
