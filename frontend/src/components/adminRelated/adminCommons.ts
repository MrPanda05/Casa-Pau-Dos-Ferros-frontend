import axios from 'axios';
import { CoockieDeleter, CoockieGet, CoockieSet } from '../common/CoockiesManegers';
import { isTodayOrFuture, validarCPF } from '../LoginRelated/authCommons';


async function AddProduct(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //Change to get every data later
    const name = formData.get('name') as string;
    const description = formData.get('description') as string
    const price = formData.get('price') as string
    const amount = formData.get('amount') as string
    const imagem = formData.get('productImage') as File;
    const reader = new FileReader();
    let base64Image = ""
    reader.onload = () => {
    base64Image = reader.result as string;
    console.log(base64Image); 
    };
    
    reader.onerror = (error) => {
    console.error("Error reading le_gamer file", error);
    };
    
    reader.readAsDataURL(imagem);
    console.log(base64Image)


    if(Number(price) <= 0){
        return { data: {"message":"preço invalido"}, status: 422};
    }
    if(Number(amount) < 0){
        return { data: {"message":"stock não pode ser negativo"}, status: 422};
    }
    if(!(/^[0-9]+$/.test(amount))){
        return { data: {"message":"stock não pode ter letras"}, status: 422};
    }
    if(!(/^[0-9]+$/.test(price))){
        return { data: {"message":"preço não pode ter letras"}, status: 422};
    }

    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/product/`, {
            name: name,
            description: description,
            price: price,
            amount: amount,
            image: base64Image
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}


async function AddCategory(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string;
    const description = formData.get('description') as string
    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/category/`, {
            name: name,
            description: description,
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}


async function AddCategoryOnProduct(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const productId = formData.get('productId') as string;
    const categoryId = formData.get('categoryId') as string
    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/product_category/`, {
            category: categoryId,
            product: productId,
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}



async function AmIAdmin(){
    try {
        const token = await CoockieGet("token")
        const mail = await CoockieGet("myMail")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/api/staff/get`,{
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
            return { data: {"message": "server error"}, status: 500 };
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
    const date = new Date(formData.get('date') as string)
    if(!validarCPF(cpf)){
            return { data: {"message":"cpf invalido"}, status: 422};
        }
        if(confirmPassword !== password){
            return { data: {"message":"senha invalida"}, status: 422};
        }
        if(/\d/.test(name)){
            return { data: {"message":"nome não pode ter numeros"}, status: 422};
        }
        if(isTodayOrFuture(date)){
            return { data: {"message":"data invalida"}, status: 422};
        }

    username = username.replace(/[\n\r\s\t]+/g, '')
    const formatedDate = date.toISOString()

    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/api/staff/`, {
            username: username,
            email: email,
            password: password,
            cpf: cpf,
            full_name: name,
            date: formatedDate
        },{
            headers: {
                Authorization: `token ${token?.value}`,
            }})
        return { data: response.data.message, status: response.status };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return { data: err.response.data, status: err.response.status };
        } else {
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}

async function UpgrateToStaff(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    try {
        const token = await CoockieGet("token")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/api/staff/update`, {
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
            return { data: {"message": "server error"}, status: 500 };
        }
    }
}



export { AmIAdmin, RegisterStaffComplete, UpgrateToStaff, AddProduct, AddCategory, AddCategoryOnProduct }