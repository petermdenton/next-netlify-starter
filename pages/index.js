import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Who owns the most .eth domains</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7WEQP2LGY2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7WEQP2LGY2');
        </script>
      </Head>

      <main>
        <Header title="Who owns the most .eth domains?" />
        <p className="description">
          Going to start adding a bunch of details around the wallet ID
        </p>
      </main>

      <Footer />
    </div>
  )
}
