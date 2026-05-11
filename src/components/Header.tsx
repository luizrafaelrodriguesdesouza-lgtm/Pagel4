import { useState } from 'react'
import { Menu, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

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

  const whatsappLink =
    'https://wa.me/5521967578095?text=Ol%C3%A1,%20preciso%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o'

  return (
    <header className="fixed top-0 z-50 w-full bg-glass backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight glow-text text-primary">L4</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
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
          <Button className="glow-hover" onClick={() => window.open(whatsappLink, '_blank')}>
            Diagnóstico Gratuito de Automação
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
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Diagnóstico Gratuito de Automação
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
