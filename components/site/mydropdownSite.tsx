import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import Link from 'next/link'





export default function Example() {
  return (
    <div className='ml-5'>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-gray-700 font-semibold flex">
            Suporte <AiFillCaretDown className='pt-2' />
           
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-sm bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 ">
              <Menu.Item>
                
                {({ active }) => (
                  <Link href="/contato"><a><button
                    className={`${
                      active ? 'bg-gray-100 text-gray-700 font-semibold' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-3 py-3 text-sm font-semibold`}
                  >Contato                   
                  </button></a></Link>
                )}
                

              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                  <Link href="/docs"><a><button
                  className={`${
                    active ? 'bg-gray-100 text-gray-700 font-semibold' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-3 py-3 text-sm font-semibold`}
                >Docs/API                  
                </button></a></Link>
                )}
            
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

