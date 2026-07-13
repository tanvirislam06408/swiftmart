'use server'
import { serverMutation } from "../core/serverMutation"



export const addToCart = async (data) => {
    

    const resData = await serverMutation('/add-to-cart', data)
    return resData;

}