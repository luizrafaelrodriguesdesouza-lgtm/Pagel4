export function reportWebVitals() {
  if (import.meta.env.DEV) {
    if ('PerformanceObserver' in window) {
      try {
        const paintObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              console.log(`[Web Vitals] FCP:`, entry.startTime, 'ms (Target: < 1500ms)')
            }
          })
        })
        paintObserver.observe({ type: 'paint', buffered: true })

        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log(`[Web Vitals] LCP:`, lastEntry.startTime, 'ms (Target: < 2500ms)')
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              console.log(`[Web Vitals] CLS:`, clsValue, '(Target: < 0.1)')
            }
          })
        })
        clsObserver.observe({ type: 'layout-shift', buffered: true })
      } catch (e) {
        console.warn('PerformanceObserver not fully supported in this environment')
      }
    }
  }
}
