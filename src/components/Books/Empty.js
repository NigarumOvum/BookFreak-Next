import React from 'react'
import {Helpers} from '../../utils/common/helpers'
import {JSON} from '../../utils/data'
import FeaturedBooks from '../../components/FeaturedBooks/FeaturedBooks'

function Empty(props) {
  const books = JSON.getData('daily')
  return (
    <>
      <div className='recommended-books text-1 empty'>
        <span className='recommended-book-title font-a4'>
          {'Books found'}</span>
        <div className="content-center recommended-books-wrapper empty-wrapper text-2">
          <p className='font-b4'>&#128543; Sorry, we could't find any books under author. &#128543;</p>
          <span className='font-b2'> {props.author != ''  ?
            Helpers.capitalizeText(props.author): ''}</span>
        </div>
      </div>
      <FeaturedBooks books={books.featured}/>
    </>
  )
}

export default Empty


