import { IoMdCloseCircle } from "react-icons/io";



interface Props {
  show: string
  setShow: string
  //@ts-ignore
}

export default function AddLocal({ show, setShow }:Props) {
  const handleClose = () => {
    //@ts-ignore
    setShow(false);
  };
  return (
    <>
      <div>
      <div
          style={{ right: show ? -10 : -1000 }}
          className="bg-white shadow-2xl overflow-y-scroll rounded  -mt-24 fixed z-30 flex-col px-8 py-5 right-4 transition-all duration-500"
        >
          <header className="flex justify-between pb-4">
            <h1 className="text-xl font-semibold text-gray-500">
              Cadastrar Local de entrega
            </h1>
            <span>
              <IoMdCloseCircle
                onClick={handleClose}
                className="text-gray-500 w-8 h-8 hover:bg-gray-200 mr-3"
              />
            </span>
          </header>
          <hr></hr>
          <body>
            <form className="pt-3 pb-3">
              <div className="flex">
                <label className="block mt-1 text-gray-700">
                  Nome
                  <input
                    type="text"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1 mr-2"
                  />
                </label>
                <label className="mt-1 text-gray-700">
                  Tipo
                  <select className="flex text-g px-3 py-2 mb-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-40  mr-3 rounded-md sm:text focus:ring-1">
                    <option>Pessoa física</option>
                    <option>Pessoa Juridica</option>
                  </select>
                </label>
                <label className="block mt-1 text-gray-700">
                  CPF/CNPJ
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-36 mr-2 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block mt-1 text-gray-700">
                  Telefone
                  <input
                    type="text"
                    placeholder="(xx) xxxx-xxxx"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-36 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
              <div className="flex mt-1 mb-4">
                <label className="block mt-1 text-gray-700">
                  E-mail
                  <input
                    type="email"
                    placeholder="@"
                    className=" px-3 py-2 mr-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block mt-1 text-gray-700">
                  Data de nascimento
                  <input
                    type="date"
                    className=" px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-40  mr-3 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>

                <label className="mt-1 text-gray-700">
                  Sexo
                  <select className=" flex text-g px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-36 focus:ring-1">
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Não definido</option>
                  </select>
                </label>
              </div>
              <hr></hr>
              <div className="flex">
                <label className="block mt-1 text-gray-700">
                  Número da proposta
                  <input
                    type="text"
                    placeholder="Nº"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-48 mr-3 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block mt-1 text-gray-700">
                  Data da venda
                  <input
                    type="date"
                    className=" px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block mt-1 text-gray-700">
                  Data da vigência
                  <input
                    type="date"
                    className=" px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block mt-1 text-gray-700">
                  Valor
                  <input
                    type="text"
                    placeholder="R$"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-40 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
              <div className="flex mb-3">
                <label className="mt-1 text-gray-700">
                  Tipo de plano
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Adesão</option>
                    <option>Individual</option>
                    <option>PME</option>
                    <option>Familiar</option>
                  </select>
                </label>
                <label className="mt-1 text-gray-700">
                  Administradora
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Qualicorp</option>
                    <option>Allcare</option>
                    <option>Affix</option>
                  </select>
                </label>
                <label className="mt-1 text-gray-700">
                  Operadora
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Amil</option>
                    <option>Bradesco</option>
                    <option>Sulamerica</option>
                  </select>
                </label>
                <label className="block mt-1 text-gray-700">
                  Qtd. vidas
                  <input
                    type="text"
                    placeholder="Nº"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-36 rounded-md sm:text-sm focus:ring-1 mr-3"
                  />
                </label>
              </div>
              <hr></hr>
              <div className="mt-2 flex items-center">
                <label className="mt-1 text-gray-700">
                  Comissão
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Padrão</option>
                    <option>Especial</option>
                    <option>Superior</option>
                  </select>
                </label>
                <p className="pt-6 text-gray-500">
                  100% + 30% confirmação + bonificação
                </p>
              </div>
              <div className="flex mt-2">
                <label className="mt-1 text-gray-700">
                  Taxa de adesão
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </label>
                <label className="block mt-1 text-gray-700">
                  Valor taxa adesão
                  <input
                    type="text"
                    placeholder="R$"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-36 rounded-md sm:text-sm focus:ring-1 mr-3"
                  />
                </label>
                <label className="mt-1 text-gray-700">
                  bonificação
                  <select className=" flex text-g px-3 mr-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-48 focus:ring-1">
                    <option>Sem bonificação</option>
                    <option>Por vida</option>
                    <option>Por contrato</option>
                  </select>
                </label>
                <label className="block mt-1 text-gray-700">
                  Valor da bonificação
                  <input
                    type="text"
                    placeholder="R$"
                    className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-36 rounded-md sm:text-sm focus:ring-1 mr-3"
                  />
                </label>
              </div>
              <div>
                <label className="block mt-2 text-gray-700">
                  Observações
                  <textarea className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-20 rounded-md sm:text-sm focus:ring-1"></textarea>
                </label>
              </div>
            </form>
          </body>
          <hr></hr>

          <footer className="flex mt-3">
            <button
              onClick={handleClose}
              className="border shadow border-sky-600 font-normal px-6 py-2 rounded text-sky-600 hover:bg-blue-50"
            >
              Cancelar
            </button>
            <button className="bg-sky-600 shadow text-white font-normal px-8 rounded ml-5 py-2">
              Salvar
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
