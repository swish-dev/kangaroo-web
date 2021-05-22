import { IJourneyInfo } from './Journey.interface'

export interface IUserInfo {
  id: string
  nickname: string
  kidName: string
  kidAge: number
  kidAvatarUrl: string
  journeys: IJourneyInfo[]
}
