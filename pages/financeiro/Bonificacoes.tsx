import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import Tabela1 from '../../components/tabela1'
import Filtro from '../../components/filtro'
import { MdAdd } from 'react-icons/md'
import NavCadastros from '../../components/NavCadastros'

export default function Bonificacao() {
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/">
            <a>
              <AiFillHome className=" hover:text-sky-600 text-gray-500 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h1 className=" ml-3 font-normal text-gray-500 ">
            <Link href="/adm">
              <a className="hover:text-sky-600 cursor-pointer">Financeiro</a>
            </Link>
          </h1>

          <h1 className=" ml-3 font-normal text-gray-500 ">
           / Bonificações
          </h1>
  
        </div>
        <hr></hr>
        <div>
         
        </div>
      </div>
    </>
  )
}
