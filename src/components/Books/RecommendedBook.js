import React, {useContext} from 'react'
import Link from 'next/link'
import Svg from '../Svg'
import Authors from './Authors'
import Fade from 'react-reveal/Fade'
import {BookAppData} from '../../utils/contextapi/context'
import {Helpers} from '../../utils/common/helpers'
import Pagination from '../Pagination/Pagination'

function RecommendedBook(props) {
  const {setbookdata} = useContext(BookAppData)

  const books = props.books.map((book, i) => {
    const links = Helpers.selectedLink(book.volumeInfo.industryIdentifiers, 
      book.volumeInfo.title)

    return (
      <Fade key={i}>
        <div
          className="content-center recommended-book">

          <Link href={links.href} as={links.as}>
            <a onClick={()=>setbookdata(book)}>
              <img src={book.volumeInfo.imageLinks ? 
                book.volumeInfo.imageLinks.thumbnail : '/images/book-worm.svg'} 
                alt={`${book.volumeInfo.title} book cover`}/>
            </a>
          </Link>
          
          <div className="content-center recommended-book-desc">
            <Link href={links.href}
              as={links.as}>
              <a onClick={()=>setbookdata(book)}
                className='title font-b5'>{Helpers.sliceText(book.volumeInfo.title, 15)}</a>
              </Link>
              <div className="author font-b6">
                { book.volumeInfo.authors ?             
                  <Authors 
                  authors={Helpers.sortAuthor(book.volumeInfo.authors, 17)}/>
                  : 'No Author Given'}
              </div>
              <div className="content-center rating">
                <span className='font-b6'>Ratings</span>
                <span className='content-center rate font-b6'>
                  {book.volumeInfo.averageRating ? 
                    book.volumeInfo.averageRating: 0 } <Svg svg='star'/></span>
              </div>
            </div>
        </div>
      </Fade>
    )
  })
  
  return (
    <div className='recommended-books text-2'>
      <span className='recommended-book-title font-b2'>{props.title}</span>
      <div className="recommended-books-wrapper">
        {books}
      </div>
      { props.total > 25 ? 
        <Pagination 
        total={props.total}
        click={(val)=> props.click(val)} /> : null }
    </div>
  )
}

export default RecommendedBook
