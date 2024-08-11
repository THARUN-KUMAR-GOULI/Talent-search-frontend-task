import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchProducts = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const ApiUrl = '/src/api/proxy.js';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(ApiUrl);

                if (!res.data || !res.data.products) {
                    throw new Error('Invalid Data structure from API');
                }
                const productData = res.data.products;

                if (!productData) {
                    throw new Error('Product data is not available');
                }

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