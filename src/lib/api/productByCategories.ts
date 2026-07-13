import { serverFetch } from "../core/server";
import type { Product } from "@/types/product";

export const proudtByCategories = async (category: string): Promise<Product[]> => {
  const res = await serverFetch(`/product/${category}`);

  if (!Array.isArray(res)) return [];

  return res.map((item: any) => ({
    _id: item._id ?? "",
    title: item.title ?? "Untitled Product",
    shortDescription: item.shortDescription ?? item.description ?? "No description available",
    description: item.description ?? "No description available",
    price: Number(item.price ?? 0),
    rating: Number(item.rating ?? 4.5),
    location: item.location ?? "Location not specified",
    duration: item.duration ?? "N/A",
    category: item.category ?? category,
    availableDate: item.availableDate ?? new Date().toISOString(),
    featured: Boolean(item.featured),
    image: item.image ?? "",
  })) as Product[];
};