import axios from 'axios';
import { CoockieDeleter, CoockieGet, CoockieSet } from '../common/CoockiesManegers';

interface ISwitch{
    onLoginChange: () => void
}

interface ISubmit {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}


export function validarCPF(cpf: string): boolean  {
    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11) return false;
  
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    let sum = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * peso--;
    }
    let resto = sum % 11;
    const firstDigit = resto < 2 ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(9)) !== firstDigit) return false;
  
    // Validação do segundo dígito verificador
    sum = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * peso--;
    }
    resto = sum % 11;
    const secondDigit = resto < 2 ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(10)) !== secondDigit) return false;
  
    return true;
  };


  function isTodayOrFuture(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const givenDate = new Date(date);
    givenDate.setHours(0, 0, 0, 0);

    return givenDate >= today;
}


async function RegiterUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //Change to get every data later
    let username = formData.get('username') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmpassword') as string
    const cpf = formData.get('cpf') as string
    const date = new Date(formData.get('date') as string)
    
    if(!validarCPF(cpf)){
        return { data: "CPF INVALIDO", status: 422};
    }
    if(confirmPassword !== password){
        return { data: "SENHA INVALIDA", status: 422};
    }
    if(/\d/.test(name)){
        return { data: "NOME NÃO PODE TER NUMERO", status: 422};
    }
    if(isTodayOrFuture(date)){
        return { data: "DATA INVALIDA", status: 422};
    }
    
    const formatedDate = date.toISOString()
    username = username.replace(/[\n\r\s\t]+/g, '')
    try {
        
        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
            username: username,
            email: email,
            password: password,
            cpf: cpf,
            full_name: name,
            date: formatedDate
        })
        console.log("trying to register user")
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


async function LogUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log(email)
    console.log(password)


    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
            login: email,
            password: password
        })
        console.log("trying to log user")
        console.log(response.status)
        console.log(response.data.message)
        CoockieSet("token", response.data.token)
        CoockieSet("userId", response.data.userId)
        CoockieSet("myMail", response.data.email)
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
        
    }
}


export async function LogOut(){

    try {
        const token = await CoockieGet("token")
        console.log(token?.value)
        const response = await axios.post('http://127.0.0.1:8000/api/logout/',{
            token: token?.value
        }, {
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        console.log("trying to log out user")
        console.log(response.status)
        console.log(response.data.message)
        await CoockieDeleter("token")
        await CoockieDeleter("userId")
        await CoockieDeleter("myMail")
        return { data: response.data.message, status: response.status }
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: 'unknown', status: 500 };
        }
    }
  }


export type { ISwitch, ISubmit };

export { RegiterUser, LogUser }

