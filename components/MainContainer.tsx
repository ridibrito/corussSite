import { Children } from 'react'
import Navbar from './navbar'
import Navtop from './navtop'
import React from 'react'


interface Props{
  Children: React.ReactNode;
}

export default function MainContainer({ Children }:Props) {
  return (
    <>
    <Navtop/>
    <Navbar />
    <main className='pl-60 relative'>
      <div>{Children}</div>
    </main>
    </>
  )
}
