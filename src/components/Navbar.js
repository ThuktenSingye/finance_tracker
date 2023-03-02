import React from 'react'
import styles from './Navbar.module.css'
import useLogOut from '../hooks/useLogOut'
import { Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
function Navbar() {
  const {logout} = useLogOut()
  const {user} = useAuthContext()
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user && (<>
        <li><Link to='./login'>Login</Link></li>
        <li><Link to='./signup'>SignUp</Link></li>
        </>
        )}
        {user && (
          <>
          <li>hello, {user.displayName}</li>
          <button className='btn' onClick={logout}>Logout</button>
          </>
        )}
      </ul>
    </div>
  )
}
export default Navbar
// after loging in, when we refresh, then we no longer see the login status thouh in firebase it is log in
// after refresh, we are updating user context based on login,signup but we are not doing ithence it is null
// for that we can check in firebase if user is login in.if so then dont render component 