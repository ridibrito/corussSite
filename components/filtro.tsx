
export default function Filtro(){
    return(
  
      <>
      <h2 className="mt-5 text-gray-500 font-semibold mb-1 ml-3">Filtro</h2>
      <div className="flex justify-between bg-white p-3 rounded shadow-md mb-5">
  
      <div className="grid sm:grid-cols-3 md:gri-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 font-semibold pl-3">Nome</label>
        <input type="search" id="" name="" placeholder="Ex: João Miguel" className="h-11 w-auto rounded pl-3 text-sm shadow-sm"></input>
        </div>
        <div className="flex flex-col">  
          <label className="text-sm text-gray-500 font-semibold pl-3">CPF</label>
        <input type="search" id="" name="" placeholder="000.000.000-00" className="h-11 w-auto rounded ml-1 pl-3 text-sm shadow-sm "></input>
        </div>
       
       <div className="flex flex-col">
       <label className="text-sm text-gray-500 font-semibold pl-3">Data</label>
        <input type="date" id="" name="" placeholder="000.000.000-00" className="h-11 w-auto rounded ml-1 pl-3 text-sm shadow-sm "></input>
       </div>
        
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 font-semibold pl-3">Status</label>
        <select className="h-8 w-auto rounded ml-1 pl-3 text-sm shadow-sm ">
          <option className="text-sm text-gray-900 "></option>
          <option className="text-sm text-gray-900 ">Ativo</option>
          <option className="text-sm text-gray-900 ">Pendente</option>
          <option className="text-sm text-gray-900 ">Cancelado</option>
        </select>
        </div>
        <div className="flex p-3">
          <button className="bg-gray-300 rounded text-white px-3 py-1 font-semibold">Limpar</button>
        <button className="text-white rounded bg-sky-600 px-4  py-1 ml-2 font-semibold">Buscar</button>
        </div>
  
      </div>
      </div>
  
  
  
  
  
  
  
  
  
  
  
  
      </>
    )
    }
  