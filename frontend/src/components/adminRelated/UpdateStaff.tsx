'use client'
import { useState } from "react";
import { UpgrateToStaff } from "./adminCommons";
import Toaster from "../common/ToasterPopUp";

export default function UpdateStaff(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isUpdating, setIsUpdating] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        setIsUpdating(true)
        try {
            const {data, status} = await UpgrateToStaff(e)
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
            setIsUpdating(false)
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
                        disabled={isUpdating}
                        type="submit"
                        className="submitButton"
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