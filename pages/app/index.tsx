import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import Chartline from "../../components/charts/chartline";
import Chartbar from "../../components/charts/chartbar";
import ChartVendedores from "../../components/charts/chartVendedores";
import ChartValor from "../../components/charts/chartValor";
import Seo from '../../components/Seo'

const AppHome = () => (
  <>
  <Seo title="Coruss"/>
      <div className="h-full bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 p-4">
        
        <div className="flex justify-between">
          <div className="flex items-center py-4">
            <Link href="/app">
              <a>
                <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5  dark:bg-gray-600 dark:text-gray-400" />
              </a>
            </Link>
            <h3 className="ml-3  font-normal text-gray-500  dark:bg-gray-600 dark:text-gray-400">-</h3>
            <h1 className=" ml-3 font-normal text-gray-500  dark:bg-gray-600 dark:text-gray-400">Dashboard</h1>
          </div>
          <div className="flex items-center p-2 text-gray-500 font-normal">
            <label className="dark:text-gray-200">De</label>
            <input
              className="ml-4 dark:bg-gray-700 rounded border border-gray-500 pl-3"
              type="date"
            />
            <label className="ml-3 dark:text-gray-200">a</label>
            <input
              className="ml-4 rounded border dark:bg-gray-700 border-gray-500 pl-3"
              type="date"
            />
          </div>
        </div>
        <hr></hr>

        <div className="flex w-full mt-3">
          <div className="w-2/4">
            <div className="flex h-32 ">
              <div className="bg-white dark:bg-gray-700 dark:text-gray-200 flex items-center  w-full rounded-md shadow-lg ">
                <div className="flex">
                  <FaUser
                    className="ml-3 text-sky-600 hover:text-sky-800 w-16 h-16 mr-3 hover:bg-sky-100 bg-sky-100 p-4 
                    rounded-full"
                  />
                  <div className="flex-col ">
                    <h1 className="ml-1 mr-1 text-4xl font-normal ">
                      60
                    </h1>

                    <div>
                      <h3 className="text-gray-500 font-normal text-sm dark:text-gray-200">
                        Total de Leads
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white flex dark:bg-gray-700 dark:text-gray-200 items-center ml-3 w-full rounded-md shadow-lg ">
                <div className="flex">
                  <GiBeachBag
                    className="ml-3 text-red-500 hover:text-red-700 w-16 h-16 mr-3 hover:bg-red-100 bg-red-100 p-4 
            rounded-full"
                  />
                  <div className="flex-col">
                    <h1 className="ml-1 mr-1 text-4xl font-normal">
                      12
                    </h1>

                    <div>
                      <h3 className=" font-normal text-gray-500 text-sm dark:bg-gray-700 dark:text-gray-200">
                        Total de vendas
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-3 ">
              <div className="bg-white w-full dark:bg-gray-700 dark:text-gray-200 h-32 flex items-center rounded-md shadow-lg">
                <div className="flex">
                  <MdOutlineLeaderboard
                    className="ml-3 text-yellow-500 hover:text-yellow-700 w-16 h-16 mr-3 hover:bg-yellow-100 bg-yellow-100 p-4 
            rounded-full"
                  />
                  <div className="flex-col">
                    <h1 className="ml-1 mr-1 text-2xl font-normal dark:bg-gray-700 dark:text-gray-200">
                     4.300,00
                    </h1>

                    <div>
                      <h3 className="text-gray-500 font-normal text-sm dark:bg-gray-700 dark:text-gray-200">
                        Bonificações a receber
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white ml-3 dark:bg-gray-700 dark:text-gray-200 w-full h-32 flex items-center rounded-md shadow-lg">
                <div className="flex">
                  <MdOutlineAttachMoney
                    className="ml-3  text-green-600 hover:text-green-800 w-16 h-16 mr-3 hover:bg-green-100 bg-green-100 p-4 
            rounded-full"
                  />
                  <div className="flex-col">
                    <h1 className="ml-1 mr-1 text-2xl font-normal dark:bg-gray-700 dark:text-gray-200">
                      8.000,00
                    </h1>

                    <div>
                      <h3 className="text-gray-500 font-normal text-sm dark:bg-gray-700 dark:text-gray-200">
                        Comissões a receber
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 dark:text-gray-200 h-40 flex items-center mt-3 shadow-lg rounded-lg justify-center">
            <div className="flex">
                  <MdOutlineAttachMoney
                    className="ml-3  text-green-600 hover:text-green-800 w-16 h-16 mr-3 hover:bg-green-100 bg-green-100 p-4 
            rounded-full"
                  />
                  <div className="flex-col">
                    <h1 className="ml-1 mr-1 text-4xl font-normal dark:bg-gray-700 dark:text-gray-200">
                      20.000,00
                    </h1>

                    <div>
                      <h3 className="text-gray-500 font-normal dark:bg-gray-700 dark:text-gray-200">
                        Total geral
                      </h3>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 dark:text-gray-200 w-2/4 ml-3 p-4 rounded-md shadow-lg ">
            <h1 className="dark:bg-gray-700 dark:text-gray-200">
              <Chartline />
            </h1>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 dark:text-gray-200 w-full mt-3 p-4 rounded-md shadow-lg">
          <h1>
            <Chartbar />
          </h1>
        </div>
        <div className="flex">
          <div className="bg-white dark:bg-gray-700 dark:text-gray-200 w-1/3 mt-3 p-4 rounded-md shadow-lg">
            <h1>
              <ChartVendedores />
            </h1>
          </div>
          <div className="bg-white dark:bg-gray-700 dark:text-gray-200 w-2/3 mt-3 ml-3 p-4 rounded-md shadow-lg">
            <h1>
              <ChartValor />
            </h1>
          </div>
        </div>
      </div>
    </>
)
export default AppHome
