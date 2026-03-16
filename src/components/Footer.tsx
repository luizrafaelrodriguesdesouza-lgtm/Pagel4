export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold tracking-tight text-primary">L34f4r Integrações</p>
          <p className="text-sm text-muted-foreground mt-1">Transformando operações com IA.</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://instagram.com/l34f4rintegracoes"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Instagram @l34f4rintegracoes
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} L34f4r Integrações. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
