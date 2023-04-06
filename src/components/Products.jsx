import React from 'react'
import Product from './Product'
import { TopProductsApi } from '../apifolder/TopProductsApi'
const Products = () => {
    return (
        <div className='products flex flex-wrap p-5 items-center justify-center'>
            {
                TopProductsApi.map((product,index)=>{
                   return(
                    <Product 
                        item={product}
                        key={index}
                        src={product.src}
                    />
                   );
                })
            }
        </div>
    )
}

export default Products
