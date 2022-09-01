import { AiFillFileImage, AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa'
import { BsChatRightFill } from 'react-icons/bs'

export default function User() {
  return (
    <>
  
      <div className=" h-screen bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex items-center py-4">
          <Link href="/">
            <a>
              <AiFillHome className="text-gray-500 hover:text-sky-600 w-5 h-5" />
            </a>
          </Link>
          <h3 className="ml-3 text-xl font-normal text-gray-500">-</h3>
          <h1 className=" ml-3 pt-1 font-normal text-gray-500 ">Usuário</h1>
        </div>
        <hr></hr>

        <div>
          <div className='flex mt-4'>
            <div className='bg-white shadow-sm rounded-lg p-8 w-1/3'>
              <Image className='rounded-lg shadow-md' src="/foto capa.png"  alt="foto perfil" width="100" height="100" />
              <h2 className='font-normal text-lg '>Ricardo de Brito</h2>
              <br></br>
                <div className='flex-cols'>
                  <h3 className='flex'><BsChatRightFill className='text-gray-700 w-4 h-6 mr-2'/> Assistente financeiro</h3>
                <h3 className='flex'><FaHome className='text-gray-700 w-5 h-6 mr-2' /> Brasília-DF, Brasil</h3>
           </div>


              <div className='pt-3'>
              <label className='font-seminormal'>E-mail</label>
              <p>ricardo@betoven.com.br</p>
              </div>
              <div className='pt-3'>
              <label className='font-seminormal'>Endereço</label>
              <p >Rua das Pitangueiras lote 6, Águas Claras.</p>
              </div>
              <div className='pt-3'>
              <label className='font-seminormal'>Telefone</label>
              <p>+55 61 99999-9999</p>
              </div>
             
           </div>
            <div className='bg-white w-2/3 ml-3 p-8 rounded-lg shadow-sm '>
                 <h2 className='font-normal text-lg'>Informações gerais</h2>
                 <h3 className='font-seminormal'>Sobre mim</h3>
                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Proin libero nunc consequat interdum varius sit amet. Magnis dis parturient montes nascetur ridiculus. A pellentesque sit amet porttitor. Ac auctor augue mauris augue. Condimentum lacinia quis vel eros donec ac. Cras sed felis eget velit aliquet sagittis id consectetur. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Fermentum dui faucibus in ornare quam viverra .</p>
            <div className='grid grid-cols-2'>
              <div className='pt-3'>
                 <label className='font-seminormal'>Empresa</label>
                 <p>Betoven</p>
              </div>
              <div className='pt-3'>
                 <label className='font-seminormal'>Departamento</label>
                 <p>Financeiro</p>
              </div>
              <div className='pt-3'>
                 <label className='font-seminormal'>Função</label>
                 <p>Assistente Financeiro</p>
              </div>
              <div className='pt-3'>
                 <label className='font-seminormal'>Aniversário</label>
                 <p>26/02/1984</p>
              </div>
            </div>

          </div>
          
                
        </div>        
        </div>














        </div>
            
    </>
  )
}
