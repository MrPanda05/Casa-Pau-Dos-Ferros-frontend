import axios from 'axios';
import { CoockieDeleter, CoockieGet, CoockieSet } from '../common/CoockiesManegers';
import { validarCPF } from '../LoginRelated/authCommons';


async function AmIAdmin(){
    try {
        const token = await CoockieGet("token")
        const mail = await CoockieGet("myMail")
        const response = await axios.post('http://127.0.0.1:8000/api/staff/get',{
            email: mail?.value
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}

async function RegisterStaffComplete(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //Change to get every data later
    let username = formData.get('username') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmpassword') as string
    const cpf = formData.get('cpf') as string
    const date = new Date(formData.get('date') as string).toISOString()
    if(!validarCPF(cpf)){
        return { data: "CPF INVALIDO", status: 422};
    }
    if(confirmPassword !== password){
        return { data: "SENHA INVALIDA", status: 422};
    }

    username = username.replace(/[\n\r\s\t]+/g, '')

    try {
        const token = await CoockieGet("token")
        const response = await axios.post('http://127.0.0.1:8000/api/staff/', {
            username: username,
            email: email,
            password: password,
            cpf: cpf,
            full_name: name,
            date: date
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}

async function UpgrateToStaff(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    try {
        const token = await CoockieGet("token")
        const response = await axios.post('http://127.0.0.1:8000/api/staff/update', {
            email: email,
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
}



export { AmIAdmin, RegisterStaffComplete, UpgrateToStaff }