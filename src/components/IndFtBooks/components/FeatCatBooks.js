import React, {Fragment} from 'react'
import Link from 'next/link'
import FeatCategoryBooks from '../../Books/FeatCatBook'

function FeatCatBooks(props) {
  const books = props.ftcatbook.map((book, i) => {
    return (
      <Fragment key={i}>
        <div className="featured-cat-books-wrapper">
          <div className="content-center featured-cat-book-header text-2">
            <span className='font-a5'>{book.name}</span>
            <Link href={`/${props.book.toLowerCase()}/[slug]`}
              as={`${book.link}`}>
              <a className='font-a5'>View All</a>
            </Link>
          </div>
        </div>

        <div className="featured-cat-books-list-cont">
          <div className="content-center featured-cat-books-list-wrapper text-2">
            <FeatCategoryBooks 
              books={book.books}/>
          </div>
        </div>
      </Fragment>
    )
  })

  return (
    <div className="featured-cat-books">
      <div className="content-center featured-cat-books-title text-2">
        <span className='font-a3'>{`Featured ${props.book} Books of the day`}</span>
      </div>
     {books}
    </div>
  )
}

export default FeatCatBooks
