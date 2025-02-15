import axios from 'axios';
import { CoockieDeleter, CoockieExist, CoockieGet, CoockieSet } from '../common/CoockiesManegers';


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
        return { data: 'userNotLogged', status: 401 };
    }
    const userId = await CoockieGet('userId')

    try {
        const token = await CoockieGet("token")
        const response = await axios.post('http://127.0.0.1:8000/api/address/', {
            user_id: Number(userId?.value),
            cep: cep,
            state: state,
            city: city,
            street: street,
            number: number,
            complement: complement,
            country: "",
            neighborhood: ""

        }, {
            headers:{
                Authorization: `token ${token?.value}`,
            }
        })
        console.log("trying to register new address")
        console.log(response.status)
        console.log(response.data.message)
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}

export { AddNewAddress }