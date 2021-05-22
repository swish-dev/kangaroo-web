import { IKid } from '../interfaces/kid.interface'
import { IUserInfo } from '../interfaces/User.interface'

export type CreateUserDTO = Pick<IUserInfo, 'nickname'>
export type UpdateUserDTO = Pick<IUserInfo, 'nickname'>

export type CreateKidDTO = Omit<IKid, 'id'>
export type UpdateKidDTO = Partial<Omit<IKid, 'id'>>
