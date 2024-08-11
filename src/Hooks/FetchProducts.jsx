import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchProducts = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('../api/proxy.js');
                const productData = res.data.products;

                const productArray = Object.keys(productData).map(key => ({
                    id: key,
                    ...productData[key],
                    price: parseFloat(productData[key].price),
                    popularity: parseFloat(productData[key].popularity)
                }));

                setProducts(productArray);
            } catch (error) {
                setError(error);
            }
        };

        fetchProducts();
    }, []);


    return { products, error };

};

export default FetchProducts