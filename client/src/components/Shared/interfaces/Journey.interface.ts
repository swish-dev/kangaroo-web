import { IRouteEdge } from './RouteEgde.interface'

export interface IJourneyInfo {
  id: string
  userId: string
  kidId: string
  driverId: string

  status: 'PENDING' | 'DRIVING' | 'COMPLETED'
  departAt: Date
  arriveAt: Date
  departRouteEdge: IRouteEdge
  arriveRouteEdge: IRouteEdge
}
