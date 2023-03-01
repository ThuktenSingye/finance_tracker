import React from 'react'
import styles from './Navbar.module.css'
import useLogOut from '../hooks/useLogOut'
import { Link } from 'react-router-dom'
function Navbar() {
  const {logout} = useLogOut()
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li><Link to='./login'>Login</Link></li>
        <li><Link to='./signup'>SignUp</Link></li>
        <li>
          <button className='btn' onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar