import { useEffect, useState } from 'react'
import { IMarkerPos } from '../interfaces/Marker.interface'

declare global {
  interface Window {
    kakao: any
  }
}

interface Props {
  height?: string
  width?: string
  level?: number
}

function Map({ height = '100vh', width = '100wh', level = 4 }: Props) {
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

  const [markers, setMarkers] = useState<IMarkerPos[]>([])
  useEffect(() => {
    if (!map) return
    markers.forEach(({ lat, lng }) => {
      const markerPos = new window.kakao.maps.LatLng(lat, lng)
      const marker = new window.kakao.maps.Marker({
        position: markerPos,
      })
      marker.setMap(map)
    })
  }, [map])

  return <div id="map" style={{ width, height }}></div>
}

export default Map
