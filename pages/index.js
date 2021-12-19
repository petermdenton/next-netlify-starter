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
          The Ethereum Address 0xaA96a50A2f67111262Fe24576bd85Bb56eC65016 owns the most .eth domains.
        </p>
  
        <p className="description">
          The current ETH balance in that wallet is 2.095966294035386714 Ether
        </p>
      </main>

      <Footer />
    </div>
  )
}
