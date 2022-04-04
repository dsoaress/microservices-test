import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Hello {user?.name}</h1>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()

export default Home
