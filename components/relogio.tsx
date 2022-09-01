import { BsListTask } from 'react-icons/bs'

export default function Relogio() {
    return(
        <>
        <div  className="flex bg-gray-50 h-16 items-center px-4 hover:bg-gray-100 hover:shadow-md cursor-pointer  ">
        <span id="horas" className="text-4xl font-normal text-gray-500 ">19:</span>
        <span id="minutos" className="text-4xl font-normal text-gray-500 ">30</span>
        <BsListTask  className='text-sky-600 font-bold w-8 h-6 ml-2 mt-1 flex items-center'/>
        </div>       
        </>
    )

  
}
