import { useState } from "react";
import { Cards } from "./Cards";
import { CardsNodeJS } from "./CardsNodejs";


interface dados {
 
  title: string
  description:string
  link:string
  }


export function NodeJS(){
  const [foto, setFoto] = useState<dados[]>([
    {
       title:'Projeto API Banco',
      description:"API CRUD com criação de usuario e validaçoes podendo fazer deposito em um array local e 'sacar' o dinheiro depositado ",
      link:"https://github.com/CarlosEduardoDeev/ProjetoNodeJS"
    },
    {
          title:'API Biblioteca',
      description:"API para inserção de livros para um banco de dados, com criação e relação de 1:1 e um para todos utilizando o PostgreSQL em node JS ",
      link:"https://github.com/CarlosEduardoDeev/AulaPrisma-.git"
    },
    {
      title:'NLW Projto Esport ',
      description:"Projeto se consiste no usuario criar um anúncio e com os dados de que jogo joga, tempo disponivel para jogar, e quando e a partir desse anuncio outros usuarios podem dar um match e jogar com ele",
      link:"https://github.com/CarlosEduardoDeev/NLW-Serve"
    }

  ]);
 
 
  
    return(
      <div className="h-[400] flex justify-center gap-3  px-11 py-11" >
        
        {foto.map(dados =>{
          return(
            <CardsNodeJS
            title={dados.title}
            description={dados.description}
            link={dados.link}
            />
          )
        })}
        
        

      </div>
    )
}