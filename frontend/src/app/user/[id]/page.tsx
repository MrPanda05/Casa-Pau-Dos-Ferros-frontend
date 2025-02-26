"use server";
import { AmIAdmin } from "@/components/adminRelated/adminCommons";
import { CoockieExist } from "@/components/common/CoockiesManegers";
import LogOutButton from "@/components/LoginRelated/LogOutButton";
import Avatar from "@/components/userRelated/Avatar";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const userID = (await params).id;
    const token = await CoockieExist("token");
    if (!token) {
        redirect("/auth/login");
    }

    const data = await AmIAdmin();
    const isAdmin = data.status === 403 ? false : true;

    return (
        <div className="grid grid-flow-row justify-center text-center gap-5">
            {/* {data.iddd} */}
            <h1 className="text-4xl font-bold m-10">Meu perfil</h1>
            <Avatar />
            <div className="flex flex-row gap-10 justify-between font-bold text-stone-900">
                <div>
                    <Link href={`/user/${userID}/settings`} className="blueButton p-3">
                        Opções
                    </Link>
                </div>
                <div>
                    <Link href={`/user/${userID}/cart`} className="blueButton p-3">
                        Carrinho
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <LogOutButton />
                {isAdmin && (
                    <div className="mt-5">
                        <Link href="/admin" className="blueButton p-2 font-bold text-lg">
                            Página de Administração
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
