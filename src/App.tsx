
import { Contact } from "./Components/Contact"
import { Header } from "./Components/Header"
import { NodeJS } from "./Components/NodeJS"
import { ReactJS } from "./Components/ReactJS"
import { SobreBanner } from "./Components/SobreBanner"
import "./styles/main.css"


function App() {

  return (
  <div>
    <Header/>
    
    <SobreBanner/>
    <div className="text-white text-[40px] justify-center flex mt-80">
     Projetos WEB
    </div>
    <ReactJS/>
    <div className="text-white text-[40px] justify-center flex ">
     Projetos BackEnd
    </div>
    <div>
      <NodeJS/>
    </div>
    <div>
    <Contact/>
    </div>
  </div>
  )
}

export default App
