import Link from "next/link";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import AddLead from "../../../../components/forms/FormAddLead";
import { useRouter } from "next/router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";
import { BsListTask } from "react-icons/bs";
import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem";

const initialItems = [
  { id: "1",
   nome: "Ricardo Brito",
   operadora:"Amil",  
   administradora:"allcare",
   tipoPlano: "Adesão",
   valor:355.55,
  },
  { id: "2",
   nome: "Lilian carvalho",
   operadora:"Amil",  
   administradora:"allcare",
   tipoPlano: "PME",
   valor:950.22,
  },
  
];

const initialColumns = [
  {
    name: "leads",
    oportunidades: "2",
    valorTotal: 1500.00,
    items: initialItems,
  },
  {
    name: "Cotação enviada",
    items: [],
  },
  {
    name: "Identificação de interesse",
    items: [],
  },
  {
    name: "Vendidas",
    items: [],
  },
  {
    name: "Perdidas",
    items: [],
  },
];




const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


export default function Crm() {
  const [columns, setColumns] = useState(initialColumns);

  const router = useRouter();
  const [showPopUpLead, setShowPopUpLead] = useState(false);
  
 

  const handleNewCliente = () => {
    setShowPopUpLead(true);
  };

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
              onClick={handleNewCliente}
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
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >

             {Object.entries(columns).map(([columnId, column], index) => (
              <Droppable droppableId={columnId} key={columnId}
              >
                {(provided) => (
                  <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-200 w-80 h-screen mr-4 rounded"
                  >
                    <h1 className="text font-semibold ml-3 mt-2 text-gray-700">
                      {column.name}
                    </h1>
                    <div className="flex justify-between mx-3">
                    <p className="text-sm">{column.oportunidades} oportunidades</p>
                    
                    <p className="text-sm font-semibold">R$ {column.valorTotal}</p> 
                    </div>
                    {column.items.map((item, index) => (
                      <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
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
                                  {item.nome}
                                </h2>                              
                              </a>
                            </Link>

                            <div className="flex justify-between items-center -mt-2">
                            <p className="text-gray-700 text-sm ml-3 font-semibold">{item.tipoPlano}</p>   
                            <div className="mr-3">
                            <Image src="/amil.png" alt="amil" width="30" height="30" className="rounded-full" />
                            <Image src="/allcare.jpeg" alt="amil" width="30" height="30" className="rounded-full" />
                            </div>                   
                            
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                          <p className="text-gray-700 text-sm ml-3 font-semibold">R$  {item.valor}</p>
                          
                          <div className="flex justify-center items-center">
                          <BsListTask  className="text-sky-600 mr-3 w-5 h-5"/>
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
  );
}
