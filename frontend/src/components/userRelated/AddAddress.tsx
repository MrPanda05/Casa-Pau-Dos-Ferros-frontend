'use client'
import { useState } from "react";
import { AddNewAddress } from "./userCommons";
import Toaster from "../common/ToasterPopUp";
export default function AddAddress(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");

    const handleClosePopup = () => {
        setIsPopupOpen(false);
      };
      
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const data = await AddNewAddress(e)
        if(data.status !== 200 && data.status !== 201){
            setIsPopupOpen(true)
            setPopUpType("popupFail")
            setMessageStatus(data.status)
            setPopUpMessage(data.data)
            console.log(data.data)
        }
        else{
            setPopUpType("popupSuccess")
            setIsPopupOpen(true)
            setMessageStatus(data.status)
            setPopUpMessage("Sucesso")
        }
    }
    return(
        <div className="size-full flex flex-col">
            <h1 className="mt-5 text-2xl font-bold text-center">
            Adicionar endereço
            </h1>
            <div className="size-full">
            <div className="rounded-md">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="md:-mx-20">
                        <label htmlFor="cep" className="formLabelText">
                        CEP
                        </label>
                        <div className="mt-2">
                        <input
                            id="cep"
                            name="cep"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="839400"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div className="md:-mx-20">
                        <label htmlFor="state" className="formLabelText">
                        Estado
                        </label>
                        <div className="mt-2">
                        <input
                            id="state"
                            name="state"
                            type="state"
                            required
                            autoComplete="none"
                            placeholder="PR"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div className="md:-mx-20">
                        <div className="mt-2">
                        <label htmlFor="city" className="formLabelText">
                            Cidade
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            placeholder="Pau dos ferros"
                            autoComplete="none"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div className="md:-mx-20">
                        <div className="mt-2">
                        <label htmlFor="street" className="formLabelText">
                            Rua
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="street"
                            name="street"
                            type="text"
                            required
                            placeholder="Goiere"
                            autoComplete="none"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div className="md:-mx-20">
                        <div className="mt-2">
                        <label htmlFor="number" className="formLabelText">
                            Numero
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="number"
                            name="number"
                            type="text"
                            required
                            placeholder="3249"
                            autoComplete="off"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div className="md:-mx-20">
                        <div className="mt-2">
                        <label htmlFor="complement" className="formLabelText">
                            Complemento
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="complement"
                            name="complement"
                            type="text"
                            placeholder="Centro"
                            autoComplete="none"
                            className="formInput"
                        />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Cadastrar endereço
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
                {isPopupOpen && (
                    <div className="self-center bg-red-800 text-white rounded-md text-sm">
                        {<Toaster message={`${popUpMessage} | ${messageStatus} | supporte CasaPauDosFerrosSuporte@gmail.com`} onClose={handleClosePopup} isOpen={isPopupOpen} status={popUpType}/>}
                    </div>
                )}
            </div>
        </div>
    )
}