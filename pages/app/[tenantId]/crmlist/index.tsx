import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import AddLead from "../../../../components/forms/FormAddLead"

export default function CrmList() {
  const router = useRouter()
  const [showPopUpLead,setShowPopUpLead ] = useState(false)

  const handleNewCliente = () => {
    setShowPopUpLead(true);
  }
  return (
    <>
    
       <div className="h-screen  bg-gray-100 dark:bg-gray-600 dark:text-gray-200 pl-60 pt-16 pr-4">
        <div className='flex justify-between items-center'>
        <div className="flex items-center py-4">
        <Link href={`/app/${router.query.tenantId}`}>
            <a>
              <AiFillHome className="text-gray-500 dark:bg-gray-600 dark:text-gray-200 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-200">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-200">CRM Lista</h1>
        </div>
        <div>
        <button onClick={handleNewCliente} className='flex items-center ml-60 bg-sky-600 text-white px-6 py-2 font-normal mr-3 rounded shadow'><AiOutlinePlus/></button>

        </div>
        </div>
        <hr></hr>
        <AddLead  //@ts-ignore
            show ={showPopUpLead}
            //@ts-ignore
            setShow={setShowPopUpLead}
          />
        
        <div className='flex justify-between pt-2  '>
          <h2 className='items-center text-lg text-gray-500 ml-3 pt-1 dark:bg-gray-600 dark:text-gray-200'>Oportunidades</h2>
        <div className='bg-sky-600 text-white p-2 mb-2 rounded shadow-md'>
        <Link href={`/app/${router?.query?.tenantId}/crm`}>
          <a className='pr-3 pl-3'>CRM</a>
          </Link>|
          <Link href={`/app/${router?.query?.tenantId}/crmlist`}>
          <a className='pl-3 pr-3'>Lista</a>
          </Link>
        </div>
        </div>
        
        
        
        
      </div>
      
    </>
  )
}
