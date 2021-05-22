import { IKid } from '../interfaces/kid.interface'
import { IUserInfo } from '../interfaces/User.interface'

export type CreateUserDto = Pick<IUserInfo, 'nickname'>
export type UpdateUserDto = Pick<IUserInfo, 'nickname'>

export type CreateKidDto = Omit<IKid, 'id'>
export type UpdateKidDto = Partial<Omit<IKid, 'id'>>
