import type { NextPage } from 'next'
import React, { useState } from 'react'
import List from '/components/ListSimulador'
import Navbar from '/components/navbar'
import SelectAbrangencia from '/components/selects/SelectAbrangencia'
import SelectAcomodacao from '/components/selects/SelectAcomodacao'
import SelectAdm from '/components/selects/SelectAdministradora'
import SelectCidade from '/components/selects/selectCidades'
import SelectCoparticipacao from '/components/selects/SelectCoparticipacao'
import SelectEntidade from '/components/selects/SelectEntidade'
import SelectEstados from '/components/selects/SelectEstados'
import SelectProfissao from '/components/selects/SelectProfissão'
import SelectReembolso from '/components/selects/SelectReembolso'
import SelectTipoPlano from '/components/selects/SelectTipoDePlano'
import SelectTipoProduto from '/components/selects/SelectTipoDeProduto'

const Home: NextPage = () => {
  const [minus, setMinus] = useState(true)
  const [minus1, setMinus1] = useState(true)
  const [minus2, setMinus2] = useState(true)
  const [minus3, setMinus3] = useState(true)

  const handleCloseMinus = () => {
    return setMinus(false)
  }
  const handleCloseMinus1 = () => {
    return setMinus1(false)
  }
  const handleCloseMinus2 = () => {
    return setMinus2(false)
  }
  const handleCloseMinus3 = () => {
    return setMinus3(false)
  }

  const handleOpenMinus = () => {
    return setMinus(true)
  }
  const handleOpenMinus1 = () => {
    return setMinus1(true)
  }
  const handleOpenMinus2 = () => {
    return setMinus2(true)
  }
  const handleOpenMinus3 = () => {
    return setMinus3(true)
  } 


const [faixa, setfaixa] = useState('')
const [nomeLead, setNomeLead] = useState('')


  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-600">
        <Navbar />
        <section className='mx-3 pl-60 pt-16 pr-4'>
        <div className="flex items-center bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded p-3 shadow">
        <h2 className="text-lg font-semibold text-gray-700">Nome do lead</h2>
        <input type="text" className='border h-8 rounded w-full pl-2' onChange={(e)=> setNomeLead(e.target.value)}/>

        </div>
          <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
            <div className="flex items-center justify-between p-3 border-b ">
              <h2 className="text-xl font-semibold text-gray-700">Selecione</h2>
              {minus ? (
                <svg
                  onClick={handleCloseMinus}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 24"
                  className="cursor-pointer"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              ) : (
                <svg
                  onClick={handleOpenMinus}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"

                >
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
                </svg>
              )}
            </div>

            <div
              className="block sm:flex gap-3 max-w-7xl my-4 pb-5 px-3 transition-all ease-in duration-500"
              
            >
              <div className="sm:w-1/3"style={{ display: minus ? 'block' : 'none' }}>
                <label className='ml-2'>UF</label>
                <SelectCidade />
              </div>
              <div className="sm:w-1/3" style={{ display: minus ? 'block' : 'none' }}>
                <label className='ml-2'>Tipo de Produto</label>
                <SelectTipoProduto />
              </div>
              <div className="sm:w-1/3" style={{ display: minus ? 'block' : 'none' }}>
                <label className='ml-2'>Tipo de Plano</label>
                <SelectTipoPlano />
              </div>
            </div>
          </div>

                
          <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
            <div className="flex items-center justify-between p-3 border-b ">
              <h2 className="text-xl font-semibold text-gray-700">
                Filtros adesão
              </h2>
              {minus1 ? (
                <svg
                  onClick={handleCloseMinus1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 24"
                  className="cursor-pointer"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              ) : (
                <svg
                  onClick={handleOpenMinus1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"

                >
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
                </svg>
              )}
            </div>

            <div
              className="block sm:flex w-full gap-3 max-w-7xl my-4 pb-5"
            >
              <div className="sm:w-1/3" style={{ display: minus1 ? 'block' : 'none' }}
>
                <label>Administradora</label>
                <SelectAdm />
              </div>
              <div className="sm:w-1/3" style={{ display: minus1 ? 'block' : 'none' }}
>
                <label className='ml-2'>Entidade</label>
                <SelectEntidade />
              </div>
              <div className="sm:w-1/3" style={{ display: minus1 ? 'block' : 'none' }}
>
                <label className='ml-2'>Profissão</label>
                <SelectProfissao />
              </div>
            </div>
          </div>
          <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
            <div className="flex items-center justify-between p-3 border-b ">
              <h2 className="text-xl font-semibold text-gray-700">Filtros</h2>
              {minus2 ? (
                <svg
                  onClick={handleCloseMinus2}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 24"
                  className="cursor-pointer"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              ) : (
                <svg
                  onClick={handleOpenMinus2}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"

                >
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
                </svg>
              )}
            </div>

            <div
              className="block sm:flex sm:w-full gap-3 sm:max-w-7xl my-4 pb-5"
            >
              <div className="sm:w-1/4" style={{ display: minus2 ? 'block' : 'none' }}
>
                <label className='ml-1'>Acomodação</label>
                <SelectAcomodacao />
              </div>
              <div className="sm:w-1/4" style={{ display: minus2 ? 'block' : 'none' }}
>
                <label className='ml-2'>Abrangência</label>
                <SelectAbrangencia />
              </div>
              <div className="sm:w-1/4" style={{ display: minus2 ? 'block' : 'none' }}
>
                <label className='ml-2'>Reembolso</label>
                <SelectReembolso />
              </div>
              <div className="sm:w-1/4" style={{ display: minus2 ? 'block' : 'none' }}
>
                <label className='ml-2'>Coparticipação</label>
                <SelectCoparticipacao />
              </div>
            </div>
          </div>

          <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
            <div className="flex items-center justify-between p-3 border-b ">
              <h2 className="text-xl font-semibold text-gray-700">
                Faixas etárias
              </h2>
              {minus3 ? (
                <svg
                  onClick={handleCloseMinus3}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 24"
                  className="cursor-pointer"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              ) : (
                <svg
                  onClick={handleOpenMinus3}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"

                >
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
                </svg>
              )}
            </div>

            <div
              className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-11 gap-2"
              style={{ display: minus3 ? 'grid' : 'none' }}
            >
              <div className="w-full max-w-7xl mt-4 sm:mt-2 text-center">
                <label className="block text-sm font-semibold">00 a 18</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa1'
                  name='faixa1'
                />
              </div>
              <div className="w-full max-w-7xl mt-4 sm:mt-2 text-center">
                <label className="block text-sm font-semibold">19 a 23</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa2'
                  name='faixa2'
                />
              </div>
              <div className="w-full max-w-7xl mt-4 sm:mt-2 text-center">
                <label className="block text-sm font-semibold">24 a 28</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa3'
                  name='faixa3'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">29 a 33</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa4'
                  name='faixa4'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">34 a 38</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa5'
                  name='faixa5'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">39 a 43</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa6'
                  name='faixa6'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">44 a 48</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa7'
                  name='faixa7'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">49 a 53</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa8'
                  name='faixa8'
                />
              </div>
              <div className="w-full max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">54 a 58</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa9'
                  name='faixa9'
                />
              </div>
              <div className="w-full gap-3 max-w-7xl sm:mt-2 text-center">
                <label className="block text-sm font-semibold">59 +</label>
                <input
                  className="border w-24 rounded text-center h-8"
                  type="number"
                  maxLength={2}
                  onChange={(e) => setfaixa(e.target.value)}
                  id='faixa10'
                  name='faixa10'
                />
              </div>
              <div className="w-full gap-3 max-w-7xl sm:mt-2 text-center mb-4">
                <label className="block text-sm font-semibold">Total</label>
                <input
                  className="border w-24 rounded pl-4 text-center h-8 bg-gray-300"
                  type="number"
                  disabled={true}
                  maxLength={2}
                  value={faixa}
                  id='total'
                  name='total'
                />
              </div>
            </div>
            
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded p-3 shadow gap-3 justify-center mb-5">
          <button className="bg-yellow-500 hover:bg-yellow-600 rounded px-8 py-3 text-white font-semibold">Limpar</button>
          <button className="bg-sky-500 hover:bg-sky-600 rounded px-8 py-3 text-white font-semibold">Buscar</button>
        </div>
        </section>

        <section className='block mx-auto pl-60 pt-16'>
          <div className=' flex items-center max-w-7xl mx-auto justify-between bg-gray-300 rounded p-3 mb-2 px-4 '>
          <h2 className='text-gray-700  font-bold'>Selecione uma operadora</h2>
          <h4 className='text-gray-700 font-bold text-sm'>Planos encontrados:qts planos</h4>
          </div>
          <List />
          <div className='text-center flex justify-center my-5'>
          <button className='bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded  w-80 mx-2'>Gerar cotação</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
