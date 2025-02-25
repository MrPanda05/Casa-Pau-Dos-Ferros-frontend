'use client'
import { useState } from "react";
import { AddCategoryOnProduct } from "./adminCommons";
import Toaster from "../common/ToasterPopUp";
export default function AddCategoryToProductForm(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");

    const handleClosePopup = () => {
        setIsPopupOpen(false);
      };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        const data = await AddCategoryOnProduct(e)
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
            Adcionar categoria em um produto
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
            {isPopupOpen && (
                <div className="self-center bg-red-800 text-white rounded-md text-sm">
                    {<Toaster message={`${popUpMessage} | ${messageStatus} | supporte CasaPauDosFerrosSuporte@gmail.com`} onClose={handleClosePopup} isOpen={isPopupOpen} status={popUpType}/>}
                </div>
            )}
        </div>
    </div>
    )
}