import logoUrl from '@/assets/editedimage1775550192392-591da.png'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <img src={logoUrl} alt="Raphael L4 Logo" className="h-12 w-auto object-contain" />
          <div>
            <p className="text-lg font-bold tracking-tight text-primary">Raphael L4</p>
            <p className="text-sm text-muted-foreground mt-1">Transformando operações com IA.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/raphael_l4_integracoes/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Instagram @raphael_l4_integracoes
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Raphael L4. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
