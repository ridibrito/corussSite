import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import NavCadastros from '../../../components/NavCadastros'
import Filtro from '../../../components/filtro'
import Tabela1 from '../../../components/tabela1'

import { useState } from 'react'
import addLocal from '../../../components/forms/form+Local'



export default function Local() {
  const [showPopUpLocal,setShowPopUpLocal ] = useState(false)

const handleNewLocal = () => {
  setShowPopUpLocal(true);
}

  return (
    <>
    
      <div className=" h-screen overflow-y-scroll  bg-gray-100 pl-60 pt-16 pr-4">
        <div className='flex justify-between mt-1 items-center'>
        <div className="flex items-center py-4">
          <Link href="/">
            <a>
              <AiFillHome className=" hover:text-sky-600 text-gray-500 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3  font-normal text-gray-500">-</h3>
          <h3 className=" ml-3 font-normal text-gray-500">
            <Link href="/adm">
              <a className="hover:text-sky-600 cursor-pointer">Administrativo</a>
            </Link>
          </h3>

          <h3 className=" ml-3 font-normal text-gray-500 ">
            <Link href="/adm">
              <a className="hover:text-sky-600 cursor-pointer">/ Cadastros</a>
            </Link>
          </h3>
          <h3 className=" ml-3 font-normal text-gray-500 ">
           / Local de entrega
          </h3>

  
        </div>
        <div>
        <button onClick={handleNewLocal} className='flex items-center ml-60 bg-sky-600 text-white px-6 py-2 font-normal mr-3 rounded shadow'>Incluir cadastro +</button>

        </div>
        </div>
        <hr></hr>
        <div >
          <NavCadastros className='overflow-y-scroll'/>
         
          <Filtro />
          <Tabela1 />
        </div>
      </div>
    </>
  )
}
