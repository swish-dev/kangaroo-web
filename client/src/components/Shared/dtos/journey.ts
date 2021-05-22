import { IJourneyInfo } from '../interfaces/Journey.interface'

export type CreateJourneyDto = {userId:string, kidIds:Array<string>}
export type UpdateJourneyDto = Partial<Omit<IJourneyInfo, 'id'>>
