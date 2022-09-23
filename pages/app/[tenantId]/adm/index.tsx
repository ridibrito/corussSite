import Link from "next/link";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import NavCadastros from "../../../../components/NavCadastros";
import Filtro from "../../../../components/filtro";
import TabelaClientes from "../../../../components/tabelas/tabelaClientes";
import React, { useState } from "react";
import { useRouter } from "next/router";
import AddCliente from "/components/forms/FormAddCliente";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




interface NewClientForm  {
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

export default function Adm() {
  const { register, handleSubmit, 
    formState:{ errors } } = useForm<NewClientForm>({
    resolver: yupResolver(clienteSchema)
  });
  const router = useRouter();
  const [showPopUpCliente, setShowPopUpCliente] = useState(false);

  const onSubmit: SubmitHandler<NewClientForm> = async (inputs) => {
    console.log(inputs)
    const data = await fetch(`/api/${router?.query?.tenantId}/adm`,{
      method: 'POST',
      body: JSON.stringify(inputs)
     
    })
  }

  const handleNewCliente = () => {
    setShowPopUpCliente(true);
  };

  return (
    <>
      <div className=" h-screen overflow-y-scroll dark:text-gray-400 dark:bg-gray-600 bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex justify-between mt-1 items-center">
          <div className="flex items-center py-4">
            <Link href={`/app/${router.query.tenantId}`}>
              <a>
                <AiFillHome className="dark:text-gray-400 dark:bg-gray-600 hover:text-sky-600 text-gray-500 w-5 h-5" />
              </a>
            </Link>
            <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-400 dark:bg-gray-600">
              -
            </h3>
            <h3 className=" ml-3 pt-1 font-normal text-gray-500 ">
              <Link href={`/app/${router.query.tenantId}/adm`}>
                <a className="hover:text-sky-600 cursor-pointer dark:text-gray-400 dark:bg-gray-600">
                  Administrativo
                </a>
              </Link>
            </h3>

            <h3 className=" ml-3 pt-1 font-normal text-gray-500 ">
              <Link href="/app/adm">
                <a className="hover:text-sky-600 cursor-pointer dark:text-gray-400 dark:bg-gray-600">
                  / Cadastros
                </a>
              </Link>
            </h3>
            <h3 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-400 dark:bg-gray-600">
              / Clientes
            </h3>
          </div>
          <div>
            <button
            onClick={handleNewCliente}
            className="flex items-center ml-60 bg-sky-600 text-white px-6 py-2 font-normal mr-3 rounded shadow">
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <hr></hr>
        <AddCliente  
          //@ts-ignore
            show ={showPopUpCliente}
            //@ts-ignore
            setShow={setShowPopUpCliente}
          />

        <div>
          <NavCadastros />
          <Filtro />
        
          <TabelaClientes />
        </div>
      </div>
    </>
  );
}
