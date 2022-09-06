import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
interface Props {
  children: React.ReactNode;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LayoutTenant({ children }: Props) {

    const router = useRouter()
    const [shouldRedirect,setShouldRedirect ] = useState(false)
    const { data: session } = useSession();
  const { data, error } = useSWR("/api/tenants", fetcher);

useEffect(() => {
  if(data && data.length === 1) {
    setShouldRedirect(true)
    router.push('/app/coruss')
  }
    
},[])

  return (
    <>
      <div className="bg-gray-200 rounded py-8 shadow-lg mx-auto max-w-2xl space-x-5 mt-5 space-y-3 text-center">
      
        <img 
        src={session?.user?.image}
        alt={session?.user?.name}
        className='w-20 h-20 rounded-full mx-auto inline-block'/>
          <h1 className="text-xl font-semibold ">{session?.user?.name}</h1>
        <h1>{session?.user?.email}</h1>
        {children}
        
        <p>
            
         
          <button
            className="bg-sky-600 text-white px-12 py-2 rounded mx-2"
            onClick={() => signIn("auth0")}
          >
            Sign in
          </button>
        
        </p>
      </div>
    </>
  );
}
