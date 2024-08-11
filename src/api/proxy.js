import axios from "axios";

export default async function handler(req, res) {
    try {
        const ApiUrl = 'https://cdn.drcode.ai/interview-materials/products.json';
        const response = await axios.get(ApiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
    }
}
