import { Fragment } from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropFinan() {
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="flex w-full items-center ">
        <FaMoneyBill className="w-7 h-7 mr-2" />
        Financeiro
          <FaChevronDown className=" ml-10 h-4 w-4 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-100"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-100"
      >
        <Menu.Items className=" w-56 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                  Bancos e caixas
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro/ContasaPagar">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                 Contas a pagar
                  </a>
                </Link>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro/ContasaReceber">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                  Contas a receber
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro/Comissoes">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                  Comissões
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro/Bonificacoes">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                  Bonificações
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/financeiro/RelatoriosFinanceiro">
                  <a
                    className={classNames(
                      active
                        ? ' text-sky-600'
                        : 'text-gray-600 hover:text-sky-600',
                      'block px-4 py-2 text-md'
                    )}
                  >
                  Relatórios
                  </a>
                </Link>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
