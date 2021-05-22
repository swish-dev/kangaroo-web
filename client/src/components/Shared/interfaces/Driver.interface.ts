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
    type: string
    year: number
  }
  journeys: Array<IJourneyInfo>
}
