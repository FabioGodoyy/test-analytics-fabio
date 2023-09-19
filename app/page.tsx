import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
				<title>My website</title>
        <meta name="google-site-verification" content="hVukCbXKHPDfOGcmihJ7C63X_Q6JzVAMrnG8jI4RAR8" />
			</Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Analytics</h1>
      <p>haha</p>
      <Link href="/analytics">BORA</Link>
    </main>
    </>
  )
}
