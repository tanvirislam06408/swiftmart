import { cartData } from '@/lib/api/cartData';
import React from 'react';

const CartOrdersPage = async() => {
  const cartProducts=await cartData()
  
  
  return (
    <div>
      <CartOrdersPage/>
    </div>
  );
};

export default CartOrdersPage;