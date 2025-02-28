'use client'

import AddAddress from "@/components/userRelated/AddAddress";
import { useEffect, useState  } from "react";
import { useRouter } from "next/navigation";
import AddressesList from "@/components/userRelated/AddressList";
import { CoockieGet } from "@/components/common/CoockiesManegers";
import { useParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id; 
  const [activeSetting, setActiveSetting] = useState('addAddress');
  useEffect(() => {
    const doShit = async () => {
      const coockieId = await CoockieGet("userId");
      if(userId !== coockieId?.value){
        router.push(`/user/${coockieId?.value}/settings`);
      }
    }
    doShit()
  }, [router, userId])
  async function goToHistory(){
    const userId = await CoockieGet('userId');
    router.push(`/user/${userId?.value}/history`);
  }
  
    return (
      <div className="flex flex-row h-screen gap-2">
        <div className="bg-slate-600 size-full basis-80 text-center rounded-md overflow-scroll overflow-x-hidden">
          <h1 className="text-lg mt-5">
            Settings
          </h1>
          <div className="flex flex-col justify-around h-full align-top font-bold">
            <button className="settingsObj" onClick={() => setActiveSetting('addAddress')}>
              Adicionar endereço
            </button>
            <button className="settingsObj" onClick={goToHistory}>
              Historico de compra
            </button>
            <button className="settingsObj" onClick={() => setActiveSetting('addressesList')}>
              Meus endereços
            </button>
          </div>
        </div>
        <div className="grid grid-flow-row  bg-slate-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
          <div className="">
            {activeSetting === 'addAddress' && <AddAddress />}
            {activeSetting === 'addressesList' && <AddressesList />}
          </div>
          <div className="self-center m-1 shrink basis-1">
            <button className="blueButton" onClick={() => router.back()}>
              profile
            </button>
          </div>
        </div>
      </div>
    );
  }
  