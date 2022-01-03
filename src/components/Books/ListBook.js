import React, {useContext} from 'react'
import Link from 'next/link'
import Svg from '../Svg'
import Fade from 'react-reveal/Fade'
import Author from './Authors'
import {BookAppData} from '../../utils/contextapi/context'
import {Helpers} from '../../utils/common/helpers'

function GridBook(props) {
  const {setbookdata} = useContext(BookAppData)

  const books = props.books.map((book, i) => {
    const links = Helpers.selectedLink(book.volumeInfo.industryIdentifiers,
      book.volumeInfo.title)
    return (
      <Fade key={i}>
        <div className="content-center indvl-book-list text-2">
          <Link href={links.href}
            as={links.as}>
            <a onClick={()=>setbookdata(book)}>
              <img src={book.volumeInfo.imageLinks ? 
                book.volumeInfo.imageLinks.thumbnail : 
                '/images/book-worm.svg'} 
                alt={book.volumeInfo.imageLinks ? 
                  `${book.volumeInfo.title} book cover` : 'book worm cover'}/>
            </a>
          </Link>
          <div className="content-center indvl-book-list-desc-wrapper">
            <Link href={links.href}
              as={links.as}>
              <a onClick={()=>setbookdata(book)}
              className='title font-b2'>{Helpers.sliceText(book.volumeInfo.title, 45)}</a>
            </Link>
            <div className="author font-b4">
              { book.volumeInfo.authors ?             
                <Author 
                  authors={Helpers.sortAuthor(book.volumeInfo.authors, 19)} />
                  : 'No Author Given'}
            </div>
            <div className="content-center rating font-b4">
              <span>Ratings:</span>
              <span className='content-center rate font-b4'>
                {book.volumeInfo.averageRating ? 
                  book.volumeInfo.averageRating: 0 } <Svg svg='star'/></span>
            </div>
            <p className="desc font-b4">
              { book.volumeInfo.description ?
                Helpers.sliceText(book.volumeInfo.description, 170):
                  'No Description Provided'}</p>
            <div className="released-date font-b4">
              <span>Released Date:</span>
              <span>{book.volumeInfo.publishedDate ? 
                book.volumeInfo.publishedDate : 'Not Provided'}</span>
            </div>
            <div className="publisher font-b4">
              <span>Publisher:</span>
              <span>{book.volumeInfo.publisher ? 
                book.volumeInfo.publisher : 'No Publisher Given'}</span>
            </div>
          </div>
        </div>
      </Fade>
    )
  })

  return (
    <>
      {books}
    </>
  )
}

export default GridBook
