import React from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li><Link to='./login'>Login</Link></li>
        <li><Link to='./signup'>SignUp</Link></li>
      </ul>
    </div>
  )
}

export default Navbar