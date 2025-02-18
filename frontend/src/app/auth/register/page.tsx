'use client'
import RegisterForm from "@/components/LoginRelated/RegisterForm";
import { useRouter } from 'next/navigation'


export default function Page() {
    const router = useRouter()
    return (
      <div className="bg-gray-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
        <RegisterForm onLoginChange={() =>  router.push('/auth/login')}/>
      </div>
    );
  }
  