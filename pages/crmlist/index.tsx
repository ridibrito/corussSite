import Link from "next/link"
import { AiFillHome } from 'react-icons/ai'
import BoardList from "../../components/board/boardList"

export default function Crm() {
 
  return (
    <>
    
       <div className="h-screen  bg-gray-100  bg-scroll pl-60 pt-16 pr-4">
        <div className='flex justify-between items-center'>
        <div className="flex items-center py-4">
          <Link href="/app">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 ">CRM Lista</h1>
        </div>
        
        </div>
        <hr></hr>
        
        <div className='flex justify-between pt-2  '>
          <h2 className='items-center text-lg text-gray-500 ml-3 pt-1'>Oportunidades</h2>
        <div className='bg-sky-600 text-white p-2 mb-2 rounded shadow-md'>
        <Link href='/crm'>
          <a className='pr-3 pl-3'>CRM</a>
          </Link>|
          <Link href="crmlist">
          <a className='pl-3 pr-3'>Lista</a>
          </Link>
        </div>
        </div>
        
        <BoardList />
        
        
      </div>
      
    </>
  )
}
