import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import EmailComp from "../../../components/EmailComp";
import { useRouter } from "next/router";


export default function Email() {
 const router = useRouter()
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 dark:bg-gray-600 dark:text-gray-400 pt-16 pr-4">
        <div className="flex items-center py-4">
        <Link href={`/app/${router.query.tenantId}`}>
            <a>
              <AiFillHome className= " dark:bg-gray-600 dark:text-gray-400 text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400">-</h3>
          <h3 className=" ml-3 pt-1 font-normal text-gray-500 dark:bg-gray-600 dark:text-gray-400">Inbox</h3>
        </div>
        <hr></hr>

        <header className="flex items-center dark:bg-gray-600 bg-white p-4 border justify-between mt-3 dark:border-gray-700">
          <div className="flex items-center ">
            <input
              className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-sky-600 checked:border-white  transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />

            <IoMdTrash className="p-1 w-8 h-8 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700" />
            <FaInbox className="p-1 w-8 h-8 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700" />
            <AiFillExclamationCircle className="p-1 w-8 h-8 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700"/>
            <HiDotsVertical className="p-1 w-8 h-8 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700"/>

            <button className="bg-sky-600 hover:bg-sky-700 ml-3 text-white shadow px-5 py-2 rounded-md font-seminormal">
              Escrever +
            </button>
          </div>
          <div className="flex ">
            <FaChevronLeft className="p-2 w-8 h-8 ml-3 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700"  />
            <FaChevronRight className="p-2 w-8 h-8 ml-3 dark:bg-gray-600 hover:bg-gray-100 mr-2 hover:text-black dark:text-gray-400 text-gray-500 dark:hover:text-gray-700"  />
            <h3 className="text-gray-500 flex dark:text-gray-400 items-center">
              Show <strong>1-25</strong> de<strong>2290</strong>{" "}
            </h3>
          </div>
        </header>
        <div>
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />
          <EmailComp />

        </div>
      </div>
    </>
  );
}
