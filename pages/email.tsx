import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import EmailComp from "../components/EmailComp";

export default function Email() {
  return (
    <>
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/app">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h3 className=" ml-3 pt-1 font-normal text-gray-500 ">Inbox</h3>
        </div>
        <hr></hr>

        <header className="flex items-center bg-white p-4 border justify-between mt-3">
          <div className="flex items-center">
            <input
              className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-white  transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />

            <IoMdTrash className="p-1 w-8 h-8 hover:bg-gray-100 mr-2 hover:text-black text-gray-500" />
            <FaInbox className="p-1 w-8 h-8 hover:bg-gray-100 mr-2 hover:text-black text-gray-500" />
            <AiFillExclamationCircle className="p-1 w-8 h-8 mr-2 hover:bg-gray-200 hover:text-black text-gray-500" />
            <HiDotsVertical className="p-2 w-10 h-10 mr-2 hover:bg-gray-100 hover:text-black text-gray-500" />

            <button className="bg-sky-600 hover:bg-blue-700 ml-3 text-white shadow px-5 py-2 rounded-md font-seminormal">
              Escrever +
            </button>
          </div>
          <div className="flex ">
            <FaChevronLeft className="p-2 w-8 h-8 ml-3 hover:bg-gray-200 hover:text-black text-gray-500" />
            <FaChevronRight className="p-2 w-8 h-8 ml-3 hover:bg-gray-200 hover:text-black text-gray-500" />
            <h3 className="text-gray-500 flex items-center">
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
