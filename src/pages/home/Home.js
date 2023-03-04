import React from 'react'
import styles from './Home.module.css'

// components
import TransactionForm from './TransactionForm'

import TransactionList from './TransactionList'

// import uid from user from context
import useAuthContext from '../../hooks/useAuthContext'
// import collection data 
import useCollection from '../../hooks/useCollection'

function Home() {
  const {user} = useAuthContext()
  const {documents, error} = useCollection('transactions', ["uid", "==", user.uid])

  return (
    <div className={styles.container}>
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions = {documents}/>}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid}/>
        </div>
    </div>
  )
}

export default Home