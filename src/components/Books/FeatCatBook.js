import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../utils/common/helpers'
import Fade from 'react-reveal/Fade'

function FeatCatBook(props) {
  
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

  const booklists = () => {
    const newlist = props.books.filter((l, i) =>{
      return i < 4
    })

    return newlist.map((list, i) => {
      return (
        <Fade key={i}>
          <div 
            className="content-center featured-cat-books-indiv" >
            <Link href='/books/search/id/[slug]' 
              as={`/books/search/id/${list.id}`}>
              <a>
                <img src={list.thumbnail} 
                  alt={`${list.title} book cover`}/>
              </a>
            </Link>
            <div className="content-center books-cat-desc">
              <Link href='/books/search/id/[slug]'
                as={`/books/search/id/${list.id}`}>
                <a className='book-title font-b5'>
                  {Helpers.sliceText(list.title, 18)}</a>
              </Link>
              <div className="book-author-wrapper">
                {authors(Helpers.sortAuthor(list.authors, 17))}
              </div>
            </div>
          </div>   
        </Fade>
      )
    })
  }
  return (
    <>{booklists()}</>
  )
}

export default FeatCatBook
