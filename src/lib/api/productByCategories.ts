import { serverFetch } from "../core/server"

export const proudtByCategories = async(category: string) => {
    const res = await serverFetch(`/product/${category}`);
    return res;
}