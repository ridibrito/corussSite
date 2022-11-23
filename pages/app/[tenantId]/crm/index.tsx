import Link from 'next/link'
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import AddLead from '../../../../components/forms/FormAddLead'
import { useRouter } from 'next/router'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Image from 'next/image'
import { BsListTask } from 'react-icons/bs'
import useSWR from 'swr'

//@ts-ignore

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const initialItems = [
  {
    id: '1',
    nome: 'Ricardo',
    tipoPlano: 'adesão',
    operadora: 'Amil',
    administradora: 'Allcare',
    valor: 155.2,
  },
  {
    id: '2',
    nome: 'Lilian',
    tipoPlano: 'adesão',
    operadora: 'Bradesco',
    administradora: 'Qualicorp',
    valor: 852.10,
  },
]

const initialColumns = [
  {
    id: '1',
    name: 'leads',
    oportunidades: '2',
    valorTotal: 1500.0,
    items: initialItems,
  },
  {
    id: '2',
    name: 'Cotação enviada',
    oportunidades: '2',
    valorTotal: 1500.0,
    items: '',
  },
  {
    id: '3',
    name: 'Identificação de interesse',
    oportunidades: '2',
    valorTotal: 1500.0,
    items: '',
  },
  {
    id: '4',
    name: 'Vendidas',
    oportunidades: '2',
    valorTotal: 1500.0,
    items: '',
  },
  {
    id: '5',
    name: 'Perdidas',
    oportunidades: '2',
    valorTotal: 1500.0,
    items: '',
  },
]
interface IItem {
  id: number
  nome: string
  tipoPlano: string
  valor: number
  operadora: string
  administradora: string
}

export default function Crm() {
  const router = useRouter()
  const { data } = useSWR(`/api/${router?.query?.tenantId}/leads`, fetcher)
  const [showPopUpLead, setShowPopUpLead] = useState(false)

  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, [])
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, [])
  const onDragStart = useCallback(() => {
    /*...*/
  }, [])
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, [])
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, [])

  const handleNewLead = () => {
    setShowPopUpLead(true)
  }

 
  return (
    <>
      <div className=" bg-gray-100 dark:bg-gray-600 dark:text-gray-400 pl-60 pt-16 pr-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4">
            <Link href={`/app/${router.query.tenantId}`}>
              <a>
                <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5 dark:text-gray-400" />
              </a>
            </Link>
            <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-400">
              -
            </h3>
            <h1 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-400">
              CRM
            </h1>
          </div>
          <div>
            <button
              onClick={handleNewLead}
              className="flex items-center ml-60 bg-sky-600 text-white px-6 py-2 font-normal mr-3 rounded shadow"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <hr></hr>
        <AddLead
          //@ts-ignore
          show={showPopUpLead}
          //@ts-ignore
          setShow={setShowPopUpLead}
        />

        <div className="flex justify-between pt-2">
          <h2 className="items-center text-lg text-gray-500 ml-3 pt-1 dark:text-gray-400">
            Oportunidades
          </h2>
          <div className="bg-sky-600 text-white p-2 mb-2 rounded shadow-md">
            <Link href={`/app/${router?.query?.tenantId}/crm`}>
              <a className="pr-3 pl-3">CRM</a>
            </Link>
            |
            <Link href={`/app/${router?.query?.tenantId}/crmlist`}>
              <a className="pl-3 pr-3">Lista</a>
            </Link>
          </div>
        </div>
        <div className="flex">
          <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            {initialColumns.map((column) => (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-gray-200 grow-0 shrink-0 basis-80  h-screen mr-4 rounded"
                  >
                    <h1 className="text font-semibold ml-3 mt-2 text-gray-700">
                      {column.name}
                    </h1>
                    <div className="flex justify-between mx-3">
                      <p className="text-sm">
                        {column.oportunidades} oportunidades
                      </p>

                      <p className="text-sm font-semibold">
                        R$ {column.valorTotal}
                      </p>
                    </div>
                    {initialItems && initialItems.map((lead) => (
                        <Draggable
                          key={lead.id}
                          draggableId={lead.nome}
                          index={1}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`bg-white hover:bg-sky-50 rounded w-11/12 h-32 mx-auto mt-3 shadow-lg border-l-4 border-sky-600 border-opacity-60 ${provided.draggableProps.style} `}
                            >
                              <Link href="#">
                                <a>
                                  <h2 className="p-3 hover:text-sky-600 text-gray-700 font-semibold">
                                    {lead.nome}
                                  </h2>
                                </a>
                              </Link>

                              <div className="flex justify-between items-center -mt-2">
                                <p className="text-gray-700 text-sm ml-3 font-semibold">
                                  {lead.tipoPlano}
                                </p>
                                <div className="mr-3">
                                  <Image
                                    src="/amil.png"
                                    alt="amil"
                                    width="30"
                                    height="30"
                                    className="rounded-full"
                                  />
                                  <Image
                                    src="/allcare.jpeg"
                                    alt="amil"
                                    width="30"
                                    height="30"
                                    className="rounded-full"
                                  />
                                </div>
                              </div>
                              <div className="mt-2 flex justify-between items-center">
                                <p className="text-gray-700 text-sm ml-3 font-semibold">
                                  R$ {lead.valor}
                                </p>

                                <div className="flex justify-center items-center">
                                  <BsListTask className="text-sky-600 mr-3 w-5 h-5" />
                                  <span className="w-3 h-3 bg-sky-600 rounded-full mr-6"></span>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </div>
    </>
  )
}
