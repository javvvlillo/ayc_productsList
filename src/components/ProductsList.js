import React from 'react';

import { products } from "../data/products";
import { ProductCard } from './ProductCard';

export const ProductsList = () => {

    return (
        <div className="card-columns">
            {
                products.map( product => (
                    <ProductCard
                        key={ product.id }
                        { ...product }
                    />
                ))
            }
        </div>
    )
}
