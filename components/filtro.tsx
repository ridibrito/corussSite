
export default function Filtro(){
    return(
  
      <>
      
      <div className="flex items-center dark:bg-gray-700 justify-around bg-white p-3 rounded-lg shadow-lg mb-5 mt-5">
        <p className="w-1/5 font-semibold text-gray-400 ">Filtrar por</p>
      <input
                  type="text"
                  className="rounded-lg w-1/4 flex h-10 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 "
                  placeholder="Nome"
                  
                />
                <input
                  type="text"
                  className="rounded-lg flex h-10 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-1/4  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 "
                  placeholder="CPF/CNPJ"
                  
                />

<input
                  type="date"
                  className="rounded-lg flex h-10 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-1/4  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Data da venda"
                />
  
      
      </div>
      </>
    )
    }
  