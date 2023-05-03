import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";
import NavbarSite from "../components/site/navbarSite";
import Faq from "/components/site/Faq";
import Footer from "/components/site/Footer";
import News from "/components/site/news";
import PrecosSite from "/components/site/PrecosSite";

export default function Preços() {
  return (
    <>
      <NavbarSite />
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-sky-600 dark:text-white">
              Desenvolvido por corretores, para corretores!
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Aqui na coruss nos concentramos em tecnologia, inovação e sabemos
              que podemos ajudar com organização e impulsionar o seu crescimento
              econômico.
            </p>
            <Link href="https://simulador.coruss.com.br">
              <a
                target="_blank"
                className="text-2xl text-sky-600 max-w-2xl text-center font-bold flex justify-center mx-auto border-2 border-sky-600 rounded px-6 py-3"
              >
                Aproveite nosso simulador gratuito
                <HiCursorClick className="w-7 h-7 ml-5 text-sky-600" />
              </a>
            </Link>
          </div>

          <PrecosSite />
        </div>
      </section>
      <div>
        <Faq />
        <News />
        <Footer />
      </div>
    </>
  );
}
