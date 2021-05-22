import { useState, useEffect } from 'react'

export const usePollingFetch = <T = unknown>(
  fetcher: () => Promise<T>,
  interval: number
): {
  data: T | undefined
  error: Error | undefined
} => {
  const [data, setData] = useState<T | undefined>()
  const [error, setError] = useState<Error | undefined>()

  const poll = async () => {
    try {
      setData(await fetcher())
      setError(undefined)
    } catch (err) {
      setData(undefined)
      setError(err)
    }
  }

  useEffect(() => {
    poll()
    const timer = setInterval(poll, interval)

    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data,
    error,
  }
}
