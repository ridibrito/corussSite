import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'


//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Dashboard: [
      {
        id: 1,
        title:
          'Analise e gerencie todos os número da empresa em um painel completo',
        subtitle:
          'coruss 360º é uma ferramenta completa de GESTÃO para pequenas e médias empresas que buscam controle total dos processos',
        lista1: '• Analise gráfica, para rápida tomada de decisão.',
        lista2: '• Filtros por periodo, produto, Adm, vendedor, operadora e etc...',
        lista3: ' ',
        lista4: ' ',
        lista5: '',
        lista6: '',
        lista7: '',
        img: (
          <Image
            src="/dashboardcoruss.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    CRM: [
      {
        id: 1,
        title: 'Gerencie leads, separado dos seus atuais clientes. ',
        subtitle:
          'Com o CRM Alb 360º fica fácil separar quem já é um cliente ativo, de quem ainda é um LEAD.',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    ADM: [
      {
        id: 1,
        title: 'A ferramenta administrativa que sua empresa esperava.',
        subtitle:
          'Acesso suas vendas, clientes, produtos, fornecedores em um espaço diferenciado',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    Financeiro: [
      {
        id: 1,
        title: 'Simplifique a gestão financeira da sua empresa.',
        subtitle:
          'Com a ferramenta financeira sua empresa conecta financeiro, fiscal e cobrança.',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    Inbox: [
      {
        id: 1,
        title: 'Caixa de entrada de e-mail',
        subtitle:
          'Conecte seus e-mails de preferência e não perca o foco no que importa!',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    WhatsApp: [
      {
        id: 1,
        title: 'Ferramenta conectada a API do WhatsApp.',
        subtitle:
          'Ele faz parte do dia a dia do seu cliente, tenha acesso fácil.',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ],
    Calendário: [
      {
        id: 1,
        title: 'Calendário integrado ao google calendar/agenda.',
        subtitle: 'Conect suas tarefas, agende reuniões.',
        lista1: 5,
        lista2: 2,
        lista3: 2,
        lista4: 2,
        lista5: 2,
        lista6: 2,
        lista7: 2,
        img: (
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width="700"
            height="400"
          />
        )
      }
    ]
  })

  return (
    <div className="w-full max-w-8xl px-2 py-10 sm:px-0">
      <Tab.Group>
        <Tab.List className="sm:flex space-x-1 rounded-xl bg-gray-200 p-1 text-sky-600">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 mx-2 text-sm  leading-5 text-sky-600 font-semibold',
                  'ring-opacity-60 ring-offset-2 focus:outline-none',
                  selected
                    ? 'bg-sky-600 text-white'
                    : 'text-sky-600 hover:bg-white hover:text-sky-600'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames('rounded-xl bg-white p-3')}
            >
              <ul>
                {posts.map(post => (
                  <li key={post.id} className="relative rounded-sm p-3">
                    <h3 className="text-3xl flex justify-center leading-7">
                      {post.title}
                    </h3>
                    <h4 className="text-xl pt-2 flex justify-center">
                      {post.subtitle}
                    </h4>

                    <div className="sm:flex mt-3 mx-auto ">
                      <ul className="sm:w-1/2 sm:flex-col text-sm   text-gray-700">
                        <li className="text-xl">{post.lista1} </li>

                        <li className="text-xl">{post.lista2} </li>

                        <li className="text-xl">{post.lista3} </li>

                        <li className="text-xl">{post.lista4} </li>

                        <li className="text-xl">{post.lista5} </li>

                        <li className="text-xl">{post.lista6} </li>

                        <li className="text-xl">{post.lista7} </li>
                      </ul>
                      <div>{post.img}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
