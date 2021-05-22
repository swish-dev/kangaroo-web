import { useEffect, useState } from 'react'
import {
  IMarker,
  IImageSource,
  IImageSize,
} from '../interfaces/Marker.interface'
import CarWithPerson from '../../../assets/images/car_w_person1.png'
import CarWithoutPerson from '../../../assets/images/car_no_person.png'

const IMAGE_SOURCE: IImageSource = {
  CAR_FREE: CarWithoutPerson,
  CAR_OCCUPIED: CarWithPerson,
}
const IMAGE_SIZE: IImageSize = {
  CAR_FREE: [25, 25],
  CAR_OCCUPIED: [25, 25],
}

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
  isFollow?: boolean
}

function Map({
  markers = [],
  height = '100vh',
  width = '100wh',
  level = 3,
  isFollow = false,
}: Props) {
  // Map Binding
  const [map, setMap] = useState<any>(null)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      level,
      center: new window.kakao.maps.LatLng(
        // 을지로3가역
        37.56632130487183,
        126.99262809153915
      ),
    }
    setMap(new window.kakao.maps.Map(container, options))
  }, [])

  // Marker management
  const [prevMarkers, setPrevMarkers] = useState<any[]>([])
  useEffect(() => {
    if (!map || markers.length === 0) return

    // 새로운 위치로 마커 생성
    const curMarkers = markers.map(({ lat, lng, imageType, onClick }) => {
      const markerPos = new window.kakao.maps.LatLng(lat, lng)
      const markerImage = new window.kakao.maps.MarkerImage(
        IMAGE_SOURCE[imageType],
        new window.kakao.maps.Size(
          IMAGE_SIZE[imageType][0],
          IMAGE_SIZE[imageType][1]
        )
      )
      const marker = new window.kakao.maps.Marker({
        position: markerPos,
        image: markerImage,
      })
      marker.setMap(map)
      if (onClick) {
        window.kakao.maps.event.addListener(marker, 'click', function () {
          onClick()
        })
      }
      return marker
    })
    // 이전 마커 삭제
    prevMarkers.forEach((marker) => marker.setMap(null))
    setPrevMarkers(curMarkers)

    // 한 마커만을 따라가는 경우
    if (isFollow) {
      const movePos = new window.kakao.maps.LatLng(
        markers[0].lat,
        markers[0].lng
      )
      map?.panTo(movePos)
    }
  }, [map, markers])

  return <div id="map" style={{ width, height }}></div>
}

export default Map
