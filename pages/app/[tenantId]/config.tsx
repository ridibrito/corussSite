import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Config() {
  const { data: session } = useSession();

  const router = useRouter();
  return (
    <>
      <div className=" h-screen bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href={`/app/${router.query.tenantId}`}>
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5 dark:bg-gray-600 dark:text-gray-400" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400">
            -
          </h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400">
            Configurações
          </h1>
        </div>
        <hr></hr>

        <div>
          <div className="sm:flex items-center justify-around bg-white dark:bg-gray-700 mt-4 mx-auto max-w-7xl rounded-lg shadow-lg p-3">
            <h3 className="sm:w-1/5 text-center text-gray-500">
              Capricha na foto, ela vai aparecer em suas cotações
            </h3>
            <form className="flex items-center space-x-6">
              <div className="sm:shrink-0 text-center">
                <Image
                  className="h-16 w-16 object-cover rounded-full"
                  src="/logosite.png"
                  alt="logo"
                  width="150"
                  height="150"
                />
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-sky-50 file:text-sky-700
                        hover:file:bg-sky-100"
                  />
                </label>
              </div>
            </form>
            <div>
              <h1 className="font-semibold sm:mr-5 text-center dark:bg-gray-700 bg-gray-200 p-2 rounded">
                Ricardo Albuquerque
              </h1>
            </div>
          </div>

          <div className="items-center justify-around bg-white dark:bg-gray-700 mt-4 mx-auto max-w-7xl rounded-lg p-3 shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seu nome
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email-address-icon"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seu email
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="seunome@email.com"
                  />
                </div>
              </div>
              <label
                htmlFor="email-address-icon"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Seu telefone
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="seunome@email.com"
                />
              </div>

              <label
                htmlFor="message"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Digite uma frase ou mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Uma frase inspiradora, uma curiosidade ou algo que te aproxime do cliente"
              ></textarea>
              <h4>
                Obs: Suas informações pessoais aparecerão em suas cotações.
              </h4>
              <button className="bg-sky-600 w-full my-5 font-semibold hover:bg-sky-700 rounded px-6 py-2 text-white">
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
