import { serverFetch } from "../core/server"

export const cartData = async (id) => {
    const resData = await serverFetch(`/api/cartData/${id}`)
    return resData
}