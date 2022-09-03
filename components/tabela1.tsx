import { BsPencilSquare } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'





export default function Tabela1() {    
  return (
    <>
   
      <div className="overflow-x-auto relative dark:bg-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
        <div className="py-2 pl-2 bg-white dark:bg-gray-700 dark:text-gray-400">
          <label className="sr-only">Buscar</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="table-search"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600"
              placeholder="Buscar"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Nome
              </th>
              <th scope="col" className="py-3 px-6">
              tipo de plano
              </th>
              <th scope="col" className="py-3 px-6">
              operadora
              </th>
              <th scope="col" className="py-3 px-6">
                Valor
              </th>
              <th scope="col" className="py-3 px-6">
                Editar
              </th>
              <th scope="col" className="py-3 px-6">
                Deletar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
            Ricardo
               
              </th>
              <td className="py-4 px-6">Adesão</td>
              <td className="py-4 px-6">Amil</td>
              <td className="py-4 px-6">R$ 299.94</td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className=" font-medium text-blue-600 dark:text-sky-600 hover:underline"
                >
                  <BsPencilSquare className ="ml-4" />
                </a>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-sky-600 hover:underline"
                >
                  <FiTrash2 className ="ml-4" />
                </a>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  )
}
