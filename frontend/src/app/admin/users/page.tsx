'use client'
import StaffFormComplete from "@/components/adminRelated/StaffFormComplete";
import UpdateStaff from "@/components/adminRelated/UpdateStaff";
import { useState } from "react";
export default function Page() {
  const [registerFull, setRegisterFull] = useState(false);
  const [buttonText, setButtonText] = useState("Cadastro por completo")
  
  function changeButton(){
    setRegisterFull( () => !registerFull)
    if(registerFull){
      setButtonText("Cadastro por completo")
    }else{
      setButtonText("Cadastro simples")
    }
  }
    return (
      <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-center font-bold text-red-200 text-base">
            Adcionar staff
          </h1>
          <button className="blueButton self-center" onClick={changeButton}>
            {buttonText}
          </button>
          <div className="grid grid-flow-row  bg-slate-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
            {registerFull ? <StaffFormComplete /> : <UpdateStaff />}
          </div>
      </div>
    );
  }
  