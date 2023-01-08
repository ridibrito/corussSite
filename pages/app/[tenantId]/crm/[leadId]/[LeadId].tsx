import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiFillDislike, AiFillLike, AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

export default function Lead() {
  const router = useRouter();

  return (
    <>
      <div className="pl-60 pt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/app/${router?.query?.tenantId}/crm/`}>
              <AiOutlineArrowLeft className="text-gray-500 w-6 h-6" />
            </Link>
            <h1 className="text-xl">Ricardo de Brito</h1>
          </div>
          <div className="flex gap-3 items-center mr-3">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-green-100 px-3 py-3 hover:shadow-md rounded ">
              <AiFillLike className="text-green-600 w-6 h-6" />
              <span className="text-green-600 font-semibold">Marcar venda</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-red-100 hover:shadow-md px-3 py-3 mr-3">
              <AiFillDislike className="text-red-500 w-6 h-6" />
              <span className="text-red-500 font-semibold">Marcar perda</span>
            </div>
            <div className="cursor-pointer hover:bg-gray-200 px-3 py-3 hover:shadow-md rounded">
              <FaTrashAlt className="text-gray-500 w-5 h-5" />
            </div>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="mt-3">
          <div className="flex justify-between text-gray-500 text-sm w-2/4 gap-3">
            <div className="text-center">
              Funil e etapa de vendas
              <div className="flex items-center text-center">
                <div className="bg-center content-center">
                  <button>
                    <BiChevronLeft />
                  </button>
                  <span className="text-sky-600">Leads</span>
                  <button>
                    <BiChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              Valores
              <div>
                <span className="font-semibold">R$ </span>
                <span className="text-sky-600">253,20</span>
              </div>
            </div>
            <div className="text-center">
              Data de criação
              <div className="font-semibold">08/01/2023</div>
            </div>
            <div className="text-center">
              Previsão de fechamento
              <div className="text-center">
                <input type="date" className="bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
