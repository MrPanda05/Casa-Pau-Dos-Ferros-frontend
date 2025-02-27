'use client'
import LoginForm from "@/components/LoginRelated/LoginForm";
import { useRouter } from 'next/navigation'


export default function Page() {
    const router = useRouter()
    return (
      <div className="bg-gray-800 size-full rounded-md overflow-y-auto justify-center">
        <LoginForm onLoginChange={() =>  router.push('/auth/register')} />
      </div>
    );
  }