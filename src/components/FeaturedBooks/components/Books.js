import React from 'react'
import FeaturedBooks from '../../Books/FeaturedType'
import Link from 'next/link'

function Books(props) {
  const book = props.books

  const books = (
    <>
      <div className="content-center featured-book-title">
        <span className='collection-title font-b3'>{book.name}</span>
        <Link href={book.link}>
          <a className='view-all-btn font-b3'>
            <span>View All</span>
          </a>
        </Link>
      </div>
       <div className="featured-books-slider">
        <div className="content-center featured-books-wrapper">
          <FeaturedBooks 
            link={book.link}
            books={book.books}/>
        </div>
      </div>
    </>
  )

  return (
    <div className='featured-books-collection text-2'>
      {books}
    </div>
  )
}

export default Books
