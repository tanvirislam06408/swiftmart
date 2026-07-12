import ProductCard from '@/components/shared/ProductCard';
import { proudtByCategories } from '@/lib/api/productByCategories';
import React from 'react';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}


const ProductByCategory = async ({ params }: PageProps) => {
    const { id } = await params;
    const productData = await proudtByCategories(id);
   

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-5'>
            {
                productData.map(item => {
                    return <ProductCard item={item} key={item._id} />
                })
            }
        </div>
        </div>
    );
};

export default ProductByCategory;