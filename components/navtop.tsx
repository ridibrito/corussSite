import { IoMdNotifications } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./toggle";

export default function Navtop() {
  return (
    <>
      <nav className="fixed z-10">
        <div className="justify-between shadow fixed bg-white w-full h-16  flex items-center px-4 duration-300">
          <div>
            <label className="relative block pl-56">
              <input
                type="search"
                id="table-search"
                className="block p-2 pl-10 w-80 text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600"
                placeholder="Buscar"
              />
            </label>
            
          </div>
          <div><Toggle /></div>
          <div className="flex mr-3">
            
            <IoMdNotifications
              className="cursor-pointer text-sky-600 hover:text-blue-700 p-2 w-10 h-10 mr-5 mt-1.5 hover:bg-blue-100 bg-blue-100 p- 
            rounded-full"
            />
             <span className="flex -ml-7 mt-7 py-1 px-2 leading-none text-center text-sm whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">3</span>

            <Link href="/user">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    className="rounded-full cursor-pointer"
                    src="/foto  capa.png"
                    alt="User"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
