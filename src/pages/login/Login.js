import React from 'react'
import styles from "./Login.module.css"
// using css module reducec class naming conflict since the class name defined 
// within the module is scope to that module only
import { useState } from 'react'
function Login() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()// prevent default action of page reloading
    console.log(email, password)
  }
  return (
    // below clasname if class name have hypen
    <form className={styles['login-form']} onSubmit={handleSubmit}> 
      <h2>Login</h2>
      <label >
        <span>email:</span>
        <input 
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
      </label>
      <label >
        <span>password:</span>
        <input 
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
      </label>
      <button className='btn'>Login</button>
    </form>
  )
}

export default Login