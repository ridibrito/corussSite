import Link from "next/link"
import { AiFillHome } from 'react-icons/ai'
import Board from '../../../components/board/index'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"


export default function Crm() {
 
  return (
    <DndProvider backend={HTML5Backend}>
    
       <div className="h-screen bg-gray-100 dark:bg-gray-600 dark:text-gray-200 pl-60 pt-16 pr-4">
        <div className='flex justify-between items-center'>
        <div className="flex items-center py-4">
          <Link href="/app">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5 dark:text-gray-200" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-200">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-200">CRM</h1>
        </div>
        
        </div>
        <hr></hr>
        
        <div className='flex justify-between pt-2  '>
          <h2 className='items-center text-lg text-gray-500 ml-3 pt-1 dark:text-gray-200'>Oportunidades</h2>
        <div className='bg-sky-600 text-white p-2 mb-2 rounded shadow-md'>
        <Link href='/app/crm'>
          <a className='pr-3 pl-3'>CRM</a>
          </Link>|
          <Link href="/app/crmlist">
          <a className='pl-3 pr-3'>Lista</a>
          </Link>
        </div>
        </div>
        <Board />
        
        
      </div>
    </DndProvider>
  )
}
