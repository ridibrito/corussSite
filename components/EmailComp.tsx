import Image from "next/image"


export default function EmailComp() {
  return (
    <>
    <div className="flex items-center justify-between bg-white p-4 border-b border-x dark:bg-gray-600 dark:border-gray-700">
      <div>
      <input className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-white  transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>   
        <svg
          aria-hidden="true"
          focusable="true"
          data-prefix="far"
          data-icon="star"
          className=" w-5 text-gray-500 mr-1 hover:text-yellow-500 cursor-pointer"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
        </div>
        <div className="flex items-center">
          <Image
            width="30"
            height="30"
            src="/avatar.jpg"
            className="rounded-full w-8 border-4 shadow-lg"
            alt="Avatar"
          />
          <h2 className="font-semibold ml-3">John Doe</h2>
          </div>
          <div className="flex items-center">
            <h3 className="text-blac font-semibold">Am no an listening depending up believing. Enou...</h3>
          </div>
          <div><h3 className="text-lg">5 de agosto</h3></div>
      </div>
      
    </>
  )
}
