import Image from 'next/image'
import Link from 'next/link'
import MyDropdown from '../../components/site/mydropdownSite'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react"


export default function NavbarSite() {
  return (
    <>
    <div className='shadow'>
      <div className="sm:max-w-7xl flex mx-auto justify-between p-3  bg-white items-center">
        <Image src="/novologo.png" alt="logo alb" width="140" height="30" />
        <AiOutlineMenu className='sm:hidden w-7 h-6 text-sky-600'/>

        <div className='hidden sm:flex'>
          <ul className="flex">
            <Link href="/">
              <a>
                <li className="text-gray-700 font-semibold hover:text-sky-600 duration-500">
                  Home
                </li>
              </a>
            </Link>

            <Link href="/precos">
              <a>
                <li className="text-gray-700 font-semibold ml-5 hover:text-sky-600">
                  Preços
                </li>
              </a>
            </Link>

            <Link href="/blog">
              <a>
                <li className="text-gray-700 font-semibold ml-5 hover:text-sky-600">
                  Blog
                </li>
              </a>
            </Link>

            <Link href="#">
              <a>
                {' '}
                <MyDropdown />
              </a>
            </Link>
          </ul>
        </div>

          <button onClick={() => signIn('auth0')} className="hidden sm:flex bg-sky-600 text-white px-6 py-2 rounded-md font-semibold">
            Sign in
          </button>
        </div>
      </div>
      
    </>
  )
}
