import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";

export default function Config() {
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/app">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 ">
            Configurações
          </h1>
        </div>
        <hr></hr>

        <div className="flex w-full mt-3">
          <div className="w-2/4">
            <div className="flex h-30">
              <div className="bg-white w-full rounded-md shadow-md ">
                <div className="flex items-center p-4">
                  <Image
                    className="rounded-lg shadow-md"
                    src="/foto capa.png"
                    alt="foto perfil"
                    width="100"
                    height="100"
                  />
                  <div className="flex-col">
                    <h2 className="mx-6 font-normal text-lg ">
                      Ricardo de Brito
                    </h2>
                    <h3 className="flex mx-6">Assistente financeiro</h3>
                    <button className="bg-sky-600 text-white px-8 py-1 mt-2 rounded-md mx-6">
                      Upload foto
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-3">
              <div className="bg-white w-full h-40 rounded-md shadow-md">
                <div className="flex"></div>
              </div>
            </div>
          </div>

          <div className="bg-white w-2/4 ml-3 rounded-md shadow-md ">
            <h1 className="p-4 font-normal text-lg ">Informações gerais</h1>
            <form>
            <div className="grid">
            <label htmlFor="first_name" className="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
            <input type="text" id="first_name" className="mb-2 ml-2 mr-2 flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="John" required/>
            <label htmlFor="first_name" className="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sobrenome</label>
            <input type="text" id="first_name" className="mb-2 ml-2 mr-2 flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="Albuquerque" required/>
            
            <div className="flex">
            <div className="flex-col">
            <label htmlFor="first_name" className="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">CPF</label>
            <input type="text" id="first_name" className="mb-2 ml-2 mr-2 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="000.000.000-00" required/>
            </div>
            <div className="flex-col">
            <label htmlFor="first_name" className="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
            <input type="text" id="first_name" className="mb-2 ml-2 mr-2 flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="John@betoven.com.br" required/>
            </div>
            <div className="flex-col">
            <label htmlFor="first_name" className="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefone</label>
            <input type="text" id="first_name" className="mb-2 ml-2 mr-2  w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="(xx) xxxx-xxxxx" required/>
            </div>
            </div>
         </div>
            </form>
          </div>
        </div>
        <div className="bg-white w-full h-80 mt-3 rounded-md shadow-md">
          <h1>donuts charts</h1>
        </div>
      </div>
    </>
  );
}
