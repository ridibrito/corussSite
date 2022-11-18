import Link from "next/link";

export default function Tabs() {
    return(

        <>
        
        <section className="bg-gray-100 dark:bg-gray-900">
  <div className=" p-10 py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-700 dark:text-white">Uma coleção de ferramentas criadas pensando no crescimento da receita.</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Cada ferramenta é uma solução poderosa. Usadas em conjunto, são a evolução do seu negócio de planos de saúde.</p>
          <button className="bg-sky-600 font-semibold rounded px-10 py-3 text-white mt-2">Criar uma conta gratuita</button>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z" fillRule="nonzero"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Dashboard</h3>
              <p className="text-gray-500 dark:text-gray-400">Um painel completo para rápida visualização de todas as principais métricas, ajudando o consultor a tomar melhores decisões.</p>
              <Link href='/site/dashboardSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 24 23" ><path d="M22 2h-20v13h20v-13zm-2 11h-16v-9h16v9zm2 3h-20l-2 6h24l-2-6zm-12.228 5l.466-1h3.524l.466 1h-4.456z"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">CRM</h3>
              <p className="text-gray-500 dark:text-gray-400">Planejamento e organização. Simples e fácil de usar, tenha visibilidade e controle sobre seus processos, e ganhe produtividade para aumentar as vendas.</p>
              <Link href='/site/crmSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-16 5h5v-4h-5v4zm12 2h-12v1h12v-1zm0-3h-5v1h5v-1zm0-3h-5v1h5v-1z"/></svg>          
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Administrativo</h3>
              <p className="text-gray-500 dark:text-gray-400">O Adm Coruss é uma funcionalidade essêncial, aqui você cadastra clientes, locais de entrega de produção, gera relatórios e muito mais.</p>
              <Link href='/site/admSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c2.209 0 4-1.792 4-4s-1.791-4-4-4zm.2 5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305 1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296 0-.546.417-1.034 1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322 1.576.561 1.576 1.418.002.687-.536 1.054-1.199 1.146zm-12.2-8.979v14h24v-14h-24zm22 9.422c-1.151.504-2.074 1.427-2.578 2.578h-14.844c-.504-1.151-1.427-2.074-2.578-2.578v-4.844c1.151-.504 2.074-1.427 2.578-2.578h14.844c.504 1.151 1.427 2.074 2.578 2.578v4.844z"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Financeiro</h3>
              <p className="text-gray-500 dark:text-gray-400">Sistema financeiro completo, faça lançamentos de comissões, bonificações e organize inclusive suas contas pessoais.</p>
              <Link href='/site/financeiroSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">CorussZapp</h3>
              <p className="text-gray-500 dark:text-gray-400">API WhatsApp para atendimento direto dentro da plataforma, cadastre respostas automáticas, chatboot e potencialize os resultados.</p>
              <Link href='/site/whatsappSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300" fill="currentColor" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Simulador</h3>
              <p className="text-gray-500 dark:text-gray-400">Simulador Coruss gratuito, gere cotações rapidamente dentro da plataforma e mande para o CRM automaticamente.</p><br></br>
              <Link href='/site/simuladorSite'>
              <p className="text-sky-600 text-sm cursor-pointer">Saiba mais...</p>
              </Link>
          </div>
      </div>
  </div>
</section>
        </>
    )
}