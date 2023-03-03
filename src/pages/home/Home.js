import styles from './Home.module.css'
import React from 'react'
// components
import TransactionForm from './TransactionForm'

// import uid from user from context
import useAuthContext from '../../hooks/useAuthContext'

function Home() {
  const {user} = useAuthContext()
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          transaction list
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid}/>
        </div>
    </div>
  )
}

export default Home