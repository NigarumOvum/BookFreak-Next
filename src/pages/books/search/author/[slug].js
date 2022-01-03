import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import RecommendedBook from '../../../../components/Books/RecommendedBook'
import Empty from '../../../../components/Books/Empty'
import {APIRequest} from '../../../../utils/apis/api'

export default function Author() {
  const [books, setBooks] = useState({ author: '', book: {}, isSet: false })
  const router = useRouter()

  useEffect(() => {
    const q = router.query.slug
    if(q != undefined){
      const query = q.split('-').join(' ');
      (async function(){
        const data = await getdata(query, 1)
        if(books.author === ''){
          if(!books.isSet) {
            if(!data) {
              setBooks({ book: false, author: query, isSet: true })
            } else {
              setBooks({ author: query, book: data, isSet: true })
            }
          }
        } else if(books.author != query ){
          setBooks({ ...books, book: data, author: query })
        }
      })()
    }
  })

  // function to get the next batch of book
  const addbooks = async (val) => {
    const n = val * 25 - 25 + 1;
    const data = await getdata(books.author, n)
    setBooks({ ...books, book: data })
    window.scrollTo(0, 0);
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Book Author</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        <Header booksoftheday={false}/>

        { Object.keys(books.book).length != 0 ? 
          <RecommendedBook 
            title={`${books.book.total} books related to this author`}
            total={books.book.total}
            click={(val)=> addbooks(val)}
            books={books.book.books}/> : 
              !books.book ? <Empty author={books.author}/> : null}
        <Footer />
      </main>
    </div>
  )
}





const getdata = async (query, page) => {
  return await APIRequest.getAuthor({
    url: 'author',
    name: query
  }, page)
}