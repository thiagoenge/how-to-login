import * as React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'src/context/AuthContext'

const Logout = () => {
  const router = useRouter()
  const {user, logout} = useAuth()
  
  React.useEffect(() => {
    logout()
    
    if (!user) {
      router.push('/login')
    }
  }, [user])
  return null
}
export default Logout
