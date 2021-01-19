import { redirect } from 'next/dist/next-server/server/api-utils'
import { useState } from 'react'
import { useRouter } from 'next/router'

 

const Home = (props) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const subscribe = async (e) => {
    e.preventDefault()
    console.log(login);
    console.log(password);
    if(login === "Admin" && password === '123')
    {
      router.push("/about")
    }
    
  }

  
  return (
    <div className='p-8 justify-center items-center h-screen flex'>
      <form className='flex'>
        <input className='input_login'  placeholder='Enter your login' value={login} onChange={e => setLogin(e.target.value)} /> <br/>
        <input className='input_password' placeholder='Enter your password' type ="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className='input_button' type='submit' onClick={subscribe}>
          Sign Up
        </button>
      </form>
    </div>
  )

}
export default Home
