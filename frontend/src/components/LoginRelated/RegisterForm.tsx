"use client";
import { ISwitch } from "./authCommons";
import { useState } from "react";
import { RegiterUser } from "@/components/LoginRelated/authCommons";
import { useRouter } from "next/navigation";
import Toaster from "../common/ToasterPopUp";

export default function RegisterForm({ onLoginChange: changeLogin }: ISwitch) {
    const router = useRouter();
    const [messageStatus, setMessageStatus] = useState(200);
    const [popUpMessage, setPopUpMessage] = useState("error");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpType, setPopUpType] = useState("popupFail");
    const [isRegistering, setIsRegistering] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setIsRegistering(true);
        try {
            const {data, status} = await RegiterUser(e);
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
                router.push(`/auth/login`);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsRegistering(false);
        }
    }
    return (
        <div className="rounded-md">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white font-bold text-2xl/9">
                <h1 className="text-center">Cadastre-se!</h1>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="formLabelText">
                                Nome de Usuario
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="none"
                                    placeholder="TrumpeteGamer123"
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
                                disabled={isRegistering}
                                className="submitButton"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-10">
                    <button
                        onClick={changeLogin}
                        className="text-base text-blue-500 hover:text-blue-700"
                    >
                        Ja possui conta?
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
