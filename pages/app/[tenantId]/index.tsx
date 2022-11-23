import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Chartbar from "/components/charts/chartbar";
import Chartline from "/components/charts/chartline";
import ChartVendedores from "/components/charts/chartVendedores";
import ChartValor from "/components/charts/chartValor";
import ChartComparativo from "/components/charts/ChartComparativo";

const AppHome = () => {
  const { data: session } = useSession();

  const router = useRouter();
  return (
    <>
      <div className="h-full bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 p-4">
        <div className="flex justify-between">
          <div className="flex items-center py-4">
            <Link href={`/app/${router.query.tenantId}`}>
              <a>
                <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5  dark:bg-gray-600 dark:text-gray-400" />
              </a>
            </Link>
            <h3 className="ml-3  font-normal text-gray-500  dark:bg-gray-600 dark:text-gray-400">
              -
            </h3>
            <h1 className=" ml-3 font-normal text-gray-500  dark:bg-gray-600 dark:text-gray-400">
              Dashboard
            </h1>
          </div>
        </div>
        <hr></hr>

        <div className="flex items-center  mx-auto justify-between mt-3 px-8 bg-white rounded-lg shadow p-5">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              //@ts-ignore
              src={session?.user?.image}
              //@ts-ignore
              alt={session?.user?.name}
              width="80"
              height="80"
            />

            <div className="ml-5">
              <h2>Bem vindo(a) de volta, </h2>
              <h2 className="text-3xl font-bold">{session?.user?.name}.</h2>
              <h3>Veja o que está acontecendo com sua conta hoje.</h3>
            </div>
          </div>
          <Link href={`/app/${router.query.tenantId}/config`}>
            <a className="border border-sky-600 text-sky-600 px-6 py-2 rounded">
              Ver Perfil
            </a>
          </Link>
        </div>
        <div className="mt-4 flex items-center max-w-7xl mx-auto justify-between">
          <h4 className="font-semibold">Visão geral</h4>
          <div className="flex items-center p-2 text-gray-500 font-normal">
            <label className="dark:text-gray-400">De</label>
            <input
              className="ml-4 dark:bg-gray-700 rounded border dark:text-gray-400 px-4 border-gray-500 pl-3"
              type="date"
            />
            <label className="ml-3 dark:text-gray-400">a</label>
            <input
              className="ml-4 rounded border px-4 dark:bg-gray-700 dark:text-gray-400 border-gray-500 pl-3"
              type="date"
            />
          </div>
        </div>

        <div className="flex mt-3 mx-auto">
          <div className="bg-white rounded-lg h-32 shadow-lg w-1/4">
            <div className="flex items-center h-2/3 justify-around gap-3">
              <div className="flex gap-3">
                <FaUser className="text-sky-500 bg-sky-100  rounded-full p-3 w-12 h-12" />
                <div>
                  <h4 className="text-3xl font-semibold text-center text-gray-500">
                    60
                  </h4>
                  <h4 className="text-gray-500">Leads</h4>
                </div>
              </div>
              <div className="">
                <h4 className="text-3xl font-semibold text-red-500 text-center ">
                  48
                </h4>
                <h4 className="text-red-500">Perdidas</h4>
              </div>
            </div>
            <div className="bg-gray-100 h-1/3">
              <Link href="">
                <p className="text-sm  text-sky-600 p-3">Ver mais</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg h-32 shadow-lg w-1/4 ml-4">
            <div className="flex items-center h-2/3 justify-center gap-3">
              <div>
                <GiBeachBag className="text-red-500 bg-red-100 rounded-full p-3 w-12 h-12" />
              </div>
              <div>
                <h4 className="text-3xl font-semibold text-gray-500">12</h4>
                <h4 className="text-gray-500">Total de vendas</h4>
              </div>
            </div>
            <div className="bg-gray-100 h-1/3">
              <Link href="">
                <p className="text-sm  text-sky-600 p-3">Ver mais</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg h-32 shadow-lg w-1/4 ml-4">
            <div className="flex items-center h-2/3 justify-center gap-3">
              <div>
                <MdOutlineLeaderboard className="text-yellow-500 bg-yellow-100 rounded-full p-3 w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-500">
                  4.300,00
                </h4>
                <h4 className="text-gray-500">Bonificação</h4>
              </div>
            </div>
            <div className="bg-gray-100 h-1/3">
              <Link href="">
                <p className="text-sm  text-sky-600 p-3">Ver mais</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg h-32 shadow-lg w-1/4 ml-4">
            <div className="flex items-center h-2/3 justify-center gap-3">
              <div>
                <MdOutlineAttachMoney className="text-green-500 bg-green-100 rounded-full p-3 w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-500">
                  8.000,00
                </h4>
                <h4 className="text-gray-500">Comissão</h4>
              </div>
            </div>
            <div className="bg-gray-100 h-1/3">
              <Link href="">
                <p className="text-sm  text-sky-600 p-3">Ver mais</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="bg-white  rounded-lg shadow-lg p-5 pb-1 w-1/3 ">
            <Chartline />
          </div>
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <ChartVendedores />
          </div>
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <ChartComparativo />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="bg-white  rounded-lg shadow-lg p-3 pb-1 w-2/3">
            <ChartValor />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 pb-1 w-1/3">
            <Chartbar />
          </div>
        </div>
      </div>
    </>
  );
};
export default AppHome;
