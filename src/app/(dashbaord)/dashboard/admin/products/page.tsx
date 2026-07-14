import { serverFetch } from '@/lib/core/server';
import React from 'react';
import ManageProductsPage from './ManageProductsPage';

const ManageProducts = async({ searchParams }: PageProps) => {
  const productData=await serverFetch('/products');
  const {page}=await searchParams
  console.log('currnet',page);
  

  return (
    <div>
      <ManageProductsPage productData={productData}/>

    </div>
  );
};

export default ManageProducts;