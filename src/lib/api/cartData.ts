import { serverFetch } from "../core/server"

export const cartData = async () => {
    const resData = await serverFetch('/api/cartData')
    return resData
}