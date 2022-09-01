import Link from 'next/link'
import Image from 'next/image'
import { RiDashboardFill } from 'react-icons/ri'
import { MdComputer } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoIosSettings } from 'react-icons/io'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { FaBuffer } from 'react-icons/fa'
import DropAdm from './dropadm'
import DropFinan from './dropfinan'


export default function Navbar() {
  return (
    <>
      <nav className=" bg-white sidebar fixed z-20 w-56 min-h-screen shadow mt-0 pl-3 pr-3 overflow-y-auto">
        <div className="grid grid-cols-1 items-end">
          <div className="flex">
            <div className="flex">
             
              <Link href="/">
                <ul>
                  <li className="pt-6 pb-2 px-auto">
                    <a className="hover:cursor-pointer">
                      <Image
                      
                        src="/corusslogo.png"
                        alt="logo alb"
                        width="180"
                        height="30"
                      />
                    </a>
                  </li>
                </ul>
              </Link>
            </div>
          </div>

          <ul className="w-52">
            <Link href="/">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <RiDashboardFill className="w-7 h-7 mr-2" />Dashboard
                </a>
              </li>
            </Link>

            <Link href="/crm">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <MdComputer className="w-7 h-7 mr-2" />
                  CRM
                </a>
              </li>
            </Link>

            <Link href="/adm">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center">
                  <DropAdm />
                </a>
              </li>
            </Link>

            <Link href="/financeiro">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center">
                  <DropFinan />
                </a>
              </li>
            </Link>

            <Link href="/email">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <AiFillMail className="w-7 h-7 mr-2" />
                  Inbox <span className="flex ml-16 py-1 px-2 leading-none text-center  text-sky-600 text-sm whitespace-nowrap align-baseline font-bold bg-blue-200  rounded ">7</span>
                </a>
              </li>
            </Link>


           

            <Link href="/whatsapp">
              <li className="pt-2 pl-2 pb-2 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <IoLogoWhatsapp className="w-7 h-7 mr-2" />
                  WhatsApp
                  <span className="flex ml-8 py-1 px-2 leading-none text-center  text-white text-sm whitespace-nowrap align-baseline font-bold bg-green-500  rounded-full ">9</span>
                </a>
              </li>
            </Link>

           
            <Link href="/simulador">
              <li className="pt-2 pb-2 pl-1 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <FaBuffer className="w-8 h-7 mr-2" />
                  Simulador
                </a>
              </li>
            </Link>

          
          </ul>

          <div className="pt-28">
            
            <Link href="/logout">
              <ul className="col-end-10">
              <Link href="/config">
              <li className="pt-2 pb-2 pl-1 text-gray-500  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2">
                <a className="flex items-center">
                  <IoIosSettings className="w-8 h-7 mr-2" />
                  Configurações
                </a>
              </li>
            </Link>
                <li className="pt-2 pb-2 pl-5 text-gray-500 hover:text-sky-600 cursor-pointer m-2">
                  <a className="flex items-center">
                    <RiLogoutCircleRLine className="w-8 h-7 mr-2" />
                    Log out
                  </a>
                </li>
                
              </ul>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
