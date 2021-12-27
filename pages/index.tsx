import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from 'src/components/Layout'
import { useAuth } from 'src/context/AuthContext'

const IndexPage = () => {
  const router = useRouter()
  const {user} = useAuth()
  
  React.useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [])

  if(!user){
    return (
      <p>
        carregando
      </p>
    )
  }

  return (
    <Layout title="Home | How to Login with Next.js + TypeScript">
      <h1>Olá, {user?.name} 👋</h1>
      <p>
        <Link href="/logout">
          <a>Sair</a>
        </Link>
      </p>
    </Layout>
)
}
export default IndexPage
