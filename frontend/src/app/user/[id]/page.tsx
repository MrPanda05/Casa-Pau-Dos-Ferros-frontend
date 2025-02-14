'use server'
import Avatar from "@/components/userRelated/Avatar"
import LogOutButton from "@/components/LoginRelated/LogOutButton"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
      const userID = (await params).id


    return (
        <div className="grid grid-flow-row justify-center text-center gap-5">
            {/* {data.id} */}
            <h1 className="text-4xl font-bold m-10">
              Meu perfil
            </h1>
            <Avatar />
            <div className="text-2xl">
              Ola, me chamo {userID}
            </div>
            <div className="text-2xl">
              Minha descricao
            </div>
            <div>
              <LogOutButton />
            </div>
        </div>
    )
  }
