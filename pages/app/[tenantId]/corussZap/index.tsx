import Link from 'next/link'
import { AiFillHome, AiOutlinePlus, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai'
import { MdOutlineQueue } from 'react-icons/md'
import ConectWhatsApp from '/components/forms/conectWhatsApp'

import { useState } from 'react'
import { useRouter } from 'next/router'



export default function WhatsApp() {
  const router = useRouter()
  const [showPopUpCliente,setShowPopUpCliente ] = useState(false)

const handleNewCliente = () => {
  setShowPopUpCliente(true);
}

return (
  <>
  
    <div className=" h-screen overflow-y-scroll dark:text-gray-300 dark:bg-gray-600 bg-gray-100 pl-60 pt-16 pr-4">
      <div className='flex justify-between mt-1 items-center'>
      <div className="flex items-center py-4">
      <Link href={`/app/${router.query.tenantId}`}>
          <a>
            <AiFillHome className="dark:text-gray-300 dark:bg-gray-600 hover:text-sky-600 text-gray-500 w-5 h-5" />
          </a>
        </Link>
        <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-300 dark:bg-gray-600">-</h3>
       
        <h3 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-300 dark:bg-gray-600">
        CorussZap
        </h3>


      </div>
      <div>
      <button onClick={handleNewCliente} className='flex items-center ml-60 bg-sky-600 text-white px-6 py-1 font-normal mr-3 rounded shadow'>Conectar</button>
      <ConectWhatsApp //@ts-ignore
            show ={showPopUpCliente}
            //@ts-ignore
            setShow={setShowPopUpCliente}
          />

      </div>
      </div>
      <hr></hr>
      <div>
			<nav>
        <ul className='flex justify-between mt-2'>
        <li className='flex items-center gap-2 text-white font-semibold bg-sky-600 rounded px-4 py-2 '>
        <AiOutlineUserAdd />  
          Usuário
        </li>
        <li className='flex items-center gap-2 text-white font-semibold bg-sky-600 rounded px-4 py-2 '>
          <MdOutlineQueue />
          Fila
        </li>
        <li className='flex items-center gap-2 text-white font-semibold bg-sky-600 rounded px-4 py-2 '>
        <AiOutlineSetting />
          Config
        </li>
        </ul>
      </nav>
		</div>
    </div>
  </>
)
}
