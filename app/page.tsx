import Image from 'next/image'
import { TfiLocationPin, TfiMobile, TfiEmail } from 'react-icons/tfi'

export default function Home() {
  return (
    <main className="">
      <div id='main-div'>
        <div id='header-div'>
          <div id='top-header' className='flex w-full h-[40px] justify-around bg-[#F0EEEE] text-[black]'>
            <div className='flex gap-[124px]'>
              <div className='flex items-center'>
                <TfiLocationPin className='mr-2'/>
                <p>Rio de Janeiro</p>
              </div>
              <div className='flex items-center'>
                <p>Rua 27 de Maio</p>
              </div>
            </div>
            <div className='flex gap-[124px]'>
              <div className='flex items-center'>
                <TfiMobile className='mr-2'/>
                <p>+55 21 90909-9090</p>
              </div>
              <div className='flex items-center'>
                <TfiEmail className='mr-2'/>
                <p>contato@digitech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
