import Link from "next/link"
import { NextPage } from "next"
import { useSession, signIn, signOut } from "next-auth/react"
import Seo from "../components/Seo"

const Home: NextPage = () => {
  return(<><div>
   <Seo title="Coruss" description="Bem vindo a liberdade"/>
 
    <ul>
      <li>
      <Link href="/app"><a>App</a></Link>
      </li>
      <li>
      <Link href="/ricardo"><a>Tenant Home</a></Link>
      </li>
    </ul>
    
    </div></>)
}
export default Home


