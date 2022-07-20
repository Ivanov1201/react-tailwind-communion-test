import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <button type="button" onClick={() => router.push('/home')}>
        Click me???
      </button>
    </div>
  )
}

export default Home
