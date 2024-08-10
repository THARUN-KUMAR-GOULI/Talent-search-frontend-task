import React from 'react'

const ProductDetails = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Popularity: {product.popularity}</p>
        </div>
    )
}

export default ProductDetails