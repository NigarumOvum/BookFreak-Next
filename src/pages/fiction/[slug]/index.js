import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import IndBkSel from '../../../components/IndBkSel/IndBkSel'
import {JSON} from '../../../utils/data'
import {Helpers} from '../../../utils/common/helpers'
import {APIRequest} from '../../../utils/apis/api'

export default function Fiction({data}) {
  const router = useRouter()
  const [books, setBooks] = useState({ isSet: false })

  useEffect(() => {
    if(!data) {
      // redirect the page if no data found
      router.replace('/404', window.location.pathname)
    } else {
      // set the state to true to read the data onn the page
      if(!books.isSet){
        setBooks({
          isSet: true,
          ...data
        })
      } else if (router.query.slug != books.name.link) {
        const menulists = JSON.links('fiction')
        const linkdata = Helpers.checkIfExists(router.query.slug, menulists);
        (async function(){
          const newdata = await APIRequest.addBooks(linkdata[0], 1);
          setBooks({
            ...books, 
            total: newdata.total, 
            books: newdata.books,
            name: linkdata[0]
          })
        })()
      }
    }
  })

  const setPage = (val) => {
    const n = val * 28 - 28 + 1;
    (async function (){
      const data = await APIRequest.addBooks(books.name, n);
      setBooks({ ...books, books: data.books })
      window.scrollTo(0, 0);
    })()
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Fiction | {data.name.name}</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        {books.isSet ? <>
          <Header booksoftheday={false}/>
          <IndBkSel
            book='Fiction'
            cattitle={books.name}
            menus={books.menulists}
            books={books.books}
            total={books.total}
            click={(val)=>setPage(val)} />
          <Footer />
        </> : null }
      </main>
    </div>
  )
}

Fiction.getInitialProps = async (ctx) => {
  const {query} = ctx
  let data;
  const menulists = JSON.links('fiction')
  const linkdata = Helpers.checkIfExists(query.slug, menulists)

  if (!linkdata) {
    data = false
  } else {
    const books = await APIRequest.getBooks(linkdata, 1)
    data = { ...books, menulists }
  }
  return { data }
}