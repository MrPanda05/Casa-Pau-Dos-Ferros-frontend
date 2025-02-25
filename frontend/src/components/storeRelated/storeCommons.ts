import axios from "axios";


export interface IProduct{
    product_id : number,
    name: string,
    description: string,
    price: string,
    amount: string,
    image: string,
    base64_image: string

}


export interface ICategory{
    category_id: number,
    name: string,
    description: string
}

async function GetAllProducts() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/product/')
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


async function GetMyProduct(productID: string){
    try {
        const response = await axios.get(`http://127.0.0.1:8000/product/${productID}`)
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}

async function GetCategories(){
    try {
        const response = await axios.get('http://127.0.0.1:8000/category/')
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}


export { GetAllProducts, GetCategories, GetMyProduct}