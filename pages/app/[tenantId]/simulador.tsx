import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import SelectCidade from "../../../components/selects/selectCidades";
import SelectTipoDePlano from "../../../components/selects/SelectTipoDePlano";
import SelectTipoDeProduto from "../../../components/selects/SelectTipoDeProduto";
import { FaMinus } from "react-icons/fa";
import SelectAdm from "../../../components/selects/SelectAdm";
import SelectProfissao from "../../../components/selects/SelectProfissão";
import SelectEntidade from "../../../components/selects/SelectEntidade";
import SelectAbrangencia from "../../../components/selects/SelectAbrangencia";
import SelectReembolso from "../../../components/selects/SelectReembolso";
import SelectCoparticipacao from "../../../components/selects/SelectCoparticipacao";
import SelectAcomodacao from "../../../components/selects/SelectAcomodacao";
import { BiSearchAlt } from "react-icons/bi";
import { BsEraser } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Simulador() {
  const router = useRouter();
  return (
    <>
      <div className="h-screen bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 pr-4">
        <div className="flex justify-between">
          <div className="flex items-center py-4">
          <Link href={`/app/${router.query.tenantId}`}>
              <a>
                <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5 dark:bg-gray-600 dark:text-gray-400" />
              </a>
            </Link>
            <h3 className="ml-3 text-xl font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400">-</h3>
            <h1 className=" ml-3 pt-1 font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400 ">Simulador</h1>
          </div>
       
        </div>
        <hr></hr>

        <div className="bg-white dark:bg-gray-700 dark:text-gray-400 w-full max-w-7xl rounded-md shadow-lg flex-col p-4 mt-3 ">
          <div className="ml-2 flex-1 ">
            <div className="flex justify-between">
              <h2 className="text-lg pb-2 ">Selecione</h2>
              <h2 className="mr-2">
                <FaMinus className="cursor-pointer text-gray-500 items-center" />
              </h2>
            </div>
            <hr></hr>

            <div className="flex w-full mt-4 mb-3">
              <SelectCidade />
              <SelectTipoDeProduto />
              <SelectTipoDePlano />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 dark:text-gray-400 w-full max-w-7xl rounded-md shadow-md flex-col p-4 mt-3 ">
          <div className="ml-2 flex-1">
            <div className="flex justify-between">
              <h2 className="text-lg pb-2 ">Filtros Adesão</h2>
              <h2 className="mr-2">
                <FaMinus className="cursor-pointer text-gray-500 items-center" />
              </h2>
            </div>
            <hr></hr>

            <div className="flex w-full mt-4 mb-3">
              <SelectAdm />
              <SelectProfissao />
              <SelectEntidade />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 dark:text-gray-400 w-full max-w-7xl rounded-md shadow-md flex-col p-4 mt-3 ">
          <div className="ml-2 flex-1">
            <div className="flex justify-between">
              <h2 className="text-lg pb-2 ">Filtros</h2>
              <h2 className="mr-2">
                <FaMinus className="cursor-pointer text-gray-500 items-center" />
              </h2>
            </div>
            <hr></hr>

            <div className="flex w-full mt-4 mb-3">
              <SelectAcomodacao />
              <SelectReembolso />
              <SelectAbrangencia />
              <SelectCoparticipacao />
            </div>
          </div>
        </div>
        <div className="bg-white w-full dark:bg-gray-700 dark:text-gray-400 max-w-7xl rounded-md shadow-md flex-col p-4 mt-3 ">
          <div className="ml-2 flex-1">
            <div className="flex justify-between">
              <h2 className="text-lg pb-2 ">Faixas (por quantidade)</h2>
              <h2 className="mr-2">
                <FaMinus className="cursor-pointer text-gray-500 items-center" />
              </h2>
            </div>
            <hr></hr>

            <div className="flex w-full  mt-4">
              <div className="grid ">
                <label className="mx-auto font-normal">00 a 18</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 maxl"
                  type={"number"} 
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">19 a 23</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">24 a 28</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">29 a 33</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">34 a 38</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300  focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">39 a 43</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300  focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">44 a 48</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">49 a 53</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">54 a 58</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-normal">59 ou +</label>
                <input
                  className="w-16 px-1.5 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  type={"number"}
                ></input>
              </div>

              <div className="grid ml-3">
                <label className="mx-auto font-bold">Total</label>
                <input
                  role={"textbox"}
                  className="bg-gray-200 w-20 pl-3 rounded h-8 border border-gray-300   focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  disabled={true}
                  type={"textbox"}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-w-7xl rounded-md shadow-md p-4 mt-2 mb-3">
          <button className="flex  items-center bg-yellow-500 text-white rounded px-4 py-2 ">
            <BsEraser className="mr-1" />
            Limpar
          </button>
          <button className="flex ml-2 items-center bg-sky-600 text-white rounded px-4 py-2 ">
            <BiSearchAlt className="mr-1" />
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}
