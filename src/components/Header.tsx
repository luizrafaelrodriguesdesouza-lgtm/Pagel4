import { useState } from 'react'
import { Menu, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import logoUrl from '@/assets/editedimage1780319473364-fd281.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#problemas', label: 'Problemas' },
    { href: '#solucao', label: 'Solução' },
    { href: '#comparativo', label: 'Comparativo' },
    { href: '#api-oficial', label: 'API Oficial' },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const formLink = 'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa'

  return (
    <header className="fixed top-0 z-50 w-full bg-glass backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6 md:px-12 lg:px-16">
        <a href="#" className="flex items-center gap-2 pr-12">
          <img
            src={logoUrl}
            alt="Raphael L4 Integrações"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleScroll}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/raphael_l4_integracoes/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button className="glow-hover" onClick={() => window.open(formLink, '_blank')}>
            Solicitar Orçamento Rápido
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-6">Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleScroll}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://www.instagram.com/raphael_l4_integracoes/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors mt-2"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <Button
                  className="w-full mt-4 glow-hover"
                  onClick={() => window.open(formLink, '_blank')}
                >
                  Solicitar Orçamento Rápido
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
