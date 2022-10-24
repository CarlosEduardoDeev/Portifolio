import { useState } from "react";
import { Cards } from "./Cards";
import timer from "../../public/images/Timer.png"
import todo from "../../public/images/Todo.png"
import ApiClima from "../../public/images/ApiClima.png"
import IgniteFeed from "../../public/images/IgniteFeed.png"

interface dados {
  src:string
  title: string
  description:string
  link:string
  }


export function ReactJS(){
  const [foto, setFoto] = useState<dados[]>([
    {
      src: `${timer}`,
      title:'Pomodoro',
      description:"Nesse projeto fiz um Pomodoro utilizando ReactJS, TypeScript, StyleComponents e outras biblicotecas, uns do primeiro projetos do módulo Ignite.",
      link:"https://timerproject.vercel.app/"
    },
    {
      src: `${ApiClima}`,
      title:'Previsão do tempo',
      description:"Nesse Projeto consumi uma API de clima, e conseguimos procurar o nome de uma cidade e saber as informações do clima da Região.",
      link:"https://api-clima-xi.vercel.app/"
    },
    {
      src: `${IgniteFeed}`,
      title:'IgniteFeed',
      description:"Desafio de fazer um feed, onde consumo uma api do github para trazer as fotos, e consigo escrever e excluir comentarios em post como se fosse uma rede social  ",
      link:"https://api-clima-xi.vercel.app/"
    },
    {
      src: `${todo}`,
      title:'Todo',
      description:"Esse projeto é um Todo (Lista de tarefas) onde o usuario escreve a tarefa que precisa fazer e quando completar ele pode colocar um check ou excluir ",
      link:"https://desafio1-sandy.vercel.app/"
    }

  ]);
 
 
  
    return(
      <div className="h-[400] flex justify-center gap-3  px-11 py-11" >
        
        {foto.map(dados =>{
          return(
            <Cards
            src={dados.src}
            title={dados.title}
            description={dados.description}
            link={dados.link}
            />
          )
        })}
        
        

      </div>
    )
}