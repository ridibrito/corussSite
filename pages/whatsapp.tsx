import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

export default function WhatsApp() {
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 ">WhatsApp</h1>
        </div>
        <hr></hr>

       
      </div>
    </>
  )
}
