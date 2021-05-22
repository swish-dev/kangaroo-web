import { IFMSReport } from './FMS.interface'
import { IJourneyInfo } from './Journey.interface'

export interface IDriverInfo {
  id: string
  name: string
  age: number
  avatarUrl: string
  averageSpeed: number
  mbti?: string
  crimeHistory?: Array<{ time: string; type: string }>
  car: {
    id: string
    name: string
    year: Date
  }
  journeys: Array<IJourneyInfo>
  fmsReport?: Omit<IFMSReport, 'id'>
}
