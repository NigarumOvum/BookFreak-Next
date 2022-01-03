import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ExploreMenu from '../components/Explore/Explore'
import {JSON} from '../utils/data'

export default function Explore() {
  // get book data
  const menulists = JSON.getAllLists()  

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Explore</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header 
          booksoftheday={false}/>
        <ExploreMenu menulists={menulists}/>
        <Footer />
      </main>
    </div>
  )
}

 