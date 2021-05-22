import { useEffect, useState } from 'react'
import { MarkerImageType } from '../Shared/interfaces/Marker.interface'

import Map from '../Shared/Map'
import './style.scss'

function Monitor() {
  const [markers, setMarkers] = useState([
    {
      imageType: MarkerImageType.CAR_FREE,
      lat: 37.56572474944695,
      lng: 126.97737353796997,
    },
    {
      imageType: MarkerImageType.CAR_OCCUPIED,
      lat: 37.567106516757505,
      lng: 126.97727818430188,
    },
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setMarkers((prev) =>
        prev.map(({ lat, ...rest }) => ({ lat: lat + 0.0001, ...rest }))
      )
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="App">
      <Map {...{ markers }} />
    </div>
  )
}

export default Monitor
