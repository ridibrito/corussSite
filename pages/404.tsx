import Image from "next/image";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <section className=" mx-auto py-[120px] relative z-10 ">
        <div className="container flex mx-auto justify-center">
          <div className="flex mx-auto justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2
                  className="
            font-bold
            text-sky-700
            mb-2
            text-[50px]
            sm:text-[80px]
            md:text-[100px]
            leading-none
            "
                >
                  404
                </h2>
                <h4 className="text-sky-700 font-semibold text-[22px] leading-tight mb-3">
                  Oops! Essa página não pode ser encontrada
                </h4>
                <p className="text-lg text-sky-600 mb-8"></p>
                <Link href="/">
                  <a
                    className="
            text-base
            font-semibold
            text-sky-700
            inline-block
            text-center
            border border-sky-700
            rounded-lg
            px-8
            py-3
            hover:bg-white hover:text-primary
            transition
            "
                  >
                    Voltar para página inicial
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
    w-full
    h-full
    flex
    justify-center
    items-center
    space-x-5
    md:space-x-8
    lg:space-x-14
    "
        ></div>
        <div
          className="
absolute
-mt-32
-z-10
w-full
h-full
flex
justify-center
items-center
space-x-5
md:space-x-8
lg:space-x-14
"
        >
          <Image
            src="/corusslogo.png"
            alt="logocoruss"
            width="300"
            height="80"
          />
        </div>
      </section>
    </>
  );
}
