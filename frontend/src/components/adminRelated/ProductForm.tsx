'use client'
import { useState } from "react";
import { AddProduct } from "./adminCommons";
import Toaster from "../common/ToasterPopUp";

export default function ProductForm(){
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isAddingProduct, setIsAddingProduct] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
      };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        setIsAddingProduct(true)
        try {
            const {data, status} = await AddProduct(e)
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
            setIsAddingProduct(false)
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
                        <label htmlFor="name" className="formLabelText">
                            Nome do produto
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="Produto gamer"
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
                            placeholder="Somente para gay mers"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="price" className="formLabelText">
                            Preco R$:
                        </label>
                        <div className="mt-2">
                            <input
                            id="price"
                            name="price"
                            type="text"
                            required
                            autoComplete="none"
                            placeholder="1000"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <label htmlFor="amount" className="formLabelText">
                            Stock
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="amount"
                            name="amount"
                            type="amount"
                            required
                            placeholder="100"
                            autoComplete="none"
                            className="formInput"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <label htmlFor="productImage" className="formLabelText">
                            Imagem
                            </label>
                        </div>
                            <div className="mt-2">
                                <input
                                id="productImage"
                                name="productImage"
                                type="file"
                                required
                                placeholder="***"
                                autoComplete="none"
                                className="formInput"
                                />
                            </div>
                        </div>
                    <div>
                        <button
                        disabled={isAddingProduct}
                        type="submit"
                        className="submitButton">
                        Cadastrar produto
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