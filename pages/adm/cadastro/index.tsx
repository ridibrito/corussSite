import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import Tabela1 from '../../../components/tabela1'
import Filtro from '../../../components/filtro'
import { MdAdd } from 'react-icons/md'
import NavCadastros from '../../../components/NavCadastros'

export default function ClientesCadastro() {
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/app">
            <a>
              <AiFillHome className=" hover:text-sky-600 text-gray-500 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-bold text-gray-500">-</h3>
          <h1 className=" ml-3 font-semibold text-gray-500 text-lg">
            <Link href="/adm">
              <a className="hover:text-sky-600 cursor-pointer">Administrativo</a>
            </Link>
          </h1>

          <h1 className=" ml-3 font-semibold text-gray-500 ">
           / Cadastros
          </h1>
          <h1 className=" ml-3 font-semibold text-gray-500 ">
           / Clientes e Fornecedores
          </h1>
  
        </div>
        <hr></hr>
        <NavCadastros/>

        <div>
         
        </div>
      </div>
    </>
  )
}