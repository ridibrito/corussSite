import { FiTrash2 } from 'react-icons/fi'
import { BsPencilSquare } from 'react-icons/bs'

export default function TabelaClientes(){
  return(<><div>

<div className="overflow-x-auto relative shadow-lg sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-sm text-gray-500  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Nome
        </th>
        <th scope="col" className="py-3 px-6">
        Tipo de plano
        </th>
        <th scope="col" className="py-3 px-6">
          Operadora/Adm
        </th>
        <th scope="col" className="py-3 px-6">
        Vigência
        </th>
        <th scope="col" className="py-3 px-6">
         Valor
        </th>
        <th scope="col" className="py-3 px-6">
         <BsPencilSquare/>
        </th>
        <th scope="col" className="py-3 px-6">
        <FiTrash2/>
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Ricardo Brito
        </th>
        <td className="py-4 px-6">Adesão</td>
        <td className="py-4 px-6">Unimed/ Allcare</td>
        <td className="py-4 px-6">10/09/2022</td>
        <td className="py-4 px-6">R$ 356,45</td>
        <td className="py-4 px-6 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <BsPencilSquare/>
          </a>
        </td>
        <td className="py-4 px-6 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <FiTrash2/>
          </a>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

</div></>)
}
