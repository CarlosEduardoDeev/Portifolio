import logo from "../../public/2.png"

export function Header(){
    return(
    <div className="bg-black flex justify-center  h-16 items-center py-3 px-3 ">
           <div className="font-bold justify-center text-center flex text-zinc-50   ">
            <img src={logo} alt="" className="w-72 lg: flex ml-8"/>
           </div>
          
    </div>
    )
}