import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiFillDislike, AiFillLike, AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

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
              <h3 className="text-gray-600 dark:text-gray-400">Company</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center mr-3">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-green-100 px-3 py-3 hover:shadow-md rounded ">
              <AiFillLike className="text-green-600 w-6 h-6" />
              <span className="text-green-600 font-semibold">Marcar venda</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-red-100 hover:shadow-md rounded px-3 py-3 mr-3">
              <AiFillDislike className="text-red-500 w-6 h-6" />
              <span className="text-red-500 font-semibold">Marcar perda</span>
            </div>
            <div className="cursor-pointer hover:bg-gray-200 px-3 py-3 hover:shadow-md rounded">
              <FaTrashAlt className="text-gray-500 w-5 h-5" />
            </div>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="mt-3 bg-white dark:bg-gray-700 p-4 shadow rounded-lg  mr-3">
          <div className="flex justify-between text-gray-500 text-sm w-2/4 gap-3 ">
            <div className="text-center">
              <h2 className="text-lg dark:text-gray-400">
                Funil e etapa de vendas
              </h2>
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
              <h2 className="text-lg dark:text-gray-400">data de criação</h2>
              <div className="font-semibold">08/01/2023</div>
            </div>
            <div className="text-center">
              <h2 className="text-lg dark:text-gray-400">
                Previsão de fechamento
              </h2>
              <div className="text-center">
                <input
                  type="date"
                  className="bg-gray-100 dark:bg-gray-600 dark:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg mt-3 mr-4 mb-3 w-3/4">
            <h2 className="text-lg px-4 py-3 border-b dark:text-gray-400">
              Criar anotação
            </h2>

            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 w-full max-h-full px-4 py-4 text-base text-gray-700 placeholder-gray-400 bg-white dark:bg-gray-700  focus:outline-none focus:ring-2  focus:border-transparent"
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
          <div className="bg-white dark:bg-gray-700 mt-3 mr-4 mb-3 w-1/3">
            <div className="border-b flex justify-between">
              <h2 className="text-lg px-4 py-3 dark:text-gray-400">Contato</h2>
              <button
                onClick={handleOpenModal}
                className="cursor-pointer text-white bg-sky-600 font-semibold rounded shadow px-4"
                type="button"
              >
                Editar
              </button>
            </div>

            <div>
              <div>
                <h3
                  className="text-gray-700 ml-3 mt-3 dark:text-gray-400
                "
                >
                  Ricardo de Brito
                </h3>
                <h3
                  className="text-gray-700 ml-3 dark:text-gray-400
                "
                >
                  Company
                </h3>
              </div>
              <div className="flex">
                <h3
                  className="text-gray-700 m-3 flex gap-3 items-center dark:text-gray-400
                "
                >
                  <BsFillTelephoneFill className="text-sky-600" />
                  <p>61-9999-9999</p>
                </h3>
                <button
                  className="hover:bg-gray-200 px-3 py-2 rounded flex gap-1 items-center
                "
                >
                  <BsWhatsapp className="text-sky-600 font-bold" />
                  <p className="text-sky-600">Abrir</p>
                </button>
              </div>
              <h3
                className="text-gray-700 m-3 flex gap-3 items-center dark:text-gray-400
               "
              >
                <AiFillMail className="text-sky-600" />
                <p>contato@contato.com</p>
              </h3>
              <h3
                className="text-gray-700 m-2 flex gap-2 items-center
               "
              >
                <MdAttachMoney className="text-sky-600 w-6 h-6" />
                <p className=" text-sky-600">253,20</p>
              </h3>
            </div>
            <div className="flex">
              <div className="flex items-center gap-2 m-5 dark:text-gray-400">
                <Image
                  src="/amil.png"
                  alt="Amil"
                  width={50}
                  height={50}
                  className="rounded-full"
                />{" "}
                <h2 className="font-semibold">Amil</h2>
              </div>
              <div className="flex items-center gap-2 m-5 dark:text-gray-400">
                <Image
                  src="/allcare.jpeg"
                  alt="Amil"
                  width={50}
                  height={50}
                  className="rounded-full"
                />{" "}
                <h2 className="font-semibold">Allcare</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md mt-3 mr-4 mb-3">
          <h2 className="text-lg px-4 py-3 border-b">Histórico do Lead</h2>
          <div className="m-3 p-3">
            <h2 className="m-3">teste</h2>
            <h2 className="m-3">teste</h2>
            <h2 className="m-3">teste</h2>
            <h2 className="m-3">teste</h2>
          </div>
        </div>
      </div>
    </>
  );
}
