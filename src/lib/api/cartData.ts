import { protectedFetch } from "../core/server"

export const cartData = async (id) => {
    const resData = await protectedFetch(`/api/cartData/${id}`)
    return resData
}