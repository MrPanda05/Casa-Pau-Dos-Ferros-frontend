'use client'
import Toaster from "../common/ToasterPopUp";
import { AddCategory } from "./adminCommons";
import { useState } from "react";

export default function AddCategoryForm(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");

      const handleClosePopup = () => {
        setIsPopupOpen(false);
      };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        const data = await AddCategory(e)
        if(data.status !== 200 && data.status !== 201){
            setPopUpType("popupFail")
            setMessageStatus(data.status)
            setPopUpMessage(data.data)
            setIsPopupOpen(true)
            console.log(data.data)

        }
        else{
            setPopUpType("popupSuccess")
            setPopUpMessage("Sucesso")
            setIsPopupOpen(true)
        }
    }
    return(
        <div className="rounded-md">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
            <h1 className="text-center">
                Cadastrar categoria
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="name" className="formLabelText">
                            Nome da categoria
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="Categoria"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="formLabelText">
                            Descricao
                        </label>
                        <div className="mt-2">
                            <input
                            id="description"
                            name="description"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="Categoria gamer"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Cadastrar categoria
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