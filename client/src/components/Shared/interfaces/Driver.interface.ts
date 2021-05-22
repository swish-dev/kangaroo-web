import { IJourneyInfo } from './Journey.interface'
import { IFMSReport } from './FMS.interface'
import { IRouteEdge } from './RouteEgde.interface'

export interface IDriverInfo {
  id: string
  name: string
  description: string
  age: number
  avatarUrl: string
  averageSpeed: number
  lat: number
  lng: number
  mbtis: Array<{
    type: string
    name: string
  }>
  reviews: Array<{
    text: string
    createdAt: Date
  }>
  rating: number
  crimeHistory?: Array<{ time: string; type: string }>
  car: {
    id: string
    type: string
    year: number
  }
  fmsReport: IFMSReport
  journeys: Array<IJourneyInfo>
  nowRouteEdge: IRouteEdge
  destRouteEdge: IRouteEdge
  phoneNumber: string
}
