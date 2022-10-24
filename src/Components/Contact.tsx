
import { useState } from 'react';
import emailjs from '@emailjs/browser'




export function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    const [sendEmailFalse, setSendEmailFalse] = useState(false)

    function handleSendEmail(e:React.FormEvent){
      e.preventDefault();
      if(name === '' || email === '' || message === ''){
        setSendEmailFalse(true)
        return
      }
      const TempleteParams ={
        from_name: name,
        message: message,
        email: email,
      }

      emailjs.send("service_rwmbdpn","template_rnvsg65",TempleteParams,"zr8EofDfoV24aIzkE")
      .then((response) =>{
        console.log('email enviado'), response.status,response.text
        setEmail('')
        setName('')
        setMessage('')
        setSendEmail(true)
        alert("Email enviado!")
      },(err) =>{
            console.log("ERRO: ", err)
      })
    }

    return(
        <div className="h-[px] mt-14  bg-black flex ">
         
        <form className="justify-center flex items-center flex-col gap-3 mt-4 text-center  w-full" onSubmit={handleSendEmail}>

        {sendEmail === true ? 
          <div id="toast-success" className="flex items-center transition ease-linear p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Check icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">Email Enviado.</div>
            <button onClick={() =>{setSendEmail(false)}} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
              <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        
        </div>: 
          <div className='w-8 h-8 mt-12'>
          </div>}
        {sendEmailFalse === true ? <div id="toast-danger" className="flex transition ease-linear items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ml-3 text-sm font-normal transition-opacity">Preencha todos os dados!</div>
            <button onClick={() => setSendEmailFalse(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div> : 
          <div className='w-8 h-8 mt-12'>

          </div>
          }
          

          

          




        <div className='text-zinc-50 text-[40px]'>
            Contato
          </div>
        <input 
          className="bg-[#121214] text-zinc-50 px-4 flex py-3 w-[600px] h-12 rounded border-transparent active:border-purple-500"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="bg-[#121214] text-zinc-50 px-4 flex py-3 w-[600px] h-12 rounded border-transparent active:border-purple-500"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="bg-[#121214] resize-none text-zinc-50 px-4 flex py-3 w-[600px] h-16  rounded border-transparent active:border-purple-500"
          placeholder="Digite sua mensagem..."
          maxLength={466}
          rows={200}
          cols={200}

          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="bg-purple-500 w-28 h-11 mt-9 rounded mb-16  text-zinc-50 cursor-pointer hover:bg-purple-400" type="submit" value="Enviar" />
        
      </form>
      

        </div>
    )
}