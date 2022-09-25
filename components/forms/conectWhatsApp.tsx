import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";


interface Props {
  show: string
  setShow: () => boolean
}

export default function ConectWhatsApp({ show, setShow }:Props) {
  const handleClose = () => {
   //@ts-ignore
   setShow(false);
  };
  return (
    <>
      <div>
        <div
          style={{ right: show ? -10 : -1000 }}
          className="bg-white dark:bg-gray-600 shadow-2xl overflow-y-scroll  rounded  -mt-24 absolute z-30 flex-col px-8 py-5 right-4 transition-all duration-500"
        >
          <header className="flex justify-between pb-4">
            <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              Conectar WhatsApp
            </h1>
            <span>
              <IoMdCloseCircle
                onClick={handleClose}
                className="text-gray-500 w-8 h-8 hover:bg-gray-200 mr-3 dark:bg-gray-600"
              />
            </span>
          </header>
          <hr></hr>
         
<div className="dark:bg-gray-600">
    <h1>Qr Code</h1>
    <Image 
    src="/qr.png"
    alt="qrcode"
    width="300"
    height="300"/>
</div>
          <footer className="flex mt-3">
            <button
              onClick={handleClose}
              className="border shadow border-sky-600 font-normal px-6 py-2 rounded text-sky-600 hover:bg-blue-50 dark:hover:bg-gray-600"
            >
              Cancelar
            </button>
           
          </footer>
        </div>
      </div>
    </>
  );
}

        
        
        
        
        
        
        
        
        
        
