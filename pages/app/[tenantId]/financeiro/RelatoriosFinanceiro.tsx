import Link from 'next/link'
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import AddCliente from '../../../../components/forms/FormAddCliente'
import { useState } from 'react'
import { useRouter } from 'next/router'




export default function Relatorios() {
  const router = useRouter()
  const [showPopUpCliente,setShowPopUpCliente ] = useState(false)

const handleNewCliente = () => {
  setShowPopUpCliente(true)
}

  return (
    <>
    
      <div className=" h-screen overflow-y-scroll dark:text-gray-400 dark:bg-gray-600 bg-gray-100 pl-60 pt-16 pr-4">
        <div className='flex justify-between mt-1 items-center'>
        <div className="flex items-center py-4">
        <Link href={`/app/${router.query.tenantId}`}>
            <a>
              <AiFillHome className="dark:text-gray-400 dark:bg-gray-600 hover:text-sky-600 text-gray-500 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-400 dark:bg-gray-600">-</h3>
          <h3 className=" ml-3 pt-1 font-normal text-gray-500 ">
          <Link href={`/app/${router.query.tenantId}/financeiro`}>
              <a className="hover:text-sky-600 cursor-pointer dark:text-gray-400 dark:bg-gray-600">Financeiro</a>
            </Link>
          </h3>
       
          <h3 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-400 dark:bg-gray-600">
           / Relatórios financeiros
          </h3>

  
        </div>
        <div>
        <button onClick={handleNewCliente} className='flex items-center ml-60 bg-sky-600 text-white px-6 py-2 font-normal mr-3 rounded shadow'><AiOutlinePlus/></button>

        </div>
        </div>
        <hr></hr>
        <div >
          
          <AddCliente  
          //@ts-ignore
            show ={showPopUpCliente}
            //@ts-ignore
            setShow={setShowPopUpCliente}
          />
          
        </div>
      </div>
    </>
  )
}
