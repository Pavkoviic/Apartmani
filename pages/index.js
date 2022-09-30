import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import React from 'react'


function Home({ }) {


  return (
    <div>
      <Header />
      <Head>
        <title>Apartmani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Istražite</h2>
          <SmallCard />
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-5'>Popularni apartmani</h2>
          <MediumCard />
        </section>

        <section>
          <LargeCard />
        </section>

      </main>

      <Footer />

    </div>
  )
}


export default Home

