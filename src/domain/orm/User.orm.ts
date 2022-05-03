import { user } from '../entities/mongoose/User.entity'

export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = user

    return await userModel.find({ isDelete: false })
  } catch (error) {

  }
}

export function getAllUsersTO () {
  return null
}
