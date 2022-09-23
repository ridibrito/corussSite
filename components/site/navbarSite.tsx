import Image from "next/image"
import Link from "next/link"
import MydropdownSite from './mydropdownSite'
import { useSession } from "next-auth/react"


export default function NavbarSite() {
  const { data: session } = useSession()

  return (
    <>
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
           <Image 
           src="/corusslogo.png"
           alt="logo coruss"
           width="150"
           height="25"
           />
            <div className="flex items-center lg:order-2">
              <Link href="/api/auth/signin" >
                <a  className="hidden lg:flex text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-semibold rounded text-sm px-6 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Entrar</a></Link>
               
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-sky-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                      <Link href="/site">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/site/precos">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Preços</a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/site/blog">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 font-semibold  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Blog</a>
                        </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page"><MydropdownSite/></a>
                        </Link>
                    </li>
                  
                   
                </ul>
            </div>
        </div>
    </nav>
</header>
    </>
  )
}
