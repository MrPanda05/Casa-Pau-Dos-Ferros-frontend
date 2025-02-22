'use server'
import Link from "next/link";
import { AmIAdmin } from "@/components/adminRelated/adminCommons"
import { redirect } from "next/navigation";

export default async function Page() {
  const data = await AmIAdmin();
  const isAdmin = data.status === 403 ? false: true
  if(!isAdmin){
    redirect('/')
  }

  return (
      <div>  {/*className="flex-1 flex flex-col justify-center gap-80"*/}
          <div className="grid grid-cols-4 justify-center align-middle text-center font-bold text-lg mt-80">
            <div>
              <Link href='/admin/users' className="blueButton p-2">Cadastrar staff</Link>
            </div>
            <div>
              <Link href='/admin/produtos' className="blueButton p-2">Cadastrar produtos</Link>
            </div>
            <div>
              <Link href='/admin/categorias' className="blueButton p-2">Cadastrar categorias</Link>
            </div>
            <div>
              <Link href='/admin/catProd' className="blueButton p-2 text-base">Adcionar categorias a produtos</Link>
            </div>
          </div>
      </div>
  );
}
