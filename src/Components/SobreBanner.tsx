import { DownloadSimple,LinkedinLogo,InstagramLogo,GithubLogo, WhatsappLogo } from "phosphor-react";
import Perfil from "../../public/Perfil.jpg"

export function SobreBanner(){
    return(
        
        <div className="flex justify-center mt-48">
     
     
      <div className="bg-white flex w-[500px] rounded-tl-lg  rounded-bl-lg  ">
        <img src={Perfil} alt="" className=' flex rounded-l-lg rounded-tl-lg'/>
      </div>
      

      <div className=" w-[500px] justify-center flex flex-col items-center text-center rounded-r-lg rounded-br-lg border border-purple-500  ">
          <div className='text-purple-600 text-4xl font-bold mt-6 px-6'>
          Olá eu sou o Carlos! 
          </div>
          <div className='text-zinc-50 mt-10 text-lg  w-[450px] '>
            Seja bem-vindo ao meu portfólio, quero mostrar para vocês meus projetos e também um pouco do meu conhecimento 
            com <span className="text-purple-500">ReactJS</span>, <span className="text-purple-500">React Native</span> e <span className="text-purple-500">Node JS</span>, estou no processo de aprendizado! 
          </div>
          <div className="flex flex-row items-center justify-center mt-11">
          <div className='bg-purple-800 items-center justify-center flex text-zinc-50 w-32 h-8 rounded-lg font-bold ml-8 mt-10  hover:bg-purple-500'>
            <a href='#' className='justify-center text-center flex gap-2'>
            <DownloadSimple className='gap-5 flex' size={24} /> Curriculo 
            </a>
          </div>
          <div className='bg-purple-800 items-center justify-center flex text-zinc-50 rounded font-bold ml-8 mt-10  hover:bg-purple-500'>
            <a href='https://www.linkedin.com/in/carlos-alves-722a501a1/' className='justify-center text-center flex gap-2'>
            <LinkedinLogo className='gap-5 flex' size={40} /> 
            </a>
          </div>
          <div className='bg-purple-800 items-center justify-center flex text-zinc-50 rounded  font-bold ml-8 mt-10  hover:bg-purple-500'>
            <a href='https://www.instagram.com/zikaduu/' className='justify-center text-center flex gap-2'>
            <InstagramLogo className='gap-5 flex' size={40} /> 
            </a>
          </div>
          <div className='bg-purple-800 items-center justify-center flex text-zinc-50 rounded  font-bold ml-8 mt-10  hover:bg-purple-500'>
            <a href='https://github.com/CarlosEduardoDeev' about="GitHub" className='justify-center text-center flex gap-2'>
            <GithubLogo className='gap-5 flex' size={40} /> 
            </a>
          </div>
          <div className='bg-purple-800 items-center justify-center flex text-zinc-50 rounded  font-bold ml-8 mt-10  hover:bg-purple-500'>
            <a href='https://wa.me/5512981715152' about="GitHub" className='justify-center text-center flex gap-2'>
            <WhatsappLogo className='gap-5 flex' size={40} /> 
            </a>
          </div>
          </div>
          
      </div>
    
        </div>
   

    )

}