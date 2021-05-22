declare global {
  interface Window {
    kakao: any
  }
}
export const getDate = (at: Date) => {
  const d = new Date(at).getDate
  return d
}

export const getPlaceName = (lat: number, lng: number) => {}
