import Head from 'next/head'
import { Theme } from '../components/Theme'
import { Home } from '../components/Home/Home'

const App: React.FC = () => {
  return (
    <Theme>
      <Head>
        <title>WIP Cooperative Gallery 213</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </Theme>
  )
}

export default App
