'use server'
import { serverMutation } from "../core/serverMutation"



export const addToCart = async ( data) => {
    console.log('data after ',data);
    
    const resData = await serverMutation('/add-to-cart', data)
    console.log(resData);
    
}