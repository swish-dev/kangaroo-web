import { useEffect, useState } from 'react'
import { IMarker, IImageSource } from '../interfaces/Marker.interface'

const IMAGE_SOURCE: IImageSource = {
  CAR_FREE:
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjZfMjM5%2FMDAxNjA2MzYzMDg1Mzg0.9MdukaSn3gWhhycn9tXBCcTARfpaHWioL-qCIiTMuE8g.Xyvs3NmWZ-GHS_2_6EV7agRSOZ7jlElnerL2CzVTc6og.JPEG.westwood78%2F269f1c30f679e709c122926af90a2d46.jpg&type=sc960_832',
  CAR_OCCUPIED:
    'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F36%2F37%2F8b%2F36378ba7a41f1d1553940220c711675e--moustache-kitten.jpg&type=a340',
}
const IMAGE_SIZE = [64, 69]

declare global {
  interface Window {
    kakao: any
  }
}

interface Props {
  height?: string
  width?: string
  level?: number
  markers?: IMarker[]
}

function Map({
  markers = [],
  height = '100vh',
  width = '100wh',
  level = 4,
}: Props) {
  const [map, setMap] = useState(null)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      level,
      center: new window.kakao.maps.LatLng(
        // 시청역
        37.56572474944695,
        126.97737353796997
      ),
    }
    setMap(new window.kakao.maps.Map(container, options))
  }, [])

  useEffect(() => {
    if (!map || markers.length === 0) return

    const imageSize = new window.kakao.maps.Size(IMAGE_SIZE[0], IMAGE_SIZE[1])
    markers.forEach(({ lat, lng, imageType }) => {
      const markerPos = new window.kakao.maps.LatLng(lat, lng)
      const markerImage = new window.kakao.maps.MarkerImage(
        IMAGE_SOURCE[imageType],
        imageSize
      )
      const marker = new window.kakao.maps.Marker({
        position: markerPos,
        image: markerImage,
      })
      marker.setMap(map)
    })
  }, [map, markers])

  return <div id="map" style={{ width, height }}></div>
}

export default Map
