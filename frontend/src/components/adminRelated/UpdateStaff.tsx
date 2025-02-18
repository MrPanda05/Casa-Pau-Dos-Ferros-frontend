'use client'
import { useState } from "react";
import { UpgrateToStaff } from "./adminCommons";

export default function UpdateStaff(){
    const [showError, setShowError] = useState(false);
    const [errorStatus, setErrorStatus] = useState(200);
    const [errorMessage, setErrorMessage] = useState("error");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        const data = await UpgrateToStaff(e)
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
        <div className="rounded-md h-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
            <h1 className="text-center">
                Cadastrar staff
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm m-3">
                <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="formLabelText">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="meuemail@mail.com"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Confirmar
                        </button>
                    </div>
                </form>
                
            </div>
            {showError && (
            <div className="self-center bg-red-800 text-white rounded-md text-sm m-1">
                Erro tipo: {errorStatus} | verifique o banco de dados
            </div>
            )}
        </div>
    </div>
    )
}