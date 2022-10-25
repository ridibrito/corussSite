import { FiTrash2 } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import useSWR, { Arguments } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

//@ts-ignore


const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface client {
  id: string
  name: string
  tipoPlano: string
  operadora: string
  administradora: string
  dataVigencia: string
  valor: number
}


export default function TabelaClientes() {
  const router = useRouter();
  const { data } = useSWR(`/api/${router?.query?.tenantId}/clients`, fetcher);
  
  
  return (
    <>
      <div>
        <div className="overflow-x-auto relative shadow-lg sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-gray-500  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nome
                </th>
                <th scope="col" className="py-3 px-6">
                  Tipo de plano
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Operadora/Adm
                </th>
                <th scope="col" className="py-3 px-6">
                  Vigência
                </th>
                <th scope="col" className="py-3 px-6">
                  Valor
                </th>
                <th scope="col" className="py-3 px-6">
                  <BsPencilSquare />
                </th>
                <th scope="col" className="py-3 px-6">
                  <FiTrash2 />
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((clients:client) => (
                  <tr
                    key={clients.id}
                    className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6  text-gray-700 whitespace-nowrap dark:text-white"
                    >
                      {clients.name}
                    </th>
                    <td className="py-4 px-6">{clients.tipoPlano}</td>
                    <td className="py-4 px-6 flex items-center">
                      {" "}
                      <span className="mr-2">
                        <Image
                          src="/amil.png"
                          alt="operadora"
                          width="20"
                          height="20"
                          className="rounded-full"
                        />
                        <Image
                          src="/allcare.jpeg"
                          alt="operadora"
                          width="20"
                          height="20"
                          className="rounded-full"
                        />
                      </span>
                      {clients.operadora} / {clients.administradora}
                    </td>

                    <td className="py-4 px-6">{clients.dataVigencia}</td>
                    <td className="py-4 px-6">R$ {clients.valor}</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BsPencilSquare />
                      </a>
                    </td>
                    <td>
                        <button className="py-4 px-6 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <FiTrash2 />
                    </button>
                    </td>
                   
                    
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
