"use client";
import { ISwitch } from "./authCommons";
import { useState } from "react";
import { LogUser } from "@/components/LoginRelated/authCommons";
import { useRouter } from "next/navigation";
import { CoockieGet } from "../common/CoockiesManegers";
import Toaster from "../common/ToasterPopUp";

export default function LoginForm({ onLoginChange: changeLogin }: ISwitch) {
    const router = useRouter();
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setIsLoggingIn(true);
        try {      
            const {data, status} = await LogUser(e);
            if(status !== 200 && status !== 201){
                setPopUpType("popupFail")
                setMessageStatus(status)
                setPopUpMessage(data.message)
                setIsPopupOpen(true)
                console.log(data)
            }
            else {
                setPopUpType("popupSuccess");
                setPopUpMessage("Sucesso");
                setIsPopupOpen(true);
                const userName = await CoockieGet("userId");
                router.push(`/user/${userName?.value}`);
            }
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoggingIn(false);
        }
    }

    return (
        <div className="rounded-md ">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
                <h1 className="text-center">Logar!</h1>
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
                                className="submitButton"
                            >
                                Logar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-10">
                    <button
                        onClick={changeLogin}
                        disabled={isLoggingIn}
                        className="text-base text-blue-500 hover:text-blue-700"
                    >
                        Nao possui conta?
                    </button>
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
