import Image from 'next/image'
import { TfiLocationPin, TfiMobile, TfiEmail, TfiLinkedin, TfiFacebook, TfiInstagram, TfiYoutube } from 'react-icons/tfi'

export default function Home() {
  return (
    <main className="">
      <div id='main-div' className='bg-[#B1D5E5]'>

        <div id='fist-part' className='bg-[#B1D5E5]'>
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

          <div id='body-1' className='ml-[10rem] mr-[10rem] flex flex-col justify-center items-center mt-[2rem]'>
            <p className='font-[600] text-[6rem] w-[90%] leading-[6.5rem]'>Digitech+ a plataforma para você iniciar na <span className='text-[#AF2B36]'>Tecnologia</span></p>
            <p className='text-[2rem] font-[400] w-[90%] mt-[1rem]'>
            Comece seu futuro agora e se torne um profissional de tecnologia. Somos uma plataforma de educação gratuita, que além de oferecer cursos e trilhas, também apresentamos o dia-a-dia dentro de uma empresa com as nossas mentorias onlines.
            </p>
            <div className='flex gap-[5rem] mt-[2rem]'>
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
        {/* end of first part */}

        <div id='second-part' className='bg-[#F0EEEE] pt-[1rem] pb-[2rem]'>
          <div id='second-left'>
            <p className='text-[#AF2B36] font-[500] text-[2rem] tracking-[.4rem] ml-[1rem]'>Cursos e <br/>Trilhas</p>
          </div>
          <div className='flex gap-[7rem] justify-center mb-[3rem]'>
            <p className='p-2 bg-[white] rounded-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rounded-[10px] font-[500]'>UX Design</p>
            <p className='p-2 bg-[white] roudned-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rounded-[10px] font-[500]'>Programação</p>
            <p className='p-2 bg-[white] rounded-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rounded-[10px] font-[500]'>UI Design</p>
            <p className='p-2 bg-[white] rounded-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rounded-[10px] font-[500]'>Anchor</p>
          </div>
          <div id='carrossel' className='ml-[1rem] flex gap-10 justify-around'>
            <div className='h-[20rem] w-[20rem] bg-[gray] rounded-[20px]'>
              <p className='pl-[1rem] pt-[1rem] pb-[1rem]'>UX Design</p>
              <div className='ml-[1rem] h-[1px] w-[80%] bg-[black]'></div>
            </div>
            <div className='h-[20rem] w-[20rem] bg-[gray] rounded-[20px]'>
              <p className='pl-[1rem] pt-[1rem] pb-[1rem]'>UX Design</p>
              <div className='ml-[1rem] h-[1px] w-[80%] bg-[black]'></div>
            </div>
            <div className='h-[20rem] w-[20rem] bg-[gray] rounded-[20px]'>
              <p className='pl-[1rem] pt-[1rem] pb-[1rem]'>UX Design</p>
              <div className='ml-[1rem] h-[1px] w-[80%] bg-[black]'></div>
            </div>
            <div className='h-[20rem] w-[20rem] bg-[gray] rounded-[20px]'>
              <p className='pl-[1rem] pt-[1rem] pb-[1rem]'>UX Design</p>
              <div className='ml-[1rem] h-[1px] w-[80%] bg-[black]'></div>
            </div>
          </div>
        </div>
        {/* end of second part */}

        <div id='third-part' className='bg-[#FA8072] pb-[2rem] flex justify-around h-[30rem]'>
          <div id='left-third' className='flex flex-col justify-center'> 
            <p className='text-[3rem] font-bold'>Comece agora seu futuro</p>
            <p className='font-[500]'>Deixe seu email que entraremos em contato para a seletiva</p>
          </div>
          <div id='right-third' className='flex flex-col items-center justify-center'>
            <input type="email" className='mb-[1rem] w-[30rem] h-[3rem] rounded-[15px] pl-[.5rem]' placeholder='seu e-mail' />
            <button className='bg-[#AF2B36] pb-1 p-5 pt-1 rounded-[10px] text-[white]'>Inscreva-se</button>
          </div>
        </div>
        {/* end of third part */}

        <div id='fourth-part' className='bg-[#f0eeee] pb-[2rem]'>
          <div id='top-fourth' className='p-10 leading-[2rem]'>
            <p className='text-[#AF2B36] uppercase text-[2.5rem] tracking-[.2rem]'>Depoimentos</p>
            <p className='text-[1.5rem] font-[300]'>Veja o que dizem!</p>
          </div>
          <div id='cards-fourth' className='flex gap-[3rem] justify-around'>
            <div className='flex flex-col w-[30rem] h-[30rem] bg-[#AF2B36] text-[white] justify-center items-center text-center rounded-[20px]'>
              <div className='flex items-center gap-2 mb-[2rem]'>
                <div className='w-[50px] h-[50px] bg-[gray] rounded-full'></div>
                <p className='text-[1.5rem] font-bold'>Ana Luiza - Aluna UX Design</p>
              </div>
              <p className='w-[80%] text-[1.5rem]'>“ A plataforma é muito boa, tem vários cursos para você se capacitar. Mas o que eu mais amei foram as mentorias, pude acompanhar profissionais no seu dia-a-dia de trabalho e ver de perto como é a profissão que eu escolhi para exercer.</p>
            </div>
            <div className='flex flex-col w-[30rem] h-[30rem] bg-[#AF2B36] text-[white] justify-center items-center text-center rounded-[20px]'>
              <div className='flex items-center gap-2 mb-[2rem]'>
                <div className='w-[50px] h-[50px] bg-[gray] rounded-full'></div>
                <p className='text-[1.5rem] font-bold'>Ana Luiza - Aluna UX Design</p>
              </div>
              <p className='w-[80%] text-[1.5rem]'>“ A plataforma é muito boa, tem vários cursos para você se capacitar. Mas o que eu mais amei foram as mentorias, pude acompanhar profissionais no seu dia-a-dia de trabalho e ver de perto como é a profissão que eu escolhi para exercer.</p>
            </div>
            <div className='flex flex-col w-[30rem] h-[30rem] bg-[#AF2B36] text-[white] justify-center items-center text-center rounded-[20px]'>
              <div className='flex items-center gap-2 mb-[2rem]'>
                <div className='w-[50px] h-[50px] bg-[gray] rounded-full'></div>
                <p className='text-[1.5rem] font-bold'>Ana Luiza - Aluna UX Design</p>
              </div>
              <p className='w-[80%] text-[1.5rem]'>“ A plataforma é muito boa, tem vários cursos para você se capacitar. Mas o que eu mais amei foram as mentorias, pude acompanhar profissionais no seu dia-a-dia de trabalho e ver de perto como é a profissão que eu escolhi para exercer.</p>
            </div>
          </div>
        </div>
        {/* end of fourth part */}

        <div id='fifth-part' className='pb-[2rem] bg-[#f0eeee]'>
          <div className='h-[1px] bg-[#AF2B36] w-[80%] m-auto'></div>
          <div className='flex items-center ml-[2rem]'>
            <p className='text-[3rem] font-bold mr-[1rem]'>Parceiros:</p>
            <div className='flex gap-10 items-center justify-center m-[1rem]'>
              <Image src="/ifood.png" width={150} height={150} alt='ifood-parceiro'/>
              <Image src="/ifood.png" width={150} height={150} alt='ifood-parceiro'/>
              <Image src="/ifood.png" width={150} height={150} alt='ifood-parceiro'/>
            </div>
          </div>
        </div>
        {/* end of fifth part */}

        <div id='footer' className='pb-[2rem] pt-[2rem] pl-[2rem] bg-[black] text-white grid grid-cols-2'>
          <div id='left-footer'>
            <p className='mb-[1rem]'>Receba nossa newsletter</p>
            <input type='email' className='h-[5rem] w-[30rem] pl-[1.5rem]' placeholder='Seu e-mail'/>
            <button className='h-[5rem] text-center bg-[black] border-[2px] border-[#AF2B36] text-[#AF2B36] font-semibold pt-0 pb-0 ml-[1rem] p-[3rem]'>Cadastrar</button>
          </div>
          <div id='right-footer' className='flex flex-col items-center justify-center'>
            <div className='flex gap-[3rem]'>
              <p>+55 21 90909-9090</p>
              <p>contato@digitech.com</p>
            </div>
            <div>
              <p className='text-[#AF2B36] text-[1.5rem]'>Siga a gente!</p>
            </div>
            <div className='flex gap-[1rem]'>
              <TfiInstagram className='text-[1.5rem]'/>
              <TfiFacebook className='text-[1.5rem]'/>
              <TfiLinkedin className='text-[1.5rem]'/>
              <TfiYoutube className='text-[1.5rem]'/>
            </div>
          </div>
        </div>
        {/* end of top footer */}

      </div>
    </main>
  )
}
