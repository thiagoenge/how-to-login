import * as React from 'react'
import Image from 'next/image'
import Login from 'src/components/FormLogin'
import styles from './Login.module.css'
import loginPic from 'public/images/login-pic.webp'

const LoginPage = ()=>{
  return(
    <div className={styles.loginPage}>
      <div className={styles.loginPageHero}>
        <Image 
          alt="Imagem para um login mais bonito" 
          src={loginPic} 
          placeholder="blur"
          objectFit="cover"
          objectPosition="50%"
          layout="fill"
          priority 
        />
      </div>
      <div className={styles.loginPageWrapper}>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage