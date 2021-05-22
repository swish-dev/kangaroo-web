export interface IJourneyInfo {
  id: string
  userId: string
  driverId: string
  routeId: number
  status: 'pending' | 'driving' | 'complete'
  departTime: string
  arriveTime: string
}
