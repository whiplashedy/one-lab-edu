import Link from 'next/link'
import { useState } from 'react'

function register() {
    const [input, setInput] = useState('')

    const subscribe = async (e) => {
    localStorage.setItem('user',input)
    }
    return <div className="central">Registration page
      <form >
        <p>Your email</p>
      <input type="email" value={input}
        onChange={e => setInput(e.target.value)} required></input>
      <p>Your password</p>
      <input type="password"></input><p></p>
      <Link href="/list"><button onClick={subscribe} type="submit">Submit</button></Link>
      </form>
      <a href="/login">Login</a>
    </div>
  }
  
  export default register