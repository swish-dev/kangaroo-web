import { useEffect, useState } from 'react'

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

function Map({ height = '100vh', width = '100wh', level = 5 }) {
  const [map, setMap] = useState(null)

  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      level,
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    }
    setMap(new window.kakao.maps.Map(container, options))
  }, [])

  return <div id="map" style={{ width, height }}></div>
}

export default Map
