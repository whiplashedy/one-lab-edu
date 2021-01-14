import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('You are not logged in')
  async function submitButton(){
    const response = await fetch('/api/login',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({username, password})
    }).then((t) => t.json())

    const token = response.token

    if(token){
      const data = jwt.decode(token) as { [key: string]: string}
      setMessage(`Welcome ${data.username}`)
      console.log(data)
    }else{
      setMessage('Maybe something went wrong')
    }
    
    
  }
  return(
    <div>
      <h1>{message}</h1>
      <form>
        <input 
          type="text" 
          name="username" 
          value={username} 
          placeholder={'Email'}
          onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <br />
        <input 
          type="password" 
          name="password" 
          value={password}
          placeholder={'Password'}
          onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <button className={styles.btn} type="button" value="login" onClick={submitButton}>Login</button>
        <a className={styles.test} href="/profile">List</a>
      </form>
    </div>
  )
}