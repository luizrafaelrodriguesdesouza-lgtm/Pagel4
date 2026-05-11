import { useState, useEffect, useCallback } from 'react'

interface CacheItem<T> {
  data: T
  timestamp: number
}

export function useLocalStorageCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlInMinutes: number = 60,
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const loadData = useCallback(async () => {
    try {
      setLoading(true)
      const cached = localStorage.getItem(key)
      if (cached) {
        const parsed: CacheItem<T> = JSON.parse(cached)
        const ageInMinutes = (Date.now() - parsed.timestamp) / 1000 / 60
        if (ageInMinutes < ttlInMinutes) {
          setData(parsed.data)
          setLoading(false)
          return
        }
      }

      const freshData = await fetcher()
      localStorage.setItem(key, JSON.stringify({ data: freshData, timestamp: Date.now() }))
      setData(freshData)
      setLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
      setLoading(false)
    }
  }, [key, fetcher, ttlInMinutes])

  useEffect(() => {
    loadData()
  }, [loadData])

  return { data, loading, error, refetch: loadData }
}
