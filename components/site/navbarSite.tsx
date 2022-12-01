import Image from "next/image";
import Link from "next/link";
import MydropdownSite from "./mydropdownSite";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export default function NavbarSite() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    return setShowMenu(true);
  };

  const handleCloseMenu = () => {
    return setShowMenu(false);
  };

  return (
    <>
      <header>
        <div
          className="bg-sky-500 fixed h-screen z-10 sm:hidden w-full transition-all duration-300"
          style={{ display: showMenu ? "initial" : "none" }}
        >
          <div className="pt-4 pl-4 flex justify-between items-center pr-2 mb-12">
            <Image
              src="/logobranca.png"
              alt="logo coruss"
              width="160"
              height="30"
            />
            <CgClose
              onClick={handleCloseMenu}
              className="w-7 h-7 pr-2 text-white"
            />
          </div>
          <div className="cursor-pointer">
            <ul className="text-center text-white font-bold text-xl space-y-8 mb-12">
              <Link href="/site">
                <li className="border-b border-sky-100 pb-5 text-2xl mx-3">
                  Home
                </li>
              </Link>
              <Link href="/site/precos">
                <li className="border-b border-sky-100 pb-5 text-2xl mx-3">
                  Preços
                </li>
              </Link>
              <Link href="/site/blog">
                <li className="border-b border-sky-100 pb-5 text-2xl mx-3">
                  log
                </li>
              </Link>{" "}
              <Link href="/site/contato">
                <li className="border-b border-sky-100 pb-5 text-2xl mx-3">
                  Contato
                </li>
              </Link>
              <Link href="/api/auth/signin">
                <button className="bg-white text-sky-500 rounded px-6 py-3 ">
                  Entrar
                </button>
              </Link>
              <Link href="/api/auth/signin">
                <button className="bg-sky-100 ml-1 text-sky-500 rounded px-6 py-3 ">
                  Inscrever-se
                </button>
              </Link>
            </ul>
          </div>
        </div>
        <nav className="bg-white border-gray-200 border-b px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Image
              src="/logosite.png"
              alt="logo coruss"
              width="160"
              height="30"
            />
            <div className="flex items-center lg:order-2">
              <Link href="/api/auth/signin">
                <a className="hidden lg:flex text-sky-600 hover:text-sky-700 focus:ring-4 focus:ring-gray-300 font-semibold rounded text-sm px-6 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Entrar
                </a>
              </Link>
              <Link href="/api/auth/signin">
                <a className="hidden lg:flex text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-semibold rounded text-sm px-6 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Inscrever-se
                </a>
              </Link>

              <button
                onClick={handleShowMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-sky-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link href="/site">
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/site/precos">
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Preços
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/site/blog">
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 font-semibold  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/site/contato">
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 font-semibold  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Contato
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
