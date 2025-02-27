import axios from "axios";
import { CoockieGet } from "../common/CoockiesManegers";

export interface ICartItem{
    id: string,
    cart: string,
    product: string,
    quantity: string
}

export interface IHistoryOrder{
    oder_id: string,
    cart: string,
    user_address: string,
    payment_method: string,
    total: string,
    status: number

}

async function GetMyCart() {
    try {
        const token = await CoockieGet("token")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL}/cart_item/`, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function GetProductsOfMyCart() {
    try {
        const token = await CoockieGet("token")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL}/api/cart/`, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}
async function AddMyCart(productId: string) {
    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/cart_item/`,{
            product: productId,
            quantity: 1,
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}


async function UpdateMyCartId(product: ICartItem, amount: number) {
    try {
        const token = await CoockieGet("token")
        const response = await axios.put(`${process.env.NEXT_PUBLIC_LOCAL}/cart_item/${product.id}/`, {
            id: product.id,
            cart: product.cart,
            product: product.product,
            quantity: amount
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function DeleteMyCartItem(product: ICartItem) {
    try {
        const token = await CoockieGet("token")
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_LOCAL}/cart_item/${product.id}/`, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function ConfirmMyCart(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const payment = formData.get('payment') as string;
    const address = formData.get('address') as string
    //add check to address
    console.log(payment)
    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/api/confirm/`,{
            user_address: address,
            payment_method: payment
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }

}

async function OrderDevolution(oderId: number) {
    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/api/devolution/`,{
            order_id: oderId
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}



async function GetMyOrderHistory(){
    try {
        const token = await CoockieGet("token")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL}/api/order/`,{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data, status: response.status };
        
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

export {GetMyCart, UpdateMyCartId, AddMyCart, DeleteMyCartItem, ConfirmMyCart, GetProductsOfMyCart, GetMyOrderHistory, OrderDevolution}