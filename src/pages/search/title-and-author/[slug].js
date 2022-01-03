import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import RecommendedBook from '../../../components/Books/RecommendedBook'
import {APIRequest} from '../../../utils/apis/api'

export default function SearchBook() {
  const [books, setBooks] = useState({ search: '', book: {}, isSet: false })
  const router = useRouter()

  useEffect(() => {
    const query = router.query
    console.log(query)

    if(query != undefined) {
      (async function(){
        const data = await APIRequest.getAnyBook(query)
        if(books.search === ''){
          if(!books.isSet) {
            if(!data) {
              setBooks({ book: false, search: query, isSet: true })
            } else {
              setBooks({ search: query, book: data, isSet: true })
            }
          }
        } else if(books.search != query ){
          setBooks({ ...books, book: data, search: query })
        }
      })()
    }
  })


  // function to get the next batch of book
  const addbooks = async (val) => {
    const n = val * 25 - 25 + 1;
    const data = await APIRequest.getAnyBook(books.search)
    setBooks({ ...books, book: data })
    window.scrollTo(0, 0);
  }


  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Search Book</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        <Header booksoftheday={false}/>
        { Object.keys(books.book).length != 0 ? 
          <RecommendedBook 
            title={`${books.book.total} books found.`}
            total={books.book.total}
            click={(val)=> addbooks(val)}
            books={books.book.books}/> : 
              !books.book ? <Empty author={books.author}/> : null}
        <Footer />
      </main>
    </div>
  )
}

