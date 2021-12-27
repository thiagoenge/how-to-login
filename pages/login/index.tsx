import * as React from 'react'
import Login from 'src/components/FormLogin'
import styles from './Login.module.css'

const LoginPage = ()=>{
  return(
    <div className={styles.loginPage}>
      <div className={styles.loginPageHero}></div>
      <div className={styles.loginPageWrapper}>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage