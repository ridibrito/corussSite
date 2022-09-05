import { IoMdCloseCircle } from "react-icons/io";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const clienteSchema = yup.object({
  nome: yup.string().required(),
  tipo: yup.string().required(),
  cpf: yup.string().required(),
  telefone: yup.string(),
  email: yup.string().required(),
  dataNascimento: yup.date(),
  sexo: yup.string(),
  Nproposta: yup.number(),
  dataVenda: yup.date(),
  dataVigencia: yup.date(),
  valor: yup.number().required(),
  tipoPlano: yup.string().required(),
  administradora: yup.string().required(),
  operadora: yup.string().required(),
  qtsVidas: yup.number(),
  comissao: yup.string().required(),
  taxaAdesao: yup.number().required(),
  valorTaxa: yup.number().required(),
  bonificacao: yup.string().required(),
  valorBonificacao: yup.number().required(),

})
.required();

type Inputs = {
  nome: string;
  tipo: string;
  cpf: string;
  telefone: string;
  email: string;
  dataNascimento: Date;
  sexo: string;
  Nproposta: Number;
  dataVenda: Date;
  dataVigencia: Date;
  valor: Number;
  tipoPlano: string;
  administradora: string;
  operadora: string;
  qtsVidas: Number;
  comissao: string;
  taxaAdesao: Number;
  valorTaxa: Number;
  bonificacao: string;
  valorBonificacao: Number;
};

interface Props {
  show: string
  setShow: string
}

export default function AddCliente({ show, setShow }: Props) {
  const { register, handleSubmit, 
    formState:{ errors } } = useForm<Inputs>({
    resolver: yupResolver(clienteSchema)
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleClose = () => {
    //@ts-ignore
    setShow<Props>(false);
  };
  return (
    <>
      <div>
        <div
          style={{ right: show ? -10 : -1000 }}
          className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400 shadow-2xl rounded fixed z-30 flex-col px-8 py-5 transition-all duration-500"
        >
          <header className="flex justify-between pb-4 dark:text-gray-400 ">
            <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400 ">
              Cadastrar cliente ou fornecedor
            </h1>
            <span>
              <IoMdCloseCircle
                onClick={handleClose}
                className="text-gray-500 w-8 h-8 hover:bg-gray-200 mr-3 dark:text-gray-400 dark:hover:bg-gray-700 "
              />
            </span>
          </header>

          <body className="dark:bg-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-3 pb-3">
              <div className="flex items-center mx-2">
                <div>
                <input
                  {...register("nome", { required: true })}
                  type="text"
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 "
                  placeholder="Nome"
                  
                />
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*Obrigatório"}
                </div>

                </div>
                <select
                  {...register("tipo", { required: true })}
                  className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                >
                  <option className="text-lg outline-none broder-none">
                    Tipo
                  </option>
                  <option className="text-lg outline-none broder-none">
                    Pessoa física
                  </option>
                  <option className="text-lg outline-none broder-none">
                    Pessoa Juridica
                  </option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <input
                  type="text"
                  {...register("cpf", { required: true })}
                  className="rounded-lg flex h-12 ml-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="CPF/CNPJ"
                />
                 <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <input
                  type="text"
                  {...register("telefone")}
                  className="rounded-lg flex h-12 ml-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Telefone"
                />
              </div>
              <div className="flex mt-2 mb-2">
                <input
                  type="email"
                  {...register("email")}
                  className="rounded-lg flex h-12 ml-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="E-mail"
                />
                <p className="w-20 ml-2 dark:text-gray-400  flex items-center">
                  D/N:
                </p>
                <input
                  type="date"
                  {...register("dataNascimento")}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Data da venda"
                />

                <select className="rounded-lg flex h-12 mx-2 dark:bg-gray-700 ml-2 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600">
                  <option>Sexo</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Não definido</option>
                </select>
              </div>

              <div className="flex mx-2 mt-2">
                <input
                  type="text"
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Nº da proposta"
                />

                <p className="w-20 ml-2 dark:text-gray-400 ">Data da venda:</p>
                <input
                  type="date"
                  {...register("dataVenda", { required: true })}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Data da venda"
                />
                 <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <p className="w-20 ml-2 dark:text-gray-400 ">
                  Data da vigência:
                </p>
                <input
                  type="date"
                  {...register("dataVigencia", { required: true })}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Data da venda"
                />
                 <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <input
                  type="currency"
                  {...register("valor", { required: true })}
                  className="rounded-lg flex h-12 ml-3 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Valor"
                />
                 <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
              </div>
               <div 
               {...register("tipoPlano", { required: true })}
               className="flex mb-3 mt-2 ">
                <select className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600">
                  <option>Tipo de plano</option>
                  <option>Adesão</option>
                  <option>Individual</option>
                  <option>PME</option>
                  <option>Familiar</option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <select
                  {...register("administradora", { required: true })}
                  className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                >
                  <option>Administradora</option>
                  <option>Qualicorp</option>
                  <option>Allcare</option>
                  <option>Affix</option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <select
                  {...register("operadora", { required: true })}
                  className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                >
                  <option>Amil</option>
                  <option>Bradesco</option>
                  <option>Sulamerica</option>
                </select>

                <input
                  type="text"
                  {...register("qtsVidas")}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-36 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Qts. Vidas"
                />
              </div>
              <></>
              <div className="mt-2 flex items-center">
                <select
                  {...register("comissao", { required: true })}
                  className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                >
                  <option>Comissão</option>
                  <option>Padrão</option>
                  <option>Especial</option>
                  <option>Superior</option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <p className="text-gray-500">
                  100% + 30% confirmação + bonificação
                </p>
              </div>
                <div 
                {...register("taxaAdesao", { required: true })}
                className="flex mt-2">
                <select className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600">
                  <option>Taxa de adesão</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>

                <input
                  type="currency"
                  {...register("valorTaxa", { required: true })}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Valor da taxa"
                />
 <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <select
                {...register("bonificacao", { required: true })} 
                className="rounded-lg w-60 flex h-12 mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600">
                  <option>Sem bonificação</option>
                  <option>Por vida</option>
                  <option>Por contrato</option>
                </select>
                <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
                <input
                  type="currency"
                  {...register("valorBonificacao", { required: true })}
                  className="rounded-lg flex h-12 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-40 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600"
                  placeholder="Valor da bonificação"
                />
              </div>
              <div className="text-red-600 text-sm">
                {errors.nome?.type === 'required' && "*"}
                </div>
              <div className="p-4">

              <button
              onClick={handleClose}
              className="border shadow border-sky-600 font-normal px-6 py-2 rounded text-sky-600 hover:bg-blue-50 dark:hover:bg-gray-600"
              >
              Cancelar
            </button>
            <button className="bg-sky-600 shadow text-white font-normal px-8 rounded ml-5 py-2">
              Salvar
            </button>
              </div>
            </form>
          </body>
          

        
        </div>
      </div>
    </>
  );
}
