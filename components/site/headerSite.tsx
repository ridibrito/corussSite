import Image from "next/image"
import Link from "next/link"

export default function HeaderSite() {
  return (
    <>
      <header className="sm:flex sm:max-w-6xl sm:justify-center sm:mx-auto ">
        <div className="sm:mx-auto mx-3 sm:w-1/2 mt-4">
          <h4 className=" text-gray-700 text-lg font-semibold">
            Tudo em um só lugar.
          </h4>
          <h1 className="text-sky-600 text-4xl pt-2 font-bold md:text-4xl lg:text-6xl">
            coruss 360º
          </h1>
          <h1 className="text-gray-700 text-3xl pt-2 font-bold md:text-4xl lg:text-5xl">
           Gerencie suas vendas de planos de saúde.
          </h1>
          <h1 className="text-gray-700 sm:text-lg pt-2 font-semibold">
             Atendimento, Venda, gerenciamento, Financeiro, relatórios e muito mais...
          </h1>
          <Link href="/api/auth/signin"><a><button className="bg-sky-600 text-white font-bold py-2 rounded mt-3 w-full text-center items-center md:px-32 lg:px-36 xl:px-full hover:bg-sky-700">
            Teste grátis
          </button></a></Link>
          
        </div>
        <div className="mt-5 flex justify-center sm:w-2/5"><Image src="/bgimg.png" alt="crm" width="400" height="400"/></div>
      </header>
    </>
  )
}
