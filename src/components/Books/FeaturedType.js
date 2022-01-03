import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import {Helpers} from '../../utils/common/helpers'

function FeaturedType(props) {
  const lists = props.books
  
  const authors = (lists) => {
    return lists.map((list, i) => {
      let a = Helpers.setTextToUrl(list.name)
      return (
        <Link href='/books/search/author/[slug]'
          as={`/books/search/author/${a}`} key={i}>
          <a className='book-author font-b6'>{list.str} </a>
        </Link>
      )
    })
  }

  const books = lists.map((list, i) => {
    return (
      <Fade key={i}>
        <div 
          className="content-center featured-books-indiv" >
          <Link href='/books/search/id/[slug]' 
            as={`/books/search/id/${list.id}`}>
            <a className='font-b5'>
              <img src={list.thumbnail} alt={`${list.title} book cover`}/>
            </a>
          </Link>
          <div className="content-center books-desc">
             <Link href='/books/search/id/[slug]'
              as={`/books/search/id/${list.id}`}>
              <a className='book-title font-b5'>
                {Helpers.sliceText(list.title, 18)}</a>
            </Link>
            <div className="book-author-wrapper">
              {authors(Helpers.sortAuthor(list.authors, 19))}
            </div>
          </div>
        </div>   
      </Fade>
    )
  })

  return (
   <>{books}</>
  )
}

export default FeaturedType
