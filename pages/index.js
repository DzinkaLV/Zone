import Head from 'next/head'
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'
import Player from '../components/Player';

export default function Home() {
  return (
    <div className='font-poppins'>
      <Head>
        <title>Zone - Music platform</title>
        <meta name="description" content="music app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation/>

      {/* Header */}
      <Header/>

      <Player />
    
    </div>
  )
}
