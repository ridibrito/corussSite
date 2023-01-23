import Navbar from "components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Cotacao() {
  return (
    <>
      <div className=" h-screen bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 pr-4">
        <section className="mx-3 mb-5">
          <div className="flex items-center gap-4 bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded-lg p-3 shadow">
            <Image
              src="/foto capa.png"
              alt="avatar"
              width="100"
              height="100"
              className="rounded-full"
            />
            <div className="mt-16 pl-60">
              <p className="font-semibold">Ricardo Albuquerque</p>
              <p>ricardo.brasiliadf@hotmail.com</p>
              <p>(xx) xxxx-xxxx</p>
            </div>
            <div className="bg-gray-100 p-10 shadow">Frase da pagina user</div>
          </div>
          <div className="flex justify-between items-center gap-4 bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded p-3 shadow">
            <div className="bg-green-700 rounded px-4 py-2 text-white">
              <h3>Nº da cotação: 123</h3>
            </div>
            <Link href="/">
              <div className="flex items-center p-2 gap-2 cursor-pointer hover:bg-green-100 hover:rounded hover:p-2">
                <h3>Enviar por WhatsApp</h3>
                <Image
                  src="/whatsapp.png"
                  alt="avatar"
                  width="40"
                  height="40"
                  className="rounded-full"
                />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
