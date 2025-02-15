'use client'
import LoginForm from "@/components/LoginRelated/LoginForm";
import { useRouter } from 'next/navigation'


export default function Page() {
    const router = useRouter()
    return (
      <div className="bg-gray-800 h-full">
        <LoginForm onLoginChange={() =>  router.push('/auth/register')} />
      </div>
    );
  }