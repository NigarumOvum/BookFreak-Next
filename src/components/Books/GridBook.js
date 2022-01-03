import React, {useContext} from 'react'
import Link from 'next/link'
import Svg from '../Svg'
import Fade from 'react-reveal/Fade'
import Authors from '../IndBkSel/components/Author'
import {BookAppData} from '../../utils/contextapi/context'
import {Helpers} from '../../utils/common/helpers'

function GridBook(props) {
  const {setbookdata} = useContext(BookAppData)


  const books = props.books.map((book, i) => {
    const links = Helpers.selectedLink(book.volumeInfo.industryIdentifiers, 
      book.volumeInfo.title)
    return (
      <Fade key={i}>
        <div className="content-center indvl-book-wrapper text-2">
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

        <div className="content-center indvl-book-list-desc">
          <Link href={links.href}
            as={links.as}>
              <a onClick={()=>setbookdata(book)}
              className='title font-b5'>{Helpers.sliceText(book.volumeInfo.title, 15)}</a>
            </Link>
            <div className="author">
              { book.volumeInfo.authors ?             
                <Authors 
                authors={Helpers.sortAuthor(book.volumeInfo.authors, 19)}/>
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
    <>{books}</>
  )
}

export default GridBook
