import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#problemas', label: 'Problemas' },
    { href: '#solucao', label: 'Solução' },
    { href: '#comparativo', label: 'Comparativo' },
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

  return (
    <header className="fixed top-0 z-50 w-full bg-glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="text-xl font-extrabold tracking-tight glow-text text-primary">
          L34f4r <span className="text-foreground font-medium">Integrações</span>
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
          <Button
            className="glow-hover"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Diagnóstico Gratuito
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
                <Button
                  className="w-full mt-4 glow-hover"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  Diagnóstico Gratuito
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
