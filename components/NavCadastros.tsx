import Link from "next/link";

export default function NavCadastros() {
  return (
    <>
      <div className="bg-white rounded shadow mt-2">
        <nav>
          <ul className="flex items-center justify-around">
            <Link href="/adm">
              <li className="p-2 text-sky-600  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center font-semibold">
                  Clientes e Fornecedores
                </a>
              </li>
            </Link>
            <Link href="/adm/cadastro/CadastroOperadoras">
              <li className="p-2 text-sky-600  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center font-semibold">
                  Operadoras
                </a>
              </li>
            </Link>
            <Link href="/adm/cadastro/CadastroAdministradoras">
              <li className="p-2 text-sky-600  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center font-semibold">
                  Adm
                </a>
              </li>
            </Link>
            <Link href="/adm/cadastro/CadastroPlano">
              <li className="p-2 text-sky-600  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center font-semibold">
                  Planos
                </a>
              </li>
            </Link>
            <Link href="/adm/cadastro/CadastroLocal">
              <li className="p-2 text-sky-600  hover:text-sky-600 hover:cursor-pointer hover:bg-blue-100 rounded-md m-2 ">
                <a className="flex items-center font-semibold">
                  Locais de entrega
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
