import {
  CreateKidDto,
  CreateUserDto,
  UpdateKidDto,
  UpdateUserDto,
} from '../dtos/user'
import { IUserInfo } from '../interfaces/User.interface'
import { getCookie, setCookie } from '../utils/cookie'
import base from './api'

export const login = async (data: CreateUserDto) => {
  const res = await base().post('/users', data)

  setCookie('userId', res.data.id)
  setCookie('nickname', res.data.nickname)
}

export const getMyId = () => {
  return getCookie('userId')
}

export const getUserById = async (userId: string) => {
  const { data } = await base().get<IUserInfo>(`/users/${userId}`)
  return data
}

export const updateUser = async (userId: string, data: UpdateUserDto) => {
  const res = await base().patch(`/users/${userId}`, data)
  return res.data
}

export const getUsers = async (): Promise<IUserInfo[]> => {
  const { data } = await base().get(`/users`)
  return data
}

export const getKids = async (userId: string) => {
  const { data } = await base().get(`/users/${userId}/kids`)
  return data
}

export const addKid = async (userId: string, data: CreateKidDto) => {
  const res = await base().post(`/users/${userId}/kids`, data)
  return res.data
}

export const updateKid = async (
  userId: string,
  kidId: string,
  data: UpdateKidDto
) => {
  const res = await base().patch(`/users/${userId}/kids/${kidId}`, data)
  return res.data
}

const UserService = {
  login,
  getMyId,
  getUserById,
  updateUser,
  getUsers,
  getKids,
  addKid,
  updateKid,
}

export default UserService
