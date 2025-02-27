"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toaster from "../common/ToasterPopUp";
import { ConfirmMyCart } from "./cartCommons";
import { useCart } from "./CartContext";

export default function CheckoutForm() {
    const router = useRouter();
    const { clearCount } = useCart();
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setIsCheckingOut(true);
        try {
            const {data, status} = await ConfirmMyCart(e);
            if(status !== 200 && status !== 201){
                setPopUpType("popupFail")
                setMessageStatus(status)
                setPopUpMessage(data.message)
                setIsPopupOpen(true)
                console.log(data)
            } else {
                setPopUpType("popupSuccess");
                setIsPopupOpen(true);
                setPopUpMessage("Sucesso");
                clearCount()
                router.push(`/`);
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsCheckingOut(false);
        }
    }
    return (
        <div className="rounded-md">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
                <h1 className="text-center">Finalizar compras!</h1>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="payment" className="formLabelText">
                               Forma de pagamento
                            </label>
                            <div className="mt-2">
                            <select id="payment" name="payment" className="formInput">
                                <option value="PIX" >PIX</option>
                                <option value="credit">Crédito</option>
                                <option value="debit">Débito</option>
                                <option value="boleto">Boleto</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="formLabelText">
                                id endereço
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    required
                                    autoComplete="none"
                                    placeholder="1"
                                    className="formInput"
                                />
                            </div>
                            <div>
                                <button
                                    disabled={isCheckingOut}
                                    type="submit"
                                    className="submitButton mt-5"
                                >
                                    Pagar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {isPopupOpen && (
                    <div className="self-center bg-red-800 text-white rounded-md text-sm">
                        {
                            <Toaster
                                message={`${popUpMessage} | ${messageStatus} | supporte CasaPauDosFerrosSuporte@gmail.com`}
                                onClose={handleClosePopup}
                                isOpen={isPopupOpen}
                                status={popUpType}
                            />
                        }
                    </div>
                )}
            </div>
        </div>
    );
}
