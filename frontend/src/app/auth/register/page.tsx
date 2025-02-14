'use client'
import RegisterForm from "@/components/LoginRelated/RegisterForm";
import { useRouter } from 'next/navigation'


export default function Page() {
    const router = useRouter()
    return (
      <div className="bg-gray-800 h-full">
        <RegisterForm onLoginChange={() =>  router.push('/auth/login')}/>
      </div>
    );
  }
  