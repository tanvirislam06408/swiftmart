import { serverFetch } from "../core/server"

export const getAllUsers=async()=>{
    const users=await serverFetch(`/get-users`);
    return users;
}