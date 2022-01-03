import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FeaturedBooks from '../components/FeaturedBooks/FeaturedBooks'
import {JSON} from '../utils/data'

export default function Discover() {
  // get book data
  // const books = JSON.getData('daily')
  const books = JSON.getAllBooks()
  

  books.map(b => {
    
    // console.log(b.name)
  })


  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Discover</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header 
          booksoftheday={false}/>
        <FeaturedBooks 
          books={books}/>
        <Footer />
      </main>
    </div>
  )
}

 