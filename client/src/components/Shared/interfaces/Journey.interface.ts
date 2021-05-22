export interface IJourneyInfo {
  userId: string
  driverId: string
  routeNumber: number
  status: 'pending' | 'driving' | 'complete'
  departTime: string
  arriveTime: string
}
