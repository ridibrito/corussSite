import Image from "next/image";
import PlanosLine from "./PlanosLine";

export default function ListSimulador() {
  return (
    <>
      <div className="mx-2">
        <div className="bg-gray-200 dark:bg-gray-800 h-10 flex justify-between px-5 items-center max-w-7xl sm:mx-auto -mb-4 border dark:border-gray-800 rounded">
          <h3 className="text-sm">Amil linha selecionada</h3>
          <h3 className="text-sm">Plano adesão</h3>
        </div>
        <div className="sm:flex items-center bg-white dark:bg-gray-700 mt-4 mx-auto max-w-7xl rounded  shadow mb-4 pb-4">
          <div className="flex items-center justify-around sm:w-1/2 p-3">
            <input type="checkbox" className="w-4 h-4" />
            <Image
              src="/amil.png"
              alt="logo operadora"
              width="60"
              height="60"
              className="rounded-full"
            />
            <Image
              src="/allcare.jpeg"
              alt="logo operadora"
              width="60"
              height="60"
              className="rounded-full"
            />
          </div>
          <div className="block mt-1">
            <h2 className="top-0 font-bold pl-3">ABRACEM</h2>
            <div className="block bg-gray-100 p-3 my-1 rounded dark:bg-gray-800">
              <PlanosLine />
              <PlanosLine />
              <PlanosLine />
              <PlanosLine />
              <PlanosLine />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
