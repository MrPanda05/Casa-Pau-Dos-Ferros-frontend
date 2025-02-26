"use client";

import { LogOut } from "./authCommons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogOutButton() {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggingOut(true);
        try {
            await LogOut();
            router.push("/auth/login");
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            setIsLoggingOut(false); // Reset loading state
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
                disabled={isLoggingOut}
                className="bg-cyan-400 rounded-md w-64 hover:bg-cyan-500 active:bg-cyan-300 disabled:bg-cyan-200"
            >
                Sair
            </button>
        </form>
    );
}
