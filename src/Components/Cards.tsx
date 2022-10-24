import { DownloadSimple } from "phosphor-react";


interface CardsProps {
    src:string;
    title: string;
    description: string;
    link:string;
  }


export function Cards(props: CardsProps) {
    return (
      
<div className="
h-[500px] w-[400px] bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-600
">
  <div className=" justify-center flex py-10">
    <a href="#">
        <img className="rounded-t-lg bg-cover px-4"  src={props.src} alt=""/>
    </a>
  </div>
    <div className="p-5 mt-3 justify-center items-center">
        <div >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </div>
        <p className="mb-3 font-normal h-28 text-gray-700 dark:text-gray-400">{props.description}</p>
        <a target="_blank" href={props.link} className=" justify-center mb-12 items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-400 ">
            Link do Projeto
           
        </a>
    </div>
</div>

    );
}