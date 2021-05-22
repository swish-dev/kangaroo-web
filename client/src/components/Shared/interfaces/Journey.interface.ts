export interface IJourneyInfo {
  userId: number
  driverId: number
  routeNumber: number
  status: 'pending' | 'driving' | 'complete'
  departTime: string
  arriveTime: string
}
