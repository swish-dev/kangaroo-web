import { CreateJourneyDto, UpdateJourneyDto } from '../dtos/journey'
import base from './api'

const createJourney = async (data: CreateJourneyDto) => {
  const res = await base().post('/journeys', data)
  return res.data
}
const getJourneys = async () => {
  const res = await base().get('/journeys')
  return res.data
}
const getJourneyById = async (journeyId: string) => {
  const res = await base().get(`/journeys/${journeyId}`)
  return res.data
}

const updateJourney = async (journeyId: string, data: UpdateJourneyDto) => {
  const res = await base().patch(`/journeys/${journeyId}`, data)
  return res.data
}

const completeJourney = async (journeyId: string) => {
  const res = await base().patch(`/journeys/${journeyId}/complete`)
  return res.data
}

const JourneyService = {
  createJourney,
  getJourneys,
  getJourneyById,
  updateJourney,
  completeJourney,
}

export default JourneyService
