'use client'
import { useState } from "react";
import { RegisterStaffComplete } from "./adminCommons";
import Toaster from "../common/ToasterPopUp";

export default function StaffFormComplete(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isRegisteringStaff, setIsRegisteringStaff] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        setIsRegisteringStaff(true)
        try {
            const {data, status} = await RegisterStaffComplete(e)
            if(status !== 200 && status !== 201){
                setPopUpType("popupFail")
                setMessageStatus(status)
                setPopUpMessage(data.message)
                setIsPopupOpen(true)
                console.log(data)
    
            }
            else{
                setPopUpType("popupSuccess")
                setPopUpMessage("Sucesso")
                setIsPopupOpen(true)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsRegisteringStaff(false)
        }
    }
    return(
        <div className="rounded-md">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
            <h1 className="text-center">
                Cadastrar staff por completo
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="username" className="formLabelText">
                            Nome de usuario
                        </label>
                        <div className="mt-2">
                            <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="Trumpete"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="formLabelText">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="Trumpete"
                            className="formInput"
                            />
                        </div>
                    </div>
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
                        <div className="mt-2">
                            <label htmlFor="confirmpassword" className="formLabelText">
                            Confirmar senha
                            </label>
                        </div>
                            <div className="mt-2">
                                <input
                                id="confirmpassword"
                                name="confirmpassword"
                                type="password"
                                required
                                placeholder="***"
                                autoComplete="current-password"
                                className="formInput"
                                />
                            </div>
                        </div>
                    <div>
                        <div className="mt-2">
                            <label htmlFor="cpf" className="formLabelText">
                            CPF
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="cpf"
                            name="cpf"
                            type="text"
                            required
                            placeholder="12345678900"
                            autoComplete="off"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <label htmlFor="date" className="formLabelText">
                            Data de Nascimento
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            placeholder="10/10/2010"
                            autoComplete="datepickers"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="submitButton"
                        disabled={isRegisteringStaff}
                        >
                        Confirmar
                        </button>
                    </div>
                </form>
                
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