import axios from "axios";

export interface IProduct {
    product_id: number;
    name: string;
    description: string;
    price: string;
    amount: string;
    image: string;
    base64_image: string;
}

export interface ICategory {
    category_id: number;
    name: string;
    description: string;
}

async function GetAllProducts() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/product/");
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
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

async function GetMyProduct(productID: string) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/product/${productID}`);
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function GetCategories() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/category/");
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function GetCategoryNameByID(categoryID: string) {
    const {data} = await GetCategories();
    if(data.results === undefined){
        console.log("Error fetching data")
        return { data: categoryID, status: 500 };
    }
    const category = data.results.find((element: ICategory) => element.category_id === parseInt(categoryID));
    if(category === undefined){
        console.log("Category does not exist")
        return { data: categoryID, status: 404 };
    }
    return { data: category.name, status: 200 };
}

async function GetProductByCategory(categoryID: string) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${categoryID}`);
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

export { GetAllProducts, GetCategories, GetMyProduct, GetProductByCategory, GetCategoryNameByID };
