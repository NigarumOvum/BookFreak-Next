import React from 'react'
import Svg from '../Svg'
import Link from 'next/link'
import {Helpers} from '../../utils/common/helpers'

function CatBooksoftheDay(props) {

  const authors = (lists) => {
    return lists.map((name, i) => {
      return <span className='author font-a8'
        key={i}>{name.str }</span>
    })
  }

  const books = props.books.map((book, i) => {
    const a = `${book.title} ${book.isbn}`
    return(
      <div 
        key={i}
        className={`indvl-ft-book-of-the-day-cont 
          ${i === 0 ? 'book-visible' : ''}`}>
        <div className="indvl-ft-book-of-the-day-background"
          style={{'background': `url('${book.image}') no-repeat center`,'backgroundSize': 'cover'}}></div>

        <div className="content-center indvl-ft-book-of-the-day-wrapper">
          <img src={book.image} alt={`${book.title} book cover`}/>
          <div className="indvl-ft-book-of-the-day-desc-wrapper">
            <h2 className='font-a2'>{Helpers.sliceText(book.title, 19)}</h2>
            <div className="ratings">
              <span className='font-a8'>Ratings: {book.rating}</span>
              <Svg svg='star' />
            </div>  
            <div className="indvl-ft-book-of-the-day-author">
              {authors(Helpers.sortAuthor(book.author, 35))}
            </div>
            <p className='font-a8'>{Helpers.sliceText(book.desc, 132)}</p>
            {/* <Link href='/books/[samp]/[author]'
              as={`/books/${Helpers.setTextToUrl(book.title)}/${Helpers.setTextToUrl(book.author[0])}`}>
              <a className='content-center'>View Details</a>
            </Link> */}
            <Link href='/books/search/featured/[slug]'
              as={`/books/search/featured/${Helpers.setTextToUrl(a)}`}>
              <a className='content-center font-a5'>View Details</a>
            </Link>
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

export default CatBooksoftheDay
