import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5521967578095"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500">
        <MessageCircle className="h-7 w-7" />
      </div>
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
        1
      </span>
    </a>
  )
}
