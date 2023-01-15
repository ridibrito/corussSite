import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiFillDislike, AiFillLike, AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export default function Lead() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="pl-60 pt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/app/${router?.query?.tenantId}/crm/`}>
              <AiOutlineArrowLeft className="text-gray-500 w-6 h-6 hover:text-sky-600 cursor-pointer" />
            </Link>
            <div>
              <h1 className="text-xl">Ricardo de Brito</h1>
              <h3 className="text-gray-600">Company</h3>
            </div>
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
        <div className="mt-3 bg-white p-4 shadow mr-3">
          <div className="flex justify-between text-gray-500 text-sm w-2/4 gap-3">
            <div className="text-center">
              <h2 className="text-lg">Funil e etapa de vendas</h2>
              <div className="flex items-center text-center justify-center">
                <button>
                  <BiChevronLeft />
                </button>
                <span className="text-sky-600">Leads</span>
                <button>
                  <BiChevronRight />
                </button>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-lg">Valores</h2>
              <div>
                <span className="font-semibold">R$ </span>
                <span className="text-sky-600">253,20</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-lg">data de criação</h2>
              <div className="font-semibold">08/01/2023</div>
            </div>
            <div className="text-center">
              <h2 className="text-lg">Previsão de fechamento</h2>
              <div className="text-center">
                <input type="date" className="bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex">
          <div className="bg-white mt-3 mr-4 mb-3 w-3/4">
            <h2 className="text-lg px-4 py-3 border-b">Criar anotação</h2>

            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white  focus:outline-none focus:ring-2  focus:border-transparent"
                id="comment"
                placeholder="Digite sua anotação"
                name="comment"
                rows={5}
                cols={40}
              ></textarea>
            </label>
            <button className="bg-sky-600 text-white w-full py-2 font-semibold rounded shadow ">
              Criar anotação
            </button>
          </div>
          <div className="bg-white mt-3 mr-4 mb-3 w-1/3">
            <div className="border-b flex justify-between">
              <h2 className="text-lg px-4 py-3 ">Contato</h2>
              <button
                onClick={handleOpenModal}
                className="cursor-pointer text-white bg-sky-600 font-semibold rounded shadow px-4"
                type="button"
              >
                Editar
              </button>
            </div>

            <div>
              <h3
                className="text-gray-700 ml-3 mt-3
              "
              >
                Ricardo de Brito
              </h3>
              <h3
                className="text-gray-700 ml-3
              "
              >
                Company
              </h3>
              <h3
                className="text-gray-700 m-3 flex gap-3 items-center
              "
              >
                <BsFillTelephoneFill className="text-sky-600" />
                <p>61-9999-9999</p>
              </h3>
              <h3
                className="text-gray-700 m-3 flex gap-3 items-center
               "
              >
                <AiFillMail className="text-sky-600" />
                <p>contato@contato.com</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
