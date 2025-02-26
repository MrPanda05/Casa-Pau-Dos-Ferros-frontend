import axios from 'axios';
import { CoockieDeleter, CoockieExist, CoockieGet, CoockieSet } from '../common/CoockiesManegers';



export interface IAddress {
    address_id: number,
    cep: string,
    city: string,
    complement: string,
    number: string,
    state: string,
    street: string,
    user_id: number
}



async function AddNewAddress(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const cep = formData.get('cep') as string
    const state = formData.get('state') as string
    const city = formData.get('city') as string
    const street = formData.get('street') as string
    const number = formData.get('number') as string
    const complement = formData.get('complement') as string
    const userIdExist = await CoockieExist('userId')
    if(!userIdExist){
        return { data: {"message": "usuario nao logado"}, status: 401 };
    }
    try {
        const token = await CoockieGet("token")
        const response = await axios.post('http://127.0.0.1:8000/api/address/', {
            cep: cep,
            state: state,
            city: city,
            street: street,
            number: number,
            complement: complement,
        }, {
            headers:{
                Authorization: `token ${token?.value}`,
            }
        })
        console.log("trying to register new address")
        console.log(response.status)
        console.log(response.data.message)
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function GetMyAdress(){
    try {
        const token = await CoockieGet("token")
        const response = await axios.get('http://127.0.0.1:8000/address/',{
            headers:{
                Authorization: `token ${token?.value}`,
            }
        })
        console.log(response.status)
        console.log(response.data.message)
        return { data: response.data, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

export { AddNewAddress, GetMyAdress }