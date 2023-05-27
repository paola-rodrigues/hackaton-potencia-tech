import Image from 'next/image'
import { TfiLocationPin, TfiMobile, TfiEmail } from 'react-icons/tfi'

export default function Home() {
  return (
    <main className="">
      <div id='main-div' className='bg-[#B1D5E5] h-screen'>

        <div id='fist-part'>
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
            <div id='bottom-header' className='flex h-[101px] bg-[#AF2B36] justify-between'>
              <div className='ml-5'>
                <Image src="/logo.png" alt="Logo" width={100} height={100}/>
              </div>
              <div className='flex items-center gap-[2rem] mr-5'>
                <p>Sobre</p>
                <p>Cursos</p>
                <p>Blog</p>
                <p>Mentoria</p>
                <p>Projetos</p>
                <p>Livros</p>
                <p>Contatos</p>
                <button className='bg-[white] p-3 w-[8rem] rounded-[10px]'>
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          {/* end of header */}

          <div id='body-1' className='ml-[10rem] mr-[10rem] flex flex-col justify-center items-center'>
            <p className='font-[600] text-[6rem] w-[90%]'>Digitech+ a plataforma para você iniciar na <span className='text-[#AF2B36]'>Tecnologia</span></p>
            <p className='text-[2.25rem] font-[400] w-[90%]'>
            Comece seu futuro agora e se torne um profissional de tecnologia. Somos uma plataforma de educação gratuita, que além de oferecer cursos e trilhas, também apresentamos o dia-a-dia dentro de uma empresa com as nossas mentorias onlines.
            </p>
            <div className='flex gap-[5rem]'>
              <div>
                <iframe className='rounded-[20px]'
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zJQpszFdIdc"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                ></iframe>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[2.5rem] font-[600] w-[90%] leading-[3rem]'>Comece Aqui - Vídeo de Apresentação</p>
                <p className='text-[1.5rem] font-[500] w-[90%] mt-[1rem]'>Apresentado por <span className='font-[700] text-[#AF2B36]'>Digitech+</span></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}
