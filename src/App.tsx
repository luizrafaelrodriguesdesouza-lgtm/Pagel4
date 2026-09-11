import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import DeliveriesPage from './pages/DeliveriesPage'
import ConfigPage from './pages/ConfigPage'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import Layout from './components/Layout'
import { AuthProvider } from '@/hooks/use-auth'
import { reportWebVitals } from '@/lib/web-vitals'

const App = () => {
  useEffect(() => {
    reportWebVitals()
  }, [])

  return (
    <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
            </Route>
            <Route path="/entregas" element={<DeliveriesPage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
