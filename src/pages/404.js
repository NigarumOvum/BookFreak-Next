import React from 'react'

import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Link from 'next/link'

export default function NotFound() {

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | File Not Found</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header booksoftheday={false}/>

        <div className="content-center not-found-wrapper text-2">
          <span className='font-b1'>File not found</span>
          <Link href='/'>
            <a className='font-b3'>Go back to Home</a>
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  )
}
