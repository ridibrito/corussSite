import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";


export default function Home(){
    const { data: session } = useSession()
    return(
    <>
    <ul>
        <li>
            <Link href="/app"><a>App</a></Link>
        </li>
        <li>
            <Link href="/coruss"><a>Tenant Coruss</a></Link>
        </li>
       
        <li>
        
        <button onClick={() => signIn()}>Sign in</button>
        </li>
        <p>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </p>

    </ul>

    </>
    )
}