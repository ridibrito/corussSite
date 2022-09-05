import { NextPage } from "next"
import { useSession, signIn, signOut } from "next-auth/react"
import Seo from "../components/Seo"

const Home: NextPage = () => {

  <Seo title="Coruss" description="Bem vindo a liberdade"/>
  
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('auth0')}>Sign in</button>
  
  </>
  )
}
export default Home


