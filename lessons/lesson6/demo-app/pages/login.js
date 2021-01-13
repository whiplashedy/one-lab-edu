import Link from 'next/link'
import { useState } from 'react'

function login() {
    const [input, setInput] = useState('')

    const subscribe = async (e) => {
    localStorage.setItem('user',input)
    }
    return <div className="central">Login page
      <form>
        <p>Your email</p>
      <input type="email" id="email" value={input}
        onChange={e => setInput(e.target.value)} required></input>
      <p>Your password</p>
      <input type="password" id="password" required></input><p></p>
      <Link href='/list'><button onClick={subscribe} type="submit">Submit</button></Link>
      </form>
      <a href="/register">Register</a>
    </div>
  }
  
  export default login