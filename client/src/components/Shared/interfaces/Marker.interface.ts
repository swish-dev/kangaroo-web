export const MarkerImageType = {
  CAR_FREE: 'CAR_FREE',
  CAR_OCCUPIED: 'CAR_OCCUPIED',
}

export interface IImageSource {
  [key: string]: string
}

export interface IImageSize {
  [key: string]: number[]
}

export interface IMarker {
  imageType: string
  lat: number
  lng: number
  onClick?: () => void
}
