import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

function AnimatedCounter({
  value,
  format,
  duration = 2000,
  isVisible,
}: {
  value: number
  format: (val: number) => string
  duration?: number
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let startTimestamp: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(easeOutQuart * value)

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }

    animationFrame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return <>{format(count)}</>
}

export function MetricsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const metrics = [
    { value: 500, format: (v: number) => `${Math.floor(v)}+`, label: 'Empresas Atendidas' },
    { value: 2.5, format: (v: number) => `${v.toFixed(1)}M`, label: 'Mensagens Processadas' },
    { value: 50, format: (v: number) => `R$ ${Math.floor(v)}M`, label: 'em Receita Gerada' },
  ]

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-3">
                <AnimatedCounter value={m.value} format={m.format} isVisible={isVisible} />
              </span>
              <span className="text-zinc-600 font-medium text-lg text-center">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
