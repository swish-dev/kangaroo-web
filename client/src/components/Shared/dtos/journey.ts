import { IJourneyInfo } from '../interfaces/Journey.interface'

export type CreateJourneyDto = Omit<IJourneyInfo, 'id'>
export type UpdateJourneyDto = Partial<Omit<IJourneyInfo, 'id'>>
