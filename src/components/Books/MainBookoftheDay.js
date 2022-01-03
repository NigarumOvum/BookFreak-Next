import React from 'react'
import Svg from '../Svg'
import Link from 'next/link'
import {Helpers} from '../../utils/common/helpers'

function MainBookoftheDay(props) {

  const authors = (lists) => {
    return lists.map((name, i) => {
      return <span className='author font-a8'
        key={i}>{name.name }</span>
    })
  }

  const books = props.books.map((book, i) => {
  const a = `${book.title} ${book.isbn}`
  
    return (
      <div 
        key={i}
        className={`book-of-the-day ${i === 0 ? 'book-visible' : ''}`}>
        <div className='book-of-the-day-cover'>
          <div className="book-cover-background"
            style={{'background': `url('${book.image}') no-repeat center`,'backgroundSize': 'cover'}}></div>
          <div className="content-center book-of-the-day-desc text-1">
            <img src={book.image} alt=""/>
            <div className='content-center book-of-the-day-desc-wrapper'>
              <h2 className='font-a1'>{Helpers.sliceText(book.title, 19)}</h2>
              <div className="ratings font-a7">
                <span className='font-a8'>Ratings: {book.rating}</span>
                <Svg svg='star' />
              </div>
              <div className="book-of-the-day-author">
                {authors(Helpers.sortAuthor(book.author, 35))}
              </div>
              <p className='font-a8'>{Helpers.sliceText(book.desc, 140)}</p>
              <Link href='/books/search/featured/[slug]'
                as={`/books/search/featured/${Helpers.setTextToUrl(a)}`}>
                <a className='text-1 content-center font-a5'>View Details</a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    )
  })
  return (
    <>
      {books}
    </>
  )
}

export default MainBookoftheDay
