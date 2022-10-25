import LinkMenu2 from "./LinkMenu2";
import { useRouter } from "next/router";

export default function NavCadastros() {
  const router = useRouter()
  return (
    <>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-2">
        <nav className="font-semibold">
          <ul className="flex items-center justify-around">
          <LinkMenu2 href={`/app/${router.query.tenantId}/adm/cadastro/CadastroClientes`}>
            Clientes
          </LinkMenu2>
            <LinkMenu2 href={`/app/${router.query.tenantId}/adm/cadastro/CadastroOperadoras`}>
              Operadoras
            </LinkMenu2>
            <LinkMenu2 href={`/app/${router.query.tenantId}/adm/cadastro/CadastroAdministradoras`}>
              Administradoras
            </LinkMenu2>
            <LinkMenu2 href={`/app/${router.query.tenantId}/adm/cadastro/CadastroPlano`}>
              Planos
            </LinkMenu2>
            <LinkMenu2 href={`/app/${router.query.tenantId}/adm/cadastro/CadastroLocal`}>
              Locais de entrega
            </LinkMenu2>
          </ul>
        </nav>
      </div>
    </>
  );
}
