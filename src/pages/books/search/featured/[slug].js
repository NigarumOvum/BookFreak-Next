import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import BookDetails from '../../../../components/Books/BookDetails'
import RecommendedBook from '../../../../components/Books/RecommendedBook'
import {APIRequest} from '../../../../utils/apis/api'

export default function Featured({data}) {
  const router = useRouter()
  if(!data) {
    router.replace('/404', window.location.pathname)
  } 

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Featured Book </title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        <Header booksoftheday={false}/>

        { Object.keys(data).length === 0 ? null :
          <BookDetails book={data.book} /> }

        { data.recom ? 
          <RecommendedBook 
            title='Related Books'
            books={data.recom}/> : null}
        <Footer />
      </main>
    </div>
  )
}

Featured.getInitialProps = async (ctx) => {
  const {query} = ctx
  const data = await APIRequest.getISBN(query.slug)
  return { data }
}