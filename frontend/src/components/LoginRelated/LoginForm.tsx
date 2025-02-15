'use client'
import { ISwitch } from "./authCommons"
import { useState } from "react";
import { LogUser } from "@/components/LoginRelated/authCommons";
import { useRouter } from "next/navigation";
import { CoockieGet } from "../common/CoockiesManegers";



export default function LoginForm({onLoginChange: changeLogin} : ISwitch){
    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const [errorStatus, setErrorStatus] = useState(200);
    const [errorMessage, setErrorMessage] = useState("error");


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        console.log("submit handler test")
        const data = await LogUser(e);
        console.log(data.status)
        if(data.status !== 200 && data.status !== 201){
            setShowError(true)
            setErrorStatus(data.status)
            setErrorMessage(data.data)
            console.log(errorMessage)
        }
        else{
            setShowError(false)
            const userName = await CoockieGet("userId");
            router.push(`/user/${userName?.value}`);
        }
    }

    return (
        <div className="rounded-md overflow-scroll">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
                <h1 className="text-center">
                    Logar!
                </h1>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                            <div className="mt-2">
                                <label htmlFor="password" className="formLabelText">
                                Senha
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="***"
                                autoComplete="current-password"
                                className="formInput"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Logar
                            </button>
                        </div>
                    </form>
                    
                </div>
                <div className="text-center mt-10">
                    <button onClick={changeLogin} className="text-base text-blue-500 hover:text-blue-700">Nao possue conta?</button>
                </div>
                {showError && (
                <div className="self-center bg-red-800 text-white rounded-md">
                    Error inesperado de tipo {errorStatus} | supporte CasaPauDosFerrosSuporte@gmail.com
                </div>
                )}
            </div>
        </div>
    )
}