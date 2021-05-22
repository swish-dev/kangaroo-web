import dayjs from 'dayjs'

declare global {
  interface Window {
    kakao: any
  }
}
export const getDate = (at: Date) => {
  const d = dayjs(at).format('YY.DD')
  return d
}

export const getPlaceName = (lat: number, lng: number) => {}
