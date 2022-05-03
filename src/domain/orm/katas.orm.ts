import { katas } from '../entities/mongoose/Katas.entity'

export const GetAllKatas = async (): Promise<any[] | undefined> => {
  try {
    const kataModel = katas

    return await kataModel.find({ isDelete: false })
  } catch (error) {

  }
}

export function getAllKatasTO () {
  return null
}
