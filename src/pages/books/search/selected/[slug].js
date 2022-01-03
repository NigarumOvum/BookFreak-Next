import React, {useEffect, useState, useContext} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import {BookAppData} from '../../../../utils/contextapi/context'
import BookDetails from '../../../../components/Books/BookDetails'
import RecommendedBook from '../../../../components/Books/RecommendedBook'
import {APIRequest} from '../../../../utils/apis/api'

export default function Selected() {
  const [recommendedbooks, setRecommendedBooks] = useState({})
  const router = useRouter()
  const {bookdata} = useContext(BookAppData)

  useEffect(() => {
    if(Object.keys(bookdata).length === 0){
      router.replace('/404', window.location.pathname)
    } else {
      // here fetch recommended books based from the selected book
      let obj = {}
      // check if the book has category and use the val for fetching
      if(bookdata.volumeInfo.categories){
        obj = { url: 'cat',name: bookdata.volumeInfo.categories[0] }
      } else {
        // or use the title for fetching if data is not available
        obj = { url: 'query', name: bookdata.volumeInfo.title }
      }
      (async function () {
        // fetch data to the api
        let data = await APIRequest.getRecommended(obj)
        
        // set to the state if the state is empty
        if(Object.keys(recommendedbooks).length === 0) {
          setRecommendedBooks(data)
        } else {
          // if not empty and the new data items
          // are not the same, te set to the state
          if(recommendedbooks[0].id != data[0].id) {
            setRecommendedBooks(data)
          }
        }
      })()
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
        { Object.keys(bookdata).length === 0 ? null :
          <BookDetails book={bookdata} /> }

        { Object.keys(recommendedbooks).length != 0 ? 
          <RecommendedBook 
            title='Related Books'
            books={recommendedbooks}/> : null}
        <Footer />
      </main>
    </div>
  )
}

