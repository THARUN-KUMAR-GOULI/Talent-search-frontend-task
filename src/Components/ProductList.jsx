import React from 'react';
import '../Styles/ProductList.css';

const ProductList = ({ products }) => {

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id || product.title}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.popularity}</td>
                        </tr>
                    ))}
                </tbody>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default ProductList