import axios from "axios";
import { CoockieGet } from "../common/CoockiesManegers";


export interface ImageProduct{
    product_id : number,
    name: string,
    description: string,
    pricer: string,
    amount: string,
    image: string,
    base64_image: string

}

async function GetProductImage() {
    try {
        const token = await CoockieGet("token")
        const response = await axios.get('http://127.0.0.1:8000/product', {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
    // try{
    //     const token = await CoockieGet("token")
    //     const response = await fetch('http://127.0.0.1:8000/product', {
    //         headers: {
    //             Authorization: `token ${token?.value}`,
    //         }
    //     })
    //     return response.json()
    // }
    // catch(err){
    //     console.log(err)
    //}
}



export { GetProductImage}