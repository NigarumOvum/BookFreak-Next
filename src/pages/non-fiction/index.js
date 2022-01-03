import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IndFtBooks from '../../components/IndFtBooks/IndFtBooks'
import {JSON} from '../../utils/data'

export default function NonFiction() {
  const data = JSON.getData('non-fiction')

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Non-Fiction</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header booksoftheday={false}/>
          <IndFtBooks
            book='Non-Fiction'
            menus={data.list}
            ftcatbook={data.featured}
            bookofday={data.daily}/> 
        <Footer />
      </main>
    </div>
  )
}
