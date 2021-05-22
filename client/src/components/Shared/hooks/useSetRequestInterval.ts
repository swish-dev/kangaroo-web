import { useState, useEffect } from 'react'

export function useSetRequestInterval(func: () => {}, sec: number) {
  const [result, setResult] = useState<any>('')

  useEffect(() => {
    const asyncFunc = async () => {
      setResult(await func())
    }
    asyncFunc()
    const timer = setInterval(async () => {
      setResult(await func())
    }, sec)

    return () => clearInterval(timer)
  }, [])

  return result
}
