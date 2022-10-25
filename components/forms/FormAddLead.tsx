import { IoMdCloseCircle } from "react-icons/io";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";


const leadSchema = yup.object({
  nome: yup.string().required(),
  telefone: yup.string(),
  email: yup.string().required(),
  valor: yup.number().required(),
  tipoPlano: yup.string().required(),
  administradora: yup.string().required(),
  operadora: yup.string().required(),

})
.required();


interface NewLeadForm {
  nome: string
  telefone: string
  email: string
  valor: Number
  tipoPlano: string
  administradora: string
  operadora: string
}

interface Props {
  show: string
  setShow: string
}
export default function AddLead({ show, setShow }:Props) {
  const router = useRouter()
  const { register, handleSubmit, 
    formState:{ errors } } = useForm<NewLeadForm>({
    resolver: yupResolver(leadSchema)
  });
  const submit: SubmitHandler<NewLeadForm> = async (inputs) => {
    console.log(inputs)
    const data = await fetch(`/api/${router?.query?.tenantId}/leads`,{
      method: 'POST',
      body: JSON.stringify(inputs),
      headers:{
        'content-type': 'application/json'
      }
     
    })

  }


  const handleClose = () => {
    //@ts-ignore
    setShow(false);
  };
  return (
    <>
      <div
        style={{ right: show ? 10 : -1000 }}
        className="bg-white shadow-2xl fixed rounded dark:bg-gray-700  dark:text-gray-400 z-10 flex-col px-8 py-5 right-4 transition-all duration-500"
      > 
        <header className="flex justify-between pb-4">
          <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
            Cadastrar Lead
          </h1>
          <span>
            <IoMdCloseCircle
              onClick={handleClose}
              className="text-gray-500 w-8 h-8 hover:bg-gray-200 mr-3 dark:text-gray-400"
            />
          </span>
        </header>
        <section>
          <form  onSubmit={handleSubmit(submit)} className=" mx-auto">
            <div className=" bg-gray-100 dark:bg-gray-700 border-t-2 border-sky-400 bg-opacity-5">
              <div className=" mx-auto">
                <div className="inline-flex items-center "></div>
              </div>
            </div>
            <div className="space-y-3 bg-white dark:bg-gray-700 dark:text-gray-400">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3 dark:text-gray-400">Dados do Lead</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                       {...register("nome", { required: true })}
                        type="text"
                        id="user-info-name"
                        className=" rounded-lg flex-1 appearance-none dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="Nome"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                       {...register("telefone", { required: true })}
                        type="text"
                        id="user-info-phone"
                        className=" rounded-lg flex-1 appearance-none dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="Telefone"
                      />
                    </div>
                    <div className=" relative ">
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        id="user-info-name"
                        className=" rounded-lg flex-1 appearance-none mt-5 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="inline-flex items-center "></div>
              </div>
            
            <div className="space-y-3 bg-white dark:bg-gray-700 dark:text-gray-400">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Dados do plano</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                  <div>
                    <div>
                    <select 
                    {...register("tipoPlano", { required: true })}
                    className=" rounded-lg flex-1 appearance-none dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent" placeholder="Tipo de Plano">
                    <option>Tipo de plano</option>            
                    <option>Adesão</option>
                    <option>PME</option>
                    <option>Individual</option>
                    <option>Familiar</option>
                    </select>
                    </div>
                  
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        {...register("administradora", { required: true })}
                        type="text"
                        id="user-info-phone"
                        className=" rounded-lg flex-1 appearance-none dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="Administradora"
                      />
                    </div>
                    <div className=" relative mt-3">
                      <input
                        {...register("operadora", { required: true })}
                        type="text"
                        id="user-info-phone"
                        className=" rounded-lg flex-1 appearance-none dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="Operadora"
                      />
                    </div>
                    <div className=" relative ">
                      <input
                        {...register("valor", { required: true })}
                        type="text" 
                        name="price" 
                        id="price"
                        className=" rounded-lg flex-1 appearance-none mt-5 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-gray-600 focus:border-transparent"
                        placeholder="R$ 0,00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </form>
        </section>
        
        <footer className="flex mt-3">
          <button
            onClick={handleClose}
            className="border shadow border-sky-600 font-normal px-6 py- rounded text-sky-600 hover:bg-blue-50"
          >
            Cancelar
          </button>
          <input
            type="submit"
            className="bg-sky-600 shadow text-white font-normal px-8 rounded ml-5 py-2 cursor-pointer"/>
        </footer>
      </div>
    </>
  );
}
