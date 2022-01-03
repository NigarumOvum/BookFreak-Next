import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import BookDetails from '../../../../components/Books/BookDetails'
import RecommendedBook from '../../../../components/Books/RecommendedBook'
import {APIRequest} from '../../../../utils/apis/api'

export default function Id( {data} ) {
  const router = useRouter()

  useEffect(() => {
    if(!data) {
      router.replace('/404', window.location.pathname)
    } 
  })

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Selected Book </title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        <Header booksoftheday={false}/>
        { Object.keys(data).length === 0 ? null :
          <BookDetails book={data.book} /> }

        { Object.keys(data).length != 0 ? 
          <RecommendedBook 
            title='Related Books'
            books={data.recom}/> : null}
        <Footer />
      </main>
    </div>
  )
}

Id.getInitialProps = async (ctx) => {
  const {query} = ctx
  const data = await APIRequest.getBookById(query.slug)
  return {data}
}