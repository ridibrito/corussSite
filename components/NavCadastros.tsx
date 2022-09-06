import LinkMenu2 from "./LinkMenu2";

export default function NavCadastros() {
  return (
    <>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-2">
        <nav className="font-semibold">
          <ul className="flex items-center justify-around">
            <LinkMenu2 href="/app/id-tenant/adm">Clientes e Fornecedores</LinkMenu2>
            <LinkMenu2 href="/app/id-tenant/adm/cadastro/CadastroOperadoras">
              Operadoras
            </LinkMenu2>
            <LinkMenu2 href="/app/id-tenant/adm/cadastro/CadastroAdministradoras">
              Adm
            </LinkMenu2>
            <LinkMenu2 href="/app/id-tenant/adm/cadastro/CadastroPlano">Planos</LinkMenu2>
            <LinkMenu2 href="/app/id-tenant/adm/cadastro/CadastroLocal">
              Locais de entrega
            </LinkMenu2>
          </ul>
        </nav>
      </div>
    </>
  );
}
