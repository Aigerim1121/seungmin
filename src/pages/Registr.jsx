import React, {useState} from 'react'
import "./Registr.scss"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';


function Registr() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res);
      if(res){
        toast.success("User was succes created")
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  return (
    <div className='registr'>
      <h1>Регистрация</h1>
     
     <div className="regietr">
       <input type="text" placeholder='Имя' /> 
      <input type="text" placeholder='Телефон' />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail' />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Пароль' />
      <input type="text" placeholder='Повторите пароль' />
     </div>
    
      <button onClick={createUser}>Зарегистрироваться</button>
    </div>
  )
}

export default Registr
