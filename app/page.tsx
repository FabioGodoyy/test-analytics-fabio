import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
				<title>My website</title>
        <meta name="google-site-verification" content="R-S6B6lhsaI2qjOq6TxTMt-EVOGXYaL_i8EZLE7W1gA" />
			</Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Analytics</h1>
      <p>haha</p>
      <Link href="/analytics">BORA</Link>
    </main>
    </>
  )
}
