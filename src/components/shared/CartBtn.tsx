'use client'

import { addToCart } from "@/lib/actions/addProdutctToCart";
import { Product } from "@/types/product";

const CartBtn = ({ product }) => {
    
    
    const addProduct = async () => {
        const data = await addToCart(product)
        console.log(data);

    }
    return (
        <button onClick={ addProduct} className="mt-6 w-full bg-[#1E1C16] py-3.5 text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9C7A3C]">
            Add to cart
        </button>
    );
};

export default CartBtn;