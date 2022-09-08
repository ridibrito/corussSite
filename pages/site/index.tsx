import { NextPage } from "next"
import { useSession, signIn, signOut } from "next-auth/react"
import Seo from "../../components/Seo"
import NavbarSite from "../../components/site/navbarSite"
import TabsSite from "../../components/site/tabsSite"
import HeaderSite from "../../components/site/headerSite"


const Home = () => {
 

  <Seo title="Coruss" description="Bem vindo a liberdade"/>
  return(<><div>
    <NavbarSite />
    <HeaderSite />
    <TabsSite />
    
    
    
    
    </div></>)
}
export default Home

