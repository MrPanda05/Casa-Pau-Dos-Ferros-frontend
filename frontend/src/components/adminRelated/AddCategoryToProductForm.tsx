'use client'
import { useState } from "react";
import { AddCategoryOnProduct } from "./adminCommons";
export default function AddCategoryToProductForm(){
    const [showError, setShowError] = useState(false);
    const [errorStatus, setErrorStatus] = useState(200);
    const [errorMessage, setErrorMessage] = useState("error");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        const data = await AddCategoryOnProduct(e)
        if(data.status !== 200 && data.status !== 201){
            setShowError(true)
            setErrorStatus(data.status)
            setErrorMessage(data.data)
            console.log(errorMessage)
        }
        else{
            setShowError(false)
        }
    }
    return(
        <div className="rounded-md">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
            <h1 className="text-center">
                Cadastrar produto
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="productId" className="formLabelText">
                            id de produto
                        </label>
                        <div className="mt-2">
                            <input
                            id="productId"
                            name="productId"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="5"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="categoryId" className="formLabelText">
                            id de categoria
                        </label>
                        <div className="mt-2">
                            <input
                            id="categoryId"
                            name="categoryId"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="20"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Adcionar categoria ao produto
                        </button>
                    </div>
                </form>
                
            </div>
            {showError && (
            <div className="self-center bg-red-800 text-white rounded-md text-sm">
                Erro tipo: {errorStatus} | algo deu merda
            </div>
            )}
        </div>
    </div>
    )
}